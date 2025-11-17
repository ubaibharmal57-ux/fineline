'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    id: 'projectors',
    title: 'Projectors & Screens',
    description: 'High-definition projection for any venue',
    icon: 'airplay',
    link: '/equipment#projectors'
  },
  {
    id: 'sound',
    title: 'Sound Systems',
    description: 'Crystal-clear audio for every event',
    icon: 'speaker',
    link: '/equipment#audio'
  },
  {
    id: 'microphones',
    title: 'Microphones',
    description: 'Professional-grade wireless and wired mics',
    icon: 'mic',
    link: '/equipment#microphones'
  },
  {
    id: 'lighting',
    title: 'Lighting',
    description: 'Set the perfect mood and ambiance',
    icon: 'wb_twilight',
    link: '/equipment#lighting'
  },
  {
    id: 'laptops',
    title: 'Laptops & IT',
    description: 'Latest tech for presentations and work',
    icon: 'laptop_mac',
    link: '/equipment#computing'
  }
];

export default function CategorySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-fss-neutral-900 mb-4">
            Explore Our Rental Categories
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={category.link}
                className="group block p-6 text-center hover:bg-fss-neutral-50 rounded-xl transition-all"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-fss-primary/10 flex items-center justify-center group-hover:bg-fss-primary group-hover:scale-110 transition-all">
                  <span className="material-symbols-outlined text-fss-primary group-hover:text-white text-3xl transition-colors">
                    {category.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-fss-neutral-900 mb-2 group-hover:text-fss-primary transition-colors">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-fss-secondary leading-snug">
                  {category.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
