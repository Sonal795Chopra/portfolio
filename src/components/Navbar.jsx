import { useState, useEffect } from 'react'

const links = [
  { label: 'work', href: '#projects' },
  { label: 'agents', href: '#agents' },
  { label: 'resume', href: '#resume' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'navbar-blur bg-paper/80 border-b border-ink/10 py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-caveat text-2xl font-semibold tracking-tight hover:opacity-70 transition-opacity"
        >
          sc.
        </a>
        <ul className="flex gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-caveat text-xl font-semibold hover:opacity-60 transition-opacity relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-ink scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
