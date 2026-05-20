---
name: Projeto Appreach — Redesign de Site
description: Contexto completo do projeto de reformulação do site da Appreach (agência de marketing para apps)
type: project
originSessionId: 29700a1d-11ea-4b0c-8260-bd55751ca5ac
---
## Contexto

Agência de marketing especializada em campanhas para aplicativos móveis. Cobre todo o funil: aquisição de usuários → engajamento → receita. Site antigo estava em Wix, desatualizado. Redesign em andamento.

## Repositório e Stack

- **Caminho:** `C:/Users/mayyr/.claude/Apreach/appreach-site`
- **Repo GitHub:** `https://github.com/yagobsantosdesign-ux/appreach.git`
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Estilo:** Tailwind CSS v4 (config via CSS `@theme`, sem tailwind.config.ts)
- **Ícones:** lucide-react
- **Fonte:** `geist` (pacote npm oficial da Vercel) — `GeistSans` via `geist/font/sans`
- **Scroll suave:** Lenis (`components/SmoothScroll.tsx`) — instalado e ativo em toda a página via `layout.tsx`
- **Deploy:** Netlify (`netlify.toml` configurado, formulário via Netlify Forms)
- **Idioma:** Português (pt-BR)

## Design System

**Cores (atualizadas — cinzas neutros, sem tint roxo):**
- Primary: `#6557ea` — apenas CTAs de seção, ícones de cards, elementos de widgets. **Nunca** como fundo de seção ou texto decorativo.
- Primary Light: `#F0EEFF` — fundos de card, hover
- Background: `#F7F7F7` | Surface: `#FFFFFF`
- Dark: `#141414` (Auten-style, near-black) | Body text: `#3D3D4A` | Muted: `#909090` | Border: `#EBEBEB`
- Header CTA nav → dark `#141414` (não roxo). CTAs de seção/hero → roxo.
- Success: `#22C55E`

**Tipografia:**
- **GeistSans** — todo o corpo de texto, headings, botões
- **GeistMono** (`var(--font-geist-mono)`) — labels uppercase, badges (SectionBadge), métricas label, step numbers, detalhes de seção

**Tipografia (tamanhos fixos — sem clamp):**
- H1: `60px` `font-medium` | H2: `48px` `font-medium` | H3/card titles: `26px` `font-medium`
- **Headings nunca usam bold — sempre `font-medium` (500)**
- **Letter-spacing de todos os headings (h1–h4): `-1.4px` (definido globalmente em globals.css)**
- Hero subtítulo: `18px` | Body: `16px` | Labels/badges: `14px` | Botões: variado
- **Textos body em cards e seções: sempre `16px`** (não usar 14px ou 15px)

**Container:** `max-w-[1300px] mx-auto px-4 lg:px-16` — máx 1300px, 64px padding desktop

**Cards (padrão consolidado):**
- Background: `#F7F7F7`
- Border radius: `20px`
- Bento (Strategies): sem border | FunnelGuide: sem border
- Ícones em cards: círculo `rounded-full`, fundo `#6557ea`, ícone branco

**Referências de design:** Finns (finns.framer.website), Lunera (lunera.framer.ai), Alter (alter.framer.website)

## Componentes Compartilhados

- **SectionBadge** (`components/ui/SectionBadge.tsx`) — pill com fundo `#F7F7F7` e border `1px solid #EBEBEB`; padrão para label de seção. Badge fica **junto ao título** (não separado acima).
- **SmoothScroll** (`components/SmoothScroll.tsx`) — Lenis com `duration: 1.2`

## Contatos do Cliente

- **Aléxia** — responsável criativo; vai enviar brandbook, ícones, vetores, patterns
- **Neto** — aprovação final e orçamento
- **E-mail:** fale@appreach.com.br | **Domínio alvo:** appreach.com.br

## Estado Atual da Home Page

Ordem das seções na página:

| Seção | Arquivo | Estado |
|---|---|---|
| Header | `components/layout/Header.tsx` | Fixo, branco/glass. Logo mark: fundo `#141414` (era roxo, atualizado). Dropdown "Soluções". |
| Hero | `components/sections/Hero.tsx` | H1 `60px`. Retângulo cinza `#F7F7F7` flat (sem gradiente, sem sombra). Ícones de store removidos. Botão "Fale conosco" `14px px-5 py-2.5`. |
| LogoTicker | `components/sections/LogoTicker.tsx` | "+200 CLIENTES ATENDIDOS" + ticker animado. bg white. |
| Strategies (Bento) | `components/sections/Strategies.tsx` | Grid bento 3 colunas, padrão `2+1 / 1+2 / 2+1`. Cards `#F7F7F7`, `border-radius: 20px`, border `rgba(0,0,0,0.03)`, padding `28px`. Títulos `26px`. Espaço reservado para widgets (`220px`). |
| FunnelGuide | `components/sections/FunnelGuide.tsx` | Layout **flex** com left sticky `top-[220px]` (constante `STICKY_BASE = 220`). Todos os cards não-último ficam sticky em `STICKY_BASE` (sem offset por index — sobreposição exata). Último card centrado dinamicamente. **Efeito de fade+scale sequencial**: `ONSET = 0.5` — o efeito começa quando o próximo card atinge 50% inferior da viewport. `seqTs` garante que apenas um card some por vez (clamping sequencial). `opacity: 1-t`, `scale: 1 - t*0.1` (sutil, até 0.9). Sem CSS transition — animação 100% controlada pelo scroll listener. |
| Cases | `components/sections/Cases.tsx` | 4 cards com métricas em destaque. Títulos `26px`. |
| Timeline | `components/sections/Timeline.tsx` | id=`como-funciona`. 5 etapas. |
| Stats | `components/sections/Stats.tsx` | Seção escura (`bg-dark`). |
| ContactCTA | `components/sections/ContactCTA.tsx` | id=`contato`. Form Netlify Forms. |
| Footer | `components/layout/Footer.tsx` | bg dark. |

## Produtos/Estratégias da Appreach

Aquisição de Usuários · Retargeting · CTV · Apple Search Ads · IA & Dados (Reach Lab) · App Chat & Push · Preload · Mídia Programática

## Pendente (conforme brief de 2026-05-13)

- Screenshot real do app para encaixar no retângulo da Hero
- Brandbook e assets visuais da Aléxia (logo SVG, ícones, patterns, emojis da marca)
- Corrigir nav desktop: remover "Cobertura/Estratégia/Como funciona?", adicionar CTA "Fale com especialista", mover "Junte-se a nós" para item separado de nav
- Remover "Blog" do footer + apontar links reais nas colunas do footer
- Widgets visuais nos cards de Strategies (espaço já reservado — 220px, fundo transparente, widgets brancos)
- Melhorar destaque dos Cases na home
- Blog: **fora do escopo por enquanto**

## Páginas a criar — AGUARDAR finalização da Hero

> **Regra:** só sugerir iniciar as páginas abaixo quando Yago disser que a Hero está finalizada.

- Criar página **Quem somos**
- Criar página **Carreiras / Junte-se a nós**
- Criar/revisar páginas de produto: UA (reestruturar), CTV, Retargeting (nova), Apple Search Ads
