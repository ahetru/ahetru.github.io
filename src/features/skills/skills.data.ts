export interface SkillGroup {
  title: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Langages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'Frameworks & libs',
    items: ['React', 'Vite', 'Node.js', 'Spring Boot', 'Vitest'],
  },
  {
    title: 'Outils',
    items: ['Git', 'Docker', 'pnpm', 'GitHub Actions', 'Linux'],
  },
]