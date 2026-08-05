import { Section } from '@/components/Section'
import { useDict } from '@/i18n/useDict'
import './Skills.css'

export function Skills() {
  const t = useDict()

  return (
    <Section id="skills" title={t.sections.skills.title} subtitle={t.sections.skills.subtitle}>
      <div className="skills">
        {t.skills.groups.map((group) => (
          <div key={group.title} className="skills__group">
            <h3 className="skills__group-title">{group.title}</h3>
            <ul className="skills__chips">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
