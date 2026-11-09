# Shin Conceito Institute — Dra. Patrícia Silva

Site institucional em React + Vite + TypeScript + Tailwind CSS v4 + GSAP + Lucide.

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist (pronto para Vercel)
```

## Onde mexer

- **Contatos, links, endereço, depoimentos:** `src/data/site.ts`
- **Cores, fontes, tamanhos (tokens):** bloco `@theme` em `src/index.css`
- **Fotos (arquivos):** `src/assets/img/`
- **Qual foto vai em cada lugar, galeria e antes e depois:** `src/data/photos.ts` (a modelo da seção A clínica vem do Unsplash)
- **Serviços:** lista `services` em `src/data/site.ts`
- **Favicon / ícones / imagem de compartilhamento:** `public/`

## Deploy na Vercel

Importe o repositório: a Vercel detecta o Vite sozinha (build `npm run build`, saída `dist`).
Quando houver domínio definitivo, ative a tag `canonical` no `index.html`.
