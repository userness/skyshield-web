import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import type React from "react" // Import React

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Virus Shield - Protect Your Downloads",
  description: "An extension that stops you from downloading viruses",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-gray-900 text-white min-h-screen`}>{children}</body>
    </html>
  )
}



import './globals.css'