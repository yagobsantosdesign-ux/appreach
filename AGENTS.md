<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Dev server (Turbopack) — gotchas conhecidos

Esta é uma versão pré-release do Next 16 (Turbopack). O dev server tem dois problemas recorrentes — **ambos resolvidos limpando o cache `.next`**:

1. **Reload infinito / "reiniciando toda hora":** o Turbopack panica em loop com `FATAL: Failed to write app endpoint /page — Next.js package not found` (subsistema de HMR). A página até serve `200`, mas o navegador recarrega sem parar. Causa: cache `.next` corrompido. O `next build` (produção) NUNCA é afetado.
2. **Mudança em CSS não aparece no preview** (ex.: editar `globals.css` e o valor antigo persistir): o Turbopack serve o CSS compilado do cache `.next` e não recompila — nem com reload, nem reiniciando o dev. O arquivo-fonte está certo; é só o cache.

**Correção (para os dois):**
```powershell
# pare o dev server, então:
npm run clean   # = node -e "require('fs').rmSync('.next',{recursive:true,force:true})"
# reinicie o dev
```
Sempre que uma edição não refletir no preview, suspeite do cache `.next` antes de procurar bug no código.
