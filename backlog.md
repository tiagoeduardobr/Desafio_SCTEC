# Backlog do Projeto — BytePets

## Visão geral

Este documento organiza o planejamento inicial da landing page **BytePets**, um pet shop com identidade visual **tech + pet + nerd**, voltado para donos de pets com perfil geek, gamer e conectado. O objetivo é orientar o desenvolvimento rápido na IDE com foco em alta aderência ao desafio proposto, contemplando todos os requisitos obrigatórios do PDF: página funcional e responsiva, identidade visual própria, uso de HTML, CSS e JavaScript, seção de destaque com CTA e posicionamento, seção Sobre com Flexbox ou Grid, indicadores, serviços em cards, formulário funcional com validação front-end, documentação e entrega final compactada.

## Objetivo do backlog

Este backlog foi estruturado para servir como documentação profissional inicial do projeto, guiando a implementação com clareza, velocidade e organização. Cada TODO abaixo está alinhado aos critérios de avaliação do desafio, que distribuem o score entre **Documentação (30%)**, **Linguagens utilizadas (30%)** e **Desenvolvimento e codificação (40%)**.

## Resumo dos requisitos do desafio

| Item | Requisito do PDF | Diretriz de implementação |
| --- | --- | --- |
| 1 | Desenvolver uma landing page funcional e responsiva para um pet shop real ou fictício | Criar single-page em HTML, CSS e JS com layout mobile-first |
| 2 | Criar nome, identidade visual, cores e marca de livre escolha | Usar marca BytePets com universo tech + pet + nerd |
| 3 | Demonstrar estruturação semântica HTML | Utilizar `header`, `nav`, `main`, `section`, `form`, `footer` |
| 4 | Demonstrar estilização e layout com CSS | Trabalhar com variáveis CSS, Grid, Flexbox, responsividade e consistência visual |
| 5 | Demonstrar interatividade básica com JavaScript/DOM | Implementar menu mobile, validação de formulário e feedback visual |
| 6 | Produzir documentação do projeto | Criar README posterior com mais de 1000 caracteres |
| 7 | Trabalhar identidade visual e tipografia, inclusive com fontes externas se desejado | Definir paleta, fontes e sistema visual da BytePets |
| 8 | Criar seção de destaque com cabeçalho visual forte, uso de `position`, elementos sobrepostos e CTAs | Desenvolver hero impactante com imagem, badge, CTA primário e CTA secundário |
| 9 | Criar seção Sobre com apresentação do pet shop, história e/ou proposta, usando Flexbox ou Grid | Montar bloco institucional com duas colunas no desktop |
| 10 | Exibir indicadores como pets atendidos, anos de experiência etc. | Criar cards de métricas ou faixa de indicadores |
| 11 | Criar seção de serviços com cards visuais, `aspect-ratio` e ícones/elementos visuais | Organizar grid de cards reutilizáveis com destaque visual |
| 12 | Criar seção de contato com formulário funcional no front-end | Formulário com semântica correta e feedback de envio |
| 13 | Aplicar validação básica de campos obrigatórios e formato de e-mail | Usar atributos HTML5 e mensagens JS acessíveis |
| 14 | Entregar arquivo compactado `.zip` ou `.rar` de até 20 MB | Organizar projeto limpo, leve e pronto para compactação |
| 15 | Incluir HTML, CSS, JavaScript, imagens/logotipo/ícones e documentação | Garantir estrutura de pastas completa |
| 16 | A documentação deve conter identificação do projeto e do autor, etapas de desenvolvimento e guia de execução local | Preparar README detalhado em etapa posterior |

## Direção do produto

### Nome da marca

- BytePets

### Conceito

- Pet shop com identidade tecnológica, visual geek e comunicação acolhedora.
- Posicionamento pensado para tutores nerds que valorizam estética digital, praticidade e uma experiência diferenciada para seus pets.

### Tom da marca

- Moderno.
- Divertido.
- Inteligente.
- Acolhedor.
- Comercial.

### Público-alvo

- Donos de pets com perfil nerd, tech, gamer ou fãs de cultura pop.
- Pessoas que gostam de soluções modernas e atendimento visualmente diferenciado.
- Público jovem-adulto e adulto que busca confiança, praticidade e estilo.

### Objetivo da landing page

