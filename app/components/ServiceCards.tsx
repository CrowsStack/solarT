'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '../constants/services';

export default function ServiceCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">What We Do?</h2>
          <p className="text-xl text-blue-800 max-w-4xl mx-auto">
            Our comprehensive services encompass solar energy and security solutions. 
            With our solar expertise, we design and install efficient solar systems to power your space. 
            Our cutting-edge security systems provide robust protection for your property. 
            Experience reliable power and security solutions for a safer and sustainable environment.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  priority={index < 6}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {<service.icon />}
                  </div>
                  <h3 className="text-xl font-semibold text-shadow">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <p className="text-blue-800 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-2 transition-all duration-300"
                >
                  Read More
                  <svg 
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
}
