import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© {year} Axel Hetru</p>
      </div>
    </footer>
  )
}
