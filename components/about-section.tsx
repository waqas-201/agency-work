import { Users, Clock, Shield, Stethoscope, Hospital, HeartHandshake } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, value: "15+", label: "Healthcare Specialists", color: "text-blue-600" },
    { icon: Hospital, value: "100+", label: "Medical Practices Served", color: "text-green-600" },
    { icon: Clock, value: "5+", label: "Years in Healthcare", color: "text-purple-600" },
    { icon: Shield, value: "100%", label: "HIPAA Compliant", color: "text-orange-600" },
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
    <section id="about" className="lg:py-20 py-10 bg-background-subtle dark:bg-background-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <HeartHandshake className="w-4 h-4 mr-2" />
              <span className="font-space-grotesk font-semibold">About Us</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold text-text-primary dark:text-text-primary mb-6">
              Why Healthcare Providers Choose Us
            </h2>

            <p className="text-xl lg:text-2xl text-text-secondary dark:text-text-secondary mb-12 leading-relaxed">
              We're a specialized team of healthcare web developers who understand the unique challenges of medical
              practices and patient care.
            </p>

            <div className="space-y-8">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary mb-3">{item.title}</h3>
                    <p className="text-text-secondary dark:text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-background dark:bg-background-subtle rounded-2xl border border-border dark:border-border-subtle hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-background-subtle dark:bg-background rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-text-primary dark:text-text-primary mb-3">{stat.value}</div>
                <div className="text-sm text-text-secondary dark:text-text-tertiary leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
