'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const slides = [
  {
    title: "Solar Energy Solutions",
    description: "Harness the power of the sun with our state-of-the-art solar panel installations. We provide complete solar solutions that reduce your carbon footprint and energy bills. Our expert team handles everything from design to installation, ensuring maximum efficiency for your property.",
    image: "/images/solar-panel.jpg",
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "Smart Security Systems",
    description: "Protect what matters most with our advanced security solutions. We integrate cutting-edge cameras, smart sensors, and 24/7 monitoring systems to keep your property secure. Experience peace of mind with our comprehensive security installations.",
    image: "/images/security.jpg",
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Electrical Excellence",
    description: "From basic electrical work to complex installations, our certified electricians deliver reliable and safe solutions. We specialize in modern electrical systems that power your home or business efficiently while meeting all safety standards.",
    image: "/images/electrical.jpg",
    color: "from-gray-700 to-gray-900"
  },
  {
    title: "Energy Management",
    description: "Take control of your energy consumption with our smart energy management systems. Monitor and optimize your power usage in real-time, leading to significant cost savings and improved energy efficiency.",
    image: "/images/energy-management.jpg",
    color: "from-green-500 to-green-700"
  },
  {
    title: "Sustainable Solutions",
    description: "Join the green revolution with our eco-friendly energy solutions. We help you reduce your environmental impact while saving money through sustainable technology implementations and energy-efficient upgrades.",
    image: "/images/sustainable.jpg",
    color: "from-teal-500 to-teal-700"
  },
  {
    title: "Expert Consultation",
    description: "Our team of experts provides personalized consultations to understand your needs and design the perfect solution. We work with you every step of the way, from initial planning to final installation and maintenance.",
    image: "/images/consultation.jpg",
    color: "from-purple-600 to-purple-800"
  }
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Auto-scroll every 5 seconds
    const intervalId = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(intervalId);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative h-screen">
      {/* Main tagline overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/30">
        <div className="text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
          </motion.p>
        </div>
      </div>

      {/* Carousel container */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-90`} />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full flex items-center justify-center p-8">
                <div className="max-w-4xl text-white text-center">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">{slide.title}</h2>
                  <p className="text-lg md:text-xl leading-relaxed">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
