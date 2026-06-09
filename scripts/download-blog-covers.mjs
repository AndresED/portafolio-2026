import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'src/assets/blog');
const feedPath =
  'C:/Users/andre/.cursor/projects/c-Users-andre-Documents-Proyectos-portafolio-2026/agent-tools/e14554cf-e105-47d6-8930-0445480af763.txt';

const posts = [
  { id: 'heapsort-golang', url: 'https://www.makingcode.dev/2018/09/implementacion-del-metodo-de-ordenacion_72.html' },
  { id: 'mergesort-golang', url: 'https://www.makingcode.dev/2018/09/implementacion-del-metodo-de-ordenacion_91.html' },
  { id: 'quicksort-golang', url: 'https://www.makingcode.dev/2018/09/implementacion-del-metodo-de-ordenacion_77.html' },
  { id: 'insertion-sort-golang', url: 'https://www.makingcode.dev/2018/09/implementacion-del-metodo-de-ordenacion_20.html' },
  { id: 'bubble-sort-golang', url: 'https://www.makingcode.dev/2018/09/implementacion-del-metodo-de-ordenacion.html' },
  { id: 'pattern-recognition-neural-networks', url: 'https://www.makingcode.dev/2016/08/reconocimiento-de-patrones-mediante.html' },
  { id: 'sorting-methods-python', url: 'https://www.makingcode.dev/2016/01/implementacion-de-los-metodos-de.html' },
  { id: 'rsa-encryption', url: 'https://www.makingcode.dev/2015/08/cifrado-rsa.html' },
  { id: 'rabin-encryption', url: 'https://www.makingcode.dev/2015/07/cifrado-de-rabin.html' },
  { id: 'hill-cipher', url: 'https://www.makingcode.dev/2015/07/cifrado-de-hill.html' },
  { id: 'sorting-methods-complexity', url: 'https://www.makingcode.dev/2015/07/analisis-de-la-complejidad-de-metodos.html' },
  { id: 'playfair-cipher', url: 'https://www.makingcode.dev/2015/07/cifrado-de-playfair.html' },
  { id: 'vernam-cipher', url: 'https://www.makingcode.dev/2015/07/cifrado-de-vernam.html' },
  { id: 'vigenere-cipher', url: 'https://www.makingcode.dev/2015/07/cifrado-de-vigenere.html' },
  { id: 'affine-cipher', url: 'https://www.makingcode.dev/2015/07/cifrado-afin.html' },
  { id: 'caesar-cipher', url: 'https://www.makingcode.dev/2015/07/cifrado-de-cesar.html' },
  { id: 'analisis-diseno-algoritmos', url: 'https://www.makingcode.dev/2015/06/analisis-y-diseno-de-algoritmos.html' },
];

const generated = {
  'heapsort-golang': { label: 'HeapSort', sub: 'Golang', accent: '#00ADD8', icon: 'heap' },
  'analisis-diseno-algoritmos': { label: 'Algorithms', sub: 'Design & Analysis', accent: '#38bdf8', icon: 'graph' },
};

function buildThumbMap(xml) {
  const map = new Map();
  for (const m of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const e = m[1];
    const url = e.match(/href='(https:\/\/www\.makingcode\.dev[^']+\.html)' title=/)?.[1];
    const thumb = e.match(/media:thumbnail[^>]+url="([^"]+)"/)?.[1];
    if (url && thumb) map.set(url, thumb);
  }
  return map;
}

function coverSvg({ label, sub, accent, icon }) {
  const iconMarkup =
    icon === 'heap'
      ? `<polygon points="200,70 320,130 320,250 200,310 80,250 80,130" fill="none" stroke="${accent}" stroke-width="3" opacity="0.9"/>
         <text x="200" y="205" text-anchor="middle" fill="${accent}" font-family="Arial,sans-serif" font-size="42" font-weight="700">⌗</text>`
      : `<circle cx="200" cy="170" r="70" fill="none" stroke="${accent}" stroke-width="3" opacity="0.35"/>
         <path d="M130 210 L200 100 L270 210" fill="none" stroke="${accent}" stroke-width="3"/>
         <circle cx="200" cy="100" r="10" fill="${accent}"/>
         <circle cx="130" cy="210" r="10" fill="${accent}"/>
         <circle cx="270" cy="210" r="10" fill="${accent}"/>`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#0b1220"/>
    </linearGradient>
  </defs>
  <rect width="400" height="225" fill="url(#bg)"/>
  <rect x="16" y="16" width="368" height="193" rx="12" fill="none" stroke="${accent}" stroke-opacity="0.25"/>
  ${iconMarkup}
  <text x="200" y="48" text-anchor="middle" fill="#f8fafc" font-family="Arial,sans-serif" font-size="18" font-weight="700">${label}</text>
  <text x="200" y="68" text-anchor="middle" fill="#94a3b8" font-family="Arial,sans-serif" font-size="12">${sub}</text>
</svg>`;
}

async function download(url, dest) {
  const res = await fetch(url.replace('/s72-c/', '/s800/'));
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.promises.writeFile(dest, buf);
}

async function main() {
  await fs.promises.mkdir(outDir, { recursive: true });
  const xml = fs.readFileSync(feedPath, 'utf8');
  const thumbs = buildThumbMap(xml);
  const manifest = {};

  for (const post of posts) {
    const thumb = thumbs.get(post.url);
    if (thumb) {
      const ext = thumb.includes('.jpg') || thumb.includes('hqdefault') ? '.jpg' : '.png';
      const filename = `${post.id}${ext}`;
      const dest = path.join(outDir, filename);
      try {
        await download(thumb, dest);
        manifest[post.id] = filename;
        console.log(`✓ ${post.id} ← blog thumbnail`);
      } catch (err) {
        console.warn(`✗ ${post.id} download failed: ${err.message}`);
      }
    } else if (generated[post.id]) {
      const filename = `${post.id}.svg`;
      const dest = path.join(outDir, filename);
      await fs.promises.writeFile(dest, coverSvg(generated[post.id]), 'utf8');
      manifest[post.id] = filename;
      console.log(`✓ ${post.id} ← generated SVG`);
    } else {
      console.warn(`✗ ${post.id} no thumbnail found`);
    }
  }

  await fs.promises.writeFile(
    path.join(outDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2),
    'utf8',
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
