export default function About() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About SolarTech Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in renewable energy and security solutions. We bring years of expertise
              and commitment to every installation project.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide sustainable and secure solutions that empower homes and businesses
                while contributing to a greener future. We strive to deliver excellence in
                every installation, ensuring customer satisfaction and environmental responsibility.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading provider of integrated solar and security solutions,
                recognized for our innovation, reliability, and commitment to sustainable
                practices in every community we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our certified professionals bring years of experience and expertise
                to every project we undertake.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Quality Solutions</h3>
              <p className="text-gray-600">
                We use only the highest quality materials and latest technology
                to ensure lasting performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-2">Reliable Support</h3>
              <p className="text-gray-600">
                Our commitment doesn't end with installation - we provide ongoing
                support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">Technical Director</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Michael Brown</h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