- Servir como cartão de visitas digital da BytePets.
- Apresentar serviços, diferenciais e proposta de valor.
- Conduzir o visitante até uma ação de contato.
- Demonstrar domínio técnico em HTML, CSS e JavaScript, conforme o desafio.

## Stack definida

### Tecnologias principais

- **HTML5** para estrutura semântica e organização do conteúdo.
- **CSS3** para identidade visual, layout, responsividade, Grid, Flexbox e componentes.
- **JavaScript puro** para interatividade básica e validação de formulário.

### Tecnologias auxiliares permitidas

- **Google Fonts** ou **Fontshare** para tipografia externa, conforme permitido pelo PDF.
- **SVGs e ícones leves** para reforçar a estética tech/pet.
- **Imagens otimizadas** para manter o pacote final abaixo do limite de 20 MB.

### Motivo da escolha da stack

A escolha por HTML, CSS e JavaScript puro atende diretamente ao que o desafio avalia e acelera a execução do projeto, sem dependências desnecessárias. Essa abordagem também favorece clareza de código, facilidade de correção e rapidez de entrega.

## Estrutura sugerida do projeto

```text
bytepets/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── img/
│   ├── icons/
│   └── logo/
└── README.md
```

## Backlog de desenvolvimento

### TODO 01 — Consolidar branding base

**Objetivo:** Definir os elementos centrais da identidade BytePets antes de iniciar o layout.

**Itens a executar:**

- [x] Confirmar nome oficial da marca: BytePets.
- [x] Definir slogan principal.
- [x] Criar uma frase de posicionamento da marca.
- [x] Definir paleta principal e secundária.
- [x] Definir tipografia para títulos e corpo.
- [x] Definir estilo visual dos ícones e possíveis ilustrações.

**Planejamento visual:**

- A marca deve transmitir “tecnologia com carinho”.
- A estética deve misturar universo pet com linguagem visual digital/geek.
- O resultado deve parecer um pet shop moderno, não um site futurista exagerado.

**Requisitos atendidos:**

- Nome, identidade visual, cores e marca de livre escolha.
- Uso de tipografia adequada ao contexto, incluindo fontes externas se desejado.

---

### TODO 02 — Definir sistema visual e tokens de estilo

**Objetivo:** Estabelecer base visual coerente para toda a interface.

**Itens a executar:**

- [x] Organizar arquitetura do arquivo `style.css` (1. Reset, 2. Variáveis/Tokens, 3. Tipografia/Base, 4. Layout/Componentes, 5. Utilitários).
- [x] Criar variáveis CSS para cores principais, fundos, textos e destaques.
- [x] Definir escala de espaçamento e raio de borda padrão para cards e botões.
- [x] Criar estados visuais para teclado (`:focus-visible`) garantindo acessibilidade (A11y).
- [x] Definir sombras dinâmicas, estados de hover e planejar micro-interações (ex: "Glassmorphism", gradientes suaves) para visual "Premium".

**Planejamento obrigatório desta conversa:**

- Vibe tech + pet + nerd com design dinâmico.
- Visual moderno, limpo, comercial e acessível (garantir contraste adequado - WCAG).
- Destaques neon controlados, sem excesso.
- Forte contraste para manter legibilidade.
- Aparência acolhedora mesmo com temática digital.

**Paleta sugerida:**

- Fundo principal: grafite azulado.
- Fundo secundário: azul petróleo escuro.
- Cor principal de destaque: ciano.
- Cor secundária: roxo elétrico.
- Cor de apoio em CTA: verde-limão suave ou coral controlado.
- Texto principal: branco suave.
- Texto secundário: cinza-claro.

**Tipografia sugerida:**

- Títulos: Orbitron, Rajdhani ou Oxanium.
- Corpo: Inter, Outfit ou Plus Jakarta Sans.
- Botões: mesma fonte do corpo com peso médio ou semibold.

**Requisitos atendidos:**

- Identidade visual e tipografia.
- Estilização e layout com CSS.
- Coerência visual geral exigida no critério 3.

---

### TODO 03 — Planejar arquitetura da landing page

**Objetivo:** Organizar a página em uma ordem lógica de conversão e leitura.

**Seções planejadas:**

