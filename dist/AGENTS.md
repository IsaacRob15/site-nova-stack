# AGENTS.md

## Objetivo

Este projeto deve ser desenvolvido com alto padrão de qualidade visual, técnica e de experiência do usuário.

Ao implementar interfaces, não se limite a apenas fazer algo funcional. Busque uma solução visualmente refinada, consistente, responsiva, acessível e adequada ao produto.

Antes de criar algo do zero, investigue o projeto, os componentes existentes e as ferramentas disponíveis.

---

# Princípios gerais

- Preserve a identidade visual existente do projeto.
- Prefira consistência a variedade desnecessária.
- Reutilize componentes existentes sempre que eles forem adequados.
- Não recrie componentes que já existem no projeto ou nas bibliotecas utilizadas.
- Não introduza dependências sem necessidade.
- Evite soluções excessivamente complexas.
- Escreva código legível, modular e fácil de manter.
- Mantenha componentes pequenos e com responsabilidades claras.
- Evite duplicação de lógica e estilos.
- Não altere partes não relacionadas à tarefa sem uma boa razão.
- Sempre considere responsividade, acessibilidade e performance.

---

# Processo obrigatório antes de implementar UI

Sempre que a tarefa envolver criação ou alteração relevante de interface:

1. Analise primeiro a estrutura existente do projeto.
2. Identifique:
   - framework;
   - sistema de estilos;
   - componentes existentes;
   - design system;
   - padrões de espaçamento;
   - cores;
   - tipografia;
   - border radius;
   - sombras;
   - comportamento responsivo.
3. Reutilize padrões já existentes quando forem bons.
4. Consulte as ferramentas apropriadas antes de criar componentes complexos do zero.
5. Implemente.
6. Execute e inspecione visualmente a página quando possível.
7. Corrija problemas de layout, console, responsividade e acessibilidade encontrados.

---

# Frontend Design Skill

Para tarefas relevantes de frontend e UI, aplique os princípios da skill Frontend Design.

Use-a principalmente quando:

- criar páginas;
- criar landing pages;
- redesenhar telas;
- criar dashboards;
- construir novos fluxos;
- criar seções de marketing;
- definir hierarquia visual;
- melhorar interfaces visualmente fracas ou genéricas.

A interface deve parecer intencional e projetada especificamente para este produto.

Evite:

- aparência genérica de template;
- excesso de cards sem necessidade;
- layouts previsíveis demais;
- gradientes gratuitos;
- excesso de efeitos;
- tipografia sem hierarquia;
- espaços inconsistentes;
- componentes visualmente desconectados.

Prefira:

- hierarquia clara;
- composição forte;
- bom uso de espaço negativo;
- tipografia bem definida;
- alinhamentos precisos;
- detalhes sutis;
- interações coerentes;
- identidade visual própria.

---

# 21st.dev / Magic MCP

Consulte o 21st.dev quando estiver criando ou redesenhando partes importantes da interface.

Especialmente para:

- hero sections;
- pricing;
- testimonials;
- CTAs;
- navbars;
- footers;
- dashboards;
- cards avançados;
- feature sections;
- Bento grids;
- authentication screens;
- animações;
- layouts de marketing;
- componentes visualmente diferenciados.

Antes de criar uma seção visual complexa do zero, pesquise no 21st para verificar se existe uma referência ou componente adequado.

Não copie componentes cegamente.

Ao utilizar algo encontrado no 21st:

1. adapte ao design system do projeto;
2. ajuste cores;
3. ajuste tipografia;
4. ajuste espaçamentos;
5. ajuste radius;
6. remova dependências desnecessárias;
7. garanta responsividade;
8. mantenha consistência com os componentes existentes.

O 21st deve servir como acelerador e referência de alta qualidade, não como substituto do design system do projeto.

Se nenhum resultado for adequado, crie uma solução própria.

---

# shadcn MCP

Use o shadcn como primeira opção para componentes estruturais e de interface comuns quando o projeto utilizar ou for compatível com shadcn/ui.

Consulte o shadcn MCP antes de implementar manualmente componentes como:

