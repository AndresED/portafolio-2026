import fs from 'node:fs';
import path from 'node:path';

const feedPath =
  'C:/Users/andre/.cursor/projects/c-Users-andre-Documents-Proyectos-portafolio-2026/agent-tools/e14554cf-e105-47d6-8930-0445480af763.txt';

const xml = fs.readFileSync(feedPath, 'utf8');
const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];

for (const m of entries) {
  const e = m[1];
  const url = e.match(/href='(https:\/\/www\.makingcode\.dev[^']+\.html)' title=/)?.[1];
  const thumb = e.match(/media:thumbnail[^>]+url="([^"]+)"/)?.[1];
  if (url && thumb) {
    console.log(`${url}\t${thumb}`);
  }
}
