import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { CarouselForReviews } from "./testMonialsslider"

export function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "Codezeo built our patient portal and practice management system. Our efficiency increased 50% and patients love the convenience of 24/7 access to their records.",
      author: "Dr. Sarah Martinez",
      role: "Family Medicine Physician",
      practice: "Wellness Family Clinic",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      content:
        "Their telemedicine platform helped us continue serving patients during the pandemic. HIPAA-compliant, easy to use, and excellent support from their healthcare IT team.",
      author: "Dr. Michael Chen",
      role: "Internal Medicine",
      practice: "Metro Health Associates",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      content:
        "The team understands healthcare workflows perfectly. Our new system integrates seamlessly with our existing EMR and has improved our patient satisfaction scores significantly.",
      author: "Lisa Rodriguez",
      role: "Practice Manager",
      practice: "Advanced Care Specialists",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="lg:py-20 py-10 bg-background dark:bg-background-emphasis">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="font-space-grotesk font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
            What Healthcare Providers Say
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary dark:text-text-secondary max-w-3xl mx-auto">
            Real results from medical practices that transformed their operations with our healthcare solutions.
          </p>
        </div>



        <CarouselForReviews />

      </div>
    </section>
  )
}
