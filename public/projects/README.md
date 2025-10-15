# Project Screenshots

Esta pasta contém as imagens de prévia dos projetos exibidos no portfólio.

## Arquivos Atuais

Atualmente, existem placeholders SVG para cada projeto:
- `itau-screenshot.svg` - Placeholder para o projeto Itaú
- `cox-screenshot.svg` - Placeholder para o projeto Cox Automation
- `santander-screenshot.svg` - Placeholder para o projeto Santander

## Como Adicionar Screenshots Reais

### 1. Tirar Screenshots

Para obter melhores resultados:
- **Resolução recomendada:** 1600x900 pixels (aspect ratio 16:9)
- **Formato:** PNG ou JPG (PNG preferível para qualidade)
- **Qualidade:** Alta resolução, mas otimizada para web (< 500KB)

**Dicas:**
- Capture a tela em resolução desktop (não mobile)
- Mostre a parte mais importante/interessante da aplicação
- Use ferramentas como [Screely](https://screely.com) para adicionar moldura bonita
- Ou use [Shot.so](https://shot.so) para criar mockups elegantes

### 2. Otimizar Imagens

Antes de adicionar ao projeto, otimize as imagens:

**Online:**
- [TinyPNG](https://tinypng.com) - Compressão PNG/JPG
- [Squoosh](https://squoosh.app) - Compressão avançada

**CLI:**
```bash
# Instalar imagemagick
brew install imagemagick

# Redimensionar e otimizar
convert input.png -resize 1600x900 -quality 85 output.png
```

### 3. Substituir os Placeholders

Substitua os arquivos SVG pelos seus screenshots:

```bash
# Exemplo para o projeto do Itaú
cp ~/Downloads/itau-screenshot.png public/projects/itau-screenshot.png
```

### 4. Atualizar o Componente

Edite `/src/components/Projects.jsx` e atualize as extensões dos arquivos:

```javascript
// De:
image: "/projects/itau-screenshot.svg",

// Para:
image: "/projects/itau-screenshot.png",
```

## Projetos com Links Públicos

### Cox Automation (DealerTrack)
- **Link:** https://www.dealertrack.com.br/#/home
- **Screenshot:** Tire um print da homepage ou dashboard principal
- Clicável no portfólio ✓

### Itaú Unibanco
- Projeto interno - sem link público
- Screenshot pode ser de tela genérica (sem dados sensíveis)
- Não é clicável no portfólio

### Santander Tecnologia
- Projeto interno - sem link público
- Como é mainframe, pode usar uma imagem ilustrativa de terminal COBOL
- Não é clicável no portfólio

## Screenshots Alternativas

Se não conseguir screenshots reais dos projetos internos, considere:

1. **Criar mockups fictícios:** Use Figma/Sketch para criar interfaces genéricas
2. **Usar ilustrações:** Ícones ou ilustrações representando o tipo de projeto
3. **Capturar código:** Screenshot do VS Code com código relevante (sem dados sensíveis)
4. **Usar diagramas:** Arquitetura visual do sistema

## Exemplos de Bons Screenshots

- **Homepage principal** - Mostra a identidade visual
- **Dashboard** - Demonstra funcionalidades complexas
- **Feature específica** - Destaca sua contribuição
- **Before/After** - Se fez modernização/refactor

## ⚠️ Importante - Segurança

**NUNCA inclua screenshots com:**
- Dados pessoais de clientes
- Informações confidenciais da empresa
- Tokens, chaves ou credenciais
- URLs internas ou IPs privados
- Logs com informações sensíveis

Se o projeto é confidencial, use o placeholder SVG genérico que já está configurado.
