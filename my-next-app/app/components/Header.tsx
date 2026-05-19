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

  const whatsappMessage = encodeURIComponent(
    'Hi Fineline, I need AV equipment for an event. Can you share details?'
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-fss-dark-navy/95 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                <Image
                  src="/fss-logo.jpg"
                  alt="Fineline System & Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Fineline
                </h2>
                <p className="text-[10px] text-white uppercase tracking-widest">System & Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-fss-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fss-primary transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919714595111"
                className="flex items-center gap-2 px-4 py-2 text-white hover:text-fss-primary text-sm font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-fss-primary text-lg">call</span>
                <span className="hidden xl:inline">+91 97145 95111</span>
              </a>
              <a
                href={`https://wa.me/919714595111?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-fss-primary hover:bg-fss-primary-dark text-fss-dark-navy text-sm font-bold rounded-lg transition-all hover:-translate-y-0.5"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile: Phone + Menu */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:+919714595111"
                className="w-10 h-10 flex items-center justify-center text-fss-primary"
                aria-label="Call us"
              >
                <span className="material-symbols-outlined text-2xl">call</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center text-white hover:text-fss-primary transition-colors"
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-2xl">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 sm:top-20 z-40 lg:hidden"
          >
            <div className="bg-fss-dark-navy border-t border-white/10 shadow-xl">
              <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 text-white transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="material-symbols-outlined text-fss-primary text-sm">arrow_forward_ios</span>
                  </Link>
                ))}
                <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/919714595111?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-green-500 text-white font-bold text-center rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Get Quote on WhatsApp
                  </a>
                  <a
                    href="tel:+919714595111"
                    className="w-full py-3 bg-fss-primary text-fss-dark-navy font-bold text-center rounded-lg hover:bg-fss-primary-dark transition-colors flex items-center justify-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined">call</span>
                    Call +91 97145 95111
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
