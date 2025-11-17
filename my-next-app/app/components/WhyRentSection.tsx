'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const benefits = [
  {
    icon: 'support_agent',
    title: 'Expert Support',
    description: 'Our team of AV professionals is available 24/7 to ensure your event runs smoothly'
  },
  {
    icon: 'inventory_2',
    title: 'Quality Gear',
    description: 'We only use premium, well-maintained equipment from top brands'
  },
  {
    icon: 'local_shipping',
    title: 'Reliable Delivery',
    description: 'On-time delivery and pickup with GPS-tracked vehicles for every rental'
  }
];

export default function WhyRentSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-fss-neutral-900 mb-4">
            Why Rent With Us?
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-fss-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-fss-primary text-4xl">
                  {benefit.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-fss-neutral-900 mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-base text-fss-secondary leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
