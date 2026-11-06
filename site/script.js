// Remember the language the visitor picks, and keep their place on the page
// when switching between /en/ and /fr/.
document.querySelectorAll('[data-lang]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const lang = link.dataset.lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // Storage can be unavailable (private mode, blocked cookies): not critical.
    }
    if (location.hash) {
      event.preventDefault()
      location.href = link.getAttribute('href') + location.hash
    }
  })
})

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear()
})
