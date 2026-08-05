export interface ExperienceEntry {
  role: string
  org: string
  dates: string
  description: string
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    role: 'Développeur frontend (stage)',
    org: 'Studio web',
    dates: '2024 — 2025',
    description:
      "Construction d'interfaces React accessibles et mise en place d'une bibliothèque de composants internes.",
  },
  {
    role: 'Projet académique — Plateforme de jeux',
    org: 'École',
    dates: '2023 — 2024',
    description:
      "Conception et développement d'une application web full-stack en équipe, de l'API REST à l'interface.",
  },
  {
    role: 'Projet personnel — Outils open source',
    org: 'Bénévolat',
    dates: '2022 — aujourd\u2019hui',
    description:
      'Maintenance de petits utilitaires en TypeScript et contributions à des projets open source.',
  },
]