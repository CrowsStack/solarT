'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const NavigationButton = ({ direction, onClick, disabled }: { direction: 'left' | 'right', onClick: () => void, disabled: boolean }) => (
  <button
    onClick={onClick}
    className={`absolute ${direction === 'left' ? 'left-4 lg:left-8' : 'right-4 lg:right-8'} top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all ${
      disabled && 'opacity-50 cursor-not-allowed'
    }`}
    disabled={disabled}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
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

const slides = [
  {
    title: "Solar Installation",
    description: "Harness clean, renewable energy with our professional solar installations",
    image: "/home/solar-panel.jpg",
    link: "/services",
  },
  {
    title: "CCTV & Security",
    description: "Advanced surveillance systems for complete peace of mind",
    image: "/home/cctv.jpg",
    link: "/services",
  },
  {
    title: "Security Solutions",
    description: "Comprehensive security solutions for your property",
    image: "/home/security.jpg",
    link: "/services",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
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

      {/* Navigation Controls */}
      <NavigationButton direction="left" onClick={scrollPrev} disabled={!canScrollPrev} />
      <NavigationButton direction="right" onClick={scrollNext} disabled={!canScrollNext} />

      {/* Carousel container */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-60`} />
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
