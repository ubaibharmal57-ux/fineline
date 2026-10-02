'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { name: 'Equipment', href: '/equipment' },
  { name: 'Services', href: '/services' },
  { name: 'Locations', href: '/locations' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const whatsappMessage = encodeURIComponent(
  'Hi Fineline, I need AV equipment for an event. Can you share details?'
);

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-fss-neutral-200 bg-[#F4F2ED]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 lg:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Fineline home">
          <Image
            src="/fss-logo.jpg"
            alt="Fineline System & Services"
            width={42}
            height={42}
            className="h-10 w-10 rounded-md object-cover"
            priority
          />
          <span className="leading-none">
            <span className="block text-[17px] font-extrabold tracking-[-0.03em] text-fss-neutral-900">
              FINELINE
            </span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-fss-neutral-700">
              System &amp; Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? 'border-fss-primary text-fss-neutral-900'
                    : 'border-transparent text-fss-neutral-700 hover:text-fss-neutral-900'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919714595111"
            className="px-3 py-2 text-sm font-semibold text-fss-neutral-700 transition-colors hover:text-fss-neutral-900"
          >
            +91 97145 95111
          </a>
          <a
            href={`https://wa.me/917096110104?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary min-h-11 px-5"
          >
            Get a quote
            <span className="material-symbols-outlined text-[19px]">arrow_outward</span>
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-fss-neutral-300 text-fss-neutral-900 lg:hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-fss-neutral-200 bg-[#F4F2ED] px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-[1240px] flex-col" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-fss-neutral-200 py-4 text-lg font-semibold text-fss-neutral-900"
              >
                {item.name}
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            ))}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a href="tel:+919714595111" className="button-secondary min-h-12 px-3">
                <span className="material-symbols-outlined text-lg">call</span>
                Call us
              </a>
              <a
                href={`https://wa.me/917096110104?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary min-h-12 px-3"
              >
                WhatsApp
                <span className="material-symbols-outlined text-lg">arrow_outward</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
