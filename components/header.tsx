"use client"

import { useState, useEffect } from "react"
import { useLenis } from "lenis/react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Phone } from "lucide-react"
import Logo from "./Logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const theme = useTheme()
  const lenis = useLenis()

  const handleScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault()
    const el = document.querySelector(target)
    if (el) {
      lenis?.scrollTo(el as HTMLElement)
    }
    setIsMenuOpen(false) // also close mobile menu
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    {
      name: "Services",
      href: "#services",
      dropdown: [
        { name: "Patient Portals", href: "/services/patient-portals", description: "Secure patient access systems" },
        {
          name: "Practice Management",
          href: "/services/practice-management",
          description: "Complete practice solutions",
        },
        { name: "Telemedicine", href: "/services/telemedicine", description: "Remote consultation platforms" },
        { name: "Healthcare Analytics", href: "/services/analytics", description: "Medical data insights" },
      ],
    },
    {
      name: "Solutions",
      href: "#solutions",
      dropdown: [
        { name: "Small Practices", href: "/solutions/small-practices", description: "1-5 provider practices" },
        { name: "Multi-Location Clinics", href: "/solutions/clinics", description: "Multiple location management" },
        { name: "Specialty Practices", href: "/solutions/specialty", description: "Specialized medical fields" },
        { name: "Hospital Systems", href: "/solutions/hospitals", description: "Large healthcare organizations" },
      ],
    },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/95 dark:bg-background-emphasis/95 backdrop-blur-xl border-b border-border/50 dark:border-border-subtle/50 shadow-lg"
        : "bg-transparent"
        }`}
    > 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" >
            <div className="text-xl font-space-grotesk font-bold text-text-primary dark:text-text-primary">
              <Logo />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="flex items-center text-text-secondary dark:text-text-tertiary hover:text-primary font-medium transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </a>
                ) : (
                    <Link
                      href={item.href}
                      className="flex items-center text-text-secondary dark:text-text-tertiary hover:text-primary font-medium transition-colors duration-300 py-2"
                    >
                      {item.name}
                    </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-background dark:bg-background-subtle rounded-2xl shadow-2xl border border-border dark:border-border-subtle py-4 z-50">
                    {item.dropdown.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        href={dropdownItem.href}
                        className="block px-6 py-3 hover:bg-background-subtle dark:hover:bg-background transition-colors duration-200"
                      >
                        <div className="font-medium text-text-primary dark:text-text-primary mb-1">
                          {dropdownItem.name}
                        </div>
                        <div className="text-sm text-text-secondary dark:text-text-tertiary">
                          {dropdownItem.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-6">
            <ThemeToggle />
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-text-primary-foreground px-6 py-2.5 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
                Free Consultation
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="p-2 rounded-xl hover:bg-background-subtle dark:hover:bg-background-emphasis transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 dark:bg-background-emphasis/95 backdrop-blur-xl border-b border-border/50 dark:border-border-subtle/50 shadow-2xl">
            <div className="px-4 py-8 space-y-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="block text-lg font-medium text-text-primary dark:text-text-primary hover:text-primary py-2 transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                      <Link
                        href={item.href}
                        className="block text-lg font-medium text-text-primary dark:text-text-primary hover:text-primary py-2 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                  )}

                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          href={dropdownItem.href}
                          className="block text-text-secondary dark:text-text-tertiary hover:text-primary py-1 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-border dark:border-border-subtle">
                <div className="flex items-center text-sm text-text-secondary dark:text-text-tertiary mb-6">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium">+1 (555) MED-TECH</span>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-text-primary-foreground py-3 font-semibold"
                >
                  <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
                    Free Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
