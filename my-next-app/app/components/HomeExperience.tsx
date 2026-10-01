import Image from 'next/image';
import Link from 'next/link';

const whatsappMessage = encodeURIComponent(
  'Hi Fineline, I need AV equipment for an event. Can you share details?'
);

const equipment = [
  { number: '01', icon: 'videocam', title: 'Projectors & screens', note: 'Presentations, screenings, classrooms' },
  { number: '02', icon: 'tv', title: 'LED walls & displays', note: 'Stages, launches, exhibitions' },
  { number: '03', icon: 'speaker', title: 'Sound systems', note: 'Speech, music, live programs' },
  { number: '04', icon: 'desktop_windows', title: 'TVs & digital signage', note: 'Booths, welcome desks, demos' },
  { number: '05', icon: 'laptop_mac', title: 'Laptops & computers', note: 'Training, registration, presentations' },
  { number: '06', icon: 'lightbulb', title: 'Stage lighting', note: 'Visibility, atmosphere, performance' },
];

const setups = [
  {
    type: 'Corporate',
    title: 'Conferences where every seat sees and hears clearly.',
    detail: 'Projection · PA system · Wireless microphones · Operator',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=85&w=1400&auto=format&fit=crop',
    alt: 'Conference stage with professional screens and lighting',
  },
  {
    type: 'Indian weddings',
    title: 'Wedding production made for the scale and energy of the celebration.',
    detail: 'LED wall · Sound · Stage lighting · Technical crew',
    image: '/services/indian-wedding-av.png',
    alt: 'Indian wedding reception stage with LED wall, sound and lighting',
  },
  {
    type: 'Government',
    title: 'Formal public functions delivered with dependable sound and display.',
    detail: 'LED screen · Line-array audio · Podium microphones · Crew',
    image: '/services/government-function-av.png',
    alt: 'Indian government public function with stage, LED screen and sound system',
  },
  {
    type: 'Exhibitions',
    title: 'Display systems built to keep products and ideas visible.',
    detail: 'TVs · Digital standees · Laptops · Cabling',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=85&w=1400&auto=format&fit=crop',
    alt: 'Exhibition hall with professional display areas',
  },
  {
    type: 'Cultural events',
    title: 'Garba and community programs built for a live, energetic crowd.',
    detail: 'Concert audio · LED stage · Moving lights · Live support',
    image: '/services/garba-cultural-event-av.png',
    alt: 'Gujarati garba event with professional stage, LED wall and sound system',
  },
  {
    type: 'Institutes',
    title: 'Seminars, convocations and campus events ready before doors open.',
    detail: 'Projection · Lectern microphones · PA system · Laptops',
    image: '/services/institute-event-av.png',
    alt: 'Indian institute auditorium with projection and professional audio setup',
  },
];

const reviews = [
  {
    quote: 'The outdoor LED screen was clear, the service was fast, and the pricing felt reasonable.',
    name: 'Varas',
    source: 'JustDial · LED screen rental',
  },
  {
    quote: 'We booked a screen and projector for an IPL event. The team responded quickly and handled it smoothly.',
    name: 'Hussain',
    source: 'JustDial · Projector setup',
  },
  {
    quote: 'The 4K televisions were in strong condition and the service was reliable from booking to handover.',
    name: 'Dipen Ramavat',
    source: 'JustDial · TV rental',
  },
];

const cities = [
  ['Rajkot', '/av-equipment-rental-in-rajkot'],
  ['Ahmedabad', '/av-equipment-rental-in-ahmedabad'],
  ['Jamnagar', '/av-equipment-rental-in-jamnagar'],
  ['Morbi', '/av-equipment-rental-in-morbi'],
  ['Junagadh', '/av-equipment-rental-in-junagadh'],
  ['Bhavnagar', '/av-equipment-rental-in-bhavnagar'],
  ['Surat', '/av-equipment-rental-in-surat'],
  ['Vadodara', '/av-equipment-rental-in-vadodara'],
];

