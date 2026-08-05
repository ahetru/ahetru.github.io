import { useDict } from '@/i18n/useDict'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()
  const t = useDict()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© {year} Axel Hetru</p>
        <p className="footer__lang">
          {t.footer.langLabel}: {t.footer.langList}
        </p>
      </div>
    </footer>
  )
}
