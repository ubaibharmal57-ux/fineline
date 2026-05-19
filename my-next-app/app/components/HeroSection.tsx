'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const whatsappMessage = encodeURIComponent(
  'Hi Fineline, I need AV equipment for an event. Can you share details?'
);

const proofPoints = [
  { value: '24+', label: 'years on-site' },
  { value: '5000+', label: 'events handled' },
  { value: 'Rajkot', label: 'serving Gujarat' },
];

const heroImages = [
  {
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2200&auto=format&fit=crop',
    alt: 'Corporate AV setup',
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2200&auto=format&fit=crop',
    alt: 'Wedding event lighting and AV',
  },
  {
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2200&auto=format&fit=crop',
    alt: 'Live event sound and lighting',
  },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-fss-dark-navy">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImages[currentImage].image}')`,
          }}
          aria-label={heroImages[currentImage].alt}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-fss-dark-navy via-fss-dark-navy/88 to-fss-dark-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-fss-dark-navy via-transparent to-transparent" />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-fss-primary-light">
              Professional AV rental for business and social events
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight text-white max-w-4xl">
              Professional AV rental for every event.
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/88">
              Projectors, LED walls, sound systems, displays, and laptops for corporate programs,
              weddings, exhibitions, and college events across Rajkot and Gujarat.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/919714595111?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-500 px-7 py-4 font-bold text-white shadow-lg shadow-green-500/25 transition-all hover:-translate-y-0.5 hover:bg-green-600"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get quote on WhatsApp
              </a>

              <Link
                href="/equipment"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition-all hover:bg-white/15"
              >
                See equipment
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/20 py-4">
              {proofPoints.map((item, index) => (
                <div
                  key={item.label}
                  className={index === 0 ? 'pr-4' : 'border-l border-white/20 px-4'}
                >
                  <div className="text-2xl font-black text-white">{item.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
