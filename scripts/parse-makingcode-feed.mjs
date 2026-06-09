import fs from 'node:fs';

const xml = fs.readFileSync(
  'C:/Users/andre/.cursor/projects/c-Users-andre-Documents-Proyectos-portafolio-2026/agent-tools/e14554cf-e105-47d6-8930-0445480af763.txt',
  'utf8',
);

const labels = ['Estructura de datos', 'Criptografía'];
const entryRe = /<entry>([\s\S]*?)<\/entry>/g;
const posts = [];

for (const m of xml.matchAll(entryRe)) {
  const e = m[1];
  const cats = [...e.matchAll(/term="([^"]+)"/g)]
    .map((x) => x[1])
    .filter((t) => !t.startsWith('tag:'));
  if (!labels.some((l) => cats.includes(l))) continue;

  const title = e.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const url = e.match(/rel='alternate' type='text\/html' href='([^']+)'/)?.[1] ?? '';
  const published = (e.match(/<published>([^<]+)<\/published>/)?.[1] ?? '').slice(0, 10);
  const summary = e.match(/<summary>([^<]*)<\/summary>/)?.[1] ?? '';

  posts.push({ title, url, published, cats, summary });
}

posts.sort((a, b) => b.published.localeCompare(a.published));
console.log(JSON.stringify(posts, null, 2));
