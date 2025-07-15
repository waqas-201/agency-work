import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import SmoothScroll from "@/providers/lenis-provider"
import WhatsAppFloatingButton from "@/components/whastappBtn"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SRIXUS Solutions - Healthcare Web Development for Medical Practices",
  description:
    "HIPAA-compliant web solutions for doctors, clinics, and healthcare organizations. Patient portals, practice management, and telemedicine platforms.",
  keywords:
    "healthcare web development, patient portal, practice management, telemedicine, HIPAA compliant, medical software, SRIXUS  Solutions",
  openGraph: {
    title: "SRIXUS  Solutions - Healthcare Web Development for Medical Practices",
    description: "HIPAA-compliant web solutions that improve patient care and practice efficiency.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} theme-healthcare`}
      suppressHydrationWarning
    >
      <body className="font-inter antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <SmoothScroll />
          <Header />
          {children}
          <Footer />
          <WhatsAppFloatingButton
            phoneNumber="923020069611"
            message="Hey! I’m interested in your services."
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
