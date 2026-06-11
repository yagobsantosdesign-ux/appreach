# Handoff — Revisão v2 do site Appreach

> Documento de continuidade. Atualizado durante a sessão de implementação da "Revisão v2" + troca de imagens.
> Projeto: `D:\Projetos Claude\Apreach\appreach-site` (Next.js 16 / Turbopack). Branch: **`main`**.

## Contexto
1. **Fase 1 (concluída):** aplicamos todos os ajustes de texto/layout/menu do PDF do cliente (`Revisão Site Appreach (2).pdf`). Plano salvo em `C:\Users\mayyr\.claude\plans\c-users-mayyr-downloads-revis-o-site-ap-serene-babbage.md`.
2. **Fase 2 (em andamento):** o cliente está enviando imagens reais (PNGs do ChatGPT em `C:\Users\mayyr\Downloads\`) para substituir os placeholders das páginas de serviço. Estilo desejado: ilustrações/mockups 3D em tons lilás/roxo, **sem rostos de pessoas**.

## Como adicionar/trocar uma imagem (workflow)
1. **Ver a imagem** (Read) para decidir enquadramento e a qual card pertence.
2. **Converter para webp otimizado** com `sharp` (já instalado), width 1000, quality 82:
   ```bash
   cd 'D:\Projetos Claude\Apreach\appreach-site'
   node -e "const sharp=require('./node_modules/sharp'),fs=require('fs');const s='C:/Users/mayyr/Downloads/ARQUIVO.png',o='./public/NOME.webp';sharp(s).resize({width:1000,withoutEnlargement:true}).webp({quality:82}).toFile(o).then(()=>console.log('ok',Math.round(fs.statSync(o).size/1024)+'KB'))"
   ```
   - Em substituições, usar **nome novo** (ex.: `-b`, `-c`) para evitar cache do Turbopack.
3. **Ligar na página:**
   - Hero (ProductHero): prop `image={{ src, alt }}` e opcional `imagePosition="top"` (padrão `center`).
   - Card de feature (ProductFeatures): adicionar `image: { src, alt }` no objeto do array `features`.
   - Remover o `placeholderLabel` correspondente (a imagem tem prioridade, mas limpar deixa claro).
4. **Build** para validar: `npm run build` (ver `error|✓ Compiled`).
5. Verificar no preview (server "appreach", porta 3000). Scroll via eval é instável (cards sticky); preferir confirmar via DOM (`img.src`/`complete`).

## Componentes-chave
- `components/sections/product/ProductHero.tsx` — hero das páginas de serviço (layout "Opção 2": texto 640px à esquerda fixo + imagem preenchendo o resto e a altura). Props: `image`, `imagePosition`, `placeholderLabel`. Min-height padrão **460px** (desktop) via `.product-hero-row` no globals.
- `components/sections/product/ProductFeatures.tsx` — cards de feature (imagem alterna esq/dir). `ImageSlot` usa `object-fit: cover`. Aceita `feature.image` ou `feature.placeholderLabel`.
- `components/ui/ImagePlaceholder.tsx` — placeholder rotulado (fundo lilás + pontos).
- `components/ui/Accordion.tsx` — sanfona dos sub-produtos na página de UA (deep-link por hash).

## STATUS das imagens por página

| Página | Hero | Cards de feature |
|---|---|---|
| **User Acquisition** (`useracquisition-app`) | ✅ `ua-hero-mockup-b.webp` (center) | ✅ todos (card2 = `ua-creativos-mockup.webp`; 1/3/4 usam `ua-feature-1/3/4.webp`) |
| **Retargeting** | ✅ `retargeting-mockup-e.webp` ⚠️ TEM ROSTOS (avatares) | ✅ `retargeting-feature-1.webp`, `-2`, `-3b`, `-4` |
| **Reach Lab** (`reach-lab`) | ✅ `reach-lab-mockup-b.webp` | ✅ `reach-lab-feature-1b`, `-2`, `-3`, `-4b` |
| **CTV** (`ctv-connected-tv`) | ✅ `ctv-mockup-b.webp` | ✅ `ctv-feature-1..4.webp` (originais) |
| **Apple Search Ads** | ✅ `apple-search-ads-mockup-b.webp` | ✅ cards 1,2,3,4 (`apple-search-ads-feature-1..4.webp`) |
| **Native Ads** | ✅ `native-ads-mockup.webp` | ⏳ 4 cards PENDENTES (placeholder) |
| **Preload** | ✅ `preload-mockup.webp` (top) | ⏳ 4 cards PENDENTES |
| **Push Ads** (`app-chat-push`) | ✅ `push-ads-mockup.webp` | ⏳ 4 cards PENDENTES |
| **ASO** | ⚠️ `aso-mockup.webp` (TEM ROSTO — trocar) | ⏳ 4 cards PENDENTES |
| **Mídia Programática** (`midia-programatica`) | ⏳ placeholder (página fora do menu) | ⏳ 4 cards PENDENTES |
| **Growth Navigator** | ✅ `growth-navigator-hero.webp` (bússola flutuando, 2 colunas) | n/a |
| **Quem Somos** → "O que acreditamos" | ✅ `pins1-appreach.webp` (foto real do cordão Appreach) | n/a |
| **UA → sanfona** (Native Ads&Mídia / Preload / Push / ASO) | ✅ `ua-sub-native-ads/push/preload/aso.webp` | n/a |

## PENDÊNCIAS (próximos passos)
1. **Native Ads, Preload, Push Ads, ASO, Mídia Programática** — 4 cards de feature cada (heroes já têm). CTV feature 1–4 já trocados sem rosto. Sanfona da UA: ✅ concluída.
2. **Imagens com ROSTO** (regra "sem rostos"):
   - **Retargeting** (`retargeting-mockup-e`): ✅ **APROVADO manter** — os avatares não são pessoas reais (decisão do cliente/Yago, Jun 11 2026). Não trocar.
   - **ASO** (`aso-mockup.webp`): pendente — atrelado à decisão de **manter ou excluir a página ASO** (ver item abaixo). Se a página for aposentada, o hero deixa de importar.

## Decisões em aberto (aguardando cliente)
- **Páginas standalone (Native Ads, Preload, Push Ads, ASO, Mídia Programática):** fora do menu E do footer; conteúdo vive na sanfona da UA. Cliente vai decidir **aposentar as rotas** OU **finalizar as páginas** (preencher os 20 placeholders). A ASO entra aqui (resolve também o hero com rosto). *Status ficou confuso — Yago vai alinhar com o cliente.*
- **The Scaler** (Growth Navigator): o texto da seção detalhada é **rascunho do Claude** — validar conteúdo com o cliente (lista enviada Jun 11 2026).
- **"Cases" fora do menu**: NÃO houve exclusão de página (Cases sempre foi seção da home, `#cases`). Só saiu do navbar; seção e link do footer permanecem. Confirmar que tirar do menu era a intenção.

## Regras de conteúdo já aplicadas
- **Títulos sem ponto final** (exceto `?`/`!`); pontos internos divisores ficam. Já aplicado em todos os heroes/seções.
- **Subtítulo de hero = 16px no mobile** (token `--text-hero-sub` redefinido em `@media (max-width:767px)`).

## Limpeza de órfãos — ✅ CONCLUÍDA (Jun 3, 2026)
Varredura total feita: auditoria cruzada (refs no código × arquivos em `public/`) apagou **112 arquivos
não-referenciados** — duplicados raster (`stats-photo-*.jpg`, `avatar-*.jpg`), boilerplate Next
(`next/vercel/file/globe/window.svg`), versões substituídas (`ua-hero*`, `ctv-mockup/hero`, `ctv-feature-1..4`,
`retargeting-mockup(-b/c/d)`, `reach-lab-feature-1/4`, etc.) e assets de seções não usadas
(`team-*`, `*_neutro`, `channel-*`, `widget-*`, `ticker-logo-*`, `icons/*`, …). Pasta `public/icons/` removida (ficou vazia).
`public/` caiu de **206 → 94** imagens. Auditoria final: 0 refs quebradas, 0 órfãos. `npm run build` ✓ (18/18 páginas).
Tudo recuperável via git (estava commitado). **Não** foram tocados `aso-mockup.webp` nem `retargeting-mockup-e.webp` (ainda em uso — pendência B).

## Navegação das 5 páginas secundárias + /solucoes (Jun 3, 2026)
Contexto: o cliente pediu **tirar do menu, NÃO excluir** Native Ads, Preload, Push Ads, ASO e Mídia Programática
(decisão registrada no plano `...serene-babbage.md`, item 4). As 5 rotas seguem no ar por URL direta; o conteúdo
"oficial" delas vive na **sanfona da UA** (`/useracquisition-app#native-ads|#preload|#push-ads|#aso`).

Ajustes internos feitos nesta sessão (não pedidos no PDF — reversíveis):
- **Footer** (`components/layout/Footer.tsx`): a coluna *Soluções* foi reduzida para espelhar o navbar
  (User Acquisition, Retargeting, CTV, Apple Search Ads, IA & Dados: Reach Lab). As 5 secundárias **saíram do footer**.
- **Home — card "Ver todas as soluções"**: escondido via flag `SHOW_VIEW_ALL_CARD = false` em
  `components/sections/Strategies.tsx`. Para reativar, trocar para `true` (JSX e rota intactos). Cliente disse que
  pode pedir de volta no futuro.
- **`/solucoes`** (`app/solucoes/page.tsx` → `<Strategies showAll />`): continua existindo e lista as 10 soluções,
  com as 5 secundárias roteando para a sanfona da UA (não para as páginas standalone). Como o único acesso a ela
  era o card da home, agora ela está **órfã** (sem link de navegação) até o card voltar.

⚠️ Os **20 placeholders** dos cards de feature das 5 páginas standalone continuam lá (pendência A). Como ninguém
chega nelas pela navegação agora, virou **baixa prioridade** — só aparecem para quem acessar a URL direta.

## Comandos úteis
- Build: `npm run build`
- Limpar cache Turbopack (se CSS/preview travar): `npm run clean` e reiniciar dev (ver `AGENTS.md`).
- Preview MCP: server "appreach" porta 3000.
