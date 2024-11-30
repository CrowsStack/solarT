'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
  { number: 500, label: 'Happy Clients', suffix: '+' },
  { number: 800, label: 'Projects Completed', suffix: '+' },
  { number: 1500, label: 'Devices Installed', suffix: '+' },
  { number: 30, label: 'Business Partners', suffix: '+' },
];

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-lg text-white/90 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
