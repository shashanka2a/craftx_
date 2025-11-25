export default function Footer() {
  const marqueeText = "LET'S CREATE SOMETHING EXTRAORDINARY."
  
  return (
    <footer className="py-20 overflow-hidden border-t border-cream/20 relative">
      {/* Gradient overlay for depth */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-forest/50 to-transparent pointer-events-none" />
      
      <div className="flex w-full overflow-hidden relative">
        <div className="flex animate-marquee will-change-transform">
          <span className="font-serif text-[clamp(4rem,12vw,10rem)] uppercase whitespace-nowrap pr-16 text-cream [-webkit-text-stroke:1px_#F5F5F0] text-glow-subtle">
            {marqueeText}
          </span>
          <span className="font-serif text-[clamp(4rem,12vw,10rem)] uppercase whitespace-nowrap pr-16 text-transparent [-webkit-text-stroke:2px_#F5F5F0]">
            {marqueeText}
          </span>
          <span className="font-serif text-[clamp(4rem,12vw,10rem)] uppercase whitespace-nowrap pr-16 text-cream [-webkit-text-stroke:1px_#F5F5F0] text-glow-subtle">
            {marqueeText}
          </span>
          <span className="font-serif text-[clamp(4rem,12vw,10rem)] uppercase whitespace-nowrap pr-16 text-transparent [-webkit-text-stroke:2px_#F5F5F0]">
            {marqueeText}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-center px-16 pt-16 pb-6 text-xs text-cream-dim tracking-[0.1em] md:flex-col md:gap-4 md:text-center relative">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-accent rounded-full animate-pulse-glow" />
          <span>© 2024 CRAFTX CREATIVE STUDIO</span>
        </div>
        <div className="h-px flex-1 mx-8 bg-gradient-to-r from-transparent via-cream/20 to-transparent md:hidden" />
        <span className="hover:text-accent transition-colors duration-300">ALL RIGHTS RESERVED</span>
        <div className="h-px flex-1 mx-8 bg-gradient-to-r from-transparent via-cream/20 to-transparent md:hidden" />
        <span className="hover:text-accent transition-colors duration-300 flex items-center gap-2">
          MADE WITH CHAOS & COFFEE
          <span className="text-accent">☕</span>
        </span>
      </div>
    </footer>
  )
}

