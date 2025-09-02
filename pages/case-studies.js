import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'

export default function CaseStudies() {
  const studies = [
    {title: 'EdTech – Admissions 3-phase', bullets: ['Pre-launch buzz','Logo reveal','Admission lead-gen'], result: '4000+ leads, 1200+ applications'},
    {title: 'Healthcare – Awareness & Leads', bullets: ['Content-led','SEO+Paid','Influencer'], result: '35% higher lead quality, 40% lower CPL'},
    {title: 'Events – Ticket Sales', bullets: ['Creative campaigns','Community push','Retargeting'], result: '5000+ tickets sold'},
  ];

  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-6">Real Results. Proven Success.</h1>
          <p className="text-center text-gray-600 mb-8">₹10Cr+ ad spend managed. 30-40% growth delivered for clients across industries.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {studies.map(s => (
              <Card key={s.title}>
                <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-gray-700 mb-3">{s.bullets.join(' • ')}</p>
                <div className="text-green-600 font-semibold">{s.result}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
