'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Edit, Video, Calendar } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  { id: 'editing', name: 'Editing', icon: Edit },
  { id: 'shooting', name: 'Shooting', icon: Video },
  { id: 'planning', name: 'Planning', icon: Calendar },
]

export default function Services() {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const imageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const serviceItemsRef = useRef<HTMLLIElement[]>([])

  useEffect(() => {
    const items = document.querySelectorAll('.service-item')
    items.forEach((item, index) => {
      serviceItemsRef.current[index] = item as HTMLLIElement
    })

    gsap.from('.service-item', {
      x: -100,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services',
        start: 'top 80%',
      },
    })
  }, [])

  useEffect(() => {
    if (activeImage && imageRefs.current[activeImage]) {
      const image = imageRefs.current[activeImage]
      gsap.to(image, {
        x: mousePos.x + 20,
        y: mousePos.y - 140,
        rotation: (mousePos.x - window.innerWidth / 2) * 0.02,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }, [mousePos, activeImage])

  const handleMouseEnter = (serviceId: string, e: React.MouseEvent<HTMLLIElement>) => {
    setActiveImage(serviceId)
    setMousePos({ x: e.clientX, y: e.clientY })
    if (imageRefs.current[serviceId]) {
      imageRefs.current[serviceId]?.classList.add('opacity-100')
    }
    // Show service number
    const number = e.currentTarget.querySelector('.service-number') as HTMLElement
    const name = e.currentTarget.querySelector('.service-name') as HTMLElement
    if (number) {
      number.style.opacity = '1'
      number.style.transform = 'translateY(-50%) translateX(0)'
    }
    if (name) {
      name.style.color = '#C4A000'
      name.style.textShadow = '4px 4px 0 rgba(245, 245, 240, 0.1)'
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = (serviceId: string, e: React.MouseEvent<HTMLLIElement>) => {
    setActiveImage(null)
    if (imageRefs.current[serviceId]) {
      imageRefs.current[serviceId]?.classList.remove('opacity-100')
    }
    // Hide service number
    const number = e.currentTarget.querySelector('.service-number') as HTMLElement
    const name = e.currentTarget.querySelector('.service-name') as HTMLElement
    if (number) {
      number.style.opacity = '0'
      number.style.transform = 'translateY(-50%) translateX(-20px)'
    }
    if (name) {
      name.style.color = ''
      name.style.textShadow = ''
    }
  }

  return (
    <>
      <section className="services py-32 px-8 md:px-16 relative">
        {/* Decorative element */}
        <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-accent via-accent/50 to-transparent" />
        
        <div className="flex items-center gap-4 mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-cream-dim">
            What we do
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/50 via-accent/20 to-transparent" />
        </div>
        
        <ul className="list-none">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <li
                key={service.id}
                className="service-item border-t border-cream/20 py-10 md:py-12 relative cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:pl-8 hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent last:border-b last:border-cream/20 group"
                data-service={service.id}
                onMouseEnter={(e) => handleMouseEnter(service.id, e)}
                onMouseMove={handleMouseMove}
                onMouseLeave={(e) => handleMouseLeave(service.id, e)}
              >
                <span className="service-number absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 font-mono text-sm text-accent opacity-0 transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="service-name font-serif text-[clamp(3rem,10vw,8rem)] uppercase tracking-[-0.02em] transition-all duration-300 relative inline-block">
                  {service.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-light transition-all duration-300 group-hover:w-full" />
                </span>
              </li>
            )
          })}
        </ul>
      </section>

      {/* Floating Service Images */}
      {services.map((service) => {
        const Icon = service.icon
        return (
          <div
            key={service.id}
            ref={(el) => {
              imageRefs.current[service.id] = el
            }}
            className={`service-image fixed w-[200px] h-[280px] bg-cream border-[3px] border-cream pointer-events-none opacity-0 z-50 transition-opacity duration-300 flex items-center justify-center overflow-hidden shadow-retro-lg ${
              activeImage === service.id ? 'opacity-100' : ''
            }`}
            style={{
              boxShadow: activeImage === service.id 
                ? '8px 8px 0 rgba(0, 0, 0, 0.4), 0 0 30px rgba(196, 160, 0, 0.3)' 
                : '4px 4px 0 rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Icon className="w-4/5 h-4/5 text-forest transition-transform duration-300" fill="currentColor" 
                style={{ 
                  transform: activeImage === service.id ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)' 
                }} 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-300"
                style={{ opacity: activeImage === service.id ? 1 : 0 }}
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

