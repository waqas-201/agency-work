"use client"

import { useState, useEffect } from "react"
import { Palette, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const colorThemes = [
  {
    name: "Healthcare Blue",
    primary: "199 89% 61%", // #42A5F5
    primaryRgb: "66, 165, 245",
    class: "theme-healthcare",
  },
  {
    name: "Medical Teal",
    primary: "174 61% 41%", // #26A69A
    primaryRgb: "38, 166, 154",
    class: "theme-medical",
  },
  {
    name: "Mint Green",
    primary: "122 39% 64%", // #81C784
    primaryRgb: "129, 199, 132",
    class: "theme-mint",
  },
  {
    name: "Violet",
    primary: "262 83% 58%",
    primaryRgb: "139, 92, 246",
    class: "theme-violet",
  },
  {
    name: "Blue",
    primary: "217 91% 60%",
    primaryRgb: "59, 130, 246",
    class: "theme-blue",
  },
  {
    name: "Emerald",
    primary: "160 84% 39%",
    primaryRgb: "16, 185, 129",
    class: "theme-emerald",
  },
  {
    name: "Orange",
    primary: "25 95% 53%",
    primaryRgb: "249, 115, 22",
    class: "theme-orange",
  },
  {
    name: "Rose",
    primary: "346 77% 49%",
    primaryRgb: "225, 29, 72",
    class: "theme-rose",
  },
]

export function ColorThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState("theme-healthcare")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme") || "theme-healthcare"
    setCurrentTheme(savedTheme)
    document.documentElement.className = document.documentElement.className.replace(/theme-\w+/g, "") + ` ${savedTheme}`
  }, [])

  const changeTheme = (theme: string) => {
    setCurrentTheme(theme)
    localStorage.setItem("color-theme", theme)
    document.documentElement.className = document.documentElement.className.replace(/theme-\w+/g, "") + ` ${theme}`
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`transition-all duration-300 ${isOpen ? "mb-4" : ""}`}>
        {isOpen && (
          <div className="bg-background dark:bg-background-subtle rounded-2xl shadow-2xl border border-border dark:border-border-subtle p-4 mb-4 animate-scale-in">
            <div className="grid grid-cols-4 gap-3">
              {colorThemes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => changeTheme(theme.class)}
                  className="relative w-10 h-10 rounded-xl transition-all duration-200 hover:scale-110 group"
                  style={{ backgroundColor: `rgb(${theme.primaryRgb})` }}
                  title={theme.name}
                >
                  {currentTheme === theme.class && <Check className="h-5 w-5 text-text-primary-foreground absolute inset-0 m-auto" />}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background-emphasis text-text-primary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {theme.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <Palette className="h-6 w-6 text-text-primary-foreground" />
      </Button>
    </div>
  )
}
