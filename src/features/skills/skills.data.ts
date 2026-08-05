export interface SkillGroup {
  title: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
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
]