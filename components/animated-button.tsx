"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends ButtonProps {
  hoverScale?: number
  tapScale?: number
  hoverElevation?: boolean
}

export function AnimatedButton({
  children,
  className,
  hoverScale = 1.05,
  tapScale = 0.95,
  hoverElevation = true,
  ...props
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      className={cn("inline-block transition-shadow", hoverElevation && isHovered ? "shadow-lg" : "shadow-none")}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