1. Header.
2. Hero / Destaque.
3. Sobre a BytePets.
4. Indicadores.
5. Serviços.
6. Diferenciais.
7. Contato.
8. Footer.

**Itens a executar:**

- [x] Definir IDs para navegação por âncora.
- [x] Ordenar o conteúdo pensando em conversão.
- [x] Garantir que as seções obrigatórias estejam claramente visíveis.
- [x] Evitar excesso de seções para manter entrega rápida.

**Estratégia:**

- Trabalhar com single-page.
- Priorizar leitura fluida.
- Manter foco em apresentar marca, provar valor e direcionar para contato.

**Requisitos atendidos:**

- Página com propósito comercial e pontos estratégicos de conversão.

---

### TODO 04 — Criar estrutura HTML semântica

**Objetivo:** Montar a base do projeto com HTML organizado, semântico e fácil de manter.

**Itens a executar:**

- [x] Estruturar o `<head>` com foco em SEO: `<title>` descritivo, `<meta name="description">` focado em conversão e tags Open Graph.
- [x] Criar `header` com logo, navegação e CTA.
- [x] Criar `main` contendo todas as seções da página.
- [x] Criar `section` para hero, sobre, indicadores, serviços, diferenciais e contato.
- [x] Criar `footer` com fechamento institucional.
- [x] Criar `form` com labels e campos acessíveis.
- [x] Garantir hierarquia correta de headings com um único `h1`.

**Boas práticas obrigatórias:**

- Usar classes reutilizáveis e nomenclatura clara.
- Preparar HTML para fácil estilização e responsividade.
- Aplicar atributos ARIA e HTML semântico pensando em acessibilidade (A11y).

**Requisitos atendidos:**

- Estruturação semântica HTML.
- Boas práticas gerais de organização do código.

---

### TODO 05 — Desenvolver o header e a navegação

**Objetivo:** Criar um topo funcional, visualmente forte e útil para navegação.

**Itens a executar:**

- [x] Inserir logotipo ou wordmark BytePets.
- [x] Adicionar links internos para as principais seções.
- [x] Criar CTA no topo.
- [x] Implementar botão hambúrguer para mobile.

**Planejamento visual:**

- Header com aparência moderna, limpa e possivelmente sticky.
- Botão principal com destaque cromático.
- Logo com detalhe visual tech/pet, preferencialmente em SVG.

**Planejamento técnico:**

- Menu colapsável em telas pequenas.
- Scroll suave até as seções.
- Estados de hover e foco visíveis.

**Requisitos atendidos:**

- Cabeçalho forte para a seção de destaque.
- Interatividade básica e boa experiência de navegação.

---

### TODO 06 — Implementar a seção Hero / Destaque

**Objetivo:** Criar a abertura principal da página com impacto visual e clareza comercial.

**Itens a executar:**

- [x] Escrever headline forte e específica.
- [x] Criar subheadline curta com proposta de valor.
- [x] Inserir CTA principal e CTA secundário.
- [x] Adicionar imagem, ilustração ou composição visual de pet em destaque.
- [x] Criar elementos sobrepostos usando posicionamento CSS.

**Planejamento visual obrigatório:**

- Utilizar `position: relative` no container principal.
- Utilizar elementos `absolute` em badges, ornamentos, molduras ou selos.
- Criar sensação de profundidade sem exagero.
- Fazer o pet ou composição visual reforçar a temática geek/tech.

**Sugestão de conteúdo:**

- Headline: “O pet shop que fala a língua dos tutores nerds.”
- Subheadline: “Cuidado, estilo e tecnologia para pets que merecem atendimento em modo upgrade.”
- CTA principal: “Agendar atendimento”.
- CTA secundário: “Ver serviços”.

**Requisitos atendidos:**

- Seção de destaque com cabeçalho de impacto visual.
- Uso de técnicas como `position: relative/absolute`.
- Elementos sobrepostos.
- Presença de chamadas para ação (CTAs).

---

### TODO 07 — Implementar a seção Sobre

**Objetivo:** Apresentar a proposta da marca e construir confiança inicial.

**Itens a executar:**

- [x] Escrever texto institucional curto sobre a BytePets.
- [x] Apresentar proposta, diferencial e estilo da marca.
- [x] Inserir imagem ou bloco visual de apoio.
- [x] Organizar layout com Grid ou Flexbox.

