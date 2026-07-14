import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const rafRef = useRef<number | null>(null)

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }
    // Event delegation — works for any element, including ones added later.
    const isInteractive = (t: EventTarget | null) =>
      t instanceof Element && !!t.closest('a, button, [role="button"], input, textarea, select')
    const over = (e: MouseEvent) => { if (isInteractive(e.target)) setHovered(true) }
    const out = (e: MouseEvent) => { if (isInteractive(e.target)) setHovered(false) }
    const leaveWindow = () => setVisible(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    document.addEventListener('mouseleave', leaveWindow)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.removeEventListener('mouseleave', leaveWindow)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [visible, cursorX, cursorY])

  // Only render on non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovered ? 40 : 24,
          height: hovered ? 40 : 24,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <div
          className="w-full h-full rounded-full border"
          style={{
            borderColor: 'rgba(232,224,213,0.5)',
            boxShadow: hovered
              ? '0 0 18px 4px rgba(201,169,110,0.4)'
              : '0 0 10px 2px rgba(232,224,213,0.15)',
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          background: '#E8DDD0',
          boxShadow: '0 0 6px 2px rgba(232,224,213,0.6)',
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  )
}
