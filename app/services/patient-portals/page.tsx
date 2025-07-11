import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Clock,
  Users,
  CheckCircle,
  Star,
  Calendar,
  MessageSquare,
  FileText,
  CreditCard,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Patient Portal Development | SRIXUS  Solutions",
  description:
    "HIPAA-compliant patient portals for secure appointment scheduling, medical records access, and patient communication.",
}

export default function PatientPortalsPage() {
  const features = [
    {
      icon: Calendar,
      title: "Online Appointment Scheduling",
      description: "24/7 appointment booking with automated confirmations and reminders",
      benefits: ["Reduce phone calls by 60%", "Decrease no-shows by 40%", "Improve patient satisfaction"],
    },
    {
      icon: FileText,
      title: "Medical Records Access",
      description: "Secure access to lab results, imaging, and medical history",
      benefits: ["HIPAA-compliant document sharing", "Real-time lab results", "Complete medical history"],
    },
    {
      icon: MessageSquare,
      title: "Secure Messaging",
      description: "Direct communication between patients and healthcare providers",
      benefits: ["Encrypted messaging", "File attachments", "Message threading"],
    },
    {
      icon: CreditCard,
      title: "Online Bill Pay",
      description: "Convenient payment processing with multiple payment options",
      benefits: ["Faster payments", "Automated billing", "Payment plans"],
    },
  ]

  const benefits = [
    {
      stat: "60%",
      description: "Reduction in administrative calls",
      icon: Users,
    },
    {
      stat: "40%",
      description: "Decrease in no-show appointments",
      icon: Calendar,
    },
    {
      stat: "85%",
      description: "Patient satisfaction increase",
      icon: Star,
    },
    {
      stat: "24/7",
      description: "Patient access availability",
      icon: Clock,
    },
  ]

  const testimonials = [
    {
      quote:
        "Our patient portal has transformed how we interact with patients. Administrative calls dropped by 60% and patient satisfaction scores increased significantly.",
      author: "Dr. Maria Rodriguez",
      role: "Family Medicine Physician",
      practice: "Wellness Family Clinic",
      rating: 5,
    },
    {
      quote:
        "The secure messaging feature has improved our patient communication tremendously. Patients love being able to ask questions and receive responses quickly.",
      author: "Jennifer Chen",
      role: "Practice Manager",
      practice: "Metro Health Associates",
      rating: 5,
    },
  ]

  const pricingTiers = [
    {
      name: "Essential Portal",
      price: "$15,000",
      description: "Perfect for small practices",
      features: [
        "Online appointment scheduling",
        "Basic patient messaging",
        "Medical records access",
        "Mobile responsive design",
        "HIPAA compliance",
        "6 months support",
      ],
      popular: false,
    },
    {
      name: "Complete Portal",
      price: "$25,000",
      description: "Comprehensive patient engagement",
      features: [
        "Everything in Essential",
        "Online bill pay integration",
        "Prescription refill requests",
        "Lab results portal",
        "Patient education library",
        "12 months support",
        "Staff training included",
      ],
      popular: true,
    },
    {
      name: "Enterprise Portal",
      price: "Custom",
      description: "Multi-location practices",
      features: [
        "Everything in Complete",
        "Multi-location support",
        "Advanced analytics",
        "Custom integrations",
        "White-label branding",
        "24/7 priority support",
        "Dedicated account manager",
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
                <Users className="w-4 h-4 mr-2" />
                <span className="font-space-grotesk font-semibold">Patient Portal Development</span>
              </div>

            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold text-text-primary dark:text-text-primary leading-tight mb-6">
              Empower Patients with
              <span className="block text-primary">Secure Online Access</span>
            </h1>

            <p className="text-xl text-text-secondary dark:text-text-secondary mb-8 leading-relaxed">
              HIPAA-compliant patient portals that improve patient engagement, reduce administrative burden, and
              enhance practice efficiency with 24/7 online access.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-text-primary-foreground px-8 py-4 text-lg">
                <Link href="#contact">
                  Start Your Portal Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent">
                View Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-text-primary dark:text-text-primary">{benefit.stat}</div>
                  <div className="text-sm text-text-secondary dark:text-text-tertiary">{benefit.description}</div>
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
                  <div className="ml-4 text-sm text-text-secondary dark:text-text-tertiary font-mono">patient-portal.com</div>
                </div>
              </div>
              <div className="p-6">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Patient portal dashboard interface"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  priority
                />
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
              Complete Patient Portal Features
            </h2>
            <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
              Everything your patients need in one secure, easy-to-use platform.
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
              What Healthcare Providers Say
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

      {/* Pricing */}
      <section className="py-20 lg:py-24 bg-background dark:bg-background-emphasis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
              Patient Portal Investment
            </h2>
            <p className="text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
              Transparent pricing for patient portal solutions that fit your practice size and needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-background dark:bg-background-emphasis rounded-2xl border-2 p-8 ${tier.popular
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
                  className={`w-full py-3 ${tier.popular
                    ? "bg-primary hover:bg-primary/90 text-text-primary-foreground"
                    : "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-text-primary-foreground"
                    }`}
                >
                  <Link href="#contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            Ready to Launch Your Patient Portal?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Let's discuss your practice needs and create a patient portal that improves engagement and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <Link href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </main >
  )
}
