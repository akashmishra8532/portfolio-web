import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.5 })
  return (
    <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 origin-left bg-primary/80 z-50" />
  )
}

