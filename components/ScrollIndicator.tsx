'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
      
      // Hide after scrolling down a bit
      if (scrollTop > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-float">
      <div className="flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-gradient-to-b from-accent via-accent/50 to-transparent" />
        <ChevronDown className="w-5 h-5 text-accent animate-bounce" />
        <span className="text-xs font-mono text-cream-dim tracking-wider uppercase">
          Scroll
        </span>
      </div>
    </div>
  )
}

