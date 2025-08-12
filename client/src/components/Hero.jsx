import { motion } from 'framer-motion'
import constants from '../data/constants.js'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-primary mb-2">Hello, I'm</p>
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {constants.name}
        </motion.h1>
        <motion.p
          className="text-lg text-light/80 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="[animation:typing_5s_steps(30)_infinite,blink_1s_step-end_infinite] whitespace-nowrap inline-block overflow-hidden border-r-2 border-primary pr-1">
            Full-Stack Developer (MERN)
          </span>
        </motion.p>
        <div className="flex items-center gap-4">
          <a
            href={constants.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white transition"
          >
            Connect on LinkedIn
          </a>
          <Link to="/projects" className="px-5 py-3 rounded-lg border border-white/20 hover:border-primary hover:text-primary transition">
            View Projects
          </Link>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
        <motion.div
          className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden"
          animate={{ rotate: [0, 2, 0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        >
          <span className="text-6xl">🚀</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}


