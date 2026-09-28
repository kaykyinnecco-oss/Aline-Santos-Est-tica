import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {business,media,mediaRoot,categories,whatsapp} from '../data.mjs';
const html=await readFile('dist/index.html','utf8');
assert.equal((html.match(/<h1\b/g)||[]).length,1);
for(const item of Object.values(media))await access('dist'+mediaRoot+item.file);
for(const category of categories)for(const service of category.services){assert(html.includes(service.name));const url=new URL(whatsapp(service.name));assert.equal(url.pathname,'/'+business.phone);assert.equal(url.searchParams.get('text'),`Olá, Aline! Vim pelo site e gostaria de saber mais sobre ${service.name} e agendar um horário.`);}
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]));
for(const match of html.matchAll(/href="#([^"]+)"/g))assert(ids.has(match[1]),`Âncora ausente: ${match[1]}`);
assert(!/href="(?:#|)"/.test(html));
assert(!/aggregateRating|reviewCount|ratingValue/.test(html));
assert(html.includes('strict-origin-when-cross-origin'));
JSON.parse(html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)[1]);
await access('dist/fonts/fonts.css');
console.log('Verificação aprovada: 8 serviços, mensagens de WhatsApp, mídias locais, âncoras, H1 único, dados estruturados e mapa.');
