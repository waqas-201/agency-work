export const metadata = {
  title: "About MedTech Solutions | Healthcare IT Specialists",
  description: "Learn about our team of healthcare IT specialists dedicated to transforming medical practices.",
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-space-grotesk font-bold text-text-primary mb-6">About MedTech Solutions</h1>
            <p className="text-xl text-text-secondary">
              We're healthcare IT specialists dedicated to transforming medical practices through technology.
            </p>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-text-secondary mb-6">
              To empower healthcare providers with HIPAA-compliant technology solutions that improve patient care,
              streamline operations, and enhance practice efficiency.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
            <ul className="text-text-secondary space-y-2">
              <li>• HIPAA-compliant web development</li>
              <li>• EMR/EHR system integration</li>
              <li>• Patient portal development</li>
              <li>• Telemedicine platforms</li>
              <li>• Healthcare analytics and reporting</li>
              <li>• Medical practice management systems</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
