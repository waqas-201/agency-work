"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Shield, Globe, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WebDevelopmentClientPage() {
  const heroStats = [
    { value: "500+", label: "Web Apps Built", icon: Code },
    { value: "99.9%", label: "Uptime SLA", icon: Zap },
    { value: "24/7", label: "Support", icon: Shield },
    { value: "50+", label: "Countries", icon: Globe },
  ]

  const technologies = [
    { name: "React", category: "Frontend", description: "Modern component-based UI development" },
    { name: "Next.js", category: "Framework", description: "Full-stack React framework with SSR" },
    { name: "Node.js", category: "Backend", description: "Scalable server-side JavaScript runtime" },
    { name: "TypeScript", category: "Language", description: "Type-safe JavaScript development" },
    { name: "PostgreSQL", category: "Database", description: "Enterprise-grade relational database" },
    { name: "AWS", category: "Cloud", description: "Scalable cloud infrastructure" },
    { name: "Docker", category: "DevOps", description: "Containerized application deployment" },
    { name: "GraphQL", category: "API", description: "Efficient data querying and manipulation" },
  ]

  const features = [
    {
      icon: Code,
      title: "Custom Architecture",
      description: "Tailored solutions built from the ground up to meet your specific business requirements.",
      benefits: ["Scalable microservices", "API-first design", "Cloud-native architecture", "Performance optimization"],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, authentication, and compliance standards.",
      benefits: ["End-to-end encryption", "OAuth 2.0 / SAML", "SOC 2 compliance", "Regular security audits"],
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast applications optimized for speed and user experience.",
      benefits: ["Sub-second load times", "CDN optimization", "Database optimization", "Caching strategies"],
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Applications that handle millions of users across multiple regions.",
      benefits: ["Auto-scaling", "Load balancing", "Multi-region deployment", "99.9% uptime SLA"],
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your business requirements, technical constraints, and success metrics.",
      duration: "1-2 weeks",
      deliverables: ["Technical requirements", "Architecture blueprint", "Project roadmap", "Risk assessment"],
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create user-centered designs and interactive prototypes for validation.",
      duration: "2-3 weeks",
      deliverables: ["UI/UX designs", "Interactive prototypes", "Design system", "User testing results"],
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous integration and comprehensive testing.",
      duration: "8-16 weeks",
      deliverables: ["MVP release", "Feature iterations", "Quality assurance", "Performance testing"],
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment with monitoring, maintenance, and ongoing support.",
      duration: "Ongoing",
      deliverables: ["Production deployment", "Monitoring setup", "Documentation", "Support & maintenance"],
    },
  ]

  const caseStudies = [
    {
      client: "TechCorp",
      industry: "Enterprise Software",
      challenge: "Legacy system modernization",
      solution: "Microservices architecture with React frontend",
      results: [
        { metric: "40%", description: "Faster page loads" },
        { metric: "60%", description: "Reduced server costs" },
        { metric: "99.9%", description: "Uptime achieved" },
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      client: "FinanceFlow",
      industry: "Financial Services",
      challenge: "Real-time trading platform",
      solution: "High-frequency data processing with WebSocket APIs",
      results: [
        { metric: "<100ms", description: "Response time" },
        { metric: "1M+", description: "Concurrent users" },
        { metric: "Zero", description: "Downtime incidents" },
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const testimonials = [
    {
      quote:
        "Codezeo transformed our legacy system into a modern, scalable platform that handles 10x our previous traffic.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      company: "Fortune 500 Technology Company",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "The team's expertise in enterprise architecture and security was exactly what we needed for our financial platform.",
      author: "Michael Rodriguez",
      role: "VP Engineering, FinanceFlow",
      company: "Leading Financial Services",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const pricingTiers = [
    {
      name: "Startup",
      price: "Starting at $25K",
      description: "Perfect for MVPs and early-stage products",
      features: [
        "Custom web application",
        "Responsive design",
        "Basic authentication",
        "Database integration",
        "3 months support",
        "Documentation",
      ],
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Starting at $75K",
      description: "Comprehensive solutions for established businesses",
      features: [
        "Everything in Startup",
        "Advanced security features",
        "Third-party integrations",
        "Performance optimization",
        "12 months support",
        "Training & onboarding",
        "SLA guarantee",
      ],
      popular: true,
    },
    {
      name: "Custom",
      price: "Let's discuss",
      description: "Tailored solutions for unique requirements",
      features: [
        "Everything in Enterprise",
        "Custom architecture",
        "Dedicated team",
        "24/7 priority support",
        "Ongoing maintenance",
        "Strategic consulting",
        "White-glove service",
      ],
      popular: false,
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
                <Code className="w-4 h-4 mr-2" />
                <span className="font-space-grotesk font-semibold">Web Development</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold text-text-primary dark:text-text-primary leading-tight mb-6">
                Enterprise Web Applications That Scale
              </h1>

              <p className="text-xl text-text-secondary dark:text-text-secondary mb-8 leading-relaxed">
                Build high-performance, secure web applications with modern frameworks and enterprise-grade
                architecture. Trusted by Fortune 500 companies worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-text-primary-foreground px-8 py-4 text-lg">
                  <Link href="#contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent">
                  View Case Studies
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
                    <div className="ml-4 text-sm text-text-secondary dark:text-text-tertiary font-mono">enterprise-app.com</div>
                  </div>
                </div>
                <div className="p-6">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Enterprise web application dashboard"
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
            Enterprise-Grade Features
          </h2>
          <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
            Built-in capabilities that meet the most demanding enterprise requirements.
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

      {/* Technology Stack */}
      <section className="py-20 lg:py-24 bg-background-subtle dark:bg-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
            Modern Technology Stack
          </h2>
          <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
            We use cutting-edge technologies to build scalable, maintainable applications.
          </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-background dark:bg-background-emphasis p-6 rounded-xl border border-border dark:border-border-subtle hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-text-primary-foreground font-bold text-lg">{tech.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary mb-2">{tech.name}</h3>
                  <div className="text-sm text-primary font-medium mb-3">{tech.category}</div>
                  <p className="text-sm text-text-secondary dark:text-text-tertiary">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-24 bg-background dark:bg-background-emphasis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
            Our Development Process
          </h2>
          <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery every time.
          </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-3">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary text-text-primary-foreground rounded-2xl flex items-center justify-center text-2xl font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-space-grotesk font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <div className="text-primary font-medium">{step.duration}</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-text-secondary dark:text-text-secondary text-lg leading-relaxed mb-6">{step.description}</p>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="bg-background-subtle dark:bg-background p-6">
                      <h4 className="font-semibold text-text-primary dark:text-text-primary mb-4">Key Deliverables</h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                            <span className="text-text-secondary dark:text-text-secondary">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-12 bg-gray-200 dark:bg-gray-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-24 bg-background-subtle dark:bg-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
            Real results from real clients who transformed their business with our solutions.
          </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-background dark:bg-background-emphasis rounded-2xl overflow-hidden border border-border dark:border-border-subtle hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={`${study.client} case study`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{study.client}</h3>
                    <p className="text-white/90">{study.industry}</p>
                  </div>
                </div>

                <div className="p-8">
                    <div className="mb-6">
                      <h4 className="font-semibold text-text-primary dark:text-text-primary mb-2">Challenge</h4>
                      <p className="text-text-secondary dark:text-text-secondary mb-4">{study.challenge}</p>

                      <h4 className="font-semibold text-text-primary dark:text-text-primary mb-2">Solution</h4>
                      <p className="text-text-secondary dark:text-text-secondary">{study.solution}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                          <div className="text-sm text-text-secondary dark:text-text-tertiary">{result.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-24 bg-background dark:bg-background-emphasis">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background-subtle dark:bg-background p-8 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-text-secondary dark:text-text-secondary mb-8 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-text-primary dark:text-text-primary">{testimonial.author}</div>
                    <div className="text-primary font-medium">{testimonial.role}</div>
                    <div className="text-sm text-text-secondary dark:text-text-tertiary">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-24 bg-background-subtle dark:bg-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
            Investment Options
          </h2>
          <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
            Flexible pricing to match your project scope and business requirements.
          </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-background dark:bg-background-emphasis rounded-2xl border-2 p-8 ${
                  tier.popular
                    ? "border-primary shadow-2xl scale-105"
                    : "border-border dark:border-border-subtle hover:border-primary/30"
                } transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">{tier.price}</div>
                  <p className="text-text-secondary dark:text-text-secondary">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-text-secondary dark:text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full py-3 ${
                    tier.popular
                      ? "bg-primary hover:bg-primary/90 text-text-primary-foreground"
                      : "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-text-primary-foreground"
                  }`}
                >
                  <Link href="#contact">Get Started</Link>
                </Button>
              </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-primary text-text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            Ready to Build Your Enterprise Web Application?
          </h2>
          <p className="text-xl mb-8 text-text-primary-foreground/90 leading-relaxed">
            Let's discuss your project requirements and create a custom solution that scales with your business.
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
