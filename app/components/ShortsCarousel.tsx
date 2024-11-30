'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

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

// Double the items for seamless infinite scroll
const doubledShorts = [...shorts, ...shorts];

export default function ShortsCarousel() {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startAnimation = async () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.scrollWidth / 2;

      await controls.start({
        x: [-containerWidth, 0],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }
      });
    };

    startAnimation();
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: [-containerRef.current?.scrollWidth! / 2, 0],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }
    });
  };

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        ref={containerRef}
        className="flex gap-4"
        animate={controls}
        initial={{ x: 0 }}
      >
        {doubledShorts.map((short, index) => (
          <div
            key={index}
            className="flex-none w-[300px] md:w-[350px]"
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
            <h3 className="mt-3 text-white text-center text-sm font-medium">
              {short.title}
            </h3>
          </div>
        ))}
      </motion.div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
    </div>
  );
}
