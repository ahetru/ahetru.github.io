export interface Project {
  marker: string
  title: string
  description: string
  tags: string[]
  github: string
  demo?: string
}

export const PROJECTS: Project[] = [
  {
    marker: '%PROJET_1%',
    title: 'Chess Visualizer',
    description:
      "Application web d'entraînement à la visualisation des positions d'échecs, sans s'appuyer sur l'affichage permanent du plateau.",
    tags: ['React', 'TypeScript', 'Vite'],
    github: 'https://github.com/ahetru/',
  },
  {
    marker: '%PROJET_2%',
    title: 'CLI Notes',
    description:
      'Outil en ligne de commande pour prendre et retrouver rapidement des notes Markdown depuis le terminal.',
    tags: ['TypeScript', 'Node.js', 'CLI'],
    github: 'https://github.com/ahetru/',
  },
  {
    marker: '%PROJET_3%',
    title: 'Weather Dashboard',
    description:
      "Tableau de bord météo qui agrège plusieurs sources et affiche des prévisions lisibles, avec un accent sur la performance.",
    tags: ['React', 'TypeScript', 'API'],
    github: 'https://github.com/ahetru/',
    demo: 'https://example.com/',
  },
]