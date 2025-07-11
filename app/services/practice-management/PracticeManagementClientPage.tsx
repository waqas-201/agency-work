"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, CreditCard, FileText, CheckCircle, Star, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PracticeManagementClientPage() {
  const heroStats = [
    { value: "80+", label: "Practices Using Our System", icon: Users },
    { value: "50%", label: "Efficiency Improvement", icon: Clock },
    { value: "24/7", label: "System Availability", icon: Shield },
    { value: "99.9%", label: "Uptime Guarantee", icon: CheckCircle },
  ]

  const features = [
    {
      icon: Calendar,
      title: "Advanced Appointment Scheduling",
      description:
        "Comprehensive scheduling system with automated reminders, waitlist management, and multi-provider support.",
      benefits: ["Online booking integration", "Automated confirmations", "No-show reduction", "Resource optimization"],
    },
    {
      icon: CreditCard,
      title: "Integrated Billing System",
      description:
        "Complete billing solution with insurance claims processing, payment tracking, and financial reporting.",
      benefits: ["Insurance claim automation", "Payment processing", "Financial analytics", "Compliance reporting"],
    },
    {
      icon: FileText,
      title: "Patient Records Management",
      description: "Secure patient record system with EMR integration, document management, and compliance tracking.",
      benefits: ["EMR/EHR integration", "Document storage", "Audit trails", "HIPAA compliance"],
    },
    {
      icon: Users,
      title: "Multi-Location Support",
      description:
        "Centralized management for practices with multiple locations, unified reporting, and role-based access.",
      benefits: [
        "Centralized dashboard",
        "Location-specific reporting",
        "User role management",
        "Cross-location scheduling",
      ],
    },
  ]

  const testimonials = [
    {
      quote:
        "Our practice management system from SRIXUS  has streamlined every aspect of our operations. We've seen a 40% reduction in administrative time.",
      author: "Dr. Jennifer Walsh",
      role: "Practice Owner",
      practice: "Family Health Center",
      rating: 5,
    },
    {
      quote:
        "The billing integration alone has saved us thousands in processing fees and reduced claim denials by 60%.",
      author: "Mark Thompson",
      role: "Office Manager",
      practice: "Metro Medical Group",
      rating: 5,
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
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-space-grotesk font-semibold">Practice Management</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold text-text-primary dark:text-text-primary leading-tight mb-6">
                Complete Practice Management
                <span className="block text-primary">Solutions</span>
              </h1>

              <p className="text-xl text-text-secondary dark:text-text-secondary mb-8 leading-relaxed">
                Streamline your entire medical practice with our comprehensive management system featuring scheduling,
                billing, patient records, and multi-location support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-text-primary-foreground px-8 py-4 text-lg">
                  <Link href="#contact">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent">
                  View Features
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
              <div className="relative bg-background dark:bg-background-subtle rounded-2xl shadow-2xl border border-border dark:border-border-subtle overflow-hidden">
                <div className="bg-background-subtle dark:bg-background px-6 py-4 border-b border-border dark:border-border-subtle">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <div className="ml-4 text-sm text-text-secondary dark:text-text-tertiary font-mono">
                      practice-management.app
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Practice management dashboard interface"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-24 bg-background dark:bg-background-emphasis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
            Comprehensive Practice Management Features
          </h2>
          <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
            Everything you need to run an efficient medical practice in one integrated platform.
          </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary dark:text-text-secondary mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-text-secondary dark:text-text-secondary">{benefit}</span>
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

      {/* Testimonials */}
      <section className="py-20 lg:py-24 bg-background-subtle dark:bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
              What Practice Managers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background dark:bg-background-emphasis p-8 rounded-2xl border border-border dark:border-border-subtle"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-text-secondary dark:text-text-secondary mb-8 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-text-primary dark:text-text-primary">{testimonial.author}</div>
                  <div className="text-primary font-medium">{testimonial.role}</div>
                  <div className="text-sm text-text-secondary dark:text-text-tertiary">{testimonial.practice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-primary text-text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            Ready to Streamline Your Practice?
          </h2>
          <p className="text-xl mb-8 text-text-primary-foreground/90 leading-relaxed">
            Let's discuss how our practice management system can improve your operational efficiency and patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-primary hover:bg-background/90 px-8 py-4 text-lg"
            >
              <Link href="#contact">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border-subtle text-text-primary-foreground hover:bg-background/10 px-8 py-4 text-lg bg-transparent"
            >
              Call Healthcare Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
