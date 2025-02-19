import type React from "react"

interface GlowingTextProps {
  color: "blue" | "red"
  className?: string
  children: React.ReactNode
}

export default function GlowingText({ color, className, children }: GlowingTextProps) {
  const baseClasses = "animate-pulse"
  const colorClasses = color === "blue" ? "text-blue-500 shadow-blue-500/50" : "text-red-500 shadow-red-500/50"

  return <span className={`${baseClasses} ${colorClasses} ${className}`}>{children}</span>
}

