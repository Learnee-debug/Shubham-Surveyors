'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const ringX = useRef(0)
  const ringY = useRef(0)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
    }

    const onMouseEnterInteractive = () => {
      dot.style.width = '16px'
      dot.style.height = '16px'
      dot.style.marginLeft = '-8px'
      dot.style.marginTop = '-8px'
      ring.style.width = '48px'
      ring.style.height = '48px'
    }

    const onMouseLeaveInteractive = () => {
      dot.style.width = '8px'
      dot.style.height = '8px'
      dot.style.marginLeft = '0'
      dot.style.marginTop = '0'
      ring.style.width = '32px'
      ring.style.height = '32px'
    }

    let animId: number
    const animate = () => {
      ringX.current += (mouseX.current - ringX.current) * 0.1
      ringY.current += (mouseY.current - ringY.current) * 0.1
      ring.style.transform = `translate(${ringX.current - 16}px, ${ringY.current - 16}px)`
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    const interactives = document.querySelectorAll('a, button, [role="button"], input, select, textarea')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#B8860B',
          borderRadius: '9999px',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: '32px',
          height: '32px',
          border: '1px solid #B8860B',
          borderRadius: '9999px',
          opacity: 0.4,
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </>
  )
}
