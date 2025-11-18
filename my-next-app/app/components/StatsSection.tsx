'use client';

import AnimatedCounter from './AnimatedCounter';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    { number: 25, suffix: '+', label: 'Years of Excellence' },
    { number: 5000, suffix: '+', label: 'Events Completed' },
    { number: 500, suffix: '+', label: 'Premium Equipment' },
    { number: 99, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full py-20 sm:py-28 relative overflow-hidden bg-gradient-to-br from-fss-neutral-900 via-fss-dark-navy to-fss-midnight"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fss-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fss-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            The Numbers Speak for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
              Themselves
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted excellence backed by decades of experience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                />
              </div>
              <p className="text-gray-300 text-lg font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
