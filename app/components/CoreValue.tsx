'use client';
import { motion } from 'framer-motion';

interface CoreValueProps {
  title: string;
  description: string;
  icon: React.ComponentType;
  delay?: number;
}

export default function CoreValue({ title, description, icon: Icon, delay = 0 }: CoreValueProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-4xl mb-4 text-blue-600">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
