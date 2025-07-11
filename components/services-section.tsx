import { Code, BarChart3, ArrowRight, Users, Calendar, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: "Patient Portals",
      description: "Secure patient portals for appointment scheduling, medical records access, and communication.",
      features: ["Online Appointments", "Medical Records", "Secure Messaging", "Prescription Refills"],
      technologies: ["React", "Next.js", "HIPAA Security", "HL7 FHIR"],
      href: "/services/patient-portals",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-blue-500 to-cyan-500",
      stats: "150+ Portals",
    },
    {
      icon: Calendar,
      title: "Practice Management",
      description: "Complete practice management systems for scheduling, billing, and patient management.",
      features: ["Appointment Scheduling", "Billing Integration", "Patient Records", "Insurance Claims"],
      technologies: ["EMR Integration", "Payment Processing", "Cloud Hosting", "API Development"],
      href: "/services/practice-management",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-purple-500 to-pink-500",
      stats: "80+ Practices",
    },
    {
      icon: MessageSquare,
      title: "Telemedicine Platforms",
      description: "HIPAA-compliant video consultation platforms for remote patient care.",
      features: ["Video Consultations", "Screen Sharing", "Digital Prescriptions", "Session Recording"],
      technologies: ["WebRTC", "HIPAA Hosting", "Mobile Apps", "Integration APIs"],
      href: "/services/telemedicine",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-green-500 to-emerald-500",
      stats: "50+ Platforms",
    },
    {
      icon: BarChart3,
      title: "Healthcare Analytics",
      description: "Data analytics dashboards for patient insights, practice performance, and reporting.",
      features: ["Patient Analytics", "Revenue Reports", "Compliance Tracking", "Performance Metrics"],
      technologies: ["Healthcare APIs", "Data Visualization", "HIPAA Analytics", "Custom Reports"],
      href: "/services/analytics",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-orange-500 to-red-500",
      stats: "30+ Dashboards",
    },
  ]

  return (
    <section id="services" className="py-24 lg:py-32 bg-background dark:bg-background-emphasis">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            <span className="font-space-grotesk font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
            Healthcare Web Solutions
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary dark:text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Comprehensive web development services designed specifically for medical practices, clinics, and healthcare
            organizations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-background-subtle dark:bg-background rounded-3xl border border-border dark:border-border-subtle overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} visualization`}
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
                  <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.stats}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-text-secondary dark:text-text-secondary mb-6 text-lg leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      <span className="text-text-secondary dark:text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-background-subtle dark:bg-background text-text-secondary dark:text-text-secondary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-text-primary-foreground py-3 text-base font-medium">
                  <Link href='contact'>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" asChild className="px-8 py-4 text-lg bg-transparent">
            <Link href="services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
