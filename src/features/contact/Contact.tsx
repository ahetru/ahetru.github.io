import { Section } from '@/components/Section'
import { CONTACT } from './contact.data'
import './Contact.css'

export function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="N'hésitez pas à me joindre.">
      <ul className="contact__list">
        {CONTACT.links.map((link) => (
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