# Axel Hetru — Portfolio

Static portfolio website (React + Vite + TypeScript) for a junior software
engineer, deployed to GitHub Pages from the `main` branch.

## Commands

- `pnpm dev` — start the Vite dev server (http://localhost:5173/)
- `pnpm build` — type-check and produce a production build in `dist/`
- `pnpm test` — run the Vitest test suite once
- `pnpm preview` — preview the production build locally
- `pnpm lint` — run oxlint

## Deployment

GitHub Pages deployment is automated by the workflow at
`.github/workflows/deploy.yml`: on every push to `main` it installs
dependencies with `pnpm`, builds `dist/`, and publishes it via
`actions/deploy-pages@v4`.