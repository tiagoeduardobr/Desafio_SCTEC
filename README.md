# 🐾 BytePets

Bem-vindo ao repositório do **BytePets**, uma landing page premium desenvolvida como parte do desafio SCTEC/SENAI. O projeto combina a estética *Cyberpunk / Tech* com o universo Pet, entregando um layout moderno, de altíssima performance, e com total rigor técnico.

![Status](https://img.shields.io/badge/status-concluído-00c2ff?style=for-the-badge)
![SCTEC](https://img.shields.io/badge/SCTEC-programa%20oficial%20SC-0057b8?style=for-the-badge)
![Carreira Tech](https://img.shields.io/badge/trilha-Carreira%20Tech-0f766e?style=for-the-badge)
![SENAI/SC](https://img.shields.io/badge/parceria-SENAI%2FSC-dc2626?style=for-the-badge)
![Landing Page](https://img.shields.io/badge/tipo-landing%20page-7c3aed?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-sem%C3%A2ntico-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-responsivo-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-interatividade-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)
![Responsivo](https://img.shields.io/badge/layout-responsivo-06d6a0?style=for-the-badge)
![Acessibilidade](https://img.shields.io/badge/A11y-100%25-0052cc?style=for-the-badge)
![SEO](https://img.shields.io/badge/SEO-100%25-ff5500?style=for-the-badge)
![Performance](https://img.shields.io/badge/Performance-100%25-06d6a0?style=for-the-badge)

---

## 🎯 Objetivo

Criar uma experiência imersiva e responsiva para a marca "BytePets". O foco principal do desenvolvimento foi alcançar a excelência nos critérios de avaliação técnica:

- **Desempenho Extremo:** Nenhuma imagem fotográfica pesada foi utilizada. Todos os assets (Logo, Hero, Ícones) são 100% vetoriais (SVG) renderizados via código com filtros nativos (`feGaussianBlur`), garantindo peso praticamente nulo e carregamento instantâneo.
- **Acessibilidade (A11y):** Uso de HTML5 semântico (tags `<article>`, `<section>`, `<nav>`), atributos ARIA dinâmicos no formulário de contato (`aria-invalid`, `aria-describedby`, `aria-live`) e controle semântico do menu mobile (`aria-expanded`).
- **SEO Técnico:** Estrutura de cabeçalho em árvore impecável (H1 a H3), Meta Tags Open Graph (OG) injetadas para compartilhamento rico, e atributo `loading="lazy"` nas imagens secundárias.
- **Design Interativo:** Animações baseadas em gatilho de rolagem via `IntersectionObserver` no JavaScript puro, *Scroll Spy* para destacar o menu ativo e micro-interações CSS complexas (glassmorphism, gradients, hover events).

## 🛠️ Tecnologias e Metodologias

Este projeto foi construído **sem o uso de frameworks externos ou bibliotecas pesadas**, valorizando a essência e o domínio profundo dos fundamentos da web:

- **HTML5 Semântico:** Estruturação robusta e amigável para Screen Readers e motores de busca.
- **CSS3 Vanilla:** Uso extensivo de CSS Custom Properties (Variáveis), Flexbox, CSS Grid avançado, animações CSS e paleta de cores harmoniosa em Dark Mode.
- **JavaScript Vanilla (ES6+):** Lógica limpa e orientada a performance para validar formulários e criar animações performáticas via APIs do navegador.
- **SVG Vector Art:** Ilustrações desenvolvidas em código, alinhadas à estética cyberpunk.
- **Conventional Commits:** Todo o histórico do Git está organizado sob padrões semânticos de mercado (`feat:`, `fix:`, `docs:`, `style:`).
- **Governança Step-by-Step:** Desenvolvimento guiado por regras de arquitetura documentadas, `backlog.md` restrito e dicionário de linting (`cspell.json`).

## 📂 Estrutura de Pastas

```text
📦 BytePets
 ┣ 📂 assets
 ┃ ┣ 📂 icons          # Ícones vetoriais dos serviços (banho-tosa, consulta, premium, produtos)
 ┃ ┣ 📂 img            # Ilustração principal cyberpunk (hero-pet.svg)
 ┃ ┗ 📂 logo           # Logotipo oficial em neon (bytepets-logo.svg)
 ┣ 📂 css
 ┃ ┗ 📜 style.css      # Estilos globais, reset, design tokens e animações
 ┣ 📂 js
 ┃ ┗ 📜 script.js      # IntersectionObserver, form feedback e interações DOM
 ┣ 📜 index.html       # Esqueleto e conteúdo principal da Landing Page
 ┣ 📜 README.md        # Documentação do projeto (você está aqui)
 ┣ 📜 backlog.md       # Roadmap e tracking de todas as tarefas concluídas
 ┣ 📜 cspell.json      # Dicionário do projeto para evitar erros de linting
 ┗ 📜 AGENTS.md        # Regras de governança de IA e fluxo de desenvolvimento
```

## 🚀 Como Executar Localmente

O projeto é "Zero-Build" e não requer instalação do Node.js, `npm` ou compiladores.

1. **Clone ou faça o download** deste repositório para a sua máquina.
2. **Abra a pasta do projeto** na sua IDE favorita (Recomendado: Visual Studio Code).
3. **Inicie um servidor local** para evitar bloqueios de CORS nos SVGs e Links:
   - Se estiver usando o VSCode, instale a extensão **Live Server**.
   - Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
4. O navegador abrirá automaticamente em `http://127.0.0.1:5500`. Divirta-se!

## 🙏 Agradecimentos

Um agradecimento especial ao programa **SCTEC** e ao **SENAI/SC** por fomentarem a inovação e a educação tecnológica no estado de Santa Catarina. A trilha **Carreira Tech** proporcionou uma jornada de aprendizado incrível, incentivando a criação de projetos com foco real em performance, acessibilidade e design de ponta. O *BytePets* é o reflexo direto da excelência exigida e inspirada por este desafio.

---

Desenvolvido com muito código limpo e disciplina de engenharia de software para o Desafio SCTEC. 🚀
