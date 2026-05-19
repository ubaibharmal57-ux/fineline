'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    id: 'projectors',
    title: 'Projectors & Screens',
    description: 'Clear presentation setups for rooms, halls, and temporary stages.',
    icon: 'airplay',
    link: '/equipment#projectors',
  },
  {
    id: 'led-walls',
    title: 'LED Walls & Displays',
    description: 'High-impact backdrops for ceremonies, launches, expos, and shows.',
    icon: 'tv',
    link: '/equipment#led-walls',
  },
  {
    id: 'sound',
    title: 'Sound Systems & Audio',
    description: 'Speech, music, and announcements tuned for the crowd size.',
    icon: 'speaker',
    link: '/equipment#audio',
  },
  {
    id: 'screens',
    title: 'TVs & Digital Standees',
    description: 'Welcome screens, booth displays, signage, and demo stations.',
    icon: 'desktop_windows',
    link: '/equipment#tvs',
  },
  {
    id: 'laptops',
    title: 'Laptops & Computers',
    description: 'Devices for registration, presentations, demos, and workshops.',
    icon: 'laptop_mac',
    link: '/equipment#laptops',
  },
  {
    id: 'lighting',
    title: 'Lighting & Stage',
    description: 'Practical stage lighting for visibility, mood, and movement.',
    icon: 'wb_twilight',
    link: '/equipment#lighting',
  },
];

export default function CategorySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full bg-gradient-to-b from-white to-fss-neutral-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-fss-primary">
              Start with the setup
            </p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-fss-neutral-900">
              Choose the equipment around the room, not a random list.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-fss-neutral-700">
              Tell us the venue, audience size, and event format. We help shape the AV setup so it
              works for the actual space.
            </p>
            <Link
              href="/equipment"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-fss-neutral-900 px-6 py-3 font-bold text-white transition-colors hover:bg-fss-neutral-800"
            >
              Explore equipment
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </motion.div>

          <div className="overflow-hidden rounded-2xl border border-fss-neutral-200 bg-fss-neutral-50">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Link
                  href={category.link}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-fss-neutral-200 bg-white p-5 transition-colors last:border-b-0 hover:bg-fss-primary/5 sm:p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-fss-primary/10 text-fss-primary transition-colors group-hover:bg-fss-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-2xl">{category.icon}</span>
                  </span>
                  <span>
                    <span className="block text-lg font-black text-fss-neutral-900">
                      {category.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-fss-neutral-700">
                      {category.description}
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-fss-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-fss-primary">
                    arrow_forward
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
