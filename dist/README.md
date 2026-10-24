# Nova Stack

Site institucional de página única em português. HTML, CSS e JavaScript sem etapa de build.

## Prévia local

Execute `node server.mjs` nesta pasta e abra http://127.0.0.1:4173.

## Conteúdo

- `dist/index.html`: textos, serviços, história e formulário.
- `dist/styles.css`: estilos responsivos e ilustrações dos serviços.
- `dist/app.js`: cena orbital com projeção 3D, navegação e composição da mensagem do WhatsApp.
- `dist/assets/`: logos originais fornecidas pelo cliente.
- `.openai/hosting.json`: identidade do site e diretório estático para publicação.

O formulário prepara uma mensagem para 5547991717916. Não armazena dados nem envia mensagens automaticamente. A pessoa revisa e envia pelo próprio WhatsApp.

A seção de projetos apresenta honestamente a fase inicial da empresa. Substitua o conteúdo de `#portfolio` quando houver projetos autorizados para divulgação. Não há clientes, resultados ou depoimentos fictícios.

Fontes: Manrope e DM Sans via Google Fonts, com fallback local. A cena 3D é desenhada com Canvas 2D e projeção de uma malha tridimensional. Há imagem alternativa sem Canvas, controle para pausar movimentos e respeito à preferência de movimento reduzido do sistema.

As imagens publicadas são `LogoSemFundo.webp` (9.864 bytes, com transparência) e `Logo2melhorada.webp` (13.620 bytes), fornecidas pelo cliente. Os PNG antigos foram retirados do diretório publicado.

## Revisão de 24/10/2026

Menu com ordem de teclado e retorno de foco; hero em fluxo normal em janelas baixas; texto do hero sempre legível durante a rolagem; validação do formulário junto aos campos; fontes sem CSS @import; cena com 1.536 triângulos e suspensão de frames fora de vista, na aba oculta e quando pausada. Mantidos serviços, portfólio reservado, história expansível e WhatsApp.

SEO: canonical, dados Organization, robots.txt, sitemap.xml e página 404. Ao migrar de hospedagem, atualizar todas as URLs absolutas em index.html, robots.txt e sitemap.xml. O comportamento HTTP de rotas inexistentes depende da hospedagem.

Verificações: `node --check dist/app.js`, `node --check server.mjs`, `git diff --check`, `21st review dist --json`, Chrome DevTools, Lighthouse, teclado, fluxo do formulário interceptado sem abrir WhatsApp e emulação de telas/movimento reduzido. Relatório detalhado na pasta de auditoria ao lado do projeto. Não existe pipeline de build ou typecheck neste projeto estático.
