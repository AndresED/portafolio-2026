import { statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const imagesDir = join(root, 'public', 'images');
const source = join(imagesDir, 'portada.png');

/** Open Graph / Twitter / LinkedIn standard (1.91:1). */
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const outputs = [
  {
    name: 'og-image.jpg',
    pipeline: (image) => image.jpeg({ quality: 85, mozjpeg: true }),
  },
  {
    name: 'og-image.png',
    pipeline: (image) => image.png({ compressionLevel: 9, palette: false }),
  },
];

const resized = sharp(source).resize(OG_WIDTH, OG_HEIGHT, {
  fit: 'cover',
  position: 'left top',
});

for (const { name, pipeline } of outputs) {
  const outputPath = join(imagesDir, name);
  await pipeline(resized.clone()).toFile(outputPath);
  const { size } = statSync(outputPath);
  console.log(`✓ ${name} (${OG_WIDTH}×${OG_HEIGHT}, ${Math.round(size / 1024)} kB)`);
}

console.log('Source: public/images/portada.png');
