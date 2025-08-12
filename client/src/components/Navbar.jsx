import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'training', label: 'Training' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  function goTo(id) {
    navigate('/#' + id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <header className="bg-dark/80 backdrop-blur sticky top-0 z-50 border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-semibold tracking-wide hover:text-primary transition">
          Akash <span className="text-primary">Mishra</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className="hover:text-primary transition text-light/80"
            >
              {l.label}
            </button>
          ))}
        </nav>
        <button className="md:hidden hover:text-primary transition" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-dark">
          <div className="container py-4 grid gap-3">
            {links.map((l) => (
              <button key={l.id} onClick={() => { goTo(l.id); setOpen(false) }} className="text-left hover:text-primary">
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}


