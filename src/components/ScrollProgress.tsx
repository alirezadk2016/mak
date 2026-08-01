import { motion, useScroll, useSpring } from 'framer-motion'

/** Hairline gold reading-progress line at the very top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[120] h-[2px] origin-left pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(to right, #8A7250, #C9A96E 60%, #E3C795)',
      }}
    />
  )
}
