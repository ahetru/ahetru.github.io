export interface ContactLink {
  label: string
  href: string
  aria: string
}

export interface ContactData {
  links: ContactLink[]
}

export const CONTACT: ContactData = {
  links: [
    {
      label: 'Email',
      href: 'mailto:axel.a.hetru@gmail.com',
      aria: 'Envoyer un email à Axel Hetru',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/ahetru',
      aria: "Profil GitHub d'Axel Hetru",
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      aria: "Profil LinkedIn d'Axel Hetru",
    },
  ],
}