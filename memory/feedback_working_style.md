---
name: Estilo de trabalho — Yago
description: Como o usuário prefere colaborar, dar feedback e revisar o trabalho
type: feedback
originSessionId: 03d1a28c-b368-4626-8f81-68f144884f28
---
Trabalha visualmente e de forma iterativa — ajustes finos de pixel, kerning, padding, cores.

**Why:** Ele é designer, pensa em termos visuais e usa o inspetor do browser para passar dimensões exatas.

**How to apply:**
- Aceitar referências de outros sites como especificação (ele manda screenshot ou URL)
- Quando ele manda dados do inspetor (ex: padding 6px 6px 6px 8px, height 40px), aplicar exatamente esses valores
- Verificar sempre com screenshot do preview após cada mudança
- Não acumular várias mudanças de uma vez — prefere ciclos curtos de editar → ver → ajustar

---

Às vezes nega tool calls sem querer e pede pra refazer.

**Why:** Interface de aprovação de ferramentas — clique acidental.

**How to apply:** Quando ele disser "neguei sem querer", reexecutar a ação imediatamente sem questionamento.

---

Usa o Claude Code para desenvolvimento front-end com preview em tempo real no browser (localhost:3000).

**Why:** Prefere ver o resultado real no browser, não só no preview do Claude — costuma comparar os dois.

**How to apply:** Sempre tirar screenshot do preview para confirmar, mas lembrar que o browser dele pode estar em viewport diferente (desktop ~1440px vs preview ~800px).
