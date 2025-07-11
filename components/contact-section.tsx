import { ContactForm } from "@/components/contact-form"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-background-subtle dark:bg-background-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-16">
          {/* Header */}
          <div className="text-center lg:text-left mb-16 lg:mb-0 lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="font-space-grotesk font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
              Ready to Transform Your Medical Practice?
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Connect with our healthcare IT specialists to discuss your practice needs and explore how we can improve
              patient care and operational efficiency.
            </p>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-background dark:bg-background-subtle rounded-2xl p-8 lg:p-12 border border-border dark:border-border-subtle shadow-sm">
              <div className="flex items-start space-x-6 mb-8">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Dr. Sarah Johnson, Healthcare IT Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-2">
                    Dr. Sarah Johnson
                  </h3>
                  <p className="text-primary font-medium mb-2">Healthcare IT Director</p>
                  <p className="text-text-secondary dark:text-text-secondary leading-relaxed">
                    I'll personally review your practice requirements and connect you with the right healthcare IT
                    specialists within 4 hours.
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
