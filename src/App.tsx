import { LocaleProvider } from '@/i18n/LocaleProvider'
import { Layout } from '@/components/Layout'
import { Hero } from '@/features/hero/Hero'
import { Skills } from '@/features/skills/Skills'
import { Projects42 } from '@/features/projects42/Projects42'
import { PersonalProjects } from '@/features/projects-personal/PersonalProjects'
import { Experience } from '@/features/experience/Experience'
import { Education } from '@/features/education/Education'

export default function App() {
  return (
    <LocaleProvider>
      <Layout>
        <Hero />
        <Skills />
        <Projects42 />
        <PersonalProjects />
        <Experience />
        <Education />
      </Layout>
    </LocaleProvider>
  )
}
