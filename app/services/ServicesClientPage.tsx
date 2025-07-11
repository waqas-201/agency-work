"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Cloud, BarChart3, Shield, Zap, Globe, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesClientPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Enterprise web applications built with modern frameworks and scalable architecture.",
      features: ["Custom web applications", "API development", "Database design", "Performance optimization"],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
      href: "/services/web-development",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-blue-500 to-cyan-500",
      stats: { projects: "500+", clients: "200+", uptime: "99.9%" },
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: ["Native iOS/Android", "Cross-platform", "App Store optimization", "Push notifications"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      href: "/services/mobile-apps",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-purple-500 to-pink-500",
      stats: { projects: "200+", downloads: "10M+", rating: "4.8★" },
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure with auto-scaling, monitoring, and enterprise security.",
      features: ["Cloud migration", "Auto-scaling", "DevOps automation", "Monitoring & alerts"],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
      href: "/services/cloud",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-green-500 to-emerald-500",
      stats: { projects: "300+", uptime: "99.99%", savings: "40%" },
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Advanced analytics platforms with real-time insights and machine learning capabilities.",
      features: ["Real-time analytics", "Machine learning", "Data visualization", "Predictive modeling"],
      technologies: ["Python", "TensorFlow", "D3.js", "Apache Spark"],
      href: "/services/analytics",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-orange-500 to-red-500",
      stats: { projects: "150+", insights: "1B+", accuracy: "95%" },
    },
  ]

  const capabilities = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant solutions with end-to-end encryption and advanced security measures.",
      features: ["Data encryption", "Access controls", "Compliance audits", "Security monitoring"],
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized applications that handle millions of users with sub-second response times.",
      features: ["Performance optimization", "Load balancing", "Caching strategies", "CDN integration"],
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Multi-region deployment with 24/7 monitoring and 99.9% uptime guarantee.",
      features: ["Multi-region deployment", "Auto-scaling", "24/7 monitoring", "Disaster recovery"],
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated team of senior developers, architects, and project managers.",
      features: ["Senior developers", "Solution architects", "Project managers", "24/7 support"],
    },
  ]

  const industries = [
    { name: "Healthcare", description: "HIPAA-compliant solutions", projects: "50+" },
    { name: "Finance", description: "Secure financial platforms", projects: "75+" },
    { name: "E-commerce", description: "Scalable retail solutions", projects: "100+" },
    { name: "Education", description: "Learning management systems", projects: "40+" },
    { name: "Manufacturing", description: "Industrial IoT solutions", projects: "30+" },
    { name: "Logistics", description: "Supply chain optimization", projects: "25+" },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background-subtle via-background to-background-subtle dark:from-background-emphasis dark:via-background-emphasis dark:to-background-subtle overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              <Code className="w-4 h-4 mr-2" />
              <span className="font-space-grotesk font-semibold">Our Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold text-text-primary dark:text-text-primary leading-tight mb-6">
              Enterprise Software Development Services
            </h1>

            <p className="text-xl text-text-secondary dark:text-text-secondary mb-12 leading-relaxed max-w-4xl mx-auto">
              Comprehensive technology solutions that power Fortune 500 companies and innovative startups. From web
              applications to mobile apps, we build software that scales with your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-text-primary-foreground px-8 py-4 text-lg">
                <Link href="#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-24 bg-background dark:bg-background-emphasis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-background dark:bg-background-subtle rounded-2xl border border-border dark:border-border-subtle overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} services`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-space-grotesk font-bold mb-2">{service.title}</h3>
                    <div className="flex space-x-4 text-sm">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-semibold">{value}</span>
                          <span className="text-white/80 ml-1 capitalize">{key}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-text-secondary dark:text-text-secondary mb-6 leading-relaxed text-lg">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary dark:text-text-primary mb-4">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          <span className="text-text-secondary dark:text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-text-primary dark:text-text-primary mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-background-subtle dark:bg-background text-text-secondary dark:text-text-secondary text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-text-primary-foreground py-3">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-24 bg-background-subtle dark:bg-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
            Enterprise Capabilities
          </h2>
          <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
            Built-in features and capabilities that meet enterprise requirements out of the box.
          </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-background dark:bg-background-emphasis p-8 rounded-2xl border border-border dark:border-border-subtle text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <capability.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary mb-4">{capability.title}</h3>
                <p className="text-text-secondary dark:text-text-secondary mb-6">{capability.description}</p>
                <ul className="space-y-2 text-sm">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-text-secondary dark:text-text-secondary">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-24 bg-background dark:bg-background-emphasis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
            Deep expertise across multiple industries with specialized solutions for each sector.
          </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-background-subtle dark:bg-background p-8 rounded-2xl border border-border dark:border-border-subtle hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary">{industry.name}</h3>
                  <span className="text-primary font-bold text-lg">{industry.projects}</span>
                </div>
                <p className="text-text-secondary dark:text-text-secondary">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-primary text-text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-text-primary-foreground/90 leading-relaxed">
            Let's discuss your project requirements and create a custom solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-primary hover:bg-background/90 px-8 py-4 text-lg"
            >
              <Link href="#contact">
                Start Your Project
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
