import { FaGithub, FaLinkedin } from 'react-icons/fa'
import constants from '../data/constants.js'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-light/70">© {new Date().getFullYear()} {constants.name}. All rights reserved.</p>
        <div className="flex items-center gap-4 text-light/80">
          <a href={constants.links.github} target="_blank" rel="noreferrer" className="hover:text-primary transition transform hover:-translate-y-0.5">
            <FaGithub size={20} />
          </a>
          <a href={constants.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition transform hover:-translate-y-0.5">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}


