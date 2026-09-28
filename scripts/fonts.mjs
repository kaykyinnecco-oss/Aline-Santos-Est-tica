import {mkdir,writeFile} from 'node:fs/promises';
const url='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Montserrat:wght@400;500;600&display=swap';
const response=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0'}});if(!response.ok)throw new Error('Falha ao obter fontes');
let css=await response.text();await mkdir('dist/fonts',{recursive:true});
const urls=[...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map(m=>m[1]))];
for(let i=0;i<urls.length;i++){const response=await fetch(urls[i]);if(!response.ok)throw new Error('Falha no arquivo da fonte');const name=`font-${i}.${urls[i].endsWith('.ttf')?'ttf':'woff2'}`;await writeFile('dist/fonts/'+name,Buffer.from(await response.arrayBuffer()));css=css.replaceAll(urls[i],'/fonts/'+name);}
await writeFile('dist/fonts/fonts.css',css);console.log(`${urls.length} arquivos de fontes locais salvos.`);
