import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "HAEZ | Frontend Developer in Abuja",
  description:
    "Frontend developer from Abuja. I build fast, clean websites with Tailwind, JavaScript and React.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
