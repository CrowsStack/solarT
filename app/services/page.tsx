export default function Services() {
  const services = [
    {
      title: "Solar Installation",
      description: "Professional installation of solar panels and complete solar power systems for homes and businesses. We handle everything from initial assessment to final setup.",
      features: [
        "Site assessment and system design",
        "High-efficiency solar panels",
        "Inverter installation",
        "Battery storage solutions",
        "System monitoring setup",
        "Maintenance services"
      ],
      icon: "⚡"
    },
    {
      title: "CCTV Systems",
      description: "State-of-the-art surveillance systems to keep your property secure. We offer both residential and commercial CCTV solutions.",
      features: [
        "HD and 4K cameras",
        "Night vision capability",
        "Remote monitoring",
        "Motion detection",
        "Cloud storage options",
        "Mobile app access"
      ],
      icon: "🎥"
    },
    {
      title: "Intercom Systems",
      description: "Modern intercom solutions for enhanced communication and security in homes and offices.",
      features: [
        "Video intercom systems",
        "Smartphone integration",
        "Multi-unit support",
        "Access control",
        "HD video quality",
        "Remote access"
      ],
      icon: "📞"
    },
    {
      title: "PTZ Cameras",
      description: "Advanced Pan-Tilt-Zoom cameras for comprehensive surveillance coverage.",
      features: [
        "360° coverage",
        "Automatic tracking",
        "Zoom capabilities",
        "Weather-resistant",
        "Night vision",
        "Smart motion detection"
      ],
      icon: "🔄"
    },
    {
      title: "Electric Fencing",
      description: "Secure perimeter protection systems for residential and commercial properties.",
      features: [
        "Professional installation",
        "Voltage monitoring",
        "Alarm integration",
        "Safety features",
        "Remote monitoring",
        "Maintenance service"
      ],
      icon: "🔒"
    },
    {
      title: "Fire Detection",
      description: "Comprehensive fire detection and alarm systems to protect life and property.",
      features: [
        "Smoke detectors",
        "Heat sensors",
        "24/7 monitoring",
        "Emergency response",
        "Regular testing",
        "Battery backup"
      ],
      icon: "🔥"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-blue-900/30 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive security and energy solutions for your home and business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900/30 backdrop-blur-sm py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today for a free consultation and quote
          </p>
          <a
            href="/quote"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
