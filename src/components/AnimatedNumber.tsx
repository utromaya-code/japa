import { useEffect, useState } from 'react'
import { useMotionValue, useTransform, animate, useMotionValueEvent } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedNumberProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedNumber({ end, suffix = '', prefix = '', duration = 1.5, className = '' }: AnimatedNumberProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const [display, setDisplay] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  useMotionValueEvent(rounded, 'change', (v) => setDisplay(v))

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, end, { duration, ease: 'easeOut' })
    return controls.stop
  }, [inView, end, duration, count])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
