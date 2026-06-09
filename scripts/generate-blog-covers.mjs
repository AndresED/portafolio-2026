import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../src/assets/blog');

/** @type {Record<string, { title: string; subtitle: string; accent: string; kind: 'sort' | 'crypto' | 'ai' | 'algo' }>} */
const covers = {
  'heapsort-golang': { title: 'HeapSort', subtitle: 'Golang', accent: '#00ADD8', kind: 'sort' },
  'mergesort-golang': { title: 'MergeSort', subtitle: 'Golang', accent: '#00ADD8', kind: 'sort' },
  'quicksort-golang': { title: 'QuickSort', subtitle: 'Golang', accent: '#00ADD8', kind: 'sort' },
  'insertion-sort-golang': { title: 'Insertion Sort', subtitle: 'Golang', accent: '#00ADD8', kind: 'sort' },
  'bubble-sort-golang': { title: 'Bubble Sort', subtitle: 'Golang', accent: '#00ADD8', kind: 'sort' },
  'sorting-methods-python': { title: 'Sorting Methods', subtitle: 'Python', accent: '#3776AB', kind: 'sort' },
  'sorting-methods-complexity': { title: 'Complexity Analysis', subtitle: 'Sorting', accent: '#38bdf8', kind: 'algo' },
  'pattern-recognition-neural-networks': { title: 'Neural Networks', subtitle: 'Pattern Recognition', accent: '#a78bfa', kind: 'ai' },
  'rsa-encryption': { title: 'RSA', subtitle: 'Public-Key Crypto', accent: '#f59e0b', kind: 'crypto' },
  'rabin-encryption': { title: 'Rabin', subtitle: 'Cryptosystem', accent: '#f59e0b', kind: 'crypto' },
  'hill-cipher': { title: 'Hill Cipher', subtitle: 'Linear Algebra', accent: '#f97316', kind: 'crypto' },
  'playfair-cipher': { title: 'Playfair', subtitle: 'Digraph Cipher', accent: '#fb923c', kind: 'crypto' },
  'vernam-cipher': { title: 'Vernam', subtitle: 'One-Time Pad', accent: '#eab308', kind: 'crypto' },
  'vigenere-cipher': { title: 'Vigenère', subtitle: 'Polyalphabetic', accent: '#facc15', kind: 'crypto' },
  'affine-cipher': { title: 'Affine', subtitle: 'Substitution', accent: '#fbbf24', kind: 'crypto' },
  'caesar-cipher': { title: 'Caesar', subtitle: 'Shift Cipher', accent: '#fcd34d', kind: 'crypto' },
  'analisis-diseno-algoritmos': { title: 'Algorithms', subtitle: 'Design & Analysis', accent: '#38bdf8', kind: 'algo' },
};

function iconMarkup(kind, accent) {
  if (kind === 'sort') {
    return `
      <g opacity="0.95">
        <rect x="118" y="118" width="22" height="52" rx="4" fill="${accent}" opacity="0.35"/>
        <rect x="148" y="98" width="22" height="72" rx="4" fill="${accent}" opacity="0.55"/>
        <rect x="178" y="78" width="22" height="92" rx="4" fill="${accent}" opacity="0.75"/>
        <rect x="208" y="108" width="22" height="62" rx="4" fill="${accent}" opacity="0.5"/>
        <rect x="238" y="88" width="22" height="82" rx="4" fill="${accent}" opacity="0.65"/>
        <path d="M112 176 H288" stroke="${accent}" stroke-width="2" opacity="0.4"/>
      </g>`;
  }
  if (kind === 'crypto') {
    return `
      <g opacity="0.95">
        <rect x="165" y="95" width="70" height="58" rx="10" fill="none" stroke="${accent}" stroke-width="3"/>
        <path d="M200 95 V82 C200 68 212 58 228 58 C244 58 256 68 256 82 V95" fill="none" stroke="${accent}" stroke-width="3"/>
        <circle cx="200" cy="124" r="5" fill="${accent}"/>
        <rect x="214" y="118" width="18" height="12" rx="2" fill="${accent}" opacity="0.7"/>
      </g>`;
  }
  if (kind === 'ai') {
    return `
      <g opacity="0.95">
        <circle cx="200" cy="125" r="12" fill="${accent}"/>
        <circle cx="150" cy="105" r="8" fill="${accent}" opacity="0.7"/>
        <circle cx="250" cy="105" r="8" fill="${accent}" opacity="0.7"/>
        <circle cx="140" cy="155" r="8" fill="${accent}" opacity="0.55"/>
        <circle cx="260" cy="155" r="8" fill="${accent}" opacity="0.55"/>
        <line x1="200" y1="125" x2="150" y2="105" stroke="${accent}" stroke-width="2" opacity="0.5"/>
        <line x1="200" y1="125" x2="250" y2="105" stroke="${accent}" stroke-width="2" opacity="0.5"/>
        <line x1="200" y1="125" x2="140" y2="155" stroke="${accent}" stroke-width="2" opacity="0.5"/>
        <line x1="200" y1="125" x2="260" y2="155" stroke="${accent}" stroke-width="2" opacity="0.5"/>
      </g>`;
  }
  return `
    <g opacity="0.95">
      <circle cx="200" cy="130" r="58" fill="none" stroke="${accent}" stroke-width="2" opacity="0.35"/>
      <circle cx="170" cy="110" r="10" fill="${accent}"/>
      <circle cx="230" cy="110" r="10" fill="${accent}"/>
      <circle cx="200" cy="160" r="10" fill="${accent}"/>
      <line x1="170" y1="110" x2="230" y2="110" stroke="${accent}" stroke-width="2" opacity="0.45"/>
      <line x1="170" y1="110" x2="200" y2="160" stroke="${accent}" stroke-width="2" opacity="0.45"/>
      <line x1="230" y1="110" x2="200" y2="160" stroke="${accent}" stroke-width="2" opacity="0.45"/>
    </g>`;
}

function buildSvg({ title, subtitle, accent, kind }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#0b1220"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="225" fill="url(#bg)"/>
  <rect width="400" height="225" fill="url(#glow)"/>
  <rect x="14" y="14" width="372" height="197" rx="14" fill="none" stroke="${accent}" stroke-opacity="0.22"/>
  ${iconMarkup(kind, accent)}
  <text x="200" y="44" text-anchor="middle" fill="#f8fafc" font-family="Segoe UI, Arial, sans-serif" font-size="17" font-weight="700">${title}</text>
  <text x="200" y="64" text-anchor="middle" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="11">${subtitle}</text>
</svg>`;
}

await fs.promises.mkdir(outDir, { recursive: true });

for (const [id, meta] of Object.entries(covers)) {
  const file = `${id}.svg`;
  await fs.promises.writeFile(path.join(outDir, file), buildSvg(meta), 'utf8');
  console.log(`✓ ${file}`);
}

console.log(`\nGenerated ${Object.keys(covers).length} covers.`);
