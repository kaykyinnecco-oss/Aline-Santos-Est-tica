# Estética Aline Santos

Landing page estática completa. A pasta inicial continha somente mídias; não havia stack a preservar. Foi usada uma implementação leve de HTML, CSS e JavaScript, sem dependências de produção.

## Abrir e atualizar

Na pasta `site`, execute `npm run build`, `npm run check` e `npm run dev`. A prévia estará em `http://localhost:4173`.

- `data.mjs`: contatos, horários, serviços, mensagens, metadados e caminhos de imagens.
- `scripts/build.mjs`: componentes HTML e dados estruturados; gera `dist/index.html`.
- `dist/style.css`: estilo responsivo e preferência por movimento reduzido.
- `dist/app.js`: menu móvel acessível.
- `dist/fonts/`: Cormorant Garamond e Montserrat locais. Não depende de consulta ao Google Fonts no acesso da visitante.
- `dist/images/estetica-aline/`: mídias otimizadas usadas na página.
- `assets/originais-gerados/`: cinco originais PNG gerados e preservados, fora da pasta pública.
- `docs/MIDIAS.md`: inventário, distribuição, recortes e pendências.
- `docs/prompts-imagens.json`: prompts e revisão das imagens.
- `docs/screenshots/`: evidências da verificação visual.

`dist` é mantido como fonte pública versionada; o build atualiza apenas o HTML. Não apagar a pasta antes do build. O site não usa formulário, banco de dados ou sistema de reservas: os CTAs abrem uma conversa no WhatsApp.

## Verificação realizada

- Build, validação de sintaxe de JavaScript e checagem local aprovados.
- Navegador inspecionado a 360, 390, 768 e 1440 px, sem rolagem horizontal.
- Oito serviços visíveis e mensagens específicas codificadas corretamente.
- Navegação por âncoras; menu por clique, Enter e Escape; estado `aria-expanded`; foco visível.
- Imagens locais carregadas; hero prioritário e imagens seguintes adiadas.
- Logo/retrato reais separados das cinco ilustrações geradas e identificadas.
- H1 único, descrição, Open Graph, metadados de compartilhamento e dados estruturados sem avaliações ou coordenadas inventadas.
- Sem erros de JavaScript nos registros do navegador consultados.
- Mapa incorporado sem conteúdo visível no navegador de teste. Links e endereço disponíveis. Instagram/Google/WhatsApp têm destinos conferidos, mas não houve envio de mensagem ou conclusão de agendamento.

Ainda depende de confirmação: domínio público, fonte oficial dos títulos, logo em alta resolução, fotos reais do espaço e depoimentos autorizados/verificáveis.

## Visualização e publicação

A prévia local está em http://localhost:4173. A publicação privada usa Sites. Neste Windows, o auxiliar de empacotamento em Bash não estava disponível; o mesmo validador oficial de arquivos estáticos foi executado diretamente, e o pacote foi montado com o `tar` nativo do Windows. Somente os arquivos públicos de `dist` são incluídos, sem originais de geração ou documentos internos. A publicação foi encaminhada ao serviço; o status confirmado e o endereço estão na entrega da conversa.

Visualização privada confirmada: https://estetica-aline-santos.kayky-innecco.chatgpt.site
