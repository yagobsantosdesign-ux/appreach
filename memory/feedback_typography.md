---
name: Tipografia — Quebras de linha naturais
description: Como tratar quebras de linha em títulos e textos
type: feedback
originSessionId: 22437d4d-40d7-4c23-b661-d390c75825e3
---
Sempre que possível, usar quebras de texto naturais para deixar o título "bonito" — sem palavras sozinhas em uma linha (widow/orphan). A "caixa de texto" deve ser harmônica: linhas bem proporcionadas, geralmente mais longas no topo e mais curtas embaixo.

**Why:** Yago é designer e presta atenção na forma visual do texto, não só no conteúdo.

**How to apply:**
- Nunca usar `<br>` para quebrar títulos — ajustar `maxWidth` do elemento para forçar a quebra natural no ponto certo
- Avaliar se a quebra cria linhas bem equilibradas (ex: "A estratégia certa para / cada etapa do funil" é melhor que "A estratégia certa para cada / etapa do funil")
- Verificar se nenhuma palavra ficou sozinha na última linha

## Sem travessão (—)

**Regra permanente:** nunca usar travessão (`—`) em nenhum texto visível do site, nem em novos conteúdos criados.

**Substituições:**
- ` — ` entre frases → `, ` (vírgula)
- ` — ` introduzindo conclusão → `. ` (ponto, com próxima palavra maiúscula)
- `Palavra — Subtítulo` em labels/badges → `Palavra: Subtítulo` (dois-pontos)
- `Passo N — Tag` → `Passo N: Tag`
