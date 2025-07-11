export const metadata = {
  title: "Privacy Policy | MedTech Solutions",
  description: "Our privacy policy and commitment to protecting healthcare data.",
}

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-space-grotesk font-bold text-text-primary mb-6">Privacy Policy</h1>
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <p className="text-text-secondary mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <div className="space-y-6 text-text-secondary">
              <p>
                MedTech Solutions is committed to protecting the privacy and security of healthcare data. This privacy
                policy outlines how we collect, use, and protect information in compliance with HIPAA regulations.
              </p>

              <h2 className="text-xl font-semibold text-text-primary">Information We Collect</h2>
              <p>
                We only collect information necessary to provide healthcare IT services and maintain HIPAA compliance.
              </p>

              <h2 className="text-xl font-semibold text-text-primary">How We Use Information</h2>
              <p>
                All healthcare data is used solely for the purpose of providing medical IT services and is protected
                under HIPAA regulations.
              </p>

              <h2 className="text-xl font-semibold text-text-primary">Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption, access controls, and regular
                security audits to protect healthcare data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
