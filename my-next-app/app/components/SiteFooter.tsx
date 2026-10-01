import Image from 'next/image';
import Link from 'next/link';

const whatsappMessage = encodeURIComponent(
  'Hi Fineline, I need AV equipment for an event. Can you share details?'
);

const footerLinks = [
  { name: 'Equipment', href: '/equipment' },
  { name: 'Services', href: '/services' },
  { name: 'About Fineline', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const cities = [
  { name: 'Rajkot', href: '/av-equipment-rental-in-rajkot' },
  { name: 'Ahmedabad', href: '/av-equipment-rental-in-ahmedabad' },
  { name: 'Jamnagar', href: '/av-equipment-rental-in-jamnagar' },
  { name: 'Morbi', href: '/av-equipment-rental-in-morbi' },
  { name: 'Surat', href: '/av-equipment-rental-in-surat' },
  { name: 'Vadodara', href: '/av-equipment-rental-in-vadodara' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-fss-neutral-900 text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-6 lg:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/fss-logo.jpg"
                alt="Fineline System & Services"
                width={46}
                height={46}
                className="h-11 w-11 rounded-md object-cover"
              />
              <span>
                <span className="block text-lg font-extrabold tracking-[-0.03em]">FINELINE</span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  System &amp; Services
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/65">
              Professional AV equipment, delivery, setup, and technical support for events across
              Rajkot and Gujarat.
            </p>
            <p className="mt-5 text-sm font-semibold text-fss-primary">Working on site since 2001.</p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">Explore</h2>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-medium text-white/75 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">Service areas</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-1">
              {cities.map((city) => (
                <li key={city.href}>
                  <Link href={city.href} className="text-sm font-medium text-white/75 hover:text-white">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">Talk to the team</h2>
            <div className="mt-5 space-y-4 text-sm">
              <a href="tel:+919714595111" className="flex items-start gap-3 text-white/80 hover:text-white">
                <span className="material-symbols-outlined mt-0.5 text-lg text-fss-primary">call</span>
                <span>+91 97145 95111</span>
              </a>
              <a
                href={`https://wa.me/917096110104?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/80 hover:text-white"
              >
                <span className="material-symbols-outlined mt-0.5 text-lg text-fss-primary">chat</span>
                <span>+91 70961 10104<br /><span className="text-white/45">WhatsApp</span></span>
              </a>
              <a
                href="mailto:info@finelinesystem.com"
                className="flex items-start gap-3 text-white/80 hover:text-white"
              >
                <span className="material-symbols-outlined mt-0.5 text-lg text-fss-primary">mail</span>
                <span>info@finelinesystem.com</span>
              </a>
              <p className="flex items-start gap-3 text-white/60">
                <span className="material-symbols-outlined mt-0.5 text-lg text-fss-primary">location_on</span>
                <span>Kandoi Bazar, Rajkot,<br />Gujarat 360001</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Fineline System &amp; Services.</p>
          <p>AV rental · Setup · On-site support</p>
        </div>
      </div>
    </footer>
  );
}
