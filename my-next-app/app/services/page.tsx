import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AV Rental Services in Gujarat | Fineline Rajkot',
  description:
    'Event AV services for corporate programs, weddings, exhibitions, colleges, seminars, launches, and public events across Gujarat.',
};

const eventServices = [
  {
    title: 'Corporate programs',
    icon: 'business_center',
    description: 'AV for meetings, conferences, town halls, dealer meets, product launches, and training days.',
    details: ['Conference projection', 'Clear speech audio', 'Presenter laptops', 'LED displays', 'Mic management'],
  },
  {
    title: 'Weddings and celebrations',
    icon: 'celebration',
    description: 'Screens, sound, and lighting for receptions, sangeet, garba nights, engagements, and family functions.',
    details: ['LED wall backdrops', 'DJ sound support', 'Wireless mics', 'Stage lighting', 'Welcome displays'],
  },
  {
    title: 'Exhibitions and brand activations',
    icon: 'storefront',
    description: 'Display-led setups for stalls, demo zones, product counters, expo stages, and launch areas.',
    details: ['LED walls', 'Digital standees', 'TV displays', 'Demo laptops', 'Booth audio'],
  },
  {
    title: 'College and institute events',
    icon: 'school',
    description: 'Practical AV for seminars, guest lectures, fests, convocations, workshops, and auditorium programs.',
    details: ['Projector setups', 'Seminar audio', 'Podium mics', 'Laptop support', 'Stage coverage'],
  },
  {
    title: 'Public and community events',
    icon: 'campaign',
    description: 'Sound and screen support for gatherings, ceremonies, local programs, and temporary outdoor setups.',
    details: ['PA systems', 'Outdoor screens', 'Announcement mics', 'Basic lighting', 'Crew support'],
  },
  {
    title: 'Training, exams, and workshops',
    icon: 'laptop_mac',
    description: 'Laptop, projection, and audio support for classrooms, labs, registration counters, and workshop rooms.',
    details: ['Bulk laptops', 'Projectors', 'Desktop setups', 'Registration counters', 'Network-ready devices'],
  },
];

const capabilities = [
  { icon: 'airplay', title: 'Projection', text: 'HD and 4K projectors, tripod screens, motorized screens, and presentation support.' },
  { icon: 'tv', title: 'LED walls', text: 'Indoor and outdoor LED walls for stages, backdrops, launches, and large audience visibility.' },
  { icon: 'speaker', title: 'Sound systems', text: 'PA systems, column speakers, mixers, subwoofers, DJ sound, and speech audio.' },
  { icon: 'mic', title: 'Microphones', text: 'Wireless handheld mics, collar mics, podium mics, and mic handling for programs.' },
  { icon: 'desktop_windows', title: 'Displays', text: 'LED TVs, floor stands, digital standees, signage screens, and booth displays.' },
  { icon: 'laptop_mac', title: 'Laptops and computers', text: 'Presentation laptops, registration systems, desktops, and bulk laptop rentals.' },
  { icon: 'wb_twilight', title: 'Lighting', text: 'Stage lights, par lights, moving heads, wash lighting, and functional event lighting.' },
  { icon: 'engineering', title: 'Setup and operation', text: 'Venue setup, cable routing, testing, handover, and technician support when needed.' },
];

const process = [
  {
    title: 'Share the event brief',
    text: 'Send the date, city, venue, audience size, event type, and any equipment already planned.',
  },
  {
    title: 'We shape the setup',
    text: 'The team suggests the right AV list based on visibility, sound coverage, program flow, and venue access.',
  },
  {
    title: 'Setup is tested on site',
    text: 'Displays, audio, microphones, laptop inputs, and power are checked before the event begins.',
  },
  {
    title: 'Support stays practical',
    text: 'For live programs, technicians can stay available for handovers, input changes, and quick adjustments.',
  },
];

const serviceAreas = [
  'Rajkot',
  'Ahmedabad',
  'Surat',
  'Vadodara',
  'Jamnagar',
  'Morbi',
  'Junagadh',
  'Bhavnagar',
  'Gandhidham',
  'Gandhinagar',
  'Anand',
];

const whatsappMessage = encodeURIComponent(
  'Hi Fineline, I need AV support for an event. I can share the date, city, venue, and requirements.'
);

export default function ServicesPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-fss-neutral-900 via-fss-dark-navy to-fss-neutral-800 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-fss-primary/30 bg-fss-primary/10 px-4 py-2 mb-6">
              <span className="material-symbols-outlined text-fss-primary text-sm">design_services</span>
              <span className="text-sm font-bold uppercase tracking-wide text-fss-primary">Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
              AV services for the way your event actually runs.
            </h1>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-white/80">
              Fineline supports corporate programs, weddings, exhibitions, college events, seminars,
              workshops, and public functions with screens, sound, displays, laptops, lighting, and
              setup support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/919714595111?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-7 py-4 font-bold text-white transition-colors hover:bg-green-600"
              >
                <span className="material-symbols-outlined">chat</span>
                Ask on WhatsApp
              </a>
              <Link
                href="/equipment"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white transition-colors hover:bg-white/15"
              >
                See equipment
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-fss-primary mb-3">
              Event types
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900">
              Start with the event. Then build the setup.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {eventServices.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-fss-neutral-200 bg-fss-neutral-50 p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-fss-primary/10 text-fss-primary">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-black text-fss-neutral-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fss-neutral-700">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-fss-neutral-700"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-fss-primary mb-3">
                What we do
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900">
                All the AV pieces in one place.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fss-neutral-700">
                You can come with a full equipment list, or just describe the event. We will help
                turn it into a practical AV setup.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((item) => (
                <div key={item.title} className="rounded-xl border border-fss-neutral-200 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-2xl text-fss-primary">{item.icon}</span>
                    <div>
                      <h3 className="font-black text-fss-neutral-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-fss-neutral-700">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900">
              How a service request moves.
            </h2>
            <p className="mt-3 text-lg text-fss-neutral-700">
              Simple coordination before the event. Less confusion on the day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {process.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-fss-neutral-200 bg-white p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-fss-primary text-sm font-black text-white">
                  {index + 1}
                </div>
                <h3 className="font-black text-fss-neutral-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fss-neutral-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900">
                Based in Rajkot. Available across Gujarat.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fss-neutral-700">
                Rajkot events are easiest to coordinate quickly. For other cities, we confirm travel,
                setup time, and crew availability along with your quote.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {serviceAreas.map((city) => (
                <div
                  key={city}
                  className="rounded-lg border border-fss-neutral-200 bg-white px-4 py-3 text-sm font-bold text-fss-neutral-900"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-fss-primary to-fss-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Send the event brief. We will suggest the setup.
          </h2>
          <p className="text-lg text-white mb-8">
            Share the date, city, venue type, audience size, and what needs to happen on stage or screen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/919714595111?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-green-700"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Fineline
            </a>
            <a
              href="tel:+919714595111"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white/10 px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-fss-primary"
            >
              <span className="material-symbols-outlined">call</span>
              Call +91 97145 95111
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
