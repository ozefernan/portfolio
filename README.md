# Oséas Fernandes - Portfolio

Portfolio pessoal de Oséas Fernandes construído com React e Tailwind CSS.

## 🚀 Começando

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build

```bash
npm run build
```

## 🎨 Características

- ✨ Design minimalista e moderno
- 🎯 Totalmente responsivo
- 🌐 Sistema de internacionalização (PT/EN)
- ⚡ Construído com Vite para desenvolvimento rápido
- 🎨 Estilizado com Tailwind CSS
- 🌈 Animações suaves com Framer Motion
- 📱 Mobile-first
- 🎬 Easter egg Star Wars

## 📁 Estrutura

```
src/
├── components/
│   ├── Hero.jsx           # Seção principal/introdução
│   ├── About.jsx          # Seção sobre
│   ├── Experience.jsx     # Experiência profissional
│   ├── Projects.jsx       # Projetos destacados
│   ├── Footer.jsx         # Rodapé
│   ├── LanguageToggle.jsx # Botão de troca de idioma
│   ├── DevNotice.jsx      # Aviso de desenvolvimento
│   └── StarWars.jsx       # Easter egg Star Wars
├── contexts/
│   └── LanguageContext.jsx # Contexto de internacionalização
├── App.jsx                # Componente principal
└── index.css              # Configuração Tailwind
```

## 🛠️ Tecnologias

- React 19
- Vite
- Tailwind CSS 4
- Framer Motion
- PostCSS
- Autoprefixer

## 📝 Funcionalidades

### Internacionalização (i18n)

O site suporta dois idiomas:
- 🇧🇷 Português (Brasil)
- 🇺🇸 English

Todas as traduções estão centralizadas em `src/contexts/LanguageContext.jsx`

### Componentes Principais

1. **Hero.jsx** - Nome, título, navegação e links sociais
2. **About.jsx** - Biografia e experiência profissional
3. **Experience.jsx** - Histórico profissional completo
4. **Projects.jsx** - Projetos destacados
5. **LanguageToggle.jsx** - Botão fixo de troca de idioma (canto superior direito)
6. **DevNotice.jsx** - Aviso de desenvolvimento (aparece apenas no topo da página)
7. **StarWars.jsx** - Easter egg com intro do Star Wars

## 🎨 Cores

O tema usa a paleta Slate do Tailwind:

- Fundo: `slate-900`
- Texto principal: `slate-200`
- Texto secundário: `slate-400`
- Destaques: `blue-400`

## 📄 Licença
