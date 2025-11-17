'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    id: 'audio',
    title: 'Audio Equipment',
    description: 'Premium sound systems engineered for crystal-clear audio experiences',
    icon: 'speaker_group',
    items: ['Pro Speakers', 'Studio Mics', 'Sound Systems', 'Digital Mixers'],
    color: 'from-fss-primary to-fss-accent',
    gradient: 'from-fss-primary/20 to-fss-accent/20'
  },
  {
    id: 'visual',
    title: 'Visual Solutions',
    description: '4K projectors, LED walls, and displays for stunning visual impact',
    icon: 'videocam',
    items: ['4K Projectors', 'LED Walls', 'HD Displays', 'Screens'],
    color: 'from-fss-accent to-fss-accent-dark',
    gradient: 'from-fss-accent/20 to-fss-accent-dark/20'
  },
  {
    id: 'computing',
    title: 'Computing Devices',
    description: 'Latest laptops, tablets, and smartphones for seamless productivity',
    icon: 'laptop_chromebook',
    items: ['MacBooks', 'iPads', 'Premium Laptops', 'Workstations'],
    color: 'from-fss-primary-light to-fss-primary',
    gradient: 'from-fss-primary-light/20 to-fss-primary/20'
  },
  {
    id: 'accessories',
    title: 'Professional Accessories',
    description: 'Complete your setup with premium cables, stands, and lighting',
    icon: 'settings_input_hdmi',
    items: ['Pro Cables', 'Stands', 'Stage Lighting', 'Power Solutions'],
    color: 'from-fss-accent-dark to-fss-primary',
    gradient: 'from-fss-accent-dark/20 to-fss-primary/20'
  }
];

export default function EquipmentShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full py-20 sm:py-28 bg-gradient-to-b from-fss-neutral-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-fss-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fss-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-fss-primary/10 rounded-full mb-6 border border-fss-primary/20">
            <span className="material-symbols-outlined text-fss-primary text-xl">inventory_2</span>
            <span className="text-fss-primary font-bold text-sm tracking-wider uppercase">
              Our Equipment
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-fss-neutral-900 tracking-tight mb-6 leading-tight">
            Premium Equipment
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
              For Every Occasion
            </span>
          </h2>

          <p className="text-xl text-fss-secondary max-w-3xl mx-auto leading-relaxed">
            State-of-the-art technology backed by expert support, delivering flawless experiences
            from intimate gatherings to grand productions
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/equipment#${category.id}`}
                className="group relative block h-full"
              >
                {/* Glassmorphism Card */}
                <div className="glass relative rounded-2xl p-8 h-full border-2 border-white/50 hover:border-fss-primary/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon with Gradient */}
                    <div className="flex items-center justify-center mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl`}
                      >
                        <span className="material-symbols-outlined text-white text-4xl">
                          {category.icon}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-black text-fss-neutral-900 mb-3 group-hover:text-fss-primary transition-colors">
                      {category.title}
                    </h3>

                    <p className="text-sm text-fss-secondary mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Items List with Premium Styling */}
                    <ul className="space-y-3 mb-6">
                      {category.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-center gap-3 text-sm text-fss-neutral-700 font-medium"
                        >
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                            <span className="material-symbols-outlined text-white text-xs">check</span>
                          </div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    {/* View Details Link */}
                    <div className="flex items-center gap-2 text-fss-primary font-bold text-sm group-hover:gap-3 transition-all">
                      <span>Explore Collection</span>
                      <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-500`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="glass inline-block p-8 rounded-3xl border-2 border-fss-primary/30">
            <h3 className="text-2xl font-bold text-fss-neutral-900 mb-3">
              Need Something Specific?
            </h3>
            <p className="text-fss-secondary mb-6 max-w-2xl">
              Our comprehensive catalog features over 1000+ premium equipment pieces.
              <br />
              Let us help you find the perfect solution for your event.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/equipment"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-fss-primary to-fss-accent text-white text-base font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  <span className="material-symbols-outlined">inventory_2</span>
                  View Full Catalog
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-fss-neutral-900 text-base font-bold rounded-xl border-2 border-fss-primary/30 hover:border-fss-primary shadow-lg hover:shadow-xl transition-all"
                >
                  <span className="material-symbols-outlined">support_agent</span>
                  Get Expert Advice
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { icon: 'verified', text: 'All Equipment Tested' },
            { icon: 'local_shipping', text: 'Free Delivery Available' },
            { icon: 'handyman', text: 'On-Site Technical Support' },
            { icon: 'security', text: 'Fully Insured' },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-fss-primary text-2xl">{item.icon}</span>
              <span className="text-fss-neutral-700 font-semibold">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
