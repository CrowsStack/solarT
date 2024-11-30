'use client';
import { motion } from 'framer-motion';
import ServiceDetail from '../components/ServiceDetail';
import { COMPANY } from '../constants/company';

const services = [
  {
    id: 'solar-panels',
    title: 'Solar Panel',
    description: 'We sell and install durable and highly efficient solar panels such as SunPower, Canadian panels, JinkoSolar, LG Solar, LONGi Solar, and Mission Solar Energy. We have Monocrystalline solar panels, Polycrystalline solar panels and Thin-film (amorphous) solar panels. Also available include panels of different watts ranging from 20 watts to 1000 watts.',
    imageUrl: '/services/solar-panels.jpg'
  },
  {
    id: 'inverters',
    title: 'Inverters',
    description: 'We have reliable and efficient inverters that produce steady voltage while regular amperages for sustaining the batteries. We install pure sinewave and hybrid inverters that delivers optimal performance. Inverters ranging from 2kva to 50kva are available upon demand.',
    imageUrl: '/services/inverters.jpg'
  },
  {
    id: 'batteries',
    title: 'Batteries',
    description: 'Strong batteries are the heart of every inverter installation. We have strong and deep-cycle batteries from different brands across the globe. We install maintenance-free solar batteries such as lithium-ion batteries. Lithium iron phosphate (LiFePO4) battery is safe, strong, not burnable and can deliver optimal output for 15 to 20 years. You can contact us today to receive quotes.',
    imageUrl: '/services/batteries.jpg'
  },
  {
    id: 'analog-network-camera',
    title: 'Analog & Network Camera',
    description: 'Vandal-proof camera with night vision and full colour, suitable for rugged conditions with the ability to cloak its viewing angle. Applicable in places where extreme security is important such as banks, offices and homes. We have the best video surveillance camera for outdoor purposes with audio capabilities with resolutions ranging from 1080p to 50mp and are compatible with top brands of DVR. Suitable for outdoor residential monitoring.',
    imageUrl: '/services/analog-camera.jpg'
  },
  {
    id: 'ptz-camera',
    title: 'PTZ Camera',
    description: 'We have cameras with extra capabilities to pan, tilt and zoom which provides more functionalities. They are capable of being controlled from remote locations to change directions and focus more on any object. Applicable in parking lots and open spaces with high human/vehicle traffic. We have the top brand of cameras that can show greyscale and full colour at night. It can record full colour in pitch darkness thereby making it a top choice for optimal surveillance. Suitable for street surveillance.',
    imageUrl: '/services/ptz-camera.jpg'
  },
  {
    id: 'hd-camera',
    title: 'High - Definition Camera',
    description: 'These cameras have extra functions and capabilities such as extremely high resolution, object identification, and number plate recording. Especially for long-distance recording and traffic control.',
    imageUrl: '/services/hd-camera.jpg'
  },
  {
    id: 'electric-fence',
    title: 'Electric Fence System',
    description: 'We install a low energy consumption electric fence with high DC pulses. The robust energizers and deep cycle batteries guarantee a steady and reliable supply of voltage across the lines. We can integrate modular solar panels for an offsite location to ensure a steady power supply. Available for Domestic/Residential Fencing, Industrial Perimeter Fencing, and Offsite/Remote Location Fencing.',
    imageUrl: '/services/electric-fence.jpg'
  },
  {
    id: 'fire-detection',
    title: 'Fire Detector & Alarm System',
    description: 'At GNL, we prioritize the security of lives and properties as such we bring the best smoke detectors and fire alarm systems. Protect your properties from unexpected fire incidents by installing smoke detectors and an alarm system. We have multi-sensors capable of detecting a wide range of hydrocarbon gases such as Methane (CH4) and Propane (C3H8) up to 0-100% volume of selective range. Contact us to learn more.',
    imageUrl: '/services/fire-detector.jpg'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen py-20 bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-4xl mx-auto">
              Our comprehensive services encompass solar energy and security solutions. 
              With our solar expertise, we design and install efficient solar systems to power your space. 
              Our cutting-edge security systems provide robust protection for your property. 
              Experience reliable power and security solutions for a safer and sustainable environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="bg-white rounded-xl p-8 mb-16 shadow-lg">
              <ServiceDetail
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                isImageLeft={index % 2 === 0}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact {COMPANY.FULL_NAME} today for a free consultation and quote
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Request for Quote
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