**Planejamento visual e estrutural:**

- Desktop: duas colunas.
- Mobile: uma coluna.
- Título claro e texto objetivo.
- Visual consistente com o hero.

**Mensagem central da seção:**

- A BytePets une carinho real, experiência moderna e identidade visual feita para tutores nerds.

**Requisitos atendidos:**

- Seção Sobre com apresentação, história e/ou proposta.
- Uso de Flexbox ou Grid.

---

### TODO 08 — Implementar bloco de indicadores

**Objetivo:** Atender ao requisito de exibição de métricas e reforçar credibilidade.

**Itens a executar:**

- [x] Criar bloco com 3 a 4 indicadores.
- [x] Destacar números em tamanho maior.
- [x] Adicionar pequenos rótulos explicativos.
- [x] Ajustar visual para leitura rápida.

**Indicadores sugeridos:**

- +850 pets atendidos.
- 4 anos de experiência.
- 98% de tutores satisfeitos.
- +20 itens geeks para pets.

**Planejamento visual:**

- Cards pequenos ou faixa horizontal.
- Ícones opcionais.
- Boa adaptação para mobile.

**Requisitos atendidos:**

- Exibição de indicadores como pets atendidos, anos de experiência etc..

---

### TODO 09 — Implementar seção de serviços

**Objetivo:** Apresentar os serviços de forma visual, organizada e convincente.

**Itens a executar:**

- [x] Selecionar entre 4 e 6 serviços principais.
- [x] Criar cards reutilizáveis.
- [x] Inserir título, descrição curta e ícone ou imagem em cada card.
- [x] Definir uma área visual com `aspect-ratio` para padronização.
- [x] Garantir consistência entre todos os cards.

**Serviços sugeridos:**

- Banho e tosa.
- Consultas e check-up.
- Produtos e acessórios.
- Atendimento premium.
- Kits temáticos geek para pets.
- Agendamento prático.

**Planejamento visual:**

- Grid responsivo.
- Cards com visual tech limpo.
- Ícones minimalistas e legíveis.
- Destaque sutil em hover.

**Requisitos atendidos:**

- Seção de serviços.
- Uso de cards visuais.
- Aplicação de `aspect-ratio`.
- Uso de ícones ou elementos visuais.

---

### TODO 10 — Implementar seção de diferenciais

**Objetivo:** Reforçar o posicionamento de nicho e aumentar o valor percebido da página.

**Itens a executar:**

- [x] Listar 3 a 5 diferenciais da BytePets.
- [x] Organizar o conteúdo em cards menores ou lista visual.
- [x] Mostrar vantagens competitivas da marca.

**Diferenciais sugeridos:**

- Atendimento com visual e linguagem moderna.
- Experiência pensada para tutores nerds.
- Comunicação digital prática.
- Identidade única e acolhedora.
- Produtos e serviços com personalidade.

**Valor estratégico:**

- Embora não seja um requisito literal do PDF, essa seção ajuda a enriquecer a proposta comercial e elevar a qualidade percebida no critério de desenvolvimento.

---

### TODO 11 — Implementar seção de contato

**Objetivo:** Criar o principal ponto de conversão da landing page.

**Itens a executar:**

- [x] Criar formulário com campos essenciais.
- [x] Adicionar bloco lateral ou complementar com informações de contato.
- [x] Criar CTA final claro.
- [x] Preparar feedback visual de envio.

**Campos sugeridos:**

- Nome do tutor.
- E-mail.
- Nome do pet.
- Serviço de interesse.
- Mensagem.

**Planejamento visual:**

- Formulário em card com destaque.
- Contatos rápidos ao lado ou abaixo: telefone, WhatsApp, cidade.
- Fundo e contraste adequados para leitura.

**Requisitos atendidos:**

- Seção de contato.
- Formulário funcional na camada de front-end.

---

### [x] **TODO 12** — Implementar validação do formulário.

**Objetivo:** Atender ao requisito obrigatório de validação básica dos campos.

**Itens a executar:**

- [x] Aplicar `required` nos campos essenciais.
- [x] Aplicar `type="email"` no campo de e-mail.
- [x] Impedir envio quando houver erro e exibir mensagens amigáveis.
- [x] Adicionar atributos de acessibilidade (A11y) como `aria-invalid` e `aria-describedby` para leitores de tela.
- [x] Exibir mensagem de sucesso acessível após submissão válida.

