import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function VirusDetected() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-red-900">
      <div className="bg-black bg-opacity-70 p-8 rounded-lg max-w-2xl w-full text-center">
        <AlertTriangle className="w-24 h-24 text-red-500 mx-auto mb-6" />
        <h1 className="text-5xl font-bold mb-6 text-red-500">DANGER: Malware Detected!</h1>
        <p className="text-xl mb-8 text-white">A potentially harmful file has been blocked. Your system is at risk!</p>
        <p className="text-lg mb-8 text-yellow-400 font-semibold">Immediate action is required to ensure your safety.</p>
        <Link
          href="/"
          className="px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 transition-colors inline-block"
        >
          Return to Safety
        </Link>
      </div>
    </main>
  )
}

