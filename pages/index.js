import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Home() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ROI-Driven Digital Marketing That Delivers Results</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Helping businesses grow with performance marketing, SEO, and social media strategies that actually convert.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button>Get Free Strategy Call</Button>
            <a href="/case-studies" className="px-4 py-2 rounded-full border">See Case Studies</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card><h3 className="font-semibold">Performance Marketing</h3><p className="text-sm text-gray-600">Google & Meta Ads that bring qualified leads.</p></Card>
            <Card><h3 className="font-semibold">SEO & Website Growth</h3><p className="text-sm text-gray-600">Rank higher with SILO-based SEO & optimized websites.</p></Card>
            <Card><h3 className="font-semibold">Social Media</h3><p className="text-sm text-gray-600">Grow your brand & engage your audience.</p></Card>
            <Card><h3 className="font-semibold">Graphic Design</h3><p className="text-sm text-gray-600">Creative assets that convert.</p></Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}
