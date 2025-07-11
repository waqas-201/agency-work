import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Play, Star, Shield, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {





  return (
    <section id="solutions" className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-gradient-to-br from-background-subtle via-background to-background-subtle dark:from-background-emphasis dark:via-background-emphasis dark:to-background-subtle overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Trust Badge */}
            {/* <div className="inline-flex items-center px-4 py-2 bg-background dark:bg-background-subtle rounded-full shadow-sm border border-border dark:border-border-subtle mb-8">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-text-secondary dark:text-text-tertiary">Trusted by 200+ companies</span>
              </div>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-space-grotesk font-bold text-text-primary dark:text-text-primary leading-tight mb-6">
              Healthcare
              <span className="block text-primary">Web Solutions</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-text-secondary dark:text-text-tertiary mt-4">
                For Modern Medical Practices
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary dark:text-text-secondary mb-10 leading-relaxed max-w-2xl">
              We build HIPAA-compliant web applications, patient portals, and practice management systems for doctors,
              clinics, and healthcare organizations.
            </p>

            {/* Value Props */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-text-secondary dark:text-text-tertiary font-medium">HIPAA-compliant security</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-text-secondary dark:text-text-tertiary font-medium">24/7 patient access</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-text-secondary dark:text-text-tertiary font-medium">Healthcare IT support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-text-secondary dark:text-text-tertiary font-medium">Multi-location ready</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-background-subtle dark:hover:bg-background-emphasis group bg-transparent"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-text-primary dark:text-text-primary mb-1">100+</div>
                <div className="text-sm text-text-secondary dark:text-text-tertiary">Medical practices served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-text-primary dark:text-text-primary mb-1">5+</div>
                <div className="text-sm text-text-secondary dark:text-text-tertiary">Years in healthcare</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-text-primary dark:text-text-primary mb-1">24/7</div>
                <div className="text-sm text-text-secondary dark:text-text-tertiary">Medical IT support</div>
              </div>
            </div> */}
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5 xl:col-span-6 mt-12 lg:mt-0">
            <div className="relative">
              {/* Main Dashboard */}
              <div className="relative bg-background dark:bg-background-subtle rounded-2xl shadow-2xl border border-border dark:border-border-subtle overflow-hidden">
                <div className="bg-background-subtle dark:bg-background border-b border-border dark:border-border-subtle">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <div className="ml-4 text-sm text-text-secondary dark:text-text-tertiary font-mono">healthcare-portal.app</div>
                  </div>
                </div>
                <div className="p-6">
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
              <div className="absolute -top-4 -right-4 bg-background dark:bg-background-subtle rounded-xl shadow-lg border border-border dark:border-border-subtle p-4 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text-primary dark:text-text-primary">HIPAA</div>
                    <div className="text-xs text-text-secondary dark:text-text-tertiary">Compliant</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-background dark:bg-background-subtle rounded-xl shadow-lg border border-border dark:border-border-subtle p-4 animate-float-delayed">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-primary dark:text-text-primary">150+</div>
                    <div className="text-xs text-text-secondary dark:text-text-tertiary">Active Patients</div>
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
