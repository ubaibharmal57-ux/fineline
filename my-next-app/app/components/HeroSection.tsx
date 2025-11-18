'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingElements from './FloatingElements';

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
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-fss-primary/5 via-transparent to-fss-accent/5 animate-gradient opacity-50" />

      {/* Floating elements */}
      <FloatingElements count={15} />

      {/* Background Slides with Parallax */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{ y: y1 }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.75)), url('${slide.image}')`,
              scale: 1.1,
            }}
            animate={{
              scale: index === currentSlide ? 1.05 : 1.1,
            }}
            transition={{ duration: 8, ease: 'easeOut' }}
          />
        </motion.div>
      ))}

      {/* Content with Parallax */}
      <motion.div
        className="relative h-full flex items-center justify-center z-10"
        style={{ y: y2, opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {heroSlides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  y: index === currentSlide ? 0 : 50,
                }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                className={index === currentSlide ? 'block' : 'hidden'}
              >
                {/* Title with enhanced animation */}
                <motion.h1
                  className="text-6xl sm:text-7xl lg:text-8xl font-black text-fss-neutral-900 mb-6 leading-[0.95] tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={index === currentSlide ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {slide.title}
                  <br />
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent animate-gradient"
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    {slide.titleHighlight}
                  </motion.span>
                </motion.h1>

                {/* Subtitle with stagger */}
                <motion.p
                  className="text-xl sm:text-2xl text-fss-secondary mb-12 font-normal max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={index === currentSlide ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTAs with enhanced hover effects */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={index === currentSlide ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Link
                    href="/equipment"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-fss-primary to-fss-primary-dark hover:from-fss-primary-dark hover:to-fss-primary text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-fss-primary/50 hover:scale-105"
                  >
                    <span>{slide.cta1}</span>
                    <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-fss-neutral-900 text-fss-neutral-900 hover:text-white font-semibold rounded-lg border-2 border-fss-neutral-900 transition-all duration-300 shadow-lg hover:scale-105"
                  >
                    <span>{slide.cta2}</span>
                    <span className="material-symbols-outlined text-xl group-hover:rotate-45 transition-transform">arrow_outward</span>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'bg-gradient-to-r from-fss-primary to-fss-accent w-12 shadow-lg shadow-fss-primary/50'
                : 'bg-fss-neutral-300 w-8 hover:bg-fss-neutral-400 hover:w-10'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 right-12 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <motion.span
          className="text-xs text-fss-primary font-bold tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL
        </motion.span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-16 bg-gradient-to-b from-fss-primary to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
