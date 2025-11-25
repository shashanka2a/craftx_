'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import NoiseOverlay from '@/components/NoiseOverlay'
import Scanlines from '@/components/Scanlines'
import CanvasBackground from '@/components/CanvasBackground'
import ScrollIndicator from '@/components/ScrollIndicator'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable)
}

export default function Home() {
  return (
    <main className="relative z-[1]">
      <NoiseOverlay />
      <Scanlines />
      <CanvasBackground />
      <ScrollIndicator />
      <Hero />
      <Services />
      <Footer />
    </main>
  )
}

