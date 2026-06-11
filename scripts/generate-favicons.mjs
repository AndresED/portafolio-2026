import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');
const source = join(publicDir, 'brand', 'logo-mark.svg');

const pngSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

function pngToIco(pngBuffer, dimension) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry[0] = dimension >= 256 ? 0 : dimension;
  entry[1] = dimension >= 256 ? 0 : dimension;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(22, 12);

  return Buffer.concat([header, entry, pngBuffer]);
}

async function resizeIcon(size, outputName) {
  const outputPath = join(publicDir, outputName);
  await sharp(source)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 14, g: 15, b: 18, alpha: 1 },
    })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  return outputPath;
}

for (const { name, size } of pngSizes) {
  await resizeIcon(size, name);
  console.log(`✓ ${name}`);
}

const favicon32 = readFileSync(join(publicDir, 'favicon-32x32.png'));
writeFileSync(join(publicDir, 'favicon.ico'), pngToIco(favicon32, 32));
console.log('✓ favicon.ico');

const manifest = {
  name: 'Andrés Esquivel — Senior Backend Engineer',
  short_name: 'andresed.dev',
  icons: [
    { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
  ],
  theme_color: '#0e0f12',
  background_color: '#0e0f12',
  display: 'standalone',
};
writeFileSync(join(publicDir, 'site.webmanifest'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log('✓ site.webmanifest');
