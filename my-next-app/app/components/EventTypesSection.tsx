'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MouseEvent } from 'react';

const eventTypes = [
  {
    title: 'Corporate & Conferences',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800',
    link: '/services#corporate'
  },
  {
    title: 'Weddings & Galas',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
    link: '/services#weddings'
  },
  {
    title: 'Parties & Private Events',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800',
    link: '/services#parties'
  },
  {
    title: 'Live Performances',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800',
    link: '/services#performances'
  }
];

function EventCard({ event, index }: { event: typeof eventTypes[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover:shadow-2xl transition-shadow"
    >
      <Link href={event.link} className="block h-full">
        {/* Image with Ken Burns effect */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url('${event.image}')`,
          }}
          whileHover={{
            scale: 1.15,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Gradient overlay that intensifies on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-fss-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ transform: 'translateZ(50px)' }}>
          <motion.h3
            className="text-xl sm:text-2xl font-black text-white mb-2"
            initial={{ y: 20, opacity: 0.8 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {event.title}
          </motion.h3>

          {/* Arrow that appears on hover */}
          <motion.div
            className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100"
            initial={{ x: -20 }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm">Explore</span>
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </motion.div>
        </div>

        {/* Decorative border glow */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-fss-primary/50 rounded-2xl transition-all duration-500" />
      </Link>
    </motion.div>
  );
}

export default function EventTypesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full py-16 sm:py-20 bg-fss-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-fss-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-fss-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-fss-neutral-900 mb-4">
            Perfect Gear for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
              Any Event
            </span>
          </h2>
        </motion.div>

        {/* Event Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventCard event={event} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
