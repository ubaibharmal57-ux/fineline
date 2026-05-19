import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import EventTypesSection from './components/EventTypesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import StatsSection from './components/StatsSection';
import Link from 'next/link';

const whatsappMessage = encodeURIComponent(
  'Hi Fineline, I need AV equipment for an event. Can you share details?'
);

const faqItems = [
  {
    question: 'What can Fineline provide for an event?',
    answer: 'You can rent projectors, screens, LED walls, LED TVs, digital standees, sound systems, microphones, laptops, and stage lighting. We help you choose the right mix based on your venue and audience size.'
  },
  {
    question: 'Which cities do you cover?',
    answer: 'We are based in Rajkot and serve major cities across Gujarat and Saurashtra, including Ahmedabad, Jamnagar, Morbi, Junagadh, Bhavnagar, Gandhidham, Surat, Vadodara, Gandhinagar, and Anand.'
  },
  {
    question: 'Will your team set everything up?',
    answer: 'Yes. We bring the equipment to the venue, set it up, test the connections, and explain the handover. For events that need live support, a technician can stay on-site.'
  },
  {
    question: 'Can I rent equipment for one day?',
    answer: 'Yes. Most rentals start from one day. Multi-day events, exhibitions, college programs, and training setups can be quoted separately.'
  },
  {
    question: 'What should I send for a quote?',
    answer: 'Share the event date, city, venue type, expected audience size, and the equipment you have in mind. If you are not sure, tell us the event format and we will suggest a practical setup.'
  },
];

const serviceAreas = [
  { city: 'Rajkot', href: '/av-equipment-rental-in-rajkot', highlight: true },
  { city: 'Ahmedabad', href: '/av-equipment-rental-in-ahmedabad' },
  { city: 'Jamnagar', href: '/av-equipment-rental-in-jamnagar' },
  { city: 'Morbi', href: '/av-equipment-rental-in-morbi' },
  { city: 'Junagadh', href: '/av-equipment-rental-in-junagadh' },
  { city: 'Bhavnagar', href: '/av-equipment-rental-in-bhavnagar' },
  { city: 'Gandhidham', href: '/av-equipment-rental-in-gandhidham' },
  { city: 'Surat', href: '/av-equipment-rental-in-surat' },
  { city: 'Vadodara', href: '/av-equipment-rental-in-vadodara' },
  { city: 'Gandhinagar', href: '/' },
  { city: 'Anand', href: '/' },
];

