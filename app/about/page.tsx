'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { COMPANY } from '../constants/company';
import CoreValue from '../components/CoreValue';
import VisionMission from '../components/VisionMission';
import {
  QualityIcon,
  ExcellenceIcon,
  IntegrityIcon,
  InnovationIcon,
  SustainabilityIcon
} from '../components/icons';

const coreValues = [
  {
    title: "Quality",
    description: "Quality always! We offer high-quality service using top-grade materials for all our projects. We maintain top quality always through excellent Quality Assurance and Quality Control measures put in place. We understand and abide by the quality procedures of the regions we operate.",
    icon: QualityIcon
  },
  {
    title: "Excellence",
    description: "The best or nothing! We always strive to be the best by always delivering excellent and perfect projects. We follow due process and use the best practices to achieve our results.",
    icon: ExcellenceIcon
  },
  {
    title: "Integrity",
    description: "We maintain customer loyalty by staying true to an agreement and sharing information that will benefit and add value to our customers.",
    icon: IntegrityIcon
  },
  {
    title: "Innovation",
    description: "We stay abreast of technology with good investment in research and development and harnessing the skills and experience of our in-house engineers. We strive to continue to lead by offering cost-effective and reliable solar power and security solutions enhanced by technology.",
    icon: InnovationIcon
  },
  {
    title: "Sustainability",
    description: "As a business, we continually strive to conduct our businesses by following measures and procedures that minimize environmental impact. Reduction of carbon footprint and implementation of a more sustainable and environmentally friendly approach is at the core of all our operations and processes.",
    icon: SustainabilityIcon
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white/80 backdrop-blur-sm">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/about/hero-bg.jpg"
            alt="About Us Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Learn About {COMPANY.FULL_NAME}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl"
          >
            World-class energy, automation and security systems organization
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {COMPANY.FULL_NAME} specializes in solar energy and security solutions for residential and industrial facilities. We bring technologically inclined solutions that enhance your lifestyle and business. Our innovative technology adds value to your property while providing reliable power and security.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The need to add value to your facility by introducing technology led to the incorporation of {COMPANY.SHORT_NAME} in 2014. Since then, we have been at the forefront of technology advancement by introducing systems and technologies for securing, protecting, and improving the values of facilities and homes. We are in partnership with renowned companies that provide us access to top-class products, efficient support and field-based training to foster our growth and maintain customer loyalty.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                At {COMPANY.SHORT_NAME}, we bring the best application of technology to enhance your property's security and power solutions. We provide real-time monitoring and reliable power systems that you can count on. You can count on our expertise and experience to meet and surpass your project goals.
              </p>
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <div className="space-y-16 mb-16">
            <VisionMission
              type="vision"
              text="Our vision is to be the leading provider of integrated solar energy and security solutions, revolutionizing the way people experience their living and working spaces."
              image="/about/vision.jpg"
              isImageLeft={true}
            />
            <VisionMission
              type="mission"
              text="Our mission is to provide integrated solar energy and security solutions for a smarter and more sustainable future."
              image="/about/mission.jpg"
              isImageLeft={false}
            />
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">
                Our business core values are underpinned by these five principles
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <CoreValue
                  key={value.title}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Track Record */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Track Record</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are rightly positioned to render relevant support and effective services to the oil & gas and power sectors in Nigeria. As an emerging technology company in Nigeria, we have undertaken various projects for both private and commercial establishments at both onshore and offshore locations. Since incorporation in 2014, we have completed over 300 projects and installations in different parts of Nigeria, which range from Solar Inverter installation, CCTV installation, Procurements, and several other services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
