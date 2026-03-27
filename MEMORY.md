# Project memory

Persistent context for collaborators and AI assistants working in this repo. Update when editorial rules or structure change.

## Purpose

- **Primary:** LinkedIn posts in **French**, ~1 per week, direct tone, no corporate fluff.
- **Secondary:** Signal **stack**, **ownership**, and **impact** for recruiter-visible credibility (named tech, first-person action verbs, concrete outcomes).

## Source of truth

- **Editorial rules, structure, hashtags, and publication log:** `PROMPT_TEMPLATE.md`
- **Post drafts:** `post_*.md` (numbered prefix + short slug)

## Naming

- Posts: `post_<number>_<short_slug>.md` (e.g. `post_001_pencil_mcp.md`)
- After publishing, add a row to the log table in `PROMPT_TEMPLATE.md`

## Theme rotation (reference)

MCP → LLM → RAG → Agents → No-code / IA tools (cycle in template table).

## Code & tooling

- **`maison/`:** Vite 7, React 19, TypeScript. Run from `maison/` with `npm run dev`.
- **Root:** `node_modules` and build outputs are gitignored; run `npm install` inside `maison/` after clone.

## Git

- Default branch: `main`
- Remote may use HTTPS (`https://github.com/hillzeealex/linkedin-posts.git`) if SSH is tied to another GitHub account.

## Do not

- Commit secrets, API keys, or `.env` files.
- Bulk-commit `node_modules` or `dist/`.

## Last reviewed

- 2026-03-27 — README and MEMORY added
