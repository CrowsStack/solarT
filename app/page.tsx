'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from "react";
import HeroCarousel from './components/HeroCarousel';
import ServicesCarousel from './components/ServicesCarousel';
import StatsSection from './components/StatsSection';
import { COMPANY } from './constants/company';
import { 
  SolarIcon, 
  CameraIcon, 
  FireAlarmIcon 
} from './components/icons';

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const projectVideos = [
    {
      title: "How to Install Solar Panels - Complete Guide",
      videoId: "2Apa2WcG9z0",
      thumbnail: "https://img.youtube.com/vi/2Apa2WcG9z0/maxresdefault.jpg"
    },
    {
      title: "Total Cost of Off-Grid Solar Setup (Tagalog)",
      videoId: "5WNgHh1wJPY",
      thumbnail: "https://img.youtube.com/vi/5WNgHh1wJPY/maxresdefault.jpg"
    },
    {
      title: "Tesla Solar Roof Review: Was it Worth It?",
      videoId: "UJeSWbR6W04",
      thumbnail: "https://img.youtube.com/vi/UJeSWbR6W04/maxresdefault.jpg"
    },
    {
      title: "Budget-Friendly Solar Generator Setup",
      videoId: "ecRZTtVM1Eg",
      thumbnail: "https://img.youtube.com/vi/ecRZTtVM1Eg/maxresdefault.jpg"
    },
    {
      title: "Smart Security System Overview",
      videoId: "8E6Kx_CN9C0",
      thumbnail: "https://img.youtube.com/vi/8E6Kx_CN9C0/maxresdefault.jpg"
    },
    {
      title: "Home Energy Management Solutions",
      videoId: "qnW6ZRdJIHo",
      thumbnail: "https://img.youtube.com/vi/qnW6ZRdJIHo/maxresdefault.jpg"
    }
  ];

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <main className="min-h-screen">
      <HeroCarousel />

      {/* Service Cards Section */}
      <ServicesCarousel />

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-blue-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact {COMPANY.FULL_NAME} today for a free consultation and quote
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </motion.section>

      {/* Video Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-blue-900 text-center mb-12"
          >
            Our Recent Projects
          </motion.h2>
          
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {projectVideos.map((video, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                    <div className="mx-4">
                      <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0"
                        />
                      </div>
                      <h3 className="text-blue-900 text-xl mt-4 text-center">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-blue-900 p-3 rounded-full z-10"
              onClick={scrollPrev}
            >
              ←
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-blue-900 p-3 rounded-full z-10"
              onClick={scrollNext}
            >
              →
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {projectVideos.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === selectedIndex ? 'bg-blue-900' : 'bg-blue-100'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
