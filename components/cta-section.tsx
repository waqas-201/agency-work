import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="lg:py-16 py-10 bg-gradient-to-br from-primary to-primary/90 text-text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold mb-8">
          Ready to Transform Your Medical Practice?
        </h2>

        <p className="text-xl lg:text-2xl mb-12 text-text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
          Let's discuss how we can improve your patient care and practice efficiency with custom healthcare web
          solutions that are HIPAA-compliant and built for medical professionals.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-background text-primary hover:bg-background/90 px-8 py-4 text-lg font-semibold"
          >
            <Link href="#contact">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Healthcare Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-border-subtle text-text-primary-foreground hover:bg-background/10 px-8 py-4 text-lg font-semibold bg-transparent"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call: (555) MED-TECH
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-text-primary-foreground/80">HIPAA Compliant</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-text-primary-foreground/80">Medical IT Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">&lt;4hrs</div>
            <div className="text-text-primary-foreground/80">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}
