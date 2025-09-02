export default function Header() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Bite Digital Media</div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/services" className="hover:text-blue-600">Services</a>
          <a href="/case-studies" className="hover:text-blue-600">Case Studies</a>
          <a href="/blog" className="hover:text-blue-600">Insights</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <div className="hidden md:block">
          <a href="/contact" className="px-4 py-2 bg-blue-600 text-white rounded-full">Book a Call</a>
        </div>
      </div>
    </header>
  )
}
