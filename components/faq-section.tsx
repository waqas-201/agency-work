import { HelpCircle, ArrowRight, ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Are your solutions HIPAA compliant?",
      answer:
        "Yes, all our healthcare solutions are built with HIPAA compliance from the ground up, including encrypted data transmission, secure hosting, proper access controls, and comprehensive audit trails.",
    },
    {
      question: "Can you integrate with our existing EMR system?",
      answer:
        "We have extensive experience integrating with major EMR systems like Epic, Cerner, Allscripts, and athenahealth using HL7 FHIR standards and custom APIs. We'll assess your current system and provide a seamless integration plan.",
    },
    {
      question: "How long does a patient portal take to develop?",
      answer:
        "A basic patient portal typically takes 6–10 weeks, while comprehensive practice management systems take 12–16 weeks depending on features and integrations. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support for medical practices?",
      answer:
        "Yes, we offer 24/7 technical support specifically designed for healthcare operations, regular security updates, ongoing maintenance, and dedicated medical IT account management for all our healthcare clients.",
    },
    {
      question: "What's the cost for a healthcare web solution?",
      answer:
        "Projects typically range from $15K–$75K depending on complexity and features. Patient portals start at $15K, practice management systems at $35K, and enterprise solutions are custom quoted based on your specific needs.",
    },
  ]

  return (
    <section className="lg:py-20 py-10 bg-background-subtle dark:bg-background-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span className="font-space-grotesk font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
            Healthcare Development FAQs
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary dark:text-text-secondary">
            Common questions about our healthcare web solutions and development process.
          </p>
        </div>

        <Accordion type="single" collapsible className="flex w-full flex-col">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border rounded-2xl my-1">
              <AccordionTrigger className="w-full py-4 px-6 text-left text-text-primary dark:text-text-primary group">
                <div className="flex items-center">
                  <ChevronDown className="h-5 w-5 text-text-tertiary transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  <div className="ml-3 text-lg font-medium">{faq.question}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-top">
                <p className="pl-10 pr-4 pb-4 text-text-secondary dark:text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-16">
          <p className="text-text-secondary dark:text-text-secondary mb-6 text-lg">
            Still have questions about our healthcare solutions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-text-primary-foreground px-8 py-4 rounded-xl font-medium transition-colors text-lg"
          >
            Get Healthcare Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
