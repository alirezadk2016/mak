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

    const checkHover = () => {
      const els = document.querySelectorAll('a, button, [role="button"]')
      const handler = (e: Event) => {
        if (e.type === 'mouseenter') setHovered(true)
        else setHovered(false)
      }
      els.forEach(el => {
        el.addEventListener('mouseenter', handler)
        el.addEventListener('mouseleave', handler)
      })
      return () => els.forEach(el => {
        el.removeEventListener('mouseenter', handler)
        el.removeEventListener('mouseleave', handler)
      })
    }

    window.addEventListener('mousemove', move)
    const cleanup = checkHover()

    // Re-attach on DOM changes
    const observer = new MutationObserver(() => cleanup())
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      cleanup()
      observer.disconnect()
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
              ? '0 0 18px 4px rgba(120,80,255,0.4)'
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
