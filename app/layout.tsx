import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://haez-portfolio.vercel.app"),
  title: "HAEZ | Frontend Developer in Abuja",
  description:
    "Frontend developer from Abuja. I build ultra fast, clean websites with React, TypeScript, Next.js and Tailwind.",
  openGraph: {
    title: "HAEZ | Frontend Developer in Abuja",
    description:
      "I build ultra-fast, clean websites with React, TypeScript, Next.js and Tailwind.",
    images: ["/og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAEZ | Frontend Developer in Abuja",
    images: ["/og.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#0f172a] text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
