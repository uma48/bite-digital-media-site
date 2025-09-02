import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Contact() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
          <p className="mb-6">Have questions or want to work together? Fill the form or reach out directly.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <Card>
            <h2 className="text-2xl font-semibold mb-4">Send a message</h2>
            <form className="space-y-3">
              <input className="w-full p-3 border rounded" placeholder="Your name"/>
              <input className="w-full p-3 border rounded" placeholder="Email"/>
              <input className="w-full p-3 border rounded" placeholder="Phone"/>
              <textarea className="w-full p-3 border rounded" rows="5" placeholder="Message"></textarea>
              <Button>Submit</Button>
            </form>
          </Card>

          <div className="space-y-4">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-semibold">Contact Info</h3>
              <p className="text-sm text-gray-600 mt-2">123 Business Street, City, Country</p>
              <p className="text-sm text-gray-600">+91 98765 43210</p>
              <p className="text-sm text-gray-600">info@yourbusiness.com</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-semibold">Follow</h3>
              <div className="flex gap-3 mt-3">
                <a className="text-blue-600">LinkedIn</a>
                <a className="text-blue-600">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
