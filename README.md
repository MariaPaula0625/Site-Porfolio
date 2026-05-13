# Portfolio Premium React

Portfólio moderno, responsivo e profissional criado com React, Vite, Tailwind CSS e Framer Motion.

## Paleta sugerida

- Fundo principal: `#080B18`
- Painéis escuros: `#0E1324` e `#11182C`
- Roxo principal: `#8B5CF6`
- Azul elétrico: `#38BDF8`
- Verde de destaque: `#34D399`
- Texto claro: `#F8FAFC`

## Fontes sugeridas

- Títulos: Space Grotesk
- Texto e interface: Inter

## Instalação

```bash
npm install
```

## Rodar em desenvolvimento

```bash
npm run dev
```

Abra `http://localhost:5173/`.

## Build de produção

```bash
npm run build
```

## Verificação

```bash
npm run lint
```

## Estrutura

```text
.
├── public/
│   ├── favicon.svg
│   └── images/
│       └── avatar-portfolio.png
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── sections/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       └── Section.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── styles/
│   │   └── animations.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Personalização

Edite `src/data/portfolio.js` para trocar nome, redes sociais, projetos, habilidades, experiência e contatos. O avatar fica em `public/images/avatar-portfolio.png`.
