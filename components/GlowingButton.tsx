import Link from "next/link"
import type React from "react"

interface GlowingButtonProps {
  href: string
  color: "blue" | "red"
  children: React.ReactNode
}

export default function GlowingButton({ href, color, children }: GlowingButtonProps) {
  const baseClasses =
    "px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900"
  const colorClasses =
    color === "blue"
      ? "bg-blue-600 hover:bg-blue-500 focus:ring-blue-500 shadow-lg shadow-blue-500/50 text-white"
      : "bg-red-600 hover:bg-red-500 focus:ring-red-500 shadow-lg shadow-red-500/50 text-white"

  return (
    <Link href={href} className={`${baseClasses} ${colorClasses}`}>
      {children}
    </Link>
  )
}

