'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface VisionMissionProps {
  type: 'vision' | 'mission';
  text: string;
  image: string;
  isImageLeft?: boolean;
}

export default function VisionMission({ type, text, image, isImageLeft = true }: VisionMissionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      {/* Image */}
      <div className={`${!isImageLeft && 'md:order-2'}`}>
        <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={image}
            alt={type === 'vision' ? 'Our Vision' : 'Our Mission'}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-[2px]" />
        </div>
      </div>

      {/* Content */}
      <div className={`${!isImageLeft && 'md:order-1'}`}>
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our {type.charAt(0).toUpperCase() + type.slice(1)}
          </h3>
          <p className="text-gray-600 leading-relaxed">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}
