"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Zap, Shield, Users, CheckCircle, Star, Download, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MobileAppsClientPage() {
  const heroStats = [
    { value: "200+", label: "Apps Launched", icon: Smartphone },
    { value: "10M+", label: "Downloads", icon: Download },
    { value: "4.8★", label: "Avg Rating", icon: Star },
    { value: "50+", label: "Countries", icon: Globe },
  ]

  const platforms = [
    {
      name: "iOS Development",
      description: "Native iOS apps built with Swift and SwiftUI for optimal performance",
      technologies: ["Swift", "SwiftUI", "Xcode", "Core Data"],
      features: [
        "App Store optimization",
        "iOS-specific features",
        "Native performance",
        "Apple guidelines compliance",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Android Development",
      description: "Native Android apps using Kotlin and modern Android architecture",
      technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Room"],
      features: ["Google Play optimization", "Material Design", "Android-specific APIs", "Multiple device support"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Cross-Platform",
      description: "Unified codebase for both platforms using React Native or Flutter",
      technologies: ["React Native", "Flutter", "Dart", "JavaScript"],
      features: ["Code reusability", "Faster development", "Consistent UX", "Cost-effective"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const appTypes = [
    {
      icon: Users,
      title: "Enterprise Apps",
      description: "Internal business applications for employee productivity and workflow management.",
      examples: ["Employee portals", "CRM systems", "Inventory management", "Field service apps"],
    },
    {
      icon: Shield,
      title: "Consumer Apps",
      description: "Customer-facing applications with engaging user experiences and scalable architecture.",
      examples: ["E-commerce apps", "Social platforms", "Entertainment apps", "Lifestyle apps"],
    },
    {
      icon: Zap,
      title: "Fintech Apps",
      description: "Secure financial applications with compliance and real-time transaction processing.",
      examples: ["Banking apps", "Payment solutions", "Investment platforms", "Cryptocurrency wallets"],
    },
  ]

  const features = [
    {
      title: "Native Performance",
      description: "Optimized for each platform's specific capabilities and user expectations.",
      icon: Zap,
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption, biometric authentication, and compliance.",
      icon: Shield,
    },
    {
      title: "Offline Functionality",
      description: "Apps that work seamlessly even without internet connectivity.",
      icon: Smartphone,
    },
    {
      title: "Push Notifications",
      description: "Engaging users with personalized, timely notifications and updates.",
      icon: Users,
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background-subtle via-background to-background-subtle dark:from-background-emphasis dark:via-background-emphasis dark:to-background-subtle overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
                <Smartphone className="w-4 h-4 mr-2" />
                <span className="font-space-grotesk font-semibold">Mobile Development</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold text-text-primary dark:text-text-primary leading-tight mb-6">
                Mobile Apps That Users Love
              </h1>

              <p className="text-xl text-text-secondary dark:text-text-secondary mb-8 leading-relaxed">
                Native and cross-platform mobile applications for iOS and Android with enterprise-grade security,
                performance, and user experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-text-primary-foreground px-8 py-4 text-lg">
                  <Link href="#contact">
                    Start Your App
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent">
                  View Portfolio
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-text-primary dark:text-text-primary">{stat.value}</div>
                    <div className="text-sm text-text-secondary dark:text-text-tertiary">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Mobile app mockups showing iOS and Android interfaces"
                  width={400}
                  height={600}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  priority
                />
                <div className="absolute -top-6 -right-6 bg-background dark:bg-background-subtle rounded-xl shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-text-primary dark:text-text-primary">Live on App Store</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Options */}
      <section className="py-20 lg:py-24 bg-background dark:bg-background-emphasis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
              Choose Your Platform
            </h2>
            <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
              We develop for all major mobile platforms with native performance and user experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group bg-background-subtle dark:bg-background rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video relative">
                  <Image
                    src={platform.image || "/placeholder.svg"}
                    alt={`${platform.name} development"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-text-primary-foreground">
                    <h3 className="text-xl font-bold">{platform.name}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-text-secondary dark:text-text-secondary mb-6 leading-relaxed">{platform.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary dark:text-text-primary mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary dark:text-text-primary mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {platform.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-text-secondary dark:text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 lg:py-24 bg-background-subtle dark:bg-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
            Types of Apps We Build
          </h2>
          <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
            From enterprise solutions to consumer apps, we have expertise across all industries.
          </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              <div
                key={index}
                className="bg-background dark:bg-background-emphasis p-8 rounded-2xl border border-border dark:border-border-subtle"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-4">
                  {type.title}
                </h3>
                <p className="text-text-secondary dark:text-text-secondary mb-6 leading-relaxed">{type.description}</p>
                <div>
                  <h4 className="font-semibold text-text-primary dark:text-text-primary mb-3">Examples</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span className="text-text-secondary dark:text-text-secondary">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-24 bg-background dark:bg-background-emphasis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
            Built-in Mobile Features
          </h2>
          <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
            Every app includes essential mobile capabilities for optimal user experience.
          </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary mb-4">{feature.title}</h3>
                <p className="text-text-secondary dark:text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-primary text-text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-xl mb-8 text-text-primary-foreground/90 leading-relaxed">
            Let's discuss your app idea and create a mobile experience that delights your users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-primary hover:bg-background/90 px-8 py-4 text-lg"
            >
              <Link href="#contact">
                Start Your App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border-subtle text-text-primary-foreground hover:bg-background/10 px-8 py-4 text-lg bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
