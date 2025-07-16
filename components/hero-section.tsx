import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Play, Shield, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="solutions"
      className=" relative pt-16 pb-16 bg-gradient-to-br from-background-subtle via-background to-background-subtle dark:from-background-emphasis dark:via-background-emphasis dark:to-background-subtle overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-56 h-56 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="w-56 h-56 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="  md:mt-12 relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 xl:col-span-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space-grotesk font-bold text-text-primary dark:text-text-primary leading-tight mb-5 sm:mb-6">
              Healthcare
              <span className="block text-primary">Web Solutions</span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-text-secondary dark:text-text-tertiary mt-3 sm:mt-4">
                For Modern Medical Practices
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-text-secondary dark:text-text-secondary mb-8 max-w-xl leading-relaxed">
              We build HIPAA-compliant web applications, patient portals, and practice management systems for doctors,
              clinics, and healthcare organizations.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {[
                "HIPAA-compliant security",
                "24/7 patient access",
                "Healthcare IT support",
                "Multi-location ready",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-text-secondary dark:text-text-tertiary font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-text-primary-foreground px-6 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="#contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-4 text-lg font-semibold border-2 hover:bg-background-subtle dark:hover:bg-background-emphasis group bg-transparent flex items-center justify-center"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5  hidden lg:block xl:col-span-6 mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              {/* Main Dashboard */}
              <div className="relative bg-background dark:bg-background-subtle rounded-2xl shadow-2xl border border-border dark:border-border-subtle overflow-hidden">
                <div className="bg-background-subtle dark:bg-background border-b border-border dark:border-border-subtle px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <div className="ml-4 text-xs sm:text-sm text-text-secondary dark:text-text-tertiary font-mono truncate">
                      healthcare-portal.app
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Healthcare dashboard showing patient management and analytics"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 bg-background dark:bg-background-subtle rounded-xl shadow-lg border border-border dark:border-border-subtle p-3 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-text-primary dark:text-text-primary">HIPAA</div>
                    <div className="text-[0.6rem] sm:text-xs text-text-secondary dark:text-text-tertiary">Compliant</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-background dark:bg-background-subtle rounded-xl shadow-lg border border-border dark:border-border-subtle p-3 animate-float-delayed">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-text-primary dark:text-text-primary">150+</div>
                    <div className="text-xs sm:text-sm text-text-secondary dark:text-text-tertiary">Active Patients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
