'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const words = [
  "WE'RE",
  'A',
  'CREATIVE',
  'STUDIO',
  'BUILT',
  'ON',
  'STORIES',
  'NOT',
  'STATISTICS.',
]

export default function KineticHeadline() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const wordsRef = useRef<HTMLSpanElement[]>([])
  const lastScrollYRef = useRef(0)
  const scrollVelocityRef = useRef(0)
  const targetSkewRef = useRef(0)
  const currentSkewRef = useRef(0)

  useEffect(() => {
    const words = headlineRef.current?.querySelectorAll('.word')
    if (!words) return

    words.forEach((word, index) => {
      wordsRef.current[index] = word as HTMLSpanElement
    })

    // Entrance animation
    gsap.from(words, {
      y: 100,
      opacity: 0,
      rotationX: -90,
      stagger: 0.05,
      duration: 1,
      ease: 'power4.out',
      delay: 0.3,
    })

    // Scroll skew animation
    const handleScroll = () => {
      scrollVelocityRef.current = window.scrollY - lastScrollYRef.current
      lastScrollYRef.current = window.scrollY
      targetSkewRef.current = Math.max(
        -15,
        Math.min(15, scrollVelocityRef.current * 0.5)
      )
    }

    window.addEventListener('scroll', handleScroll)

    const updateTypography = () => {
      currentSkewRef.current += (targetSkewRef.current - currentSkewRef.current) * 0.1
      targetSkewRef.current *= 0.95

      wordsRef.current.forEach((word, i) => {
        if (!word) return
        const delay = i * 0.05
        const skew = currentSkewRef.current * Math.cos(delay * Math.PI)
        const translateY = Math.sin(Date.now() * 0.001 + i * 0.5) * 2
        word.style.transform = `skewX(${skew}deg) translateY(${translateY}px)`
      })

      requestAnimationFrame(updateTypography)
    }

    updateTypography()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <h1
      ref={headlineRef}
      className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[1.05] tracking-[-0.02em] uppercase text-cream origin-left transition-transform duration-100 ease-out text-glow-subtle"
    >
      {words.map((word, i) => (
        <span 
          key={i} 
          className="word inline-block mr-[0.3em] transition-transform duration-300 hover:text-accent hover:text-glow"
          style={{ transition: 'color 0.3s ease, text-shadow 0.3s ease' }}
        >
          {word}
        </span>
      ))}
    </h1>
  )
}

