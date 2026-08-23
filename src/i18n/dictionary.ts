import type { Locale } from './locales'

export interface Dictionary {
  pageTitle: string
  pageDescription: string
  nav: {
    hero: string
    skills: string
    projects42: string
    projectsPersonal: string
    experience: string
    education: string
  }
  hero: {
    role: string
    location: string
    paragraphs: string[]
    ctaProjects: string
  }
  sections: {
    skills: { title: string; subtitle: string }
    projects42: { title: string; subtitle: string }
    projectsPersonal: { title: string; subtitle: string }
    experience: { title: string; subtitle: string }
    education: { title: string; subtitle: string }
  }
  skills: { groups: { title: string; items: string[] }[] }
  projectsPersonal: {
    items: { title: string; description: string; tags: string[]; github: string }[]
  }
  experience: {
    entries: { role: string; org: string; dates: string; description: string }[]
  }
  education: {
    entries: { role: string; org: string; dates: string; description: string }[]
  }
  projects42Descs: Record<string, string>
}

function build(): Record<Locale, Dictionary> {
  return {
    en: {
      pageTitle: 'Axel Hetru — Junior Developer',
      pageDescription:
        'Portfolio of Axel Hetru, junior software developer focused on backend systems and trained at 42 Barcelona.',
      nav: {
        hero: 'About',
        skills: 'Skills',
        projects42: '42 Projects',
        projectsPersonal: 'Personal',
        experience: 'Experience',
        education: 'Education',
      },
      hero: {
        role: 'Junior Developer',
        location: 'Barcelona, Spain',
        paragraphs: [
          'Junior software developer with an analytical background in Philosophy and Sociology, trained at 42 Barcelona.',
          'I understand what happens beneath the abstractions — memory, concurrency, networking — giving me a solid foundation across the stack and the adaptability to pick up new languages fast.',
          'I use AI coding agents (GitHub Copilot, Claude Code) to speed up my workflow, always reviewing generated code for correctness.',
        ],
        ctaProjects: 'View my projects',
      },
      sections: {
        skills: { title: 'Skills', subtitle: 'Technologies I work with.' },
        projects42: {
          title: '42 School',
          subtitle: 'My path through the Common Core.',
        },
        projectsPersonal: {
          title: 'Personal Projects',
          subtitle: 'What I am working on.',
        },
        experience: {
          title: 'Experience',
          subtitle: 'My professional background.',
        },
        education: {
          title: 'Education',
          subtitle: 'My academic path.',
        },
      },
      skills: {
        groups: [
          {
            title: 'Languages',
            items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'Bash', 'SQL'],
          },
          {
            title: 'Frontend',
            items: ['React'],
          },
          {
            title: 'Backend',
            items: ['Node.js (NestJS)', 'Spring Boot'],
          },
          {
            title: 'Databases & ORM',
            items: ['MySQL', 'Prisma ORM'],
          },
        ],
      },
      projectsPersonal: {
        items: [
          {
            title: 'Portfolio',
            description:
              'Personal website built with React, TypeScript, and Vite.',
            tags: ['React', 'TypeScript', 'Vite'],
            github: 'https://github.com/ahetru/ahetru.github.io',
          },
          {
            title: 'Chess Visualization Trainer',
            description:
              'Personal project to learn Java and Spring Boot through a chess training application.',
            tags: ['Java', 'Spring Boot'],
            github: 'https://github.com/ahetru/chess-visualization-trainer',
          },
        ],
      },
      experience: {
        entries: [
          {
            role: 'Technical Support Analyst',
            org: 'Computacenter',
            dates: '2022 – 2023',
            description:
              'Diagnosed and resolved IT issues; classified incidents and escalated to specialist teams. This role is where my interest in software and technical problem-solving started, leading me to pursue formal training at 42 School.',
          },
        ],
      },
      education: {
        entries: [
          {
            role: 'Common Core — Programming',
            org: '42 School',
            dates: '2024 – 2026',
            description:
              'Project-based, peer-to-peer software engineering program focused on the fundamentals of computer science, systems programming, and software engineering.',
          },
          {
            role: 'Python & AI Bootcamp',
            org: 'Fundación Esplai',
            dates: '2024',
            description: 'Bootcamp on Python and artificial intelligence.',
          },
          {
            role: "Bachelor's Degree — Philosophy & Sociology",
            org: 'Université Paris Sorbonne',
            dates: '2015 – 2018',
            description: '',
          },
          {
            role: "Bachelor's Degree — Psychology",
            org: 'Université Paris Descartes',
            dates: '2012 – 2015',
            description: '',
          },
        ],
      },
      projects42Descs: {
        libft: 'Custom C library of utility functions',
        ft_printf: 'Recreation of printf with variadic handling',
        get_next_line: 'Line-by-line reading from a file descriptor',
        born_to_be_root: 'Secure Linux server configuration',
        push_swap: 'Optimized sorting algorithm with two stacks',
        fractol: 'Fractal exploration using minilibX',
        pipex: 'Stream redirection between commands via pipes',
        philosophers: 'Philosophers simulation with threads and mutexes',
        minishell: 'Full Unix shell with pipes and redirections',
        cub3d: 'Raycasting engine in the style of Wolfenstein 3D',
        cppmodules: 'Introduction to C++ and OOP',
        ft_irc: 'Multi-client non-blocking IRC server (RFC 1459)',
        ft_transcendence: 'Backend & infra for an online chess game',
      },
    },

    fr: {
      pageTitle: 'Axel Hetru — Développeur Backend Junior',
      pageDescription:
        "Portfolio d'Axel Hetru, développeur logiciel junior orienté systèmes backend et formé à 42 Barcelona.",
      nav: {
        hero: 'À propos',
        skills: 'Compétences',
        projects42: 'Projets 42',
        projectsPersonal: 'Perso',
        experience: 'Expérience',
        education: 'Formation',
      },
      hero: {
        role: 'Junior Developer',
        location: 'Barcelone, Espagne',
        paragraphs: [
          "Développeur logiciel junior avec un parcours analytique en Philosophie et Sociologie, formé à 42 Barcelona.",
          "Je comprends ce qui se passe sous les abstractions — mémoire, concurrence, réseau — ce qui me donne une base solide sur toute la stack et une forte capacité d'adaptation à de nouveaux langages.",
          "J'utilise des agents de code IA (GitHub Copilot, Claude Code) pour accélérer mon workflow, tout en relisant systématiquement le code généré pour garantir sa correction.",
        ],
        ctaProjects: 'Voir mes projets',
      },
      sections: {
        skills: { title: 'Compétences', subtitle: "Les technologies que j'utilise." },
        projects42: {
          title: '42 School',
          subtitle: 'Mon parcours à travers le tronc commun.',
        },
        projectsPersonal: {
          title: 'Projets Personnels',
          subtitle: 'Ce sur quoi je travaille.',
        },
        experience: {
          title: 'Expérience',
          subtitle: 'Mon parcours professionnel.',
        },
        education: {
          title: 'Formation',
          subtitle: 'Mon parcours académique.',
        },
      },
      skills: {
        groups: [
          {
            title: 'Langages',
            items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'Bash', 'SQL'],
          },
          {
            title: 'Frontend',
            items: ['React'],
          },
          {
            title: 'Backend',
            items: ['Node.js (NestJS)', 'Spring Boot'],
          },
          {
            title: 'Bases de données & ORM',
            items: ['MySQL', 'Prisma ORM'],
          },
        ],
      },
      projectsPersonal: {
        items: [
          {
            title: 'Portfolio',
            description:
              'Site personnel construit avec React, TypeScript et Vite.',
            tags: ['React', 'TypeScript', 'Vite'],
            github: 'https://github.com/ahetru/ahetru.github.io',
          },
          {
            title: 'Chess Visualization Trainer',
            description:
              "Projet personnel d'apprentissage de Java et Spring Boot via une application d'entraînement aux échecs.",
            tags: ['Java', 'Spring Boot'],
            github: 'https://github.com/ahetru/chess-visualization-trainer',
          },
        ],
      },
      experience: {
        entries: [
          {
            role: 'Technical Support Analyst',
            org: 'Computacenter',
            dates: '2022 – 2023',
            description:
              "Diagnostic et résolution d'incidents IT ; classification et escalade vers équipes spécialisées. C'est dans ce rôle qu'est née mon intérêt pour le logiciel et la résolution de problèmes techniques — ce qui m'a conduit à 42 School.",
          },
        ],
      },
      education: {
        entries: [
          {
            role: 'Common Core — Programmation',
            org: '42 School',
            dates: '2024 – 2026',
            description:
              "Programme pair-à-pair basé sur des projets, axé sur les fondamentaux de l'informatique, la programmation système et l'architecture logicielle.",
          },
          {
            role: 'Bootcamp Python & IA',
            org: 'Fundación Esplai',
            dates: '2024',
            description: "Bootcamp sur Python et l'intelligence artificielle.",
          },
          {
            role: 'Licence — Philosophie & Sociologie',
            org: 'Université Paris Sorbonne',
            dates: '2015 – 2018',
            description: '',
          },
          {
            role: 'Licence — Psychologie',
            org: 'Université Paris Descartes',
            dates: '2012 – 2015',
            description: '',
          },
        ],
      },
      projects42Descs: {
        libft: 'Bibliothèque C de fonctions utilitaires',
        ft_printf: 'Recréation de printf avec gestion variadique',
        get_next_line: 'Lecture ligne par ligne depuis un file descriptor',
        born_to_be_root: "Configuration d'un serveur Linux sécurisé",
        push_swap: 'Algorithme de tri optimisé avec deux piles',
        fractol: 'Exploration de fractales avec la minilibX',
        pipex: 'Redirection de flux entre commandes via pipes',
        philosophers: 'Simulation de philosophes avec threads et mutexes',
        minishell: 'Shell Unix complet avec pipes et redirections',
        cub3d: 'Moteur de raycasting façon Wolfenstein 3D',
        cppmodules: 'Introduction au C++ et la POO',
        ft_irc: 'Serveur IRC multi-clients non-bloquant (RFC 1459)',
        ft_transcendence: "Backend & infra d'un jeu d'échecs en ligne",
      },
    },

    es: {
      pageTitle: 'Axel Hetru — Desarrollador Backend Junior',
      pageDescription:
        'Portfolio de Axel Hetru, desarrollador de software junior orientado a sistemas backend y formado en 42 Barcelona.',
      nav: {
        hero: 'Sobre mí',
        skills: 'Habilidades',
        projects42: 'Proyectos 42',
        projectsPersonal: 'Personal',
        experience: 'Experiencia',
        education: 'Formación',
      },
      hero: {
        role: 'Junior Developer',
        location: 'Barcelona, España',
        paragraphs: [
          'Desarrollador de software junior con formación analítica en Filosofía y Sociología, formado en 42 Barcelona.',
          'Entiendo lo que sucede por debajo de las abstracciones — memoria, concurrencia, redes — lo que me da una base sólida en toda la stack y la capacidad de adaptarme rápido a nuevos lenguajes.',
          'Uso agentes de código con IA (GitHub Copilot, Claude Code) para acelerar mi flujo de trabajo, revisando siempre el código generado para asegurar su corrección.',
        ],
        ctaProjects: 'Ver mis proyectos',
      },
      sections: {
        skills: { title: 'Habilidades', subtitle: 'Tecnologías con las que trabajo.' },
        projects42: {
          title: '42 School',
          subtitle: 'Mi recorrido por el Common Core.',
        },
        projectsPersonal: {
          title: 'Proyectos Personales',
          subtitle: 'En lo que estoy trabajando.',
        },
        experience: {
          title: 'Experiencia',
          subtitle: 'Mi trayectoria profesional.',
        },
        education: {
          title: 'Formación',
          subtitle: 'Mi trayectoria académica.',
        },
      },
      skills: {
        groups: [
          {
            title: 'Lenguajes',
            items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'Bash', 'SQL'],
          },
          {
            title: 'Frontend',
            items: ['React'],
          },
          {
            title: 'Backend',
            items: ['Node.js (NestJS)', 'Spring Boot'],
          },
          {
            title: 'Bases de datos & ORM',
            items: ['MySQL', 'Prisma ORM'],
          },
        ],
      },
      projectsPersonal: {
        items: [
          {
            title: 'Portfolio',
            description:
              'Sitio personal construido con React, TypeScript y Vite.',
            tags: ['React', 'TypeScript', 'Vite'],
            github: 'https://github.com/ahetru/ahetru.github.io',
          },
          {
            title: 'Chess Visualization Trainer',
            description:
              'Proyecto personal para aprender Java y Spring Boot a través de una aplicación de entrenamiento de ajedrez.',
            tags: ['Java', 'Spring Boot'],
            github: 'https://github.com/ahetru/chess-visualization-trainer',
          },
        ],
      },
      experience: {
        entries: [
          {
            role: 'Technical Support Analyst',
            org: 'Computacenter',
            dates: '2022 – 2023',
            description:
              'Diagnóstico y resolución de incidencias de TI; clasificación y escalamiento a equipos especializados. En este rol nació mi interés por el software y la resolución de problemas técnicos, lo que me llevó a 42 School.',
          },
        ],
      },
      education: {
        entries: [
          {
            role: 'Common Core — Programación',
            org: '42 School',
            dates: '2024 – 2026',
            description:
              'Programa de ingeniería de software entre pares basado en proyectos, enfocado en los fundamentos de la informática, la programación de sistemas y la ingeniería de software.',
          },
          {
            role: 'Bootcamp Python & IA',
            org: 'Fundación Esplai',
            dates: '2024',
            description: 'Bootcamp sobre Python e inteligencia artificial.',
          },
          {
            role: 'Grado universitario — Filosofía y Sociología',
            org: 'Université Paris Sorbonne',
            dates: '2015 – 2018',
            description: '',
          },
          {
            role: 'Grado universitario — Psicología',
            org: 'Université Paris Descartes',
            dates: '2012 – 2015',
            description: '',
          },
        ],
      },
      projects42Descs: {
        libft: 'Biblioteca C de funciones utilitarias',
        ft_printf: 'Recreación de printf con manejo variádico',
        get_next_line: 'Lectura línea por línea desde un file descriptor',
        born_to_be_root: 'Configuración de un servidor Linux seguro',
        push_swap: 'Algoritmo de ordenación optimizado con dos pilas',
        fractol: 'Exploración de fractales con minilibX',
        pipex: 'Redirección de flujos entre comandos mediante pipes',
        philosophers: 'Simulación de filósofos con hilos y mutexes',
        minishell: 'Shell Unix completo con pipes y redirecciones',
        cub3d: 'Motor de raycasting al estilo Wolfenstein 3D',
        cppmodules: 'Introducción a C++ y POO',
        ft_irc: 'Servidor IRC multi-cliente no bloqueante (RFC 1459)',
        ft_transcendence: 'Backend e infraestructura para ajedrez en línea',
      },
    },
  }
}

export const DICT: Record<Locale, Dictionary> = build()
