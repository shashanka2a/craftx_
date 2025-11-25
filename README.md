# CraftX — Creative Studio

A production-ready Next.js 15 application with Tailwind CSS v3, featuring a creative studio website with interactive animations.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS v3** for styling
- 🎭 **GSAP** animations
- 🎪 **Three.js** wireframe cube background
- 🔍 **SEO optimized** with comprehensive meta tags
- 🎯 **Lucide icons** for favicon and UI elements
- 📱 **Responsive design**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
craftx_/
├── app/
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles and Tailwind
│   └── icon.tsx         # Favicon (Lucide Sparkles icon)
├── components/
│   ├── CanvasBackground.tsx  # Three.js wireframe cubes
│   ├── Footer.tsx            # Footer with marquee
│   ├── Hero.tsx              # Hero section
│   ├── KineticHeadline.tsx   # Animated headline
│   ├── NoiseOverlay.tsx      # Noise texture overlay
│   ├── Scanlines.tsx         # CRT scanlines effect
│   ├── Services.tsx          # Services section
│   └── VintagePortrait.tsx   # Vintage portrait with draggable popup
└── package.json
```

## Technologies

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v3** - Utility-first CSS
- **Three.js** - 3D graphics
- **GSAP** - Animation library
- **Lucide React** - Icon library

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 CRAFTX CREATIVE STUDIO - ALL RIGHTS RESERVED

