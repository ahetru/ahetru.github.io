import { Section } from '@/components/Section'
import { useDict } from '@/i18n/useDict'
import './Contact.css'

export function Contact() {
  const t = useDict()

  return (
    <Section
      id="contact"
      title={t.sections.contact.title}
      subtitle={t.sections.contact.subtitle}
    >
      <ul className="contact__list">
        {t.contact.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="contact__link"
              aria-label={link.aria}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
