'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceDetailProps {
  title: string;
  description: string;
  imageUrl: string;
  isImageLeft?: boolean;
}

export default function ServiceDetail({ title, description, imageUrl, isImageLeft = true }: ServiceDetailProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      {/* Image Card */}
      <div className={`${!isImageLeft && 'md:order-2'}`}>
        <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Card */}
      <div className={`${!isImageLeft && 'md:order-1'}`}>
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