- buttons;
- dialogs;
- dropdown menus;
- forms;
- inputs;
- selects;
- checkboxes;
- tabs;
- accordions;
- sheets;
- popovers;
- tooltips;
- tables;
- pagination;
- command menus;
- alerts;
- calendars;
- sidebars;
- navigation components.

Antes de instalar um novo componente:

1. verifique se ele já existe no projeto;
2. verifique se existe uma implementação semelhante;
3. consulte o registry do shadcn;
4. instale somente o necessário.

Depois de adicionar um componente shadcn, adapte sua aparência ao design system atual.

Não deixe componentes com aparência padrão do shadcn quando o projeto possuir uma identidade própria.

---

# Prioridade entre 21st e shadcn

Use esta regra geral:

## shadcn

Prefira para componentes fundamentais, funcionais e reutilizáveis.

Exemplos:

- Button
- Dialog
- Input
- Form
- Dropdown
- Tabs
- Sheet
- Select
- Checkbox
- Table

## 21st.dev

Prefira para composição visual, inspiração e componentes mais sofisticados.

Exemplos:

- hero;
- pricing section;
- feature section;
- testimonials;
- Bento layout;
- SaaS sections;
- dashboards sofisticados;
- CTA;
- animações;
- componentes de marketing.

Quando fizer sentido, combine os dois.

Exemplo:

- estrutura funcional com shadcn;
- composição visual inspirada ou obtida através do 21st;
- estilização final personalizada para o projeto.

---

# Web Design Guidelines

Depois de criar ou modificar uma interface relevante, aplique as Web Design Guidelines.

Revise pelo menos:

- acessibilidade;
- contraste;
- hierarquia;
- legibilidade;
- tipografia;
- estados de foco;
- navegação por teclado;
- labels de formulários;
- mensagens de erro;
- tamanho de áreas clicáveis;
- comportamento mobile;
- overflow;
- alinhamento;
- espaçamento;
- consistência visual;
- feedback de interação.

Não trate acessibilidade como correção opcional posterior.

Ela deve fazer parte da implementação.

---

# Chrome DevTools MCP

Use o Chrome DevTools MCP quando houver uma aplicação executável e a tarefa envolver comportamento ou interface que possa ser validada no navegador.

Depois de alterações significativas de frontend:

1. abra a aplicação;
2. navegue até a página afetada;
3. verifique visualmente o resultado;
4. verifique console;
5. procure erros ou warnings relevantes;
6. verifique network quando necessário;
7. teste interações;
8. teste tamanhos de viewport relevantes;
9. procure overflow e quebras de layout;
10. corrija os problemas encontrados.

Use DevTools especialmente para:

- bugs visuais;
- layout quebrado;
- responsividade;
- hydration errors;
- erros JavaScript;
- requests com falha;
- problemas de performance;
- comportamentos que não podem ser confirmados apenas lendo código.

Não afirme que algo funciona visualmente sem inspecionar quando a ferramenta estiver disponível e a validação for relevante.

---

# Responsividade

Toda interface deve funcionar pelo menos em:

- mobile;
- tablet;
- desktop.

Não apenas reduza elementos proporcionalmente.

Adapte composição e hierarquia quando necessário.

Verifique:

- menus;
- grids;
- tabelas;
- cards;
- modais;
- dialogs;
- textos longos;
- imagens;
- botões;
- formulários;
- espaçamento lateral;
- elementos posicionados de forma absoluta.

Evite horizontal scroll não intencional.

---

# Design system

Antes de introduzir novos valores visuais, procure tokens ou padrões existentes.

Priorize variáveis/tokens para:

- cores;
- spacing;
- font sizes;
- radii;
- shadows;
- breakpoints.

Evite valores arbitrários repetidos.

Se precisar introduzir um novo padrão visual, mantenha-o coerente e reutilizável.

---

# Tipografia

Use tipografia para criar hierarquia clara.

Evite depender apenas do tamanho da fonte.

Considere:

- peso;
- contraste;
- line-height;
- letter-spacing;
- largura do bloco de texto;
- espaço entre títulos e conteúdo.

Evite textos muito largos em desktop.

Textos de leitura devem permanecer confortáveis.

---

# Animações

