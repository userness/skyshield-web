import Link from "next/link"
import Image from "next/image"
import GlowingButton from "../components/GlowingButton"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-black">
      <Image src="/logo.png" alt="Virus Shield Logo" width={200} height={200} className="mb-8" />
      <h1 className="text-5xl font-bold mb-6 text-center text-shadow-glow">Sky Shield Extension</h1>
      <p className="text-xl mb-12 text-center max-w-2xl text-gray-300">
        Protect your downloads with our cutting-edge malware detection technology.
      </p>
      <GlowingButton href="https://example.com/download" color="blue">
        Download Extension
      </GlowingButton>
      <Link href="/virus-detected" className="mt-8 text-blue-400 hover:text-blue-300 transition-colors">
        See malware detection demo
      </Link>
    </main>
  )
}

