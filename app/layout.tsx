import type React from "react"
import type { Metadata } from "next"
import { Poppins, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import SmoothScroll from "@/providers/lenis-provider"
import WhatsAppFloatingButton from "@/components/whastappBtn"

const popins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
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
      className={` max-h-100 overflow-y-auto
w ${popins.variable} ${popins.variable} ${popins.variable} theme-healthcare`}
      suppressHydrationWarning
    >
      <body className="font-inter antialiased min-h-screen">
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
