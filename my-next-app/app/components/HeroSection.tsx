'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const heroSlides = [
  {
    title: "Your Vision,",
    titleHighlight: "Our Gear",
    subtitle: "World-class audio-visual equipment for events of any scale",
    cta1: "Explore Equipment",
    cta2: "Request a Quote",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
  },
  {
    title: "Premium",
    titleHighlight: "AV Rentals",
    subtitle: "Trusted by India's leading event planners for 25+ years",
    cta1: "View Catalog",
    cta2: "Get Started",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012"
  },
  {
    title: "Elevate",
    titleHighlight: "Every Event",
    subtitle: "From weddings to corporate conferences - professional excellence",
    cta1: "Our Services",
    cta2: "Contact Us",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
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
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-white">
      {/* Background Slides - Renova Style Minimal */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.75)), url('${slide.image}')`,
            }}
          />
        </motion.div>
      ))}

      {/* Content - Renova Clean Centered Layout */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {heroSlides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  y: index === currentSlide ? 0 : 30,
                }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className={index === currentSlide ? 'block' : 'hidden'}
              >
                {/* Title - Renova Style Bold Typography */}
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-fss-neutral-900 mb-6 leading-[0.95] tracking-tight">
                  {slide.title}
                  <br />
                  <span className="text-fss-primary">{slide.titleHighlight}</span>
                </h1>

                {/* Subtitle - Clean and Professional */}
                <p className="text-xl sm:text-2xl text-fss-secondary mb-12 font-normal max-w-2xl leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* CTAs - Minimal Button Style */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/equipment"
                    className="inline-flex items-center justify-center px-8 py-4 bg-fss-primary hover:bg-fss-primary-dark text-white font-semibold rounded-lg transition-all duration-200"
                  >
                    {slide.cta1}
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-fss-neutral-900 text-fss-neutral-900 hover:text-white font-semibold rounded-lg border-2 border-fss-neutral-900 transition-all duration-200"
                  >
                    {slide.cta2}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators - Renova Minimal Style */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-fss-primary w-10'
                : 'bg-fss-neutral-300 w-6 hover:bg-fss-neutral-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 right-12 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-fss-secondary font-medium tracking-wider">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-fss-neutral-300"
        />
      </motion.div>
    </section>
  );
}
