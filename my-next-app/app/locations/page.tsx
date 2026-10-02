import type { Metadata } from 'next';
import Link from 'next/link';
import { gujaratLocations } from '../data/gujaratCityPages';

export const metadata: Metadata = {
  title: 'AV Equipment Rental Across Gujarat | Fineline Service Areas',
  description: 'Explore Fineline AV equipment rental service areas across Gujarat. Projectors, LED walls, sound systems, displays, laptops, setup and technical support.',
  alternates: {
    canonical: 'https://www.finelinesystem.com/locations',
  },
  openGraph: {
    title: 'AV Equipment Rental Across Gujarat | Fineline',
    description: 'Find projector, LED wall, sound system, display and laptop rentals with planned delivery and setup across Gujarat.',
    url: 'https://www.finelinesystem.com/locations',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Fineline System & Services',
  },
};

const whatsappMessage = encodeURIComponent(
  'Hi Fineline, I need AV equipment for an event in Gujarat. Can you help me plan delivery and setup?'
);

export default function LocationsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.finelinesystem.com/locations#webpage',
        url: 'https://www.finelinesystem.com/locations',
        name: 'Fineline AV Equipment Rental Service Areas in Gujarat',
        description: metadata.description,
        inLanguage: 'en-IN',
        isPartOf: {
          '@type': 'WebSite',
          name: 'Fineline System & Services',
          url: 'https://www.finelinesystem.com',
        },
      },
      {
        '@type': 'ItemList',
        name: 'Gujarat AV equipment rental locations',
        numberOfItems: gujaratLocations.length,
        itemListElement: gujaratLocations.map((location, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: `AV Equipment Rental in ${location.city}`,
          url: `https://www.finelinesystem.com/${location.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.finelinesystem.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Gujarat Service Areas',
            item: 'https://www.finelinesystem.com/locations',
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-fss-neutral-50 pt-[72px] text-fss-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="border-b border-fss-neutral-200 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-6">
          <nav className="mb-8 flex items-center gap-2 text-sm text-fss-neutral-700" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-fss-neutral-900">Home</Link>
            <span>/</span>
            <span>Service areas</span>
          </nav>
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="site-kicker">Gujarat coverage</p>
              <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                AV equipment rental across Gujarat.
              </h1>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-fss-neutral-700">
                Fineline coordinates projectors, LED walls, sound systems, displays, laptops,
                delivery, setup, and technical support from our Rajkot base to major cities across
                Gujarat and Saurashtra.
              </p>
              <a
                href={`https://wa.me/917096110104?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary mt-7"
              >
                Plan a Gujarat event
                <span className="material-symbols-outlined text-xl">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="site-kicker">Choose your city</p>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                {gujaratLocations.length} major service areas
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-fss-neutral-700">
              Each page explains typical event needs, delivery planning, equipment options, and the
              details needed for an accurate quote.
            </p>
          </div>

          <div className="mt-10 grid border-l border-t border-fss-neutral-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {gujaratLocations.map((location, index) => (
              <Link
                key={location.slug}
                href={`/${location.slug}`}
                className="group flex min-h-28 items-center justify-between gap-4 border-b border-r border-fss-neutral-200 bg-white p-5 transition-colors hover:bg-fss-neutral-50"
              >
                <span>
                  <span className="block text-xs font-bold tracking-[0.12em] text-fss-neutral-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-2 block text-lg font-bold">{location.city}</span>
                </span>
                <span className="material-symbols-outlined text-xl text-fss-primary-dark transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fss-neutral-900 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-6">
          <div>
            <p className="site-kicker !text-fss-primary">How regional bookings work</p>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.04em]">
              The route is planned before the equipment leaves Rajkot.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              ['01', 'Share the exact venue', 'Access, loading, room size, timing, and power affect the equipment plan.'],
              ['02', 'Confirm equipment and crew', 'The quote includes the practical display, sound, cabling, transport, and support requirements.'],
              ['03', 'Setup and test on site', 'The crew installs and checks the signal, audio, microphones, content, and backup plan.'],
            ].map(([number, title, copy]) => (
              <div key={number} className="border-t border-white/20 pt-5">
                <span className="text-xs font-bold tracking-[0.14em] text-fss-primary">{number}</span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fss-primary px-5 py-14 lg:px-6">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em]">City not listed?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              Send the location. We’ll confirm what is practical.
            </h2>
          </div>
          <a
            href={`https://wa.me/917096110104?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button-dark shrink-0"
          >
            Ask about your city
            <span className="material-symbols-outlined text-xl">arrow_outward</span>
          </a>
        </div>
      </section>
    </div>
  );
}
