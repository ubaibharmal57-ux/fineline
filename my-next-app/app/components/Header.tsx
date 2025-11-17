'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-fss-neutral-200'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Clean minimal overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo and Company Name - Renova Style Clean */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
            <div className={`transition-all duration-300 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
              <Image
                src="/fss-logo.jpg"
                alt="Fineline System & Services"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div className={`flex flex-col transition-all duration-300 ${scrolled ? 'hidden sm:flex' : 'flex'}`}>
              <h2 className="text-lg font-bold text-fss-neutral-900 tracking-tight">
                Fineline System & Services
              </h2>
              <p className="text-xs text-fss-secondary font-medium">25 Years of Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation - Renova Clean Style */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: 'Home', href: '/' },
              { name: 'Equipment', href: '/equipment' },
              { name: 'Services', href: '/services' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-fss-neutral-900 hover:text-fss-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Clean Renova Style */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-fss-primary hover:bg-fss-primary-dark text-white text-sm font-semibold rounded-lg transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-fss-neutral-900 hover:text-fss-primary transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu - Clean Slide Down */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-fss-neutral-200 mt-3 pt-4 pb-6"
          >
            <nav className="flex flex-col gap-1">
              {[
                { name: 'Home', href: '/' },
                { name: 'Equipment', href: '/equipment' },
                { name: 'Services', href: '/services' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-fss-neutral-900 hover:text-fss-primary hover:bg-fss-neutral-50 py-3 px-2 rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 px-6 py-3 bg-fss-primary hover:bg-fss-primary-dark text-white text-sm font-semibold rounded-lg transition-all text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

