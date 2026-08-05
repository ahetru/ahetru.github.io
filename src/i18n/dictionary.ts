import type { Locale } from './locales'

export interface Dictionary {
  pageTitle: string
  pageDescription: string
  nav: {
    hero: string
    about: string
    skills: string
    projects42: string
    projectsPersonal: string
    experience: string
    education: string
    contact: string
  }
  hero: {
    hello: string
    role: string
    location: string
    tagline: string
    ctaProjects: string
    ctaContact: string
  }
  sections: {
    about: { title: string; subtitle: string }
    skills: { title: string; subtitle: string }
    projects42: { title: string; subtitle: string }
    projectsPersonal: { title: string; subtitle: string }
    experience: { title: string; subtitle: string }
    education: { title: string; subtitle: string }
    contact: { title: string; subtitle: string }
  }
  about: { paragraphs: string[] }
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
  contact: {
    links: { label: string; href: string; aria: string }[]
  }
  lang: string
  footer: { langLabel: string; langList: string }
}

function build(): Record<Locale, Dictionary> {
  return {
    en: {
      pageTitle: 'Axel Hetru — Junior Backend Developer',
      pageDescription:
        'Portfolio of Axel Hetru, junior backend developer trained at 42 Barcelona. C, C++, Java, Spring Boot.',
      nav: {
        hero: 'Home',
        about: 'About',
        skills: 'Skills',
        projects42: '42 Projects',
        projectsPersonal: 'Personal',
        experience: 'Experience',
        education: 'Education',
        contact: 'Contact',
      },
      hero: {
        hello: 'Hi, I am',
        role: 'Junior Backend Developer',
        location: 'Barcelona, Spain',
        tagline:
          'Code that is correct, not just functional. Trained at 42 Barcelona, I work close to the abstractions — memory, concurrency, networking — and am currently deepening my backend toolkit with Java & Spring Boot.',
        ctaProjects: 'View my projects',
        ctaContact: 'Contact me',
      },
      sections: {
        about: { title: 'About', subtitle: 'A bit of context.' },
        skills: { title: 'Skills', subtitle: 'Technologies I work with.' },
        projects42: {
          title: '42 Barcelona',
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
        contact: {
          title: 'Contact',
          subtitle: 'Feel free to reach out.',
        },
      },
      about: {
        paragraphs: [
          'Junior backend developer with an analytical background rooted in Philosophy and Sociology — disciplines that shaped how I approach problems: rigorously, from first principles.',
          'Trained at 42 Barcelona, I have developed a genuine understanding of what happens beneath the abstractions (memory, concurrency, networking), and I care about writing code that is correct, not just functional.',
          'Currently deepening my backend toolkit with Java and Spring Boot.',
        ],
      },
      skills: {
        groups: [
          {
            title: 'Languages',
            items: ['C', 'C++', 'Python', 'Java (learning)', 'Bash', 'SQL'],
          },
          {
            title: 'Backend',
            items: ['Node.js (NestJS)', 'Spring Boot (learning)'],
          },
          {
            title: 'Databases & ORM',
            items: ['MySQL', 'Prisma ORM'],
          },
          {
            title: 'Dev Tools',
            items: ['Docker', 'Git', 'GDB', 'Valgrind'],
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
              'Diagnosed and resolved IT issues; classified incidents and escalated to specialist teams. This role is where my interest in software and technical problem-solving started, leading me to pursue formal training at 42 Barcelona.',
          },
        ],
      },
      education: {
        entries: [
          {
            role: 'Common Core — Computer Science',
            org: '42 Barcelona',
            dates: '2024 – 2026',
            description:
              'Intensive peer-to-peer engineering program. Systems programming, algorithms, Unix internals, software architecture.',
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
            dates: '2018',
            description: '',
          },
        ],
      },
      contact: {
        links: [
          {
            label: 'Email',
            href: 'mailto:axel.hetru@gmail.com',
            aria: 'Send an email to Axel Hetru',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/ahetru',
            aria: "Axel Hetru's GitHub profile",
          },
        ],
      },
      lang: 'Language',
      footer: {
        langLabel: 'Languages',
        langList: 'FR · native (C2)  ·  EN · professional (B2)  ·  ES · professional (B2)  ·  CA · intermediate (B1)',
      },
    },

    fr: {
      pageTitle: 'Axel Hetru — Développeur Backend Junior',
      pageDescription:
        'Portfolio d\'Axel Hetru, développeur backend junior formé à 42 Barcelone. C, C++, Java, Spring Boot.',
      nav: {
        hero: 'Accueil',
        about: 'À propos',
        skills: 'Compétences',
        projects42: 'Projets 42',
        projectsPersonal: 'Perso',
        experience: 'Expérience',
        education: 'Formation',
        contact: 'Contact',
      },
      hero: {
        hello: 'Bonjour, je suis',
        role: 'Junior Backend Developer',
        location: 'Barcelone, Espagne',
        tagline:
          'Code correct, pas seulement fonctionnel. Formé à 42 Barcelone, je travaille au plus près des abstractions — mémoire, concurrence, réseau — et j\'approfondis actuellement Java & Spring Boot.',
        ctaProjects: 'Voir mes projets',
        ctaContact: 'Me contacter',
      },
      sections: {
        about: { title: 'À propos', subtitle: 'Un peu de contexte.' },
        skills: { title: 'Compétences', subtitle: 'Les technologies que j\'utilise.' },
        projects42: {
          title: '42 Barcelone',
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
        contact: {
          title: 'Contact',
          subtitle: 'N\'hésitez pas à me joindre.',
        },
      },
      about: {
        paragraphs: [
          'Développeur backend junior issu d\'un parcours analytique en Philosophie et Sociologie — des disciplines qui ont façonné ma façon d\'aborder les problèmes : avec rigueur, à partir des premiers principes.',
          'Formé à 42 Barcelone, j\'ai acquis une compréhension concrète de ce qui se passe sous les abstractions : mémoire, concurrence, réseau. Je me soucie d\'écrire du code correct, pas seulement fonctionnel.',
          'J\'approfondis actuellement ma boîte à outils backend avec Java et Spring Boot.',
        ],
      },
      skills: {
        groups: [
          {
            title: 'Langages',
            items: ['C', 'C++', 'Python', 'Java (en apprentissage)', 'Bash', 'SQL'],
          },
          {
            title: 'Backend',
            items: ['Node.js (NestJS)', 'Spring Boot (en apprentissage)'],
          },
          {
            title: 'Bases de données & ORM',
            items: ['MySQL', 'Prisma ORM'],
          },
          {
            title: 'Dev Tools',
            items: ['Docker', 'Git', 'GDB', 'Valgrind'],
          },
        ],
      },
      projectsPersonal: {
        items: [
          {
            title: 'Chess Visualization Trainer',
            description:
              'Projet personnel d\'apprentissage de Java et Spring Boot via une application d\'entraînement aux échecs.',
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
              'Diagnostic et résolution d\'incidents IT ; classification et escalade vers équipes spécialisées. C\'est dans ce rôle qu\'est née mon intérêt pour le logiciel et la résolution de problèmes techniques — ce qui m\'a conduit à 42 Barcelone.',
          },
        ],
      },
      education: {
        entries: [
          {
            role: 'Common Core — Informatique',
            org: '42 Barcelone',
            dates: '2024 – 2026',
            description:
              'Programme intensif d\'ingénierie pair-à-pair. Programmation système, algorithmes, Unix interne, architecture logicielle.',
          },
          {
            role: 'Bootcamp Python & IA',
            org: 'Fundación Esplai',
            dates: '2024',
            description: 'Bootcamp sur Python et l\'intelligence artificielle.',
          },
          {
            role: 'Licence — Philosophie & Sociologie',
            org: 'Université Paris Sorbonne',
            dates: '2018',
            description: '',
          },
        ],
      },
      contact: {
        links: [
          {
            label: 'Email',
            href: 'mailto:axel.hetru@gmail.com',
            aria: 'Envoyer un email à Axel Hetru',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/ahetru',
            aria: 'Profil GitHub d\'Axel Hetru',
          },
        ],
      },
      lang: 'Langue',
      footer: {
        langLabel: 'Langues',
        langList: 'FR · natif (C2)  ·  EN · professionnel (B2)  ·  ES · professionnel (B2)  ·  CA · intermédiaire (B1)',
      },
    },

    es: {
      pageTitle: 'Axel Hetru — Desarrollador Backend Junior',
      pageDescription:
        'Portfolio de Axel Hetru, desarrollador backend junior formado en 42 Barcelona. C, C++, Java, Spring Boot.',
      nav: {
        hero: 'Inicio',
        about: 'Sobre mí',
        skills: 'Habilidades',
        projects42: 'Proyectos 42',
        projectsPersonal: 'Personal',
        experience: 'Experiencia',
        education: 'Formación',
        contact: 'Contacto',
      },
      hero: {
        hello: 'Hola, soy',
        role: 'Junior Backend Developer',
        location: 'Barcelona, España',
        tagline:
          'Código correcto, no solo funcional. Formado en 42 Barcelona, trabajo cerca de las abstracciones — memoria, concurrencia, red — y actualmente profundizo en Java & Spring Boot.',
        ctaProjects: 'Ver mis proyectos',
        ctaContact: 'Contactarme',
      },
      sections: {
        about: { title: 'Sobre mí', subtitle: 'Un poco de contexto.' },
        skills: { title: 'Habilidades', subtitle: 'Tecnologías con las que trabajo.' },
        projects42: {
          title: '42 Barcelona',
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
        contact: {
          title: 'Contacto',
          subtitle: 'No dudes en contactarme.',
        },
      },
      about: {
        paragraphs: [
          'Desarrollador backend junior con una formación analítica en Filosofía y Sociología — disciplinas que moldearon mi forma de abordar problemas: con rigor, desde los primeros principios.',
          'Formado en 42 Barcelona, he desarrollado una comprensión real de lo que ocurre bajo las abstracciones (memoria, concurrencia, red), y me preocupo por escribir código correcto, no solo funcional.',
          'Actualmente profundizando mi stack backend con Java y Spring Boot.',
        ],
      },
      skills: {
        groups: [
          {
            title: 'Lenguajes',
            items: ['C', 'C++', 'Python', 'Java (en aprendizaje)', 'Bash', 'SQL'],
          },
          {
            title: 'Backend',
            items: ['Node.js (NestJS)', 'Spring Boot (en aprendizaje)'],
          },
          {
            title: 'Bases de datos & ORM',
            items: ['MySQL', 'Prisma ORM'],
          },
          {
            title: 'Dev Tools',
            items: ['Docker', 'Git', 'GDB', 'Valgrind'],
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
              'Diagnóstico y resolución de incidencias de TI; clasificación y escalamiento a equipos especializados. En este rol nació mi interés por el software y la resolución de problemas técnicos, lo que me llevó a 42 Barcelona.',
          },
        ],
      },
      education: {
        entries: [
          {
            role: 'Common Core — Informática',
            org: '42 Barcelona',
            dates: '2024 – 2026',
            description:
              'Programa intensivo de ingeniería entre pares. Programación de sistemas, algoritmos, interior de Unix, arquitectura de software.',
          },
          {
            role: 'Bootcamp Python & IA',
            org: 'Fundación Esplai',
            dates: '2024',
            description: 'Bootcamp sobre Python e inteligencia artificial.',
          },
          {
            role: 'Licenciatura — Filosofía y Sociología',
            org: 'Université Paris Sorbonne',
            dates: '2018',
            description: '',
          },
        ],
      },
      contact: {
        links: [
          {
            label: 'Email',
            href: 'mailto:axel.hetru@gmail.com',
            aria: 'Enviar un email a Axel Hetru',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/ahetru',
            aria: 'Perfil GitHub de Axel Hetru',
          },
        ],
      },
      lang: 'Idioma',
      footer: {
        langLabel: 'Idiomas',
        langList: 'FR · nativo (C2)  ·  EN · profesional (B2)  ·  ES · profesional (B2)  ·  CA · intermedio (B1)',
      },
    },
  }
}

export const DICT: Record<Locale, Dictionary> = build()
