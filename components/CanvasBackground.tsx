'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function CanvasBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const cubesRef = useRef<THREE.LineSegments[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0, y: 0, worldX: 0, worldY: 0 })
  const timeRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 15
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create wireframe cubes
    const cubeCount = 800
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
    const edges = new THREE.EdgesGeometry(cubeGeometry)
    const cubes: THREE.LineSegments[] = []
    const cubeGroup = new THREE.Group()

    for (let i = 0; i < cubeCount; i++) {
      // Vary opacity and color for depth
      const isAccent = Math.random() < 0.1 // 10% chance for accent color
      const lineMaterial = new THREE.LineBasicMaterial({
        color: isAccent ? 0xc4a000 : 0xf5f5f0,
        transparent: true,
        opacity: isAccent ? 0.25 : 0.12 + Math.random() * 0.08, // Vary opacity
      })
      const line = new THREE.LineSegments(edges, lineMaterial)

      line.position.x = (Math.random() - 0.5) * 60
      line.position.y = (Math.random() - 0.5) * 40
      line.position.z = (Math.random() - 0.5) * 30 - 10

      const scale = Math.random() * 1.5 + 0.5
      line.scale.set(scale, scale, scale)

      line.rotation.x = Math.random() * Math.PI
      line.rotation.y = Math.random() * Math.PI

      line.userData = {
        originalPosition: line.position.clone(),
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.002,
          y: (Math.random() - 0.5) * 0.002,
        },
        phase: Math.random() * Math.PI * 2,
      }

      cubes.push(line)
      cubeGroup.add(line)
    }

    scene.add(cubeGroup)
    cubesRef.current = cubes

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
      mouseRef.current.worldX = mouseRef.current.x * 30
      mouseRef.current.worldY = mouseRef.current.y * 20
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)
      timeRef.current += 0.01

      cubes.forEach((cube) => {
        cube.rotation.x += cube.userData.rotationSpeed.x
        cube.rotation.y += cube.userData.rotationSpeed.y

        cube.position.y =
          cube.userData.originalPosition.y +
          Math.sin(timeRef.current + cube.userData.phase) * 0.3

        const dx = cube.position.x - mouseRef.current.worldX
        const dy = cube.position.y - mouseRef.current.worldY
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 8

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist
          const angle = Math.atan2(dy, dx)
          cube.position.x += Math.cos(angle) * force * 0.3
          cube.position.y += Math.sin(angle) * force * 0.3
        } else {
          cube.position.x +=
            (cube.userData.originalPosition.x - cube.position.x) * 0.02
        }
      })

      if (cameraRef.current) {
        cameraRef.current.position.x = mouseRef.current.x * 2
        cameraRef.current.position.y = mouseRef.current.y * 1
        cameraRef.current.lookAt(scene.position)
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }

    animate()

    // Resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return
      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (rendererRef.current && container.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement)
      }
      rendererRef.current?.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      id="canvas-container"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  )
}

