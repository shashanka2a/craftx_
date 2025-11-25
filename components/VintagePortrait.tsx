'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { CheckCircle2, AlertTriangle } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable)
}

export default function VintagePortrait() {
  const errorPopupRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!errorPopupRef.current) return

    // Entrance animations
    if (portraitRef.current) {
      gsap.from(portraitRef.current, {
        scale: 0.8,
        opacity: 0,
        rotation: -10,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.5,
      })
    }

    gsap.from(errorPopupRef.current, {
      scale: 0,
      rotation: 20,
      duration: 0.6,
      ease: 'back.out(1.7)',
      delay: 1.2,
    })

    // Draggable popup
    Draggable.create(errorPopupRef.current, {
      type: 'x,y',
      edgeResistance: 0.65,
      bounds: document.body,
      inertia: true,
      throwProps: true,
      onDragStart: function () {
        gsap.to(errorPopupRef.current, {
          scale: 1.05,
          boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.4)',
          duration: 0.2,
        })
      },
      onDragEnd: function () {
        gsap.to(errorPopupRef.current, {
          scale: 1,
          boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.3)',
          duration: 0.3,
          ease: 'elastic.out(1, 0.5)',
        })
      },
    })
  }, [])

  return (
    <div className="relative w-[250px] h-[350px] md:w-[300px] md:h-[400px]">
      <div
        ref={portraitRef}
        className="vintage-portrait w-full h-full bg-gradient-to-br from-forest-light to-forest border-[3px] border-cream relative overflow-hidden shadow-retro-lg group"
        style={{
          boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.3), 0 0 30px rgba(196, 160, 0, 0.1)'
        }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute inset-5 border border-cream-dim flex flex-col items-center justify-center p-4 relative z-10">
          <div className="w-[120px] h-[150px] bg-cream [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center mb-4 shadow-retro transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <CheckCircle2 className="w-[60px] h-[60px] text-forest transition-colors duration-300 group-hover:text-accent" fill="currentColor" />
          </div>
          <div className="font-serif text-2xl text-cream text-center transition-all duration-300 group-hover:text-accent group-hover:text-glow">
            CRAFT<br />YOUR<br />VISION
          </div>
        </div>
      </div>

      {/* Windows 95 Error Popup */}
      <div
        ref={errorPopupRef}
        className="error-popup absolute -top-[30px] -right-[60px] md:-right-[60px] md:-top-[30px] w-[280px] md:w-[320px] bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] shadow-retro font-['MS_Sans_Serif','Segoe_UI',Tahoma,sans-serif] cursor-grab select-none z-[100] active:cursor-grabbing md:static md:top-5 md:right-auto md:mt-8 transition-all duration-200 hover:shadow-retro-lg"
      >
        <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] text-white px-1 py-0.5 text-xs font-bold flex justify-between items-center">
          <span>⚠️ System Error</span>
          <div className="flex gap-0.5">
            <div className="w-4 h-3.5 bg-[#C0C0C0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-[10px] flex items-center justify-center cursor-pointer">
              _
            </div>
            <div className="w-4 h-3.5 bg-[#C0C0C0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-[10px] flex items-center justify-center cursor-pointer">
              □
            </div>
            <div className="w-4 h-3.5 bg-[#C0C0C0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-[10px] flex items-center justify-center cursor-pointer">
              ×
            </div>
          </div>
        </div>
        <div className="p-5 flex gap-4 items-start">
          <div className="w-8 h-8 flex-shrink-0">
            <AlertTriangle className="w-full h-full text-[#FFD700]" fill="currentColor" />
          </div>
          <div className="text-xs text-black leading-[1.4]">
            <strong>ERROR 404:</strong>
            <br />
            Unable to get my shit together.
            <br />
            <br />
            Press OK to pretend everything is fine.
          </div>
        </div>
        <div className="px-5 pb-4 pt-2.5 flex justify-center gap-2.5">
          <button className="bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] px-5 py-1 text-xs cursor-pointer font-inherit active:[border-color:#808080_#FFFFFF_#FFFFFF_#808080]">
            OK
          </button>
          <button className="bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] px-5 py-1 text-xs cursor-pointer font-inherit active:[border-color:#808080_#FFFFFF_#FFFFFF_#808080]">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

