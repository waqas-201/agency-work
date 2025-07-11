import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Contact SRIXUS  Solutions - Healthcare IT Consultation",
  description:
    "Ready to modernize your medical practice? Get in touch with our healthcare IT team for a free consultation.",
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Healthcare Hotline",
      details: ["+1 (555) MED-TECH"],
    },
    {
      icon: Mail,
      title: "Medical Inquiries",
      details: ["healthcare@SRIXUS solutions.com"],
    },
    {
      icon: MapPin,
      title: "Healthcare Hub",
      details: ["Medical District, TX"],
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: ["24/7 for Critical Systems"],
    },
  ]

  return (
    <main className="pt-16">
      <section id="contact" className="py-24 bg-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-6xl font-space-grotesk font-bold text-text-primary mb-6">
              Let's Transform Your Medical Practice
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Ready to improve patient care and practice efficiency? Get in touch and let's create HIPAA-compliant
              solutions together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-space-grotesk font-semibold text-text-primary mb-6">
                Send us a healthcare inquiry
              </h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-space-grotesk font-semibold text-text-primary mb-6">Get in touch</h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  We'd love to hear about your medical practice needs. Send us a message and we'll respond within 4
                  hours.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-background-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-text-secondary">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-background-subtle rounded-xl p-6">
                <h3 className="font-semibold text-text-primary mb-4">Prefer to schedule a healthcare consultation?</h3>
                <p className="text-text-secondary mb-4">
                  Book a 30-minute consultation to discuss your practice needs in detail.
                </p>
                <a href="#" className="inline-flex items-center text-text-primary font-medium hover:underline">
                  Schedule a healthcare consultation →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
