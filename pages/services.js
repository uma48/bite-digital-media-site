import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Services() {
  const services = [
    { title: 'Performance Marketing', desc: 'ROI-first paid media across Google, Meta & YouTube' },
    { title: 'SEO & Organic Growth', desc: 'Technical SEO, content silos & long-term visibility' },
    { title: 'Social Media Marketing', desc: 'Brand storytelling and community growth' },
    { title: 'Website & Landing Pages', desc: 'Fast, conversion-focused web experiences' },
    { title: 'Marketing Automation & CRM', desc: 'Nurture flows, scoring and lead governance' },
    { title: 'Analytics & Growth Strategy', desc: 'Data systems that unlock repeatable growth' },
    { title: 'Graphic Design', desc: 'Ads, social, branding and campaign creatives' },
  ];

  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-6">Comprehensive Digital Marketing Services</h1>
          <p className="text-center text-gray-600 mb-8">End-to-end services that combine strategy, creative and execution.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(s => <Card key={s.title}><h3 className="font-semibold">{s.title}</h3><p className="text-sm text-gray-600">{s.desc}</p><a href="/contact" className="text-blue-600 mt-3 inline-block">Request Proposal →</a></Card>)}
          </div>
        </div>
      </section>
    </Layout>
  )
}
