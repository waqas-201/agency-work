"use client"

import { useState } from "react"
import {
  MessageSquare,
  Lightbulb,
  Code,
  Rocket,
  ChevronDown,
  Clock,
  Users,
} from "lucide-react"
import Image from "next/image"

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps = [
    {
      icon: MessageSquare,
      title: "Healthcare Assessment",
      subtitle: "Understanding your practice needs",
      description:
        "We analyze your current workflows, patient needs, compliance requirements, and integration needs with existing systems.",
      details: [
        "Practice workflow analysis and EMR integration planning",
        "HIPAA compliance assessment and security requirements",
        "Patient journey mapping and user experience design",
        "Technical architecture for healthcare data handling",
      ],
      duration: "1-2 weeks",
      deliverables:
        "Healthcare requirements, HIPAA compliance plan, integration roadmap",
      image: "/placeholder.svg?height=300&width=400",
      imageAlt:
        "Healthcare team meeting discussing patient portal requirements and workflows",
    },
    {
      icon: Lightbulb,
      title: "Solution Design & Planning",
      subtitle: "Crafting compliant solutions",
      description:
        "We design user-friendly interfaces and plan secure data workflows, ensuring HIPAA compliance and optimal patient care.",
      details: [
        "Secure data storage and transmission protocols",
        "User interface (UI) and user experience (UX) design for healthcare professionals and patients",
        "Integration with EMR/EHR systems and other healthcare platforms",
        "Compliance with healthcare regulations (HIPAA, GDPR)",
      ],
      duration: "2-3 weeks",
      deliverables:
        "Design system, prototypes, security architecture, compliance documentation",
      image: "/placeholder.svg?height=300&width=400",
      imageAlt: "Designer working on user interface mockups and prototypes",
    },
    {
      icon: Code,
      title: "Development & Implementation",
      subtitle: "Building secure healthcare applications",
      description:
        "We develop robust, scalable, and HIPAA-compliant applications, focusing on data security and seamless integration.",
      details: [
        "Agile development with regular sprint reviews",
        "Continuous integration and automated testing",
        "HIPAA compliance checks and security audits",
        "Cross-platform compatibility testing",
      ],
      duration: "4-8 weeks",
      deliverables:
        "Fully functional application, test reports, compliance documentation",
      image: "/placeholder.svg?height=300&width=400",
      imageAlt:
        "Developer coding on multiple monitors with clean, organized code",
    },
    {
      icon: Rocket,
      title: "Deployment & Support",
      subtitle: "Launching and maintaining your healthcare solution",
      description:
        "We ensure a smooth deployment and provide ongoing support, maintenance, and updates to keep your solution secure and compliant.",
      details: [
        "Production deployment and monitoring setup",
        "User training and documentation handover",
        "Performance monitoring and optimization",
        "Ongoing maintenance, security updates, and compliance monitoring",
      ],
      duration: "1 week + ongoing",
      deliverables:
        "Live application, monitoring dashboard, support plan",
      image: "/placeholder.svg?height=300&width=400",
      imageAlt:
        "Successful project launch with analytics dashboard showing positive metrics",
    },
  ]

  return (
    <section id="process" className="lg:py-20 py-10 bg-background dark:bg-background-emphasis">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-4">
            Our Healthcare Development Process
          </h2>
          <p className="text-xl text-text-secondary dark:text-text-secondary max-w-2xl mx-auto">
            A proven methodology designed specifically for healthcare projects with HIPAA compliance at every step.
          </p>
        </div>

        <div className="grid lg:grid-cols-1  ">
          {/* Process Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() =>
                  setActiveStep(activeStep === index ? null : index)
                }
                className={`group cursor-pointer transition-all duration-300 ${activeStep === index
                    ? "bg-background dark:bg-background-subtle shadow-lg border-primary/20"
                    : "bg-background-subtle dark:bg-background/50 hover:bg-background dark:hover:bg-background-subtle border-border dark:border-border-subtle"
                  } border rounded-xl overflow-hidden`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`relative flex-shrink-0 transition-all duration-300 ${activeStep === index ? "scale-110" : ""
                          }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${activeStep === index
                            ? "bg-primary text-white"
                            : "bg-gray-100 dark:bg-gray-700 text-primary"
                            }`}
                        >
                          <step.icon className="h-6 w-6" />
                        </div>
                        <div
                          className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${activeStep === index
                              ? "bg-primary text-white"
                              : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
                            }`}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-semibold transition-colors duration-300 ${activeStep === index
                            ? "text-primary"
                            : "text-text-primary dark:text-text-primary"
                            }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-text-secondary dark:text-text-tertiary text-sm">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${activeStep === index ? "rotate-180 text-primary" : ""
                        }`}
                    />
                  </div>
                </div>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${activeStep === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 pb-6 border-t border-border-subtle dark:border-border">
                    <div className="pt-6 space-y-4">
                      <p className="text-text-secondary dark:text-text-secondary">
                        {step.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-text-primary dark:text-text-primary mb-2 flex items-center text-sm">
                            <Users className="h-4 w-4 mr-2 text-primary" />
                            Key Activities
                          </h4>
                          <ul className="space-y-1">
                            {step.details.slice(0, 2).map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-start text-sm text-text-secondary dark:text-text-tertiary"
                              >
                                <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-text-primary dark:text-text-primary mb-1 flex items-center text-sm">
                              <Clock className="h-4 w-4 mr-2 text-primary" />
                              Timeline
                            </h4>
                            <p className="text-sm text-text-secondary dark:text-text-tertiary">
                              {step.duration}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Content */}
          {/* <div className="lg:sticky lg:top-24">
            <div className="bg-background-subtle dark:bg-background rounded-2xl overflow-hidden border border-border dark:border-border-subtle">
              <div className="aspect-video relative">
                <Image
                  src={steps[activeStep ?? 0]?.image}
                  alt={steps[activeStep ?? 0]?.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-text-primary-foreground">
                  <h3 className="font-semibold">
                    {steps[activeStep ?? 0]?.title}
                  </h3>
                  <p className="text-text-primary-foreground/90 text-sm">
                    {steps[activeStep ?? 0]?.subtitle}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary mb-4">
                  Project Timeline
                </h3>
                <div className="space-y-3">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-3 transition-colors duration-300 ${activeStep !== null && index <= activeStep
                          ? "bg-primary"
                          : "bg-border dark:bg-border-subtle"
                          }`}
                      ></div>
                      <div className="flex-1">
                        <div
                          className={`text-sm font-medium transition-colors duration-300 ${index === activeStep
                            ? "text-primary"
                            : "text-text-primary dark:text-text-primary"
                            }`}
                        >
                          {step.title}
                        </div>
                        <div className="text-xs text-text-secondary dark:text-text-tertiary">
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