**Planejamento técnico:**

- Aproveitar validação nativa do HTML5.
- Complementar com JavaScript para personalizar feedback visual.
- Destacar campos inválidos com borda, texto auxiliar e foco visível.

**Boas práticas de acessibilidade:**

- Associar todos os campos a labels claras.
- Marcar campos obrigatórios corretamente.
- Fornecer mensagens compreensíveis e objetivas para orientação do usuário.

**Requisitos atendidos:**

- Validação básica de campos obrigatórios.
- Validação de formato de e-mail.

---

### TODO 13 — Implementar interatividade com JavaScript

**Objetivo:** Garantir uso real de JavaScript/DOM no projeto, conforme o desafio.

**Itens a executar:**

- [x] Abrir e fechar menu mobile.
- [x] Aplicar comportamento acessível do formulário.
- [x] Implementar micro-interações CSS/JS (ex: botões dinâmicos, cards subindo levemente em hover com `transform: translateY`).
- [x] Exibir retorno visual dinâmico após envio do formulário.
- [ ] Animar a exibição de indicadores e destacar item ativo no menu durante scroll.

**Estratégia:**

- Priorizar o essencial exigido.
- Não depender de bibliotecas externas.
- Manter o script limpo e fácil de entender.

**Requisitos atendidos:**

- Interatividade básica com JavaScript/DOM.
- Linguagens exigidas: HTML, CSS e JavaScript.

---

### TODO 14 — Garantir responsividade completa

**Objetivo:** Fazer a landing page funcionar de forma clara em diferentes tamanhos de tela.

**Itens a executar:**

- [x] Aplicar abordagem mobile-first.
- [x] Ajustar header para mobile.
- [x] Reorganizar hero, Sobre, indicadores, serviços e contato em telas menores.
- [x] Garantir leitura, toque e espaçamento adequados.
- [x] Testar quebras principais.

**Breakpoints sugeridos:**

- Mobile: até 767px.
- Tablet: 768px a 1023px.
- Desktop: a partir de 1024px.

**Checklist de verificação:**

- Sem rolagem horizontal indevida.
- Sem texto cortado.
- Imagens ajustadas corretamente.
- Cards reorganizados de forma limpa.
- Formulário confortável para uso mobile.

**Requisitos atendidos:**

- Landing page responsiva.
- Boas práticas gerais no critério 3.

---

### TODO 15 — Criar footer completo

**Objetivo:** Encerrar a página com acabamento profissional.

**Itens a executar:**

- [x] Adicionar nome ou logo da BytePets.
- [x] Inserir frase institucional curta.
- [x] Adicionar links rápidos.
- [x] Inserir informação de contato resumida.
- [x] Inserir crédito do autor do projeto, se desejado.

**Valor estratégico:**

- Melhora percepção de projeto completo.
- Reforça organização e profissionalismo.

**Requisitos atendidos:**

- Ajuda na completude do projeto e na percepção de boa estrutura.

---

### TODO 16 — Preparar conteúdo textual definitivo

**Objetivo:** Evitar improviso durante a implementação e agilizar a montagem.

**Itens a executar:**

- [x] Definir headline e subtítulo do hero.
- [x] Definir texto da seção Sobre.
- [x] Definir descrições curtas dos serviços.
- [x] Definir lista de diferenciais.
- [x] Definir labels, placeholders e mensagens do formulário.
- [x] Definir frases do footer.

**Regras de copy:**

- Linguagem clara e comercial.
- Referências nerds discretas.
- Textos curtos, escaneáveis e objetivos.
- Tom amigável e profissional.

**Requisitos atendidos:**

- Clareza na proposta comercial e apresentação da marca.

---

### TODO 17 — Preparar assets visuais

**Objetivo:** Garantir que a página tenha os elementos visuais necessários sem comprometer desempenho ou prazo.

**Itens a executar:**

- [ ] Criar ou selecionar logo.
- [ ] Criar ou selecionar imagem principal do hero e possíveis imagens de apoio.
- [ ] Converter imagens fotográficas para formato moderno (WebP) visando extrema otimização e redução drástica do tamanho do `.zip`.
- [ ] Criar ou selecionar ícones dos serviços.
- [ ] Aplicar `loading="lazy"` nas imagens que não estão no hero.

