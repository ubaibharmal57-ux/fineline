'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Equipment', href: '/equipment' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`mx-auto max-w-7xl transition-all duration-300 ${
            scrolled
              ? 'glass-panel rounded-2xl px-6 py-3'
              : 'bg-transparent px-0 py-2'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-white/10">
                <Image
                  src="/fss-logo.jpg"
                  alt="Fineline System & Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-bold text-white tracking-tight group-hover:text-fss-primary transition-colors">
                  Fineline
                </h2>
                <p className="text-[10px] text-fss-secondary uppercase tracking-widest">Systems & Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-fss-neutral-300 hover:text-white transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fss-primary transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-fss-primary hover:bg-fss-primary-dark text-fss-dark-navy text-sm font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-0.5"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-fss-primary transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 lg:hidden"
          >
            <div className="glass-panel rounded-2xl p-4 border border-white/10">
              <nav className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-fss-neutral-200 hover:text-white transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="material-symbols-outlined text-fss-primary text-sm">arrow_forward_ios</span>
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-2 w-full py-3 bg-fss-primary text-fss-dark-navy font-bold text-center rounded-xl hover:bg-fss-primary-dark transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

