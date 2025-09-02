import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Blog() {
  const posts = [
    {title:'Mastering SEO in 2025', excerpt:'Learn how modern SEO strategies can boost visibility.', date:'Aug 12, 2025'},
    {title:'Meta Ads: Proven ROI Strategies', excerpt:'Best practices for high-performing Meta campaigns.', date:'Jul 28, 2025'},
    {title:'Creative Testing Framework', excerpt:'Run rapid creative experiments without waste.', date:'Jun 09, 2025'},
  ];

  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-4">Insights & Playbooks</h1>
          <p className="text-gray-600 mb-8">Actionable articles and deep-dive guides from real campaigns.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map(p => (
              <Card key={p.title}>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.excerpt}</p>
                <div className="text-xs text-gray-500 mt-3">{p.date}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