Use animações apenas quando melhorarem:

- orientação;
- feedback;
- percepção de qualidade;
- compreensão da interface.

Prefira animações sutis e rápidas.

Evite:

- animação em tudo;
- efeitos que atrasem interação;
- movimentos excessivos;
- animações puramente decorativas que prejudiquem usabilidade.

Respeite `prefers-reduced-motion` quando aplicável.

---

# Imagens e assets

Não use placeholders genéricos quando houver assets adequados disponíveis.

Antes de adicionar novos assets:

1. procure assets existentes;
2. confira se já existe ícone, imagem ou ilustração equivalente;
3. reutilize quando fizer sentido.

Mantenha proporções corretas e evite distorção.

---

# Ícones

Prefira a biblioteca de ícones já utilizada pelo projeto.

Não misture diferentes famílias de ícones sem necessidade.

Mantenha consistência de:

- stroke;
- tamanho;
- alinhamento;
- estilo.

---

# Código

Priorize:

- TypeScript quando o projeto utilizar TypeScript;
- componentes reutilizáveis;
- nomes descritivos;
- estruturas simples;
- separação adequada de responsabilidades.

Evite:

- arquivos gigantes;
- abstrações prematuras;
- componentes duplicados;
- lógica de negócio misturada com apresentação sem necessidade;
- valores mágicos repetidos.

---

# Dependências

Antes de instalar uma dependência:

1. confira se algo equivalente já existe;
2. avalie se é realmente necessária;
3. prefira ferramentas já utilizadas no projeto.

Não instale uma biblioteca grande para resolver um problema pequeno.

---

# Performance

Considere performance desde a implementação.

Evite:

- renders desnecessários;
- JavaScript excessivo;
- imagens enormes;
- dependências pesadas sem necessidade;
- animações custosas;
- carregamento desnecessário no cliente.

Use lazy loading e code splitting quando fizer sentido.

---

# Estados de interface

Componentes que dependem de dados devem considerar quando relevante:

- loading;
- empty;
- error;
- success;
- disabled;
- hover;
- focus;
- active.

Não implemente apenas o estado ideal.

---

# Formulários

Formulários devem possuir:

- labels adequados;
- validação clara;
- feedback de erro;
- estado de envio;
- estado de sucesso quando aplicável;
- navegação por teclado;
- foco previsível.

Mensagens de erro devem explicar como corrigir o problema.

---

# Testes e validação

Depois de implementar uma mudança relevante:

1. execute lint quando disponível;
2. execute typecheck quando disponível;
3. execute testes relacionados quando disponíveis;
4. execute build quando a mudança justificar;
5. valide visualmente com Chrome DevTools quando relevante.

Corrija erros causados pela alteração antes de concluir.

Não esconda erros apenas para fazer o build passar.

---

# Regra para uso das ferramentas

Não use MCPs apenas porque estão disponíveis.

Use cada ferramenta quando ela aumentar a qualidade ou reduzir incerteza.

Fluxo recomendado para tarefas grandes de frontend:

1. entender o projeto;
2. consultar componentes existentes;
3. aplicar Frontend Design;
4. pesquisar no shadcn quando precisar de primitives;
5. pesquisar no 21st quando precisar de composição visual ou referências;
6. implementar;
7. revisar com Web Design Guidelines;
8. executar;
9. validar com Chrome DevTools;
10. corrigir;
11. executar checks finais.

Para mudanças pequenas, use somente as etapas necessárias.

---

# Critério de conclusão

Uma tarefa de frontend não está concluída apenas porque compila.

Considere concluída quando:

- atende ao pedido;
- mantém consistência com o projeto;
- funciona;
- está responsiva;
- possui estados relevantes;
- não introduz erros óbvios;
- está visualmente bem resolvida;
- passou pelas verificações apropriadas;
- não possui regressões evidentes.

---

# Comunicação

Ao concluir tarefas relevantes, informe de forma objetiva:

- o que foi alterado;
- quais decisões importantes foram tomadas;
- quais ferramentas foram usadas quando relevante;
- quais verificações foram executadas;
- qualquer limitação que permaneça.

Não descreva cada detalhe trivial da implementação.