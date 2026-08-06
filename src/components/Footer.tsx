import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© {year} Axel Hetru</p>
        <div className="footer__links">
          <a
            href="https://github.com/ahetru"
            className="footer__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/axel-hetru-2580b02ab/"
            className="footer__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
