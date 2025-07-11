export const metadata = {
  title: "Healthcare IT Blog | MedTech Solutions",
  description: "Latest insights on healthcare technology, HIPAA compliance, and practice optimization.",
}

export default function BlogPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-space-grotesk font-bold text-text-primary mb-6">Healthcare IT Blog</h1>
          <p className="text-xl text-text-secondary mb-8">
            Latest insights on healthcare technology, HIPAA compliance, and medical practice optimization.
          </p>
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-text-secondary">
              We're preparing valuable healthcare IT content. Subscribe to our newsletter to be notified when we launch.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
