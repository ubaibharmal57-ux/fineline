import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    'Hi Fineline, I need AV equipment for an event. Can you share details?'
  );

  return (
    <footer className="w-full bg-white border-t border-fss-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <Image
                src="/fss-logo.jpg"
                alt="Fineline System & Services - AV Equipment Rental Rajkot"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-fss-neutral-900">Fineline System & Services</h3>
                <p className="text-sm text-fss-neutral-700">Since 2001 | Rajkot, Gujarat</p>
              </div>
            </Link>
            <p className="text-base text-fss-neutral-700 leading-relaxed mb-4 max-w-md">
              Gujarat&apos;s trusted AV equipment rental partner. Professional projectors, LED screens, sound systems & laptops on rent with delivery, setup & on-site technician.
            </p>
            <p className="text-sm text-fss-neutral-700 leading-relaxed">
              Serving all of Saurashtra & Gujarat since 2001.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-fss-neutral-900 mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Equipment', href: '/equipment' },
                { name: 'Services', href: '/services' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-fss-neutral-700 hover:text-fss-neutral-900 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-bold text-fss-neutral-900 mb-6 uppercase tracking-wide">Service Areas</h4>
            <ul className="space-y-3">
              {[
                { city: 'Rajkot', href: '/av-equipment-rental-in-rajkot' },
                { city: 'Ahmedabad', href: '/av-equipment-rental-in-ahmedabad' },
                { city: 'Jamnagar', href: '/av-equipment-rental-in-jamnagar' },
                { city: 'Junagadh', href: '/av-equipment-rental-in-junagadh' },
                { city: 'Bhavnagar', href: '/av-equipment-rental-in-bhavnagar' },
                { city: 'Surat', href: '/av-equipment-rental-in-surat' },
                { city: 'Morbi', href: '/av-equipment-rental-in-morbi' },
                { city: 'Vadodara', href: '/av-equipment-rental-in-vadodara' },
              ].map((item) => (
                <li key={item.city}>
                  <Link href={item.href} className="text-sm text-fss-neutral-700 hover:text-fss-neutral-900 transition-colors duration-200">
                    AV Rental in {item.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-fss-neutral-900 mb-6 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919714595111" className="text-sm text-fss-neutral-700 hover:text-fss-neutral-900 transition-colors duration-200 flex items-center gap-2">
                  <span className="material-symbols-outlined text-fss-primary text-base">call</span>
                  +91 97145 95111
                </a>
              </li>
              <li>
                <a href="tel:+919825214052" className="text-sm text-fss-neutral-700 hover:text-fss-neutral-900 transition-colors duration-200 flex items-center gap-2">
                  <span className="material-symbols-outlined text-fss-primary text-base">call</span>
                  +91 98252 14052
                </a>
              </li>
              <li>
                <a href={`https://wa.me/919714595111?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:text-green-700 transition-colors duration-200 flex items-center gap-2 font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="mailto:info@finelinesystem.com" className="text-sm text-fss-neutral-700 hover:text-fss-neutral-900 transition-colors duration-200 flex items-center gap-2">
                  <span className="material-symbols-outlined text-fss-primary text-base">mail</span>
                  info@finelinesystem.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Fineline+System+And+Services+Rajkot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fss-neutral-700 hover:text-fss-neutral-900 transition-colors duration-200 flex items-start gap-2"
                >
                  <span className="material-symbols-outlined text-fss-primary text-base mt-0.5">location_on</span>
                  <span>Kandoi Bazar Chowk, nr. Aziz Traders, Kandoi Bazar, Para Bazar, Dela Vadi, Lohana Para, Rajkot, Gujarat 360001</span>
                </a>
              </li>
              <li>
                <span className="text-sm text-fss-neutral-700 flex items-center gap-2">
                  <span className="material-symbols-outlined text-fss-primary text-base">schedule</span>
                  Mon-Sat: 9AM - 7PM | Sun: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-fss-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-fss-neutral-700">
            &copy; {new Date().getFullYear()} Fineline System & Services. All rights reserved. | Serving all of Gujarat since 2001.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fss-neutral-900 hover:text-fss-primary transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fss-neutral-900 hover:text-fss-primary transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/919714595111?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fss-neutral-900 hover:text-green-600 transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
