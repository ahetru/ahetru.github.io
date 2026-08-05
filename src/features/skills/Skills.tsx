import { Section } from '@/components/Section'
import { SKILL_GROUPS } from './skills.data'
import './Skills.css'

export function Skills() {
  return (
    <Section id="skills" title="Compétences" subtitle="Les technologies que j'utilise au quotidien.">
      <div className="skills">
        {SKILL_GROUPS.map((group) => (
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