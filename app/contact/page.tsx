'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You'll want to add actual form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-blue-900/30 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our team for any inquiries or support
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+234 123 456 7890</p>
              <p className="text-gray-600">Mon-Fri 9am-5pm</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@solartech.com</p>
              <p className="text-gray-600">support@solartech.com</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">123 Solar Street</p>
              <p className="text-gray-600">Lagos, Nigeria</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <div className="h-96 bg-gray-200">
              {/* Add your map integration here */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map Integration Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
