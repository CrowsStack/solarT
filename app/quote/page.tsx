'use client';
import { useState } from 'react';

export default function Quote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    phone: '',
    address: '',
    
    // Project Details
    serviceType: '',
    projectType: 'residential',
    propertySize: '',
    budget: '',
    
    // Additional Information
    timeline: '',
    description: '',
    preferredContact: 'email'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Add actual form submission logic here
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-blue-900/30 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Get a Quote</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Fill out the form below and we'll provide you with a detailed quote for your project
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex justify-between items-center">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= item ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {item}
                    </div>
                    {item < 3 && (
                      <div className={`h-1 w-24 sm:w-32 md:w-48 ${
                        step > item ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm">Personal Info</span>
                <span className="text-sm">Project Details</span>
                <span className="text-sm">Additional Info</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Project Details</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Service Type
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="solar">Solar Installation</option>
                        <option value="cctv">CCTV Systems</option>
                        <option value="intercom">Intercom Systems</option>
                        <option value="electric-fence">Electric Fencing</option>
                        <option value="fire-detection">Fire Detection</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Property Size (sq ft)
                      </label>
                      <input
                        type="text"
                        name="propertySize"
                        value={formData.propertySize}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      >
                        <option value="">Select budget range</option>
                        <option value="below-500k">Below ₦500,000</option>
                        <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                        <option value="1m-5m">₦1,000,000 - ₦5,000,000</option>
                        <option value="above-5m">Above ₦5,000,000</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Contact Method
                    </label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Previous
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                  >
                    Submit Quote Request
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
