export const metadata = {
  title: "Healthcare IT Support | MedTech Solutions",
  description: "24/7 technical support for healthcare practices and medical IT systems.",
}

export default function SupportPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-space-grotesk font-bold text-text-primary mb-6">Healthcare IT Support</h1>
            <p className="text-xl text-text-secondary">
              24/7 technical support for your medical practice IT systems and healthcare applications.
            </p>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Support Options</h2>
            <div className="space-y-6 text-text-secondary">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Emergency Support</h3>
                <p>24/7 emergency support for critical medical system issues. Response time: &lt; 2 hours</p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">Standard Support</h3>
                <p>Business hours support for general questions and non-critical issues. Response time: &lt; 4 hours</p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">Training & Onboarding</h3>
                <p>Comprehensive training for your staff on new healthcare IT systems and workflows.</p>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-primary font-semibold">
                  For immediate support, call our healthcare hotline: +1 (555) MED-TECH
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
