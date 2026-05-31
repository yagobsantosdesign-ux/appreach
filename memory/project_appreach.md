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

## Gotchas do dev server (Turbopack — Next 16 pré-release)

Dois bugs recorrentes do dev server, **ambos resolvidos limpando o cache `.next`** (`npm run clean` + reiniciar o dev):

1. **Reload infinito ("reiniciando toda hora"):** Turbopack panica em loop — `FATAL: Failed to write app endpoint /page — Next.js package not found` (HMR). A página serve `200`, mas o navegador recarrega sem parar. `next build` (produção) nunca é afetado.
2. **Mudança em CSS não reflete no preview:** ao editar `globals.css`, o valor antigo persiste mesmo com reload/restart — o Turbopack serve o CSS do cache. O fonte está certo; é só limpar `.next`.

Regra: se uma edição não aparecer no preview, **suspeite do cache `.next` antes de caçar bug no código**. Há o script `npm run clean` no `package.json` para isso.

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
- H1: `60px` | H2: `48px` | H3/card titles: `32px`
- **⚠️ REGRA PERMANENTE: Headings são SEMPRE `fontWeight: 600` (bold). globals.css já define isso globalmente.**
- **⚠️ REGRA PERMANENTE: Cor de todos os headings é sempre `#251d49`. NUNCA `#141414`, `#0f0f14` nem outras variações. Exceção: heading sobre fundo escuro/foto pode usar `#ffffff`.**
- **Letter-spacing de todos os headings: `-1.4px` (fixo em px, nunca `-0.02em` ou similares)**
- Hero subtítulo: `18px` | Body: `16px` | Labels/badges: `14px` | Botões: variado
- **Textos body em cards e seções: sempre `16px`** (não usar 14px ou 15px)

**Container padrão:** `maxWidth: "1350px", margin: "0 auto", padding: "0 40px"` — todas as seções usam esse valor. Não usar 1300px nem padding 64px.

**Cards (padrão consolidado):**
- Background: `#F7F7F7`
- Border radius: `20px`
- Bento (Strategies): sem border | FunnelGuide: sem border
- Ícones em cards: círculo `rounded-full`, fundo `#6557ea`, ícone branco

**Referências de design:** Finns (finns.framer.website), Lunera (lunera.framer.ai), Alter (alter.framer.website)

## Componentes Compartilhados (UI)

> **REGRA FUNDAMENTAL:** A **home page é a referência aprovada**. Todas as outras páginas (produto, quem somos, carreiras, etc.) devem seguir os componentes e design system definidos na home. Antes de qualquer edição em outra página, verificar o que já existe na home e reutilizar.

- **`SectionBadge`** (`components/ui/SectionBadge.tsx`) — label de seção com linha + texto mono uppercase. **Nunca** replicar manualmente — sempre usar este componente.
- **`Button`** (`components/ui/Button.tsx`) — variantes: `gradient` (flat roxo `var(--color-primary)`), `ghost` (outline primário), `glass`, `white`, `dark`. Tamanhos: `sm`, `md`, `lg`, `xl` (16px/48px — padrão para CTAs de seção). Aceita prop `style` para override de layout (ex: `alignSelf`). **Nunca** criar `<a>` ou `<button>` manual para CTA.
- **`FAQItem`** (`components/ui/FAQItem.tsx`) — item de accordion do FAQ. Props: `question`, `answer`, `isOpen`, `onToggle`. Usar em todas as páginas.
- **`SmoothScroll`** (`components/SmoothScroll.tsx`) — Lenis com `duration: 1.2`

## Template de Páginas de Produto

Estrutura obrigatória (nessa ordem):
```
Header → ProductHero → ProductFeatures → FAQ → Footer
```
- **`ProductHero`** (`components/sections/product/ProductHero.tsx`) — props: `badge`, `title`, `subtitle`. H1: `clamp(32px, 4.5vw, 60px)`. Container: 1350px / 40px.
- **`ProductFeatures`** (`components/sections/product/ProductFeatures.tsx`) — props: `badge`, `title`, `subtitle`, `features[]`. Container: 1350px / 40px. Cores via CSS vars.
- **`FAQ`** (`components/sections/FAQ.tsx`) — usa `FAQItem` internamente. Padding top: `pt-12 lg:pt-16`.
- **`ContactCTA`** — **não usar em páginas de produto**. Apenas na home.

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
