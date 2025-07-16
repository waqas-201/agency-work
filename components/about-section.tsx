"use client"

import { useInView } from "react-intersection-observer"
import { Users, Clock, Shield, Stethoscope, Hospital, HeartHandshake } from "lucide-react"
import { AnimatedNumber } from "./motion-primitives/animated-number"

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // only triggers when 30% is visible
  })

  const stats = [
    { icon: Users, value: 15, suffix: "+", label: "Healthcare Specialists", color: "text-blue-600" },
    { icon: Hospital, value: 100, suffix: "+", label: "Medical Practices Served", color: "text-green-600" },
    { icon: Clock, value: 5, suffix: "+", label: "Years in Healthcare", color: "text-purple-600" },
    { icon: Shield, value: 100, suffix: "%", label: "HIPAA Compliant", color: "text-orange-600" },
  ]

  const expertise = [
    {
      icon: Shield,
      title: "HIPAA Compliance Expertise",
      description: "We ensure all solutions meet HIPAA requirements for patient data protection and privacy.",
    },
    {
      icon: Stethoscope,
      title: "Healthcare-First Approach",
      description: "Purpose-built solutions for medical workflows, patient care, and practice efficiency.",
    },
    {
      icon: HeartHandshake,
      title: "Ongoing Medical IT Support",
      description: "Dedicated support team familiar with healthcare operations and compliance requirements.",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-10 sm:py-14 md:py-16 lg:py-20 bg-background-subtle dark:bg-background-subtle scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left - Text Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <HeartHandshake className="w-4 h-4 mr-2" />
              <span className="font-space-grotesk font-semibold">About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-4 sm:mb-6">
              Why Healthcare Providers Choose Us
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-text-secondary dark:text-text-secondary mb-10 leading-relaxed">
              We're a specialized team of healthcare web developers who understand the unique challenges of medical
              practices and patient care.
            </p>

            <div className="space-y-6 sm:space-y-8">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-text-primary dark:text-text-primary mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary dark:text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 bg-background dark:bg-background-subtle rounded-2xl border border-border dark:border-border-subtle hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-background-subtle dark:bg-background rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color}`} />
                </div>

                <div className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-text-primary mb-2 sm:mb-3 flex justify-center items-baseline gap-1">
                  {inView ? (
                    <>
                      <AnimatedNumber
                        value={stat.value}
                        springOptions={{ damping: 14, stiffness: 120 }} // slower spring
                        as="span"
                      />
                      <span>{stat.suffix}</span>
                    </>
                  ) : (
                    <>
                      <span>{stat.value}</span>
                      <span>{stat.suffix}</span>
                    </>
                  )}
                </div>

                <div className="text-xs sm:text-sm text-text-secondary dark:text-text-tertiary leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
