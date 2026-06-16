# Appreach — Site Institucional

Site institucional da Appreach, construído com [Next.js 16](https://nextjs.org) (Turbopack), React 19 e Tailwind CSS 4.

## Tecnologias

- **Next.js 16** (Turbopack — pré-release)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **Lenis** — scroll suave
- **Lucide React** — ícones

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento (Turbopack) |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Verifica erros de lint |
| `npm run clean` | Remove o cache `.next` |

## Resolução de problemas

Este projeto usa uma versão pré-release do Next.js 16 com Turbopack. Se o dev server entrar em loop de reload ou alterações de CSS não aparecerem no preview, limpe o cache:

```bash
npm run clean
npm run dev
```
