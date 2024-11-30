'use client';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { 
  SolarIcon, 
  CameraIcon, 
  FireAlarmIcon 
} from './icons';

const NavigationButton = ({ direction, onClick, disabled }: { direction: 'left' | 'right', onClick: () => void, disabled: boolean }) => (
  <button
    onClick={onClick}
    className={`absolute ${direction === 'left' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-blue-600/80 hover:bg-blue-600 transition-colors ${
      disabled && 'opacity-50 cursor-not-allowed'
    }`}
    disabled={disabled}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      {direction === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      )}
    </svg>
  </button>
);

const services = [
  {
    title: "Solar Installation",
    description: "Harness clean, renewable energy with our professional solar installations",
    icon: SolarIcon,
    image: "/images/services/solar-panels-roof.jpg"
  },
  {
    title: "CCTV & Security",
    description: "Advanced surveillance systems for complete peace of mind",
    icon: CameraIcon,
    image: "/images/services/security-camera.jpg"
  },
  {
    title: "Electric Fencing",
    description: "Secure perimeter protection for your property",
    icon: FireAlarmIcon,
    image: "/images/services/electric-fence.jpg"
  },
  {
    title: "Fire Detection",
    description: "Early warning systems to protect life and property",
    icon: FireAlarmIcon,
    image: "/images/services/fire-alarm.jpg"
  }
];

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps'
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout>();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (!isVisible) return;
      autoplayRef.current = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }, 3000);
    };

    const onPointerDown = () => {
      clearInterval(autoplayRef.current);
    };

    const onPointerUp = () => {
      autoplay();
    };

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          autoplay();
        } else {
          clearInterval(autoplayRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Event listeners
    emblaApi.on('select', onSelect);
    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('pointerUp', onPointerUp);
    onSelect();

    return () => {
      clearInterval(autoplayRef.current);
      observer.disconnect();
      if (emblaApi) {
        emblaApi.off('pointerDown', onPointerDown);
        emblaApi.off('pointerUp', onPointerUp);
        emblaApi.off('select', onSelect);
      }
    };
  }, [emblaApi, isVisible, onSelect]);

  return (
    <div className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-xl text-blue-800">
            Comprehensive solutions for your energy and security needs
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-60" />
                    </div>
                    <div className="p-6 relative">
                      <div className="text-4xl mb-4 text-blue-600">
                        {<service.icon />}
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-blue-800">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <NavigationButton direction="left" onClick={scrollPrev} disabled={!canScrollPrev} />
          <NavigationButton direction="right" onClick={scrollNext} disabled={!canScrollNext} />
        </div>
      </div>
    </div>
  );
}
