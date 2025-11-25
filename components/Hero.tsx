'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import KineticHeadline from './KineticHeadline'
import VintagePortrait from './VintagePortrait'

export default function Hero() {
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1,
      })
    }
  }, [])

  return (
    <section className="min-h-screen grid grid-cols-[1.2fr_0.8fr] gap-12 p-8 lg:p-16 items-center lg:grid-cols-1 lg:text-center relative">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      
      <div className="relative z-10">
        <KineticHeadline />
        <p
          ref={subtitleRef}
          className="font-mono text-sm mt-10 text-cream-dim tracking-[0.15em] uppercase flex items-center gap-3"
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          Est. 2024 — San Francisco, CA
          <span className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </p>
      </div>
      <div className="relative flex justify-center items-center min-h-[400px] lg:min-h-[500px] z-10">
        <VintagePortrait />
      </div>
    </section>
  )
}

