import sharp from 'sharp';
import { readdir, stat, rename } from 'fs/promises';
import { join, extname, basename } from 'path';

const DIRS = ['src/assets/projects', 'src/assets/blog'];
const MAX_WIDTH = 800;
const QUALITY = 80;

async function fileSize(path) {
  const s = await stat(path);
  return s.size;
}

async function optimizeDir(dir) {
  let files;
  try {
    files = await readdir(dir);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`  Directory ${dir} does not exist, skipping`);
      return;
    }
    throw err;
  }

  const images = files.filter((f) =>
    ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase())
  );

  if (images.length === 0) {
    console.log(`  No images found`);
    return;
  }

  for (const file of images) {
    const input = join(dir, file);
    const name = basename(file, extname(file));
    const outputWebp = join(dir, `${name}.webp`);
    const tmpFile = input + '.tmp';

    const sizeBefore = await fileSize(input);
    const metadata = await sharp(input).metadata();
    const needsResize = metadata.width && metadata.width > MAX_WIDTH;

    let pipeline = sharp(input);
    if (needsResize) pipeline = pipeline.resize(MAX_WIDTH);

    await pipeline.webp({ quality: QUALITY }).toFile(outputWebp);

    const ext = extname(file).toLowerCase();
    if (ext === '.png') {
      await sharp(input)
        .resize(needsResize ? MAX_WIDTH : undefined)
        .png({ compressionLevel: 9 })
        .toFile(tmpFile);
      await rename(tmpFile, input);
    } else {
      await sharp(input)
        .resize(needsResize ? MAX_WIDTH : undefined)
        .jpeg({ quality: QUALITY })
        .toFile(tmpFile);
      await rename(tmpFile, input);
    }

    const sizeAfterPng = await fileSize(input);
    const sizeWebp = await fileSize(outputWebp);

    console.log(
      `  ${file}: ${Math.round(sizeBefore / 1024)}kB → ${Math.round(sizeAfterPng / 1024)}kB (png) / ${Math.round(sizeWebp / 1024)}kB (webp)${needsResize ? ' [resized]' : ''}`
    );
  }
}

console.log('Optimizing images...\n');

for (const dir of DIRS) {
  console.log(`📁 ${dir}`);
  await optimizeDir(dir);
  console.log('');
}

console.log('Done!');
