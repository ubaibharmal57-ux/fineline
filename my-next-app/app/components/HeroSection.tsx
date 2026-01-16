'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  {
    title: "Elevate Your",
    titleHighlight: "Experience",
    subtitle: "Transforming events with world-class audio-visual excellence. From intimate gatherings to massive spectaculars.",
    cta1: "Explore Equipment",
    cta2: "Get a Quote",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" // Concert/Stage Lights
  },
  {
    title: "Precision",
    titleHighlight: "Engineering",
    subtitle: "State-of-the-art sound and lighting technology trusted by India's top event professionals.",
    cta1: "Our Services",
    cta2: "Contact Us",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" // Corporate/Mic
  },
  {
    title: "Unforgettable",
    titleHighlight: "Moments",
    subtitle: "Creating immersive atmospheres that leave a lasting impression on your audience.",
    cta1: "View Gallery",
    cta2: "Plan Event",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" // Wedding/Party
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-fss-dark-navy">
      {/* Background Slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${heroSlides[currentSlide].image}')`,
            }}
          />
          {/* Premium Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-fss-dark-navy via-fss-dark-navy/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-fss-dark-navy via-transparent to-transparent" />
          {/* Noise Texture for texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-fss-primary/30 mb-8"
                >
                  <span className="w-2 h-2 rounded-full bg-fss-primary animate-pulse" />
                  <span className="text-fss-primary-light text-xs font-bold tracking-widest uppercase">Premium AV Solutions</span>
                </motion.div>

                {/* Title */}
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                  {heroSlides[currentSlide].title}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
                    {heroSlides[currentSlide].titleHighlight}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl sm:text-2xl text-fss-neutral-300 mb-10 max-w-2xl leading-relaxed font-light">
                  {heroSlides[currentSlide].subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-5">
                  <Link
                    href="/equipment"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-fss-primary hover:bg-fss-primary-dark text-fss-dark-navy font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:-translate-y-1"
                  >
                    <span>{heroSlides[currentSlide].cta1}</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-panel hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <span>{heroSlides[currentSlide].cta2}</span>
                    <span className="material-symbols-outlined group-hover:rotate-45 transition-transform">call_made</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20 glass-panel px-6 py-3 rounded-full">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-2 rounded-full transition-all duration-500 overflow-hidden ${index === currentSlide ? 'w-12' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 bg-fss-primary"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 right-10 z-20 hidden lg:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-fss-primary font-bold tracking-[0.3em] rotate-90 origin-right translate-x-2">SCROLL</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-fss-primary to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
