# linkedin-posts

Drafts, templates, and assets for a weekly LinkedIn presence focused on AI tooling, MCP, and full-stack development.

## Contents

| Path | Purpose |
|------|---------|
| [`PROMPT_TEMPLATE.md`](PROMPT_TEMPLATE.md) | Editorial identity, post structure, style rules, theme rotation, and publication log |
| `post_*.md` | Individual post drafts (hook, body, hashtags) |
| [`maison/`](maison/) | Vite + React + TypeScript demo app (optional visual support for posts) |
| `maison.tsx` | Standalone React snippet / reference |
| `linkedin-posts.code-workspace` | VS Code / Cursor multi-root workspace |

## Workflow

1. Copy ideas from **Idées en attente** or pick a theme from the rotation table in `PROMPT_TEMPLATE.md`.
2. Draft in a new `post_NNN_topic.md` or edit an existing file following the **Structure du post** block in the template.
3. Update the **Log des posts publiés** table when something goes live.

## Demo app (`maison/`)

```bash
cd maison
npm install
npm run dev
```

Build: `npm run build` — output in `maison/dist/` (not committed).

## Repository

Remote: [github.com/hillzeealex/linkedin-posts](https://github.com/hillzeealex/linkedin-posts)
