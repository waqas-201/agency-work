export const metadata = {
  title: "Multi-Location Clinic Solutions | MedTech Solutions",
  description: "Healthcare IT solutions for multi-location clinics and medical groups.",
}

export default function ClinicsPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-space-grotesk font-bold text-text-primary mb-6">Multi-Location Clinic Solutions</h1>
          <p className="text-xl text-text-secondary mb-8">
            Comprehensive healthcare IT solutions for clinics with multiple locations and complex workflows.
          </p>
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-text-secondary">
              We're building enterprise solutions for multi-location clinics. Contact us to learn more.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
