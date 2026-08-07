# Portfolio — Project-specific rules

## Project context

Static portfolio website for a junior software engineer, deployed on GitHub
Pages via a user repo (`ahetru.github.io` → served at the URL root
`https://ahetru.github.io/`).

This is **not** the InnerChess project. Do **not** assume InnerChess context,
Docker Compose, Spring Boot backend, mono-folder layout, or any
`~/projects/agents/innerchess/` workspace.

### Tech stack

- **Frontend only**: Vite + React + TypeScript
- **Package manager**: pnpm
- **Animations**: CSS pure (transitions + keyframes), no framer-motion
- **Icons**: `lucide-react` (ISC license) when useful
- **No router** (single page, anchor navigation + smooth scroll)
- **No global state, no data fetching** (no Zustand / TanStack Query)
- **No GPL dependency** — only MIT / BSD / ISC

## Skills

| Role | Domain skill |
|------|-------------|
| Frontend | `react-frontend` |

The project's explicit rules (no TanStack Query, no Zustand, no Tailwind,
no router) **override** any conflicting guidance from the skill.

### Repo & deployment

- Local repo already initialized: `/home/drovitch/projects/portfolio/`
- Remote `origin` → `git@github.com:ahetru/ahetru.github.io.git`
  (already configured, **do not** re-run `git init` or change the remote)
- `base: '/'` in Vite config (user repo served at the URL root)
- GitHub Actions workflow `.github/workflows/deploy.yml` builds `dist/` and
  deploys via `actions/deploy-pages@v4`. Prefill it but the user handles push.

### Agent scope

This project uses the global `frontend` agent. No `infra` or `backend` agent
is needed — the frontend agent handles both scaffolding and feature
implementation.

## Layout convention (feature-based)

```
src/
  main.tsx · App.tsx
  styles/ { reset.css, theme.css }        # CSS variables tokens, no Tailwind
  features/
    <feature>/ { Feature.tsx, *.data.ts } # one feature folder per section
  components/ { Layout, Header, Footer, Section }
  hooks/ { useScrollSpy, useTheme }
```

- Token-based theming via `data-theme="dark|light"` on `<html>`, no CSS-in-JS
- Content (projects, experience, skills) isolated in `*.data.ts` files so it
  can be edited later without touching components
- All UI text in French, placeholders accepted (no i18n / language switch)

## Project-specific rules

- Functional components, modern hooks, strict TypeScript — never `any`
- One component = one file (private sub-components ok)
- Props typed with `interface`, exported if the component is public
- No business logic in components — extract to hooks or helpers
- Accessibility: labels, ARIA roles, keyboard navigation, AA contrast
- `prefers-reduced-motion` disables all animations
- Anti-FOUC: inline script in `<head>` of `index.html` sets `data-theme`
  before first paint, reading `localStorage.theme` then `prefers-color-scheme`

## Conventions

- Commits: follow `git-workflow` skill format. Ask before committing.
- Tests: Vitest + React Testing Library, test behavior not implementation
- Skills from `writing-good-tests`: prefer a few high-value behavioral tests,
  no snapshots, no style-only tests
- Chat content in French; all written artifacts in English