const reviewCards = [
  {
    name: 'Varas',
    source: 'JustDial',
    date: 'Apr 2024',
    text: 'Praised the outdoor LED screen clarity and fast service at a reasonable price.',
    service: 'LED screen rental',
  },
  {
    name: 'Hussain',
    source: 'JustDial',
    date: 'May 2024',
    text: 'Booked a screen and projector for an IPL event and appreciated the quick service.',
    service: 'Projector and screen',
  },
  {
    name: 'Taha',
    source: 'JustDial',
    date: 'Sep 2024',
    text: 'Highlighted the LED screen quality and value received from the Fineline team.',
    service: 'LED screen setup',
  },
  {
    name: 'Dipen Ramavat',
    source: 'JustDial',
    date: 'May 2024',
    text: 'Rented 55 inch and 43 inch TVs and noted the 4K quality and reliable service.',
    service: 'TV rental',
  },
  {
    name: 'RAAJ TIMBA',
    source: 'JustDial',
    date: 'May 2024',
    text: 'Used projector, screen, and speakers for an IPL gathering and called the event handling smooth.',
    service: 'Event AV setup',
  },
  {
    name: 'Sanket',
    source: 'JustDial',
    date: 'Jan 2025',
    text: 'Rented laptops and computers, mentioning fast service and strong product quality.',
    service: 'Laptop rental',
  },
  {
    name: 'Raj Varmora',
    source: 'JustDial',
    date: 'May 2024',
    text: 'Booked a 4K LED TV and LED screen for a movie setup and thanked the FSS team.',
    service: 'TV and LED screen',
  },
  {
    name: 'Aryan Singh',
    source: 'JustDial',
    date: 'May 2024',
    text: 'Recommended the LED service for its quality and affordable pricing.',
    service: 'LED service',
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <EventTypesSection />
      <StatsSection />
      <WhyChooseUsSection />

      {/* Reviews Section */}
      <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-fss-neutral-900 to-fss-dark-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-10 items-end mb-7">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-fss-primary/15 rounded-full mb-4">
                <span className="material-symbols-outlined text-fss-primary text-lg">reviews</span>
                <span className="text-sm font-bold text-fss-primary uppercase tracking-wide">Client Reviews</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                What clients notice after setup.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/75">
                The common themes are simple: the screen is visible, the sound is clear, and the
                team responds when the program changes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://www.google.com/maps/place/Fineline+System+%26+Service/@22.2991448,70.8023745,17z/data=!3m1!4b1!4m6!3m5!1s0x3959ca03c18fffbb:0x334e3d9ae98f1cbe!8m2!3d22.2991448!4d70.8049494!16s%2Fg%2F11c61hbv_g?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/8 p-5 transition-colors hover:border-fss-primary"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-3xl text-fss-primary">map</span>
                  <div>
                    <div className="text-3xl font-black text-white">200+</div>
                    <div className="text-sm font-semibold text-white/70">Google Maps reviews</div>
                  </div>
                </div>
              </a>
              <a
                href="https://www.justdial.com/Rajkot/Fineline-System-and-Services-Para-Bazar/0281PX281-X281-1231758120W4Y1M8-DC_BZDET?utm=JDBadge"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/8 p-5 transition-colors hover:border-fss-primary"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-3xl text-fss-primary">verified</span>
                  <div>
                    <div className="text-3xl font-black text-white">250+</div>
                    <div className="text-sm font-semibold text-white/70">JustDial reviews</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/8 p-4 sm:p-5 lg:p-6">
            <div className="relative overflow-hidden">
              <div className="review-marquee flex gap-5 pr-5">
                {[...reviewCards, ...reviewCards].map((review, index) => (
                <article
                  key={`${review.name}-${review.date}-${index}`}
                  className="flex-none w-[280px] sm:w-[330px] min-h-[260px] rounded-xl border border-white/10 bg-white p-5"
                  tabIndex={0}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-black text-fss-neutral-900">{review.name}</h3>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wide text-fss-primary">
                        {review.source} - {review.date}
                      </p>
                    </div>
                    <div className="flex shrink-0 text-fss-primary" aria-label="5 star review">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className="material-symbols-outlined text-base">
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-fss-neutral-800">
                    {review.text}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-fss-neutral-700">
                    <span className="material-symbols-outlined text-base text-fss-primary">event_available</span>
                    {review.service}
                  </div>
                </article>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="w-full py-16 sm:py-20 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-4">
              Based in Rajkot. Working across Gujarat.
            </h2>
            <p className="text-lg text-fss-neutral-700 max-w-2xl mx-auto">
              Local coordination for Rajkot events, with planned delivery and setup support for
              surrounding cities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-fss-neutral-200">
              <div className="p-4 bg-gradient-to-r from-fss-primary to-fss-accent">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined">location_on</span>
                  Fineline location - Rajkot
                </h3>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4378.77967421856!2d70.8023744758664!3d22.299149742936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca03c18fffbb%3A0x334e3d9ae98f1cbe!2sFineline%20System%20And%20Services!5e1!3m2!1sen!2sus!4v1762467336958!5m2!1sen!2sus"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fineline System & Services Location - Rajkot, Gujarat"
                />
              </div>
            </div>

            {/* Cities */}
            <div>
              <h3 className="text-xl font-bold text-fss-neutral-900 mb-6">Common service cities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.city}
                    href={area.href}
                    className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
                      area.highlight
                        ? 'bg-fss-primary/10 border-fss-primary/30 text-fss-primary font-bold'
                        : 'bg-white border-fss-neutral-200 hover:border-fss-primary text-fss-neutral-900'
                    }`}
                  >
                    <span className="material-symbols-outlined text-fss-primary text-lg">location_city</span>
                    <span className="text-sm font-medium">{area.city}</span>
                    {area.highlight && <span className="text-xs bg-fss-primary text-white px-2 py-0.5 rounded-full ml-auto">HQ</span>}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-sm text-fss-neutral-700">
                Rajkot bookings are easiest to coordinate. For other cities, transport and crew
                timing are confirmed with your quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 sm:py-20 bg-fss-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-4">
              Quick answers before you book
            </h2>
            <p className="text-lg text-fss-neutral-700">
              Short answers for the questions most people ask before confirming AV equipment.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl border border-fss-neutral-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-bold text-fss-neutral-900 text-left pr-4">{faq.question}</h3>
                  <span className="material-symbols-outlined text-fss-primary flex-shrink-0 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-fss-neutral-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="w-full py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-fss-primary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-fss-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Tell us the venue.<br />
            We will shape the setup.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
              Get a practical AV quote
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Share the date, city, guest count, and event type.
            <br />
            <span className="text-fss-primary-light font-semibold">We will recommend only what the event needs.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href={`https://wa.me/919714595111?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-green-500 hover:bg-green-600 text-white text-lg font-bold rounded-2xl transition-all shadow-2xl hover:shadow-green-500/50 hover:scale-105"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send event details on WhatsApp
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </a>
            <a
              href="tel:+919714595111"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 glass-panel text-white text-lg font-bold rounded-2xl border-2 border-fss-primary/50 hover:border-fss-primary hover:bg-white/10 transition-all shadow-xl"
            >
              <span className="material-symbols-outlined text-2xl">call</span>
              Call for availability
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white">
            {[
              { icon: 'history', text: 'Since 2001' },
              { icon: 'schedule', text: 'On-Time Guarantee' },
              { icon: 'local_shipping', text: 'Free Setup in Rajkot' },
              { icon: 'workspace_premium', text: 'Professional Equipment' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-fss-primary text-xl">{item.icon}</span>
                <span className="text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
