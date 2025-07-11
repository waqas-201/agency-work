export const metadata = {
  title: "Small Practice Solutions | SRIXUS  Solutions",
  description: "Tailored healthcare IT solutions for small medical practices with 1-5 providers.",
}

export default function SmallPracticesPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-space-grotesk font-bold text-text-primary mb-6">Small Practice Solutions</h1>
          <p className="text-xl text-text-secondary mb-8">
            Affordable, scalable healthcare IT solutions designed specifically for small medical practices.
          </p>
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-text-secondary">
              We're developing specialized solutions for small practices. Contact us to discuss your needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
