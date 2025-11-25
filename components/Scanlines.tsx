export default function Scanlines() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]"
      style={{
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 1px,
          rgba(0, 0, 0, 0.03) 1px,
          rgba(0, 0, 0, 0.03) 2px
        )`,
      }}
    />
  )
}

