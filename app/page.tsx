import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Solar Installation",
      description: "Harness clean, renewable energy with our professional solar installations",
      icon: "⚡",
    },
    {
      title: "CCTV & Security",
      description: "Advanced surveillance systems for complete peace of mind",
      icon: "🎥",
    },
    {
      title: "Electric Fencing",
      description: "Secure perimeter protection for your property",
      icon: "🔒",
    },
    {
      title: "Fire Detection",
      description: "Early warning systems to protect life and property",
      icon: "🔥",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Power Your Future with Smart Energy Solutions
            </h1>
            <p className="text-xl mb-8">
              Professional installation services for solar, security, and electrical systems. 
              Transform your property with cutting-edge technology.
            </p>
            <div className="space-x-4">
              <Link 
                href="/quote" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your energy and security needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and quote
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
