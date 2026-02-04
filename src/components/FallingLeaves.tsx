import { useMemo } from 'react'

const LEAF_COUNT = 14
const COLORS = ['#8B0000', '#C41E3A', '#FF4500', '#FFA500', '#FFD700']

export function FallingLeaves() {
  const leaves = useMemo(() => {
    return Array.from({ length: LEAF_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 8,
      size: 14 + Math.random() * 18,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      sway: 30 + Math.random() * 60,
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-fall"
          style={{
            left: `${leaf.left}%`,
            top: '-5%',
            width: leaf.size,
            height: leaf.size,
            color: leaf.color,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path
              fill="currentColor"
              d="M12 2C8 2 5 5 4 8c-1 3-1 6 1 9 2 2 5 3 7 3s5-1 7-3c2-3 2-6 1-9-1-3-4-6-8-6zm0 2c2 0 4 2 5 4 1 2 1 4 0 7-1 1-3 2-5 2s-4-1-5-2c-1-3-1-5 0-7 1-2 3-4 5-4z"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
