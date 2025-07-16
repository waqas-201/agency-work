"use client"

import { cn } from '@/lib/utils'
import { motion, SpringOptions, useSpring, useTransform } from 'motion/react'
import { JSX, useEffect } from 'react'

export type AnimatedNumberProps = {
  value: number
  className?: string
  springOptions?: SpringOptions
  as?: React.ElementType
  animate?: boolean
}

export function AnimatedNumber({
  value,
  className,
  springOptions,
  as = 'span',
  animate = true,
}: AnimatedNumberProps) {
  const MotionComponent = motion.create(as as keyof JSX.IntrinsicElements)
  const spring = useSpring(0, springOptions)
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  )

  useEffect(() => {
    if (animate) spring.set(value)
  }, [spring, value, animate])

  return (
    <MotionComponent className={cn('tabular-nums', className)}>
      {display}
    </MotionComponent>
  )
}
