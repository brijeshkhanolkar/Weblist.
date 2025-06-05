"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation, type Variant } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  animation?: "fadeIn" | "slideUp" | "slideRight" | "slideLeft" | "scale" | "none"
  distance?: number
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  animation = "fadeIn",
  distance = 50,
}: AnimatedSectionProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  const getAnimationVariants = () => {
    const variants: Record<string, Variant> = {
      hidden: {},
      visible: {
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    }

    switch (animation) {
      case "fadeIn":
        variants.hidden = { opacity: 0 }
        variants.visible = { ...variants.visible, opacity: 1 }
        break
      case "slideUp":
        variants.hidden = { opacity: 0, y: distance }
        variants.visible = { ...variants.visible, opacity: 1, y: 0 }
        break
      case "slideRight":
        variants.hidden = { opacity: 0, x: -distance }
        variants.visible = { ...variants.visible, opacity: 1, x: 0 }
        break
      case "slideLeft":
        variants.hidden = { opacity: 0, x: distance }
        variants.visible = { ...variants.visible, opacity: 1, x: 0 }
        break
      case "scale":
        variants.hidden = { opacity: 0, scale: 0.8 }
        variants.visible = { ...variants.visible, opacity: 1, scale: 1 }
        break
      case "none":
        variants.hidden = {}
        variants.visible = { ...variants.visible }
        break
    }

    return variants
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [isInView, controls, hasAnimated])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={getAnimationVariants()} className={className}>
      {children}
    </motion.div>
  )
}
