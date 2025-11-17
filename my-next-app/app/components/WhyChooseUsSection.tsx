'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: '📦',
    title: 'Premium Equipment Quality',
    description: 'Top-tier audio-visual equipment maintained to the highest standards for flawless performance at every event.'
  },
  {
    icon: '🎯',
    title: 'Real-time Support System',
    description: 'Our technical team provides immediate assistance throughout your event ensuring everything runs smoothly.'
  },
  {
    icon: '✓',
    title: 'Timely Delivery & Setup',
    description: 'Guaranteed on-time delivery and professional setup by our experienced technical crew.'
  }
];

const stats = [
  { number: '4586', label: 'Clients worldwide', icon: '👥' },
  { number: '8583', label: 'Events completed', icon: '⭐' },
  { number: '9548', label: 'Equipment pieces', icon: '🎵' },
  { number: '1236', label: 'Team members', icon: '👨‍💼' }
];

export default function WhyChooseUsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-white via-fss-neutral-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-fss-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fss-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-bold text-fss-secondary uppercase tracking-wider mb-3">
            WHY CHOOSE US?
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-fss-neutral-900 tracking-tight mb-4 max-w-2xl">
            Powerful features
            <br />
            <span className="text-fss-neutral-900">of event excellence.</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Side - Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {/* Feature Item */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-fss-primary/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-fss-primary/20 transition-colors duration-200">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-fss-neutral-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base text-fss-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/equipment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-fss-neutral-900 hover:bg-fss-neutral-800 text-white font-semibold rounded-lg transition-all duration-200 group"
              >
                Explore more
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-fss-neutral-50 text-fss-neutral-900 font-semibold rounded-lg border-2 border-fss-neutral-200 hover:border-fss-neutral-300 transition-all duration-200 group"
              >
                Get a quote
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
                alt="Professional AV equipment setup"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-fss-neutral-900/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-fss-neutral-200"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">{stat.icon}</span>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-4xl sm:text-5xl font-black text-fss-neutral-900 group-hover:text-fss-primary transition-colors duration-200"
                >
                  {stat.number}
                </motion.h3>
              </div>
              <p className="text-sm sm:text-base text-fss-secondary font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
