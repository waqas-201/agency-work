export const metadata = {
  title: "Healthcare Analytics | MedTech Solutions",
  description: "Advanced healthcare analytics and reporting solutions for medical practices.",
}

export default function AnalyticsPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-space-grotesk font-bold text-text-primary mb-6">Healthcare Analytics</h1>
          <p className="text-xl text-text-secondary mb-8">
            Data-driven insights and analytics dashboards to optimize practice performance and patient outcomes.
          </p>
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-text-secondary">
              We're developing powerful analytics solutions. Contact us to learn about our healthcare data insights.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
