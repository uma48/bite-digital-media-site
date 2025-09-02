import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Driving Growth Through Data‑Driven Marketing Excellence</h1>
            <p className="text-gray-700 mb-4">With 4+ years of hands‑on experience and ₹10Cr+ in advertising budget managed across platforms, we design and execute scalable campaigns that move the needle.</p>
            <div className="mt-6 flex gap-3">
              <Button>Work With Us</Button>
              <a href="/services" className="px-4 py-2 border rounded-full">View Services</a>
            </div>
          </div>
          <div>
            <Card>
              <div className="grid grid-cols-2 gap-4">
                <div><div className="text-sm text-gray-500">Ad Budget Managed</div><div className="text-2xl font-semibold">₹10Cr+</div></div>
                <div><div className="text-sm text-gray-500">Avg. Client Growth</div><div className="text-2xl font-semibold">30–40%</div></div>
                <div className="col-span-2 text-sm text-gray-600 mt-4">Monthly reporting, SLA-driven delivery and clear ROI targets with every engagement.</div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}
