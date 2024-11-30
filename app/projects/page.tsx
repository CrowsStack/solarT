'use client';
import { useState } from 'react';
import Image from 'next/image';
import ShortsCarousel from '../components/ShortsCarousel';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Commercial Solar Installation",
      category: "solar",
      description: "100kW solar system installation for office complex",
      image: "/projects/solar-commercial.jpg", // You'll need to add these images
      details: "Reduced energy costs by 60%",
      location: "Lagos Business District"
    },
    {
      title: "Residential Security System",
      category: "security",
      description: "Comprehensive home security installation",
      image: "/projects/security-home.jpg",
      details: "Integrated CCTV and access control",
      location: "Victoria Island"
    },
    {
      title: "Industrial Fire Detection",
      category: "fire",
      description: "Advanced fire detection system for warehouse",
      image: "/projects/fire-industrial.jpg",
      details: "24/7 monitoring with instant alerts",
      location: "Apapa Industrial Estate"
    },
    {
      title: "Apartment Complex Intercom",
      category: "intercom",
      description: "Smart intercom system for 50-unit complex",
      image: "/projects/intercom-apartment.jpg",
      details: "Mobile app integration",
      location: "Lekki Phase 1"
    },
    {
      title: "School Solar Power",
      category: "solar",
      description: "50kW solar installation with battery backup",
      image: "/projects/solar-school.jpg",
      details: "100% backup power solution",
      location: "Ikeja"
    },
    {
      title: "Mall Security Setup",
      category: "security",
      description: "Complete mall surveillance system",
      image: "/projects/security-mall.jpg",
      details: "PTZ cameras with AI detection",
      location: "Surulere Shopping Center"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'solar', label: 'Solar' },
    { id: 'security', label: 'Security' },
    { id: 'fire', label: 'Fire Detection' },
    { id: 'intercom', label: 'Intercom' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-blue-900/30 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our portfolio of successful installations and implementations
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/80 text-gray-800 hover:bg-blue-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="h-48 relative">
                  <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                  {/* Uncomment when you have actual images */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  /> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>📍 {project.location}</p>
                    <p>✨ {project.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shorts Carousel Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Quick Installation Guides
          </h2>
          <div className="relative pb-12">
            <ShortsCarousel />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900/30 backdrop-blur-sm py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
