export const metadata = {
  title: "Terms of Service | MedTech Solutions",
  description: "Terms of service for MedTech Solutions healthcare IT services.",
}

export default function TermsPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-space-grotesk font-bold text-text-primary mb-6">Terms of Service</h1>
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <p className="text-text-secondary mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <div className="space-y-6 text-text-secondary">
              <p>
                These terms of service govern your use of MedTech Solutions healthcare IT services and applications.
              </p>

              <h2 className="text-xl font-semibold text-text-primary">Service Agreement</h2>
              <p>
                By using our healthcare IT services, you agree to comply with HIPAA regulations and maintain the
                confidentiality of patient data.
              </p>

              <h2 className="text-xl font-semibold text-text-primary">HIPAA Compliance</h2>
              <p>
                All users must comply with HIPAA regulations when accessing or using our healthcare applications and
                systems.
              </p>

              <h2 className="text-xl font-semibold text-text-primary">Support and Maintenance</h2>
              <p>
                We provide ongoing support and maintenance for all healthcare IT solutions in accordance with our
                service level agreements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
