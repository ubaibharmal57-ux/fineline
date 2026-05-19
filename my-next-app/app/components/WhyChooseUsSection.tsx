'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: 'local_shipping',
    title: 'Site-first planning',
    description: 'We think through room size, entry points, power, and visibility before the setup.',
  },
  {
    icon: 'inventory_2',
    title: 'No oversized recommendations',
    description: 'The quote is built around what the event needs, not what makes the list longer.',
  },
  {
    icon: 'schedule',
    title: 'A calm hand during the event',
    description: 'When the program changes, the AV team is close enough to adjust quickly.',
  },
];

const proofPoints = [
  { icon: 'location_on', title: 'Rajkot base', desc: 'Local coordination' },
  { icon: 'groups', title: 'Site-aware crew', desc: 'Used to live programs' },
  { icon: 'workspace_premium', title: 'Checked gear', desc: 'Tested before dispatch' },
  { icon: 'support_agent', title: 'Straight answers', desc: 'No vague quoting' },
];

export default function WhyChooseUsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-white via-fss-neutral-50 to-white py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_minmax(360px,460px)] gap-8 lg:gap-12 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fss-primary/10 rounded-full mb-4">
              <span className="material-symbols-outlined text-fss-primary text-sm">history</span>
              <span className="text-sm font-bold text-fss-primary">Since 2001</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-fss-neutral-900 tracking-tight leading-tight">
              AV rental that respects the event plan.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-fss-neutral-700 max-w-xl">
              A good setup should disappear into the event. People should hear clearly, see clearly,
              and move through the program without waiting on the equipment.
            </p>

            <div className="mt-6 space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -18 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fss-primary/10 text-fss-primary">
                    <span className="material-symbols-outlined text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-black text-fss-neutral-900">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-fss-neutral-700">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/equipment"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-fss-neutral-900 px-5 py-3 font-bold text-white transition-colors hover:bg-fss-neutral-800"
              >
                See Equipment
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-fss-neutral-300 bg-white px-5 py-3 font-bold text-fss-neutral-900 transition-colors hover:border-fss-primary"
              >
                About Fineline
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600"
                alt="Professional AV equipment setup at an event in Gujarat"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fss-neutral-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 backdrop-blur">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-2xl text-fss-primary">settings_input_component</span>
                  <div>
                    <div className="text-lg font-black text-fss-neutral-900">Ready before the first announcement</div>
                    <div className="mt-1 text-xs font-semibold text-fss-neutral-700">
                      Display, audio, power, laptop input, and mic checks happen before the room gets busy.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {proofPoints.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.25 + index * 0.06 }}
                  className="flex items-start gap-3 rounded-xl border border-fss-neutral-200 bg-white p-3"
                >
                  <span className="material-symbols-outlined text-fss-primary text-xl">{item.icon}</span>
                  <div>
                    <div className="text-sm font-black text-fss-neutral-900">{item.title}</div>
                    <div className="text-xs leading-snug text-fss-neutral-700">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
