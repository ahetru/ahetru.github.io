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
        'Portfolio of Axel Hetru, junior backend developer trained at 42 School. C, C++, Java, Spring Boot.',
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
          'I enjoy solving problems and building software that is both practical and well designed.',
          'Coming from a background in Philosophy and Sociology, I naturally approach challenges by breaking them down and looking for clear, robust solutions. At 42 School, I developed a solid computer science foundation that allows me to work confidently across different areas of software development, from application logic to system fundamentals.',
          "As a junior developer, I'm driven by curiosity more than by a specific stack. I like learning new technologies, collaborating with others, and turning ideas into reliable, maintainable software.",
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
        "Portfolio d'Axel Hetru, développeur backend junior formé à 42 School. C, C++, Java, Spring Boot.",
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
          "J'aime résoudre des problèmes et construire des logiciels à la fois pratiques et bien conçus.",
          "Issu d'une formation en Philosophie et Sociologie, j'aborde naturellement les défis en les décomposant et en cherchant des solutions claires et robustes. À 42 School, j'ai acquis de solides bases en informatique qui me permettent de travailler avec confiance sur différents aspects du développement logiciel, de la logique applicative aux fondamentaux système.",
          "En tant que développeur junior, je suis davantage guidé par la curiosité que par une stack spécifique. J'aime apprendre de nouvelles technologies, collaborer avec les autres et transformer des idées en logiciels fiables et maintenables.",
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
        'Portfolio de Axel Hetru, desarrollador backend junior formado en 42 School. C, C++, Java, Spring Boot.',
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
          'Disfruto resolviendo problemas y construyendo software que sea práctico y bien diseñado.',
          'Con una formación en Filosofía y Sociología, abordo los desafíos descomponiéndolos y buscando soluciones claras y robustas. En 42 School, desarrollé una base sólida en informática que me permite trabajar con confianza en distintas áreas del desarrollo de software, desde la lógica de aplicación hasta los fundamentos del sistema.',
          'Como desarrollador junior, me mueve más la curiosidad que un stack específico. Me gusta aprender nuevas tecnologías, colaborar con otros y convertir ideas en software fiable y fácil de mantener.',
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
