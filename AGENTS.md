# Regras do Projeto (AGENTS)

Este documento define as diretrizes de desenvolvimento para o projeto BytePets, guiando as interações da inteligência artificial e a escrita de código.

## 1. Idioma e Documentação

- **Código:** Todo o código-fonte (nomes de variáveis, funções, arquivos, IDs e classes CSS) deve ser escrito estritamente em **Inglês**.
- **Comentários e Docstrings:** Todos os comentários explicativos no código, docstrings e documentações devem ser escritos em **Português do Brasil (PT-BR)**.

## 2. Fluxo de Trabalho (Git e Versionamento)

- **Branches por TODO:** O desenvolvimento será guiado pelo `backlog.md`. Para cada TODO iniciado, deve ser criada uma nova branch dedicada (exemplo: `feature/todo-01-branding` ou `feat/todo-04-html-structure`).
- **Commits Semânticos:** Todos os commits devem seguir o padrão de *Conventional Commits* e as mensagens devem ser escritas obrigatoriamente em **Inglês** (ex: `docs: add initial documentation`, `feat: add hero section`, `style: update color tokens`).
- **Merge e Push:** Ao finalizar e validar um TODO, a branch correspondente deve ser mesclada (merged) na branch principal e enviada (push) para o repositório remoto.

## 3. Padrões de Qualidade e Boas Práticas (SCTEC)

- Foco em **Acessibilidade (A11y)**: Uso de atributos ARIA e tags HTML5 semânticas.
- Foco em **SEO**: Meta tags estruturadas corretamente no `<head>`.
- Foco em **Performance**: Otimização máxima de assets (imagens em WebP, carregamento `lazy`) para manter o `.zip` final abaixo de 20MB.
- Foco em **Design Premium**: Identidade visual "Tech + Pet + Nerd", utilizando micro-interações CSS/JS e consistência visual para garantir a nota 100 no critério de Desenvolvimento.

## 4. Formatação de Documentação (Markdown)

- **Espaçamento de Títulos e Listas:** Sempre mantenha uma linha em branco antes e depois de títulos (Headings) e listas, evitando avisos de lint (ex: MD022, MD032).
- **Tabelas:** Mantenha espaçamento interno adequado nas declarações de colunas de tabelas (ex: `| --- | --- |`) para evitar avisos de linting (ex: MD060).
