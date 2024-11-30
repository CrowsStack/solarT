'use client';

import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

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

const shorts = [
  {
    title: "Best Solar Power Banks - Solar Charging Test!",
    videoId: "T85hGcq9U9M",
  },
  {
    title: "Harbor Freight Solar Panel Review",
    videoId: "I0Kke4MPIzw",
  },
  {
    title: "Portable Power Station for Home",
    videoId: "R9ACKdyZeSI",
  },
  {
    title: "Solar Power Bank Review",
    videoId: "xVUzn0TBvUQ",
  },
  {
    title: "Solar Installation Tips",
    videoId: "dQw4w9WgXcQ",
  }
];

export default function ShortsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps',
    align: 'start'
  });

  const autoplayRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

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

    // Event listeners for scroll buttons
    emblaApi.on('select', onSelect);
    onSelect();

    // Event listeners for touch/pointer
    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('pointerUp', onPointerUp);

    return () => {
      clearInterval(autoplayRef.current);
      observer.disconnect();
      if (emblaApi) {
        emblaApi.off('pointerDown', onPointerDown);
        emblaApi.off('pointerUp', onPointerUp);
        emblaApi.off('select', onSelect);
      }
    };
  }, [emblaApi, isVisible]);

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {shorts.map((short, index) => (
            <div
              key={index}
              className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_350px] min-w-0"
            >
              <div className="aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${short.videoId}?rel=0`}
                  title={short.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <h3 className="mt-3 text-white text-center text-sm md:text-base font-medium line-clamp-2">
                {short.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <NavigationButton direction="left" onClick={scrollPrev} disabled={!canScrollPrev} />
      <NavigationButton direction="right" onClick={scrollNext} disabled={!canScrollNext} />
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
    </div>
  );
}
