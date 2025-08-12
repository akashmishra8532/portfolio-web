import { motion } from 'framer-motion'

export default function ProjectCard({ title, period, stack, points, imageUrl, github, live }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:border-primary/40 transition"
    >
      {imageUrl && (
        <div className="aspect-video bg-black/20">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          {period && <span className="text-xs text-light/60">{period}</span>}
        </div>
        <p className="text-sm text-light/80 mb-3">{stack}</p>
        <ul className="text-sm list-disc ml-5 space-y-1">
          {points?.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
        <div className="flex gap-3 mt-4">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-white/20 hover:border-primary hover:text-primary transition">
              GitHub
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white transition">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )}

