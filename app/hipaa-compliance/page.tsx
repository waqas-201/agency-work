export const metadata = {
  title: "HIPAA Compliance | MedTech Solutions",
  description: "Learn about our HIPAA-compliant development practices and security measures.",
}

export default function HIPAACompliancePage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-space-grotesk font-bold text-text-primary mb-6">HIPAA Compliance</h1>
            <p className="text-xl text-text-secondary">
              Our commitment to healthcare data security and HIPAA compliance in every solution we build.
            </p>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Our HIPAA Compliance Approach</h2>
            <div className="space-y-6 text-text-secondary">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Data Encryption</h3>
                <p>
                  All patient data is encrypted both in transit and at rest using industry-standard encryption
                  protocols.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">Access Controls</h3>
                <p>
                  Strict role-based access controls ensure only authorized personnel can access patient information.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">Audit Trails</h3>
                <p>Comprehensive logging and audit trails track all access to patient data for compliance reporting.</p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">Regular Security Assessments</h3>
                <p>We conduct regular security assessments and penetration testing to ensure ongoing compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