const faqs = [
  ['What equipment can I rent?', 'Projectors, screens, LED walls, televisions, digital standees, PA systems, microphones, laptops, computers, and stage lighting.'],
  ['Do you deliver and set everything up?', 'Yes. We deliver, install, test the signal and sound, and can provide on-site technical support when the event requires it.'],
  ['How quickly can I get a quote?', 'Send the event date, city, venue, audience size, and the equipment you have in mind on WhatsApp. We will help shape the setup if you are unsure.'],
];

export default function HomeExperience() {
  return (
    <div className="overflow-hidden bg-fss-neutral-50 pt-[72px] text-fss-neutral-900">
      <section className="relative border-b border-fss-neutral-200">
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[52%] signal-grid opacity-45 lg:block" />
        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1240px] items-center gap-12 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-6 lg:py-20">
          <div className="relative z-10 max-w-[650px]">
            <p className="site-kicker">AV rental · Rajkot &amp; Gujarat</p>
            <h1 className="mt-7 text-[clamp(3rem,6.4vw,5.9rem)] font-bold leading-[0.93] tracking-[-0.065em]">
              Clear sound.<br />
              Sharp screens.<br />
              <span className="text-fss-primary-dark">Every event covered.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fss-neutral-700 sm:text-xl">
              Equipment, setup, and experienced technical support for corporate programs,
              celebrations, exhibitions, and institute events.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/917096110104?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary px-6"
              >
                Plan your setup
                <span className="material-symbols-outlined text-xl">arrow_outward</span>
              </a>
              <Link href="/equipment" className="button-secondary px-6">
                Browse equipment
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-fss-neutral-300 pt-5 text-sm font-semibold text-fss-neutral-700">
              <span>Since 2001</span>
              <span>Based in Rajkot</span>
              <span>Delivery, setup &amp; crew</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
            <div className="absolute -right-6 -top-6 h-32 w-32 bg-fss-primary sm:-right-8 sm:-top-8" />
            <div className="relative aspect-[4/5] overflow-hidden bg-fss-neutral-900 sm:aspect-[5/6]">
              <Image
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=88&w=1600&auto=format&fit=crop"
                alt="A professionally lit event stage with a large audience"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-5 p-5 text-white sm:p-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-fss-primary">On-site support</p>
                  <p className="mt-2 max-w-xs text-lg font-semibold leading-snug">Tested before guests arrive. Supported while the program runs.</p>
                </div>
                <span className="material-symbols-outlined shrink-0 text-3xl text-fss-primary">settings_input_component</span>
              </div>
            </div>
            <div className="absolute right-4 top-4 z-10 bg-white px-5 py-4 shadow-[0_16px_40px_rgba(32,34,31,0.18)] sm:right-6 sm:top-6 sm:px-6">
              <p className="text-2xl font-bold tracking-[-0.04em]">5000+</p>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-fss-neutral-700">events handled</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="site-kicker">Equipment</p>
              <h2 className="mt-6 max-w-md text-4xl font-bold leading-[1.03] tracking-[-0.045em] sm:text-5xl">
                Start with the room. Then choose the gear.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-fss-neutral-700">
                Tell us the venue, audience, and program. We will recommend what the space actually needs.
              </p>
              <Link href="/equipment" className="button-dark mt-8">
                See all equipment
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
            </div>

            <div className="border-t border-fss-neutral-300">
              {equipment.map((item) => (
                <Link
                  href="/equipment"
                  key={item.number}
                  className="group grid grid-cols-[2.25rem_2.75rem_1fr_auto] items-center gap-3 border-b border-fss-neutral-300 py-5 transition-colors hover:bg-fss-neutral-50 sm:grid-cols-[3rem_3rem_1fr_auto] sm:gap-5 sm:px-3 sm:py-6"
                >
                  <span className="text-xs font-bold tracking-[0.12em] text-fss-neutral-400">{item.number}</span>
                  <span className="material-symbols-outlined text-2xl text-fss-primary-dark">{item.icon}</span>
                  <span>
                    <span className="block text-base font-bold sm:text-lg">{item.title}</span>
                    <span className="mt-1 hidden text-sm text-fss-neutral-700 sm:block">{item.note}</span>
                  </span>
                  <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="event-services" className="scroll-mt-20 border-y border-fss-neutral-200 bg-fss-neutral-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="site-kicker">Built around the event</p>
              <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.03] tracking-[-0.045em] sm:text-5xl">
                Different rooms need different decisions.
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold hover:text-fss-primary-dark">
              Explore services
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {setups.map((setup) => (
              <article key={setup.type} className="group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-fss-neutral-200">
                  <Image
                    src={setup.image}
                    alt={setup.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                  <div className="absolute left-0 top-0 bg-fss-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-fss-neutral-900">
                    {setup.type}
                  </div>
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-tight tracking-[-0.03em]">{setup.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fss-neutral-700">{setup.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fss-neutral-900 py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="site-kicker !text-fss-primary">How it works</p>
              <h2 className="mt-6 text-4xl font-bold leading-[1.03] tracking-[-0.045em] sm:text-5xl">One plan. One accountable team.</h2>
              <p className="mt-6 text-lg leading-relaxed text-white/60">From the first message to pack-down, the setup stays coordinated.</p>
            </div>
            <ol className="border-t border-white/20">
              {[
                ['01', 'Share the event', 'Send the date, venue, audience size, and program format.'],
                ['02', 'Approve the setup', 'We recommend the equipment, crew, schedule, and a clear quote.'],
                ['03', 'We handle the room', 'Delivery, installation, testing, operation, and pack-down are coordinated.'],
              ].map(([number, title, text]) => (
                <li key={number} className="grid gap-3 border-b border-white/20 py-7 sm:grid-cols-[4rem_0.8fr_1.2fr] sm:items-start sm:gap-6">
                  <span className="text-xs font-bold tracking-[0.14em] text-fss-primary">{number}</span>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-6">
          <div className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="site-kicker">Client notes</p>
              <h2 className="mt-6 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">The details people remember.</h2>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-3xl font-bold">450+</p>
              <p className="text-sm text-fss-neutral-700">reviews across Google &amp; JustDial</p>
            </div>
          </div>
          <div className="mt-12 grid border-y border-fss-neutral-300 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <figure key={review.name} className={`py-8 lg:px-8 ${index > 0 ? 'border-t border-fss-neutral-300 lg:border-l lg:border-t-0' : ''}`}>
                <div className="flex gap-1 text-fss-primary-dark" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, star) => <span key={star}>★</span>)}
                </div>
                <blockquote className="mt-6 text-lg font-medium leading-relaxed">“{review.quote}”</blockquote>
                <figcaption className="mt-7">
                  <p className="text-sm font-bold">{review.name}</p>
                  <p className="mt-1 text-xs text-fss-neutral-700">{review.source}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-fss-neutral-200 bg-fss-neutral-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-6">
          <div>
            <p className="site-kicker">Across Gujarat</p>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-[-0.045em]">Based in Rajkot. Ready for the road.</h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-fss-neutral-700">Planned delivery, setup, and technical support for venues throughout Gujarat and Saurashtra.</p>
            <div className="mt-8 grid grid-cols-2 border-t border-fss-neutral-300 sm:grid-cols-4">
              {cities.map(([city, href]) => (
                <Link key={city} href={href} className="border-b border-fss-neutral-300 py-4 text-sm font-bold transition-colors hover:text-fss-primary-dark sm:mr-5">
                  {city}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="site-kicker">Useful answers</p>
            <div className="mt-6 border-t border-fss-neutral-300">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group border-b border-fss-neutral-300 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                    {question}
                    <span className="material-symbols-outlined text-xl transition-transform group-open:rotate-45">add</span>
                  </summary>
                  <p className="max-w-xl pt-4 text-sm leading-relaxed text-fss-neutral-700">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fss-primary px-5 py-16 sm:py-20 lg:px-6">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em]">Have a date and venue?</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-6xl">Let’s build the right setup for the room.</h2>
          </div>
          <a
            href={`https://wa.me/917096110104?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button-dark shrink-0 px-7"
          >
            Get a quote on WhatsApp
            <span className="material-symbols-outlined text-xl">arrow_outward</span>
          </a>
        </div>
      </section>
    </div>
  );
}