**Estratégia:**

- Priorizar SVG para logo e ícones visando nitidez e leveza.
- Usar formato WebP para imagens fotográficas/raster.
- Manter todos os assets dentro da pasta `assets/`.

**Requisitos atendidos:**

- Inclusão de imagens, logotipo, fotos, ícones e demais arquivos necessários.

---

### TODO 18 — Planejar documentação futura (README)

**Objetivo:** Preparar a base do que será documentado na próxima etapa.

**Itens que deverão entrar no README:**

- [ ] Identificação do projeto.
- [ ] Identificação do autor.
- [ ] Objetivo do projeto.
- [ ] Conceito da BytePets.
- [ ] Tecnologias utilizadas.
- [ ] Estrutura de arquivos.
- [ ] Etapas de desenvolvimento.
- [ ] Funcionalidades implementadas.
- [ ] Guia de execução local.
- [ ] Checklist de requisitos do desafio.

**Regras obrigatórias da futura documentação:**

- Ter mais de 1000 caracteres para buscar nota máxima.
- Explicar claramente como o projeto atende aos requisitos.
- Informar como abrir e visualizar o projeto localmente.

**Requisitos atendidos:**

- Planejamento do item de documentação exigido pelo PDF.

---

### TODO 19 — Executar QA técnico e checklist de edital

**Objetivo:** Revisar o projeto antes da compactação final.

**Checklist técnico:**

- [ ] HTML carregando sem falhas.
- [ ] CSS aplicado corretamente.
- [ ] JavaScript funcionando sem erros.
- [ ] Imagens aparecendo corretamente.
- [ ] Formulário validando e retornando feedback.
- [ ] Layout responsivo em telas pequenas e grandes.
- [ ] Sem links quebrados.
- [ ] Sem erros visíveis no console.

**Checklist do edital:**

- [ ] HTML presente.
- [ ] CSS presente.
- [ ] JavaScript presente.
- [ ] Hero com CTA e posicionamento.
- [ ] Seção Sobre com Flexbox ou Grid.
- [ ] Indicadores presentes.
- [ ] Serviços em cards com recursos visuais.
- [ ] Formulário funcional com validação.
- [ ] Documentação completa.

---

### TODO 20 — Preparar empacotamento final

**Objetivo:** Garantir entrega conforme exigido pelo desafio.

**Itens a executar:**

- [ ] Revisar pasta final do projeto.
- [ ] Excluir arquivos desnecessários.
- [ ] Confirmar que tudo funciona localmente abrindo `index.html`.
- [ ] Compactar a pasta em `.zip` ou `.rar`.
- [ ] Verificar se o arquivo final possui até 20 MB.

**Conteúdo obrigatório do pacote:**

- HTML.
- CSS.
- JavaScript.
- Imagens.
- Logotipo.
- Ícones.
- Documentação.

## Ordem recomendada de execução

1. Consolidar branding base.
2. Definir sistema visual e tokens.
3. Estruturar HTML semântico.
4. Implementar header.
5. Implementar hero.
6. Implementar Sobre.
7. Implementar indicadores.
8. Implementar serviços.
9. Implementar diferenciais.
10. Implementar contato.
11. Implementar validação e JS.
12. Ajustar responsividade.
13. Revisar conteúdo textual.
14. Preparar assets finais.
15. Fazer QA.
16. Criar README.
17. Compactar entrega.

## Definições aprovadas até aqui

- Nome da marca: BytePets.
- Estilo: tech + pet + nerd.
- Público: donos de pets nerds.
- Tipo de projeto: landing page comercial.
- Tecnologias: HTML, CSS e JavaScript.
- Estrutura: single-page responsiva.
- Estética: dark tech clean com destaques controlados em ciano e roxo.
- Interatividade mínima: menu mobile, validação de formulário e feedback visual.
- Documentação: README completo em etapa posterior.

## Critérios de sucesso do backlog

Este backlog será considerado bem-sucedido se permitir que o desenvolvimento aconteça com rapidez, clareza e sem omissões em relação ao PDF. O foco principal é garantir uma entrega visualmente forte, tecnicamente correta, rápida de implementar e totalmente aderente aos requisitos do desafio.
