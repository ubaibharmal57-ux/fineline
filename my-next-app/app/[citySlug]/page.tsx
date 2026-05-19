import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CityData {
  slug: string;
  city: string;
  service: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  deliveryTime: string;
  distanceFromRajkot: string;
  popularVenues: string[];
  faq: { question: string; answer: string }[];
}

const cityPages: Record<string, CityData> = {
  'av-equipment-rental-in-rajkot': {
    slug: 'av-equipment-rental-in-rajkot',
    city: 'Rajkot',
    service: 'AV Equipment Rental',
    metaTitle: 'AV Equipment Rental in Rajkot — Projectors, LED Screens, Sound Systems | Fineline',
    metaDescription: 'Rent projectors, LED screens, sound systems & laptops in Rajkot. Free delivery & setup. 24+ years experience. Based in Kandoi Bazar. Call +91 97145 95111.',
    h1: 'AV Equipment Rental in Rajkot',
    intro: `Rajkot is our home. Fineline System & Services has been providing professional AV equipment rental in Rajkot since 2001 from our office at Kandoi Bazar Chowk. As Rajkot's leading AV rental company, we offer free delivery, professional setup, and on-site technician support for all events in the city. Whether you need a projector for a board meeting at a Rajkot hotel, an LED wall for a wedding reception at a party plot on Kalawad Road, or a complete sound system for a college fest, Fineline is Rajkot's most trusted name in AV rental. Our central location in Rajkot means same-day delivery and setup is available for urgent requirements.`,
    deliveryTime: 'Same day (free delivery & setup within Rajkot city)',
    distanceFromRajkot: 'Headquarters — Kandoi Bazar Chowk',
    popularVenues: ['Race Course Hotels', 'Kalawad Road Party Plots', 'University Auditoriums', 'Aji Dam Area Venues', 'Yagnik Road Conference Halls'],
    faq: [
      { question: 'How do I get a projector quote in Rajkot?', answer: 'Share your venue, date, audience size, room brightness, and presentation format on WhatsApp. We will recommend the right projector brightness, screen size, and setup plan for Rajkot.' },
      { question: 'Do you offer free delivery in Rajkot?', answer: 'Yes! All AV equipment rentals in Rajkot come with free delivery, professional setup, and an on-site technician. We are based in Kandoi Bazar Chowk, so we can even offer same-day delivery for last-minute events.' },
      { question: 'Can I rent LED walls for a wedding in Rajkot?', answer: 'Absolutely. LED wall rental for weddings in Rajkot is one of our most popular services. We can plan the LED wall, PA system, microphones, welcome display, and technician support together.' },
    ]
  },
  'projector-on-rent-in-rajkot': {
    slug: 'projector-on-rent-in-rajkot',
    city: 'Rajkot',
    service: 'Projector on Rent',
    metaTitle: 'Projector on Rent in Rajkot — HD & 4K Projectors | Fineline',
    metaDescription: 'Rent HD & 4K projectors in Rajkot with screen, delivery & setup. 24+ years experience. Call +91 97145 95111.',
    h1: 'Projector on Rent in Rajkot — With Screen, Delivery & Setup',
    intro: `Looking for a projector on rent in Rajkot? Fineline System & Services offers HD and 4K projectors for meetings, trainings, screenings, and events across Rajkot. Every projector rental can include a projection screen, professional delivery, and complete setup at your venue. Whether you need a projector for a corporate presentation at a Rajkot hotel, a training session at your office, or a movie screening at a family event, we have the right projector for your needs. Our projectors range from 3000 lumens for small rooms to 7000+ lumens 4K laser projectors for large auditoriums and outdoor events in Rajkot.`,
    deliveryTime: 'Same day (free delivery & setup in Rajkot)',
    distanceFromRajkot: 'Headquarters',
    popularVenues: ['Corporate Offices', 'Hotels on Race Course', 'Training Centers', 'Educational Institutions', 'Community Halls'],
    faq: [
      { question: 'How do I get the right projector quote in Rajkot?', answer: 'Send your venue, date, audience size, screen distance, and whether the room is bright or dark. We will suggest the right projector and share the quote on WhatsApp.' },
      { question: 'Does the projector come with a screen?', answer: 'Yes. Projector bookings can include tripod screens for smaller rooms and larger motorized screens for auditoriums, halls, and premium events.' },
      { question: 'Can I get same-day projector delivery in Rajkot?', answer: 'Yes, we offer same-day projector delivery in Rajkot. Since we are based in Kandoi Bazar Chowk, we can deliver and set up equipment within 2-3 hours for urgent requirements.' },
    ]
  },
  'led-screen-on-rent-in-rajkot': {
    slug: 'led-screen-on-rent-in-rajkot',
    city: 'Rajkot',
    service: 'LED Screen on Rent',
    metaTitle: 'LED Screen & LED Wall on Rent in Rajkot | Fineline',
    metaDescription: 'Rent indoor & outdoor LED walls in Rajkot for weddings, corporate events & exhibitions. Professional setup and support. Call +91 97145 95111.',
    h1: 'LED Screen & LED Wall on Rent in Rajkot',
    intro: `Need an LED screen or LED wall on rent in Rajkot? Fineline System & Services provides high-resolution indoor and outdoor LED walls for weddings, corporate events, exhibitions, and concerts across Rajkot. Our LED walls in Rajkot are available in various sizes from compact 6x4ft displays to massive 12x8ft video walls. LED screen rental in Rajkot is one of our most popular services, especially for wedding receptions where families display pre-wedding photos and videos on stunning LED walls. We also supply LED screens for trade shows at exhibition centers, product launches, and corporate events throughout Rajkot city.`,
    deliveryTime: 'Same day (free delivery & setup in Rajkot)',
    distanceFromRajkot: 'Headquarters',
    popularVenues: ['Wedding Party Plots', 'Exhibition Halls', 'Corporate Event Venues', 'Hotel Banquet Halls', 'Outdoor Event Grounds'],
    faq: [
      { question: 'How do I get an LED wall quote in Rajkot?', answer: 'Share the venue, indoor or outdoor location, stage size, event timing, and content format. We will recommend the LED wall size and send the quote on WhatsApp.' },
      { question: 'What size LED wall do I need for a wedding in Rajkot?', answer: 'For most wedding receptions in Rajkot, a 10x6ft LED wall works well in large banquet halls. For smaller venues, a 6x4ft wall can be enough when positioned correctly.' },
      { question: 'Do you provide outdoor LED walls in Rajkot?', answer: 'Yes, we provide weather-resistant outdoor LED walls (P4.8/P5) for outdoor events in Rajkot. These are brighter and designed to be clearly visible even in daylight.' },
    ]
  },
  'sound-system-on-rent-in-rajkot': {
    slug: 'sound-system-on-rent-in-rajkot',
    city: 'Rajkot',
    service: 'Sound System on Rent',
    metaTitle: 'Sound System & PA System on Rent in Rajkot | Fineline',
    metaDescription: 'Rent professional PA systems, speakers & microphones in Rajkot with technician support for weddings, corporate events & more. Call +91 97145 95111.',
    h1: 'Sound System & PA System on Rent in Rajkot',
    intro: `Fineline System & Services provides professional sound systems and PA systems on rent in Rajkot for all types of events. From compact 2-speaker PA systems for small meetings to large 6+ speaker setups for weddings and outdoor events, we have the right sound system for your needs in Rajkot. Every sound system rental in Rajkot includes wireless microphones, a professional mixer, and a trained technician who operates the system throughout your event. We also offer DJ sound systems for sangeet ceremonies, garba nights, and parties in Rajkot. Our sound equipment is regularly maintained and tested to ensure crystal-clear audio at every event.`,
    deliveryTime: 'Same day (free delivery & setup in Rajkot)',
    distanceFromRajkot: 'Headquarters',
    popularVenues: ['Wedding Venues', 'Corporate Halls', 'College Auditoriums', 'Outdoor Grounds', 'Religious Functions'],
    faq: [
      { question: 'How do I choose the right sound system in Rajkot?', answer: 'Tell us the venue type, audience size, indoor or outdoor setup, and whether you need speeches, music, DJ, or performances. We will suggest the PA size and microphone plan.' },
      { question: 'Do you provide wireless microphones with the sound system?', answer: 'Yes, PA system rentals can include wireless handheld microphones, collar mics, mixer support, and a technician depending on the event format.' },
      { question: 'Can I rent a DJ sound system in Rajkot?', answer: 'Yes. We provide DJ sound systems with speakers, subwoofers, mixer, and related equipment for sangeet, garba nights, parties, and celebrations.' },
    ]
  },
  'laptop-on-rent-in-rajkot': {
    slug: 'laptop-on-rent-in-rajkot',
    city: 'Rajkot',
    service: 'Laptop on Rent',
    metaTitle: 'Laptop on Rent in Rajkot — Business & Bulk Laptops | Fineline',
    metaDescription: 'Rent laptops in Rajkot for business use, events, exams, and training. Bulk laptop rentals available. 24+ years experience. Call +91 97145 95111.',
    h1: 'Laptop on Rent in Rajkot — Business & Bulk Laptops',
    intro: `Need laptops on rent in Rajkot? Fineline System & Services offers business laptops, premium laptops, and bulk laptop rentals for corporate training, exam centers, and events across Rajkot. We also cater to bulk laptop requirements in Rajkot when you need 10 or more laptops for an exam center, training program, or corporate event. All laptops can be pre-configured and ready to use with delivery anywhere in Rajkot.`,
    deliveryTime: 'Same day (free delivery in Rajkot)',
    distanceFromRajkot: 'Headquarters',
    popularVenues: ['Corporate Offices', 'Training Centers', 'Exam Centers', 'IT Companies', 'Educational Institutions'],
    faq: [
      { question: 'How do I get a laptop rental quote in Rajkot?', answer: 'Share the laptop quantity, configuration needs, rental dates, software requirements, and delivery location. We will send a clear quote on WhatsApp.' },
      { question: 'Can I rent laptops in bulk for exams in Rajkot?', answer: 'Yes. We specialize in bulk laptop rentals for exam centers in Rajkot and can provide large quantities pre-configured and ready for online exams.' },
      { question: 'Do the laptops come with internet connectivity?', answer: 'The laptops come with WiFi capability. If your venue has WiFi, they will connect automatically. We can also arrange mobile hotspot solutions for venues without internet.' },
    ]
  },
  'av-equipment-rental-in-ahmedabad': {
    slug: 'av-equipment-rental-in-ahmedabad',
    city: 'Ahmedabad',
    service: 'AV Equipment Rental',
    metaTitle: 'AV Equipment Rental in Ahmedabad — Projectors, LED Screens, Sound Systems | Fineline',
    metaDescription: 'Rent AV equipment in Ahmedabad. Projectors, LED walls, sound systems & laptops with delivery & setup. Based in Rajkot, serving Ahmedabad. Call +91 97145 95111.',
    h1: 'AV Equipment Rental in Ahmedabad',
    intro: `Fineline System & Services delivers professional AV equipment rental in Ahmedabad from our Rajkot headquarters. Ahmedabad, Gujarat's largest city and commercial capital, hosts thousands of corporate events, weddings, and exhibitions every year, and we provide the AV equipment to make them successful. From the bustling Science City area to the elegant banquet halls of SG Highway, from corporate conferences at Ahmedabad's premier hotels to grand Gujarati weddings at farmhouses on the outskirts — we deliver projectors, LED walls, sound systems, and laptops across Ahmedabad with professional setup and on-site technician support. Ahmedabad is approximately 220 km from our Rajkot base, and we schedule next-day delivery for most Ahmedabad events.`,
    deliveryTime: 'Next day delivery (from Rajkot, ~220 km)',
    distanceFromRajkot: '~220 km (4-5 hours)',
    popularVenues: ['SG Highway Hotels & Banquets', 'Science City Area', 'Maninagar Event Halls', 'Prahlad Nagar Corporate Offices', 'Bopal Farmhouses'],
    faq: [
      { question: 'Do you deliver AV equipment to Ahmedabad?', answer: 'Yes! We regularly deliver and set up AV equipment in Ahmedabad. Being approximately 220 km from our Rajkot headquarters, we schedule next-day delivery for most Ahmedabad events. For large events, we can also arrange same-day rush delivery.' },
      { question: 'Is there an extra delivery charge for Ahmedabad?', answer: 'There is a nominal delivery charge for Ahmedabad based on the equipment quantity. Contact us on WhatsApp for an exact quote including delivery to your Ahmedabad venue.' },
      { question: 'What equipment is most popular for Ahmedabad events?', answer: 'For Ahmedabad corporate events, projectors with PA systems are most popular. For weddings in Ahmedabad, LED walls (10x6ft or 12x8ft) with DJ sound systems are in high demand.' },
    ]
  },
  'av-equipment-rental-in-jamnagar': {
    slug: 'av-equipment-rental-in-jamnagar',
    city: 'Jamnagar',
    service: 'AV Equipment Rental',
    metaTitle: 'AV Equipment Rental in Jamnagar — Projectors, LED Screens, Sound Systems | Fineline',
    metaDescription: 'Rent AV equipment in Jamnagar. Projectors, LED walls, sound systems & laptops with delivery & setup. Same-day available. Call +91 97145 95111.',
    h1: 'AV Equipment Rental in Jamnagar',
    intro: `Jamnagar, the jewel of Saurashtra, is one of our primary service areas for AV equipment rental. Located just 100 km from our Rajkot headquarters, we provide same-day delivery of projectors, LED walls, sound systems, and laptops across Jamnagar city. Fineline System & Services has been serving Jamnagar's corporate sector, wedding families, and educational institutions for over two decades. From corporate events at hotels near Lakhota Lake to grand wedding receptions at party plots on Summair Club Road, from college seminars at educational institutions to product launches at exhibition venues — we bring professional AV equipment directly to your Jamnagar venue with complete setup and technician support.`,
    deliveryTime: 'Same day delivery (~100 km from Rajkot)',
    distanceFromRajkot: '~100 km (2 hours)',
    popularVenues: ['Lakhota Lake Area Hotels', 'Summair Club Road', 'Jamnagar University', 'Industrial Area Venues', 'Party Plots'],
    faq: [
      { question: 'How quickly can you deliver AV equipment to Jamnagar?', answer: 'Jamnagar is just ~100 km from our Rajkot headquarters, so we offer same-day delivery for most equipment. For planned events, we typically deliver and set up a day before.' },
      { question: 'What is the most popular AV rental for Jamnagar weddings?', answer: 'For Jamnagar weddings, LED walls with a clear PA system and microphones are the most requested. LED wall display of wedding photos and videos is a must-have for modern Jamnagar weddings.' },
      { question: 'Do you provide projectors for corporate events in Jamnagar?', answer: 'Yes. We regularly provide projectors and presentation equipment for corporate events in Jamnagar, especially for companies in the industrial and oil refinery sectors.' },
    ]
  },
  'av-equipment-rental-in-morbi': {
    slug: 'av-equipment-rental-in-morbi',
    city: 'Morbi',
    service: 'AV Equipment Rental',
    metaTitle: 'AV Equipment Rental in Morbi — Projectors, LED Screens, Sound Systems | Fineline',
    metaDescription: 'Rent AV equipment in Morbi. Projectors, LED walls, sound systems for ceramic industry events & weddings. Fast delivery from Rajkot. Call +91 97145 95111.',
    h1: 'AV Equipment Rental in Morbi',
    intro: `Morbi, known as the ceramic capital of India, is just 65 km from our Rajkot headquarters, making it one of our fastest delivery zones. Fineline System & Services provides professional AV equipment rental in Morbi for the booming ceramic industry's corporate events, product showcases, and exhibitions, as well as for weddings and social functions. Morbi's ceramic tile manufacturers and exporters frequently need professional AV setups for dealer meets, product launches, and factory visits — and we provide projectors, LED walls, sound systems, and laptops with same-day delivery and setup. For Morbi's vibrant wedding culture, we offer complete LED wall and sound system setups that bring a touch of grandeur to celebrations.`,
    deliveryTime: 'Same day delivery (~65 km from Rajkot)',
    distanceFromRajkot: '~65 km (1.5 hours)',
    popularVenues: ['Ceramic Industry Showrooms', 'Hotel Convention Halls', 'Party Plots', 'Factory Meeting Rooms', 'Community Halls'],
    faq: [
      { question: 'How fast can you deliver equipment to Morbi?', answer: 'Morbi is just ~65 km from Rajkot, so we offer same-day delivery within 1.5-2 hours. We frequently serve Morbi events and have a strong presence in the city.' },
      { question: 'Do you provide AV equipment for ceramic industry events in Morbi?', answer: 'Yes. We regularly provide projectors, LED walls, and sound systems for ceramic industry dealer meets, product launches, and exhibitions in Morbi.' },
      { question: 'How do I get an LED wall quote in Morbi?', answer: 'Share your venue, date, indoor or outdoor location, and preferred LED wall size on WhatsApp. We will include equipment, delivery from Rajkot, setup, and support in the quote.' },
    ]
  },
  'av-equipment-rental-in-junagadh': {
    slug: 'av-equipment-rental-in-junagadh',
    city: 'Junagadh',
    service: 'AV Equipment Rental',
    metaTitle: 'AV Equipment Rental in Junagadh — Projectors, LED Screens, Sound Systems | Fineline',
    metaDescription: 'Rent AV equipment in Junagadh. Projectors, LED walls, sound systems with delivery & setup. Trusted since 2001. Call +91 97145 95111.',
    h1: 'AV Equipment Rental in Junagadh',
    intro: `Junagadh, the historic city at the foot of Mount Girnar, is well within our service area at approximately 100 km from Rajkot. Fineline System & Services has been providing AV equipment rental in Junagadh for college events at local universities, government seminars, wedding celebrations, and corporate gatherings. Junagadh's growing corporate sector and vibrant educational institutions regularly need professional AV equipment, and we deliver projectors, LED screens, sound systems, and laptops with complete setup. From temple town celebrations to modern corporate conferences at Junagadh's best venues, we bring Rajkot-quality AV equipment directly to your event location in Junagadh.`,
    deliveryTime: 'Same day / Next day (~100 km from Rajkot)',
    distanceFromRajkot: '~100 km (2 hours)',
    popularVenues: ['University Auditoriums', 'Hotel Banquet Halls', 'Government Venues', 'Party Plots', 'Cultural Centers'],
    faq: [
      { question: 'Do you deliver AV equipment to Junagadh?', answer: 'Yes! Junagadh is approximately 100 km from our Rajkot headquarters. We provide same-day delivery for most equipment and next-day delivery for larger setups.' },
      { question: 'What AV equipment is popular for Junagadh college events?', answer: 'For college events in Junagadh, projector, screen, PA system, microphone, and laptop setups are the most popular choice.' },
      { question: 'Can you set up AV for outdoor events near Girnar in Junagadh?', answer: 'Yes, we provide outdoor-rated LED walls and weather-resistant sound systems for outdoor events in the Junagadh area, including events near Girnar and at open-air venues.' },
    ]
  },
  'av-equipment-rental-in-bhavnagar': {
    slug: 'av-equipment-rental-in-bhavnagar',
    city: 'Bhavnagar',
    service: 'AV Equipment Rental',
    metaTitle: 'AV Equipment Rental in Bhavnagar — Projectors, LED Screens, Sound Systems | Fineline',
    metaDescription: 'Rent AV equipment in Bhavnagar. Projectors, LED walls, sound systems with delivery & setup from Rajkot. Call +91 97145 95111.',
    h1: 'AV Equipment Rental in Bhavnagar',
    intro: `Bhavnagar, the cultural capital of Saurashtra, is approximately 170 km from our Rajkot headquarters. Fineline System & Services serves Bhavnagar with professional AV equipment rental for corporate events, weddings, college functions, and exhibitions. Bhavnagar's thriving diamond industry and port-related businesses frequently need AV equipment for dealer meets, conferences, and corporate gatherings. We deliver projectors, LED walls, sound systems, and laptops to Bhavnagar with next-day delivery and provide complete setup and on-site technician support. Bhavnagar's grand wedding culture also drives demand for our LED wall and sound system setups.`,
    deliveryTime: 'Next day delivery (~170 km from Rajkot)',
    distanceFromRajkot: '~170 km (3-4 hours)',
    popularVenues: ['Diamond Industry Offices', 'Hotel Conference Halls', 'University Campuses', 'Party Plots', 'Cultural Venues'],
    faq: [
      { question: 'How do you deliver AV equipment to Bhavnagar?', answer: 'We deliver from our Rajkot headquarters to Bhavnagar (~170 km). For planned events, we schedule next-day delivery. Our team arrives early, sets up all equipment, and stays for technical support during your event.' },
      { question: 'What is the delivery charge for Bhavnagar?', answer: 'Delivery charges to Bhavnagar vary based on equipment quantity. Contact us on WhatsApp at +91 97145 95111 for an exact quote including delivery to your Bhavnagar venue.' },
      { question: 'Do you serve the Bhavnagar diamond industry?', answer: 'Yes. We regularly provide AV equipment for diamond industry events, dealer meets, and corporate conferences in Bhavnagar.' },
    ]
  },
  'av-equipment-rental-in-surat': {
    slug: 'av-equipment-rental-in-surat',
    city: 'Surat',
    service: 'AV Equipment Rental',
    metaTitle: 'AV Equipment Rental in Surat — Projectors, LED Screens, Sound Systems | Fineline',
    metaDescription: 'Rent AV equipment in Surat. Projectors, LED walls, sound systems & laptops with delivery & setup. Serving Gujarat since 2001. Call +91 97145 95111.',
    h1: 'AV Equipment Rental in Surat',
    intro: `Surat, Gujarat's diamond and textile capital, is one of the most dynamic cities we serve. Located approximately 450 km from our Rajkot headquarters, Fineline System & Services provides professional AV equipment rental in Surat for the city's booming corporate events, lavish weddings, and major trade exhibitions. Surat's textile and diamond industries host some of Gujarat's largest corporate events, dealer meets, and product launches, requiring top-quality projectors, LED walls, and sound systems. We serve venues across Surat — from the corporate hubs of Vesu and Adajan to the grand wedding venues along Dumas Road and the exhibition centers in the city. For Surat events, we schedule delivery a day in advance to ensure everything is set up and tested perfectly.`,
    deliveryTime: 'Pre-scheduled delivery (~450 km from Rajkot)',
    distanceFromRajkot: '~450 km (7-8 hours)',
    popularVenues: ['Vesu Corporate Offices', 'Dumas Road Banquets', 'Adajan Convention Centers', 'SVNIT Campus', 'Exhibition Grounds'],
    faq: [
      { question: 'Do you really deliver AV equipment to Surat from Rajkot?', answer: 'Yes! We serve Surat regularly. For Surat events, we schedule delivery a day in advance. Our team drives the equipment (~450 km), sets up everything, and provides on-site technical support during your event.' },
      { question: 'How do I get a quote for Surat?', answer: 'Share your Surat venue, event date, equipment needs, and schedule on WhatsApp. We will include equipment, delivery, setup, and technical support in one clear quote.' },
      { question: 'What types of events do you serve in Surat?', answer: 'We serve corporate events (textile/diamond industry), grand Surti weddings, trade exhibitions, college fests, and government seminars in Surat.' },
    ]
  },
  'av-equipment-rental-in-vadodara': {
    slug: 'av-equipment-rental-in-vadodara',
    city: 'Vadodara',
    service: 'AV Equipment Rental',
    metaTitle: 'AV Equipment Rental in Vadodara — Projectors, LED Screens, Sound Systems | Fineline',
    metaDescription: 'Rent AV equipment in Vadodara (Baroda). Projectors, LED walls, sound systems with delivery & setup. Trusted since 2001. Call +91 97145 95111.',
    h1: 'AV Equipment Rental in Vadodara (Baroda)',
    intro: `Vadodara (Baroda), the cultural capital of Gujarat, is approximately 280 km from our Rajkot headquarters. Fineline System & Services provides professional AV equipment rental in Vadodara for corporate events, weddings, university functions, and cultural festivals. Vadodara is home to major corporations, MS University, and a vibrant cultural scene — all of which require professional AV equipment. We deliver projectors, LED walls, sound systems, and laptops to venues across Vadodara, from corporate offices on Productivity Road to wedding venues on Ajwa Road and university auditoriums. For Vadodara events, we schedule delivery a day in advance for seamless setup.`,
    deliveryTime: 'Next day delivery (~280 km from Rajkot)',
    distanceFromRajkot: '~280 km (5 hours)',
    popularVenues: ['Productivity Road Offices', 'Ajwa Road Banquets', 'MS University Campus', 'Alkapuri Hotels', 'Cultural Centers'],
    faq: [
      { question: 'Do you provide AV equipment for corporate events in Vadodara?', answer: 'Yes. We regularly serve corporate events in Vadodara, including conferences, training sessions, and product launches.' },
      { question: 'What is the delivery timeline for Vadodara?', answer: 'Vadodara is ~280 km from Rajkot. We schedule next-day delivery, arriving early morning to set up equipment before your event begins.' },
      { question: 'Can you provide AV equipment for MS University events in Vadodara?', answer: 'Yes. We serve educational institutions in Vadodara including MS University with projector, sound, microphone, display, and laptop setups for seminars, convocations, and college fests.' },
    ]
  },
  'av-equipment-rental-in-gandhidham': {
    slug: 'av-equipment-rental-in-gandhidham',
    city: 'Gandhidham',
    service: 'AV Equipment Rental',
    metaTitle: 'AV Equipment Rental in Gandhidham — Projectors, LED Screens, Sound Systems | Fineline',
    metaDescription: 'Rent AV equipment in Gandhidham & Kutch. Projectors, LED walls, sound systems with delivery & setup. Trusted since 2001. Call +91 97145 95111.',
    h1: 'AV Equipment Rental in Gandhidham & Kutch',
    intro: `Gandhidham, the commercial hub of Kutch district, is approximately 250 km from our Rajkot headquarters. Fineline System & Services serves Gandhidham and the wider Kutch region with professional AV equipment rental for corporate events, weddings, and industrial functions. Gandhidham's port-related businesses, industrial units, and the vibrant Kutchi wedding culture drive demand for professional AV equipment. We deliver projectors, LED walls, sound systems, and laptops across Gandhidham, Adipur, and nearby areas with complete setup and technician support. The Kandla port area and industrial estates frequently need AV equipment for corporate presentations and safety training sessions.`,
    deliveryTime: 'Next day delivery (~250 km from Rajkot)',
    distanceFromRajkot: '~250 km (4-5 hours)',
    popularVenues: ['Port Area Corporate Offices', 'Industrial Estate Meeting Rooms', 'Hotel Banquets', 'Community Halls', 'Party Plots'],
    faq: [
      { question: 'Do you deliver AV equipment to Gandhidham?', answer: 'Yes! We serve Gandhidham and the Kutch region. At ~250 km from Rajkot, we schedule next-day delivery and provide complete setup and on-site technical support.' },
      { question: 'Can you serve events in Bhuj or other Kutch locations?', answer: 'Yes, we serve the entire Kutch district including Bhuj, Mandvi, and Mundra. Delivery charges may vary based on exact location. Contact us for a quote.' },
      { question: 'What AV equipment is popular for Gandhidham industrial events?', answer: 'For Gandhidham industrial and port-related events, projectors with PA systems for safety presentations and training are most popular.' },
    ]
  },
};

export function generateStaticParams() {
  return Object.keys(cityPages).map((slug) => ({ citySlug: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ citySlug: string }> }): Promise<Metadata> {
  const { citySlug } = await params;
  const cityData = cityPages[citySlug];
  if (!cityData) return {};

  return {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    alternates: {
      canonical: `https://www.finelinesystem.com/${cityData.slug}`,
    },
    openGraph: {
      title: cityData.metaTitle,
      description: cityData.metaDescription,
      url: `https://www.finelinesystem.com/${cityData.slug}`,
      type: 'website',
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ citySlug: string }> }) {
  const { citySlug } = await params;
  const cityData = cityPages[citySlug];

  if (!cityData) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Fineline, I need AV equipment for an event in ${cityData.city}. Can you share details?`
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cityData.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <div className="w-full">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-fss-neutral-900 to-fss-neutral-800 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-white mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-fss-primary">{cityData.service} in {cityData.city}</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            {cityData.h1}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent mt-2">
              — Fineline System & Services
            </span>
          </h1>

          <div className="flex flex-wrap gap-4 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-fss-primary/20 rounded-full text-fss-primary text-sm font-medium">
              <span className="material-symbols-outlined text-base">local_shipping</span>
              {cityData.deliveryTime}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium">
              <span className="material-symbols-outlined text-base">map</span>
              {cityData.distanceFromRajkot}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium">
              <span className="material-symbols-outlined text-base">history</span>
              Since 2001
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/919714595111?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get {cityData.city} Quote on WhatsApp
            </a>
            <a
              href="tel:+919714595111"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-panel text-white font-bold rounded-xl border border-white/20 hover:bg-white/10 transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              Call +91 97145 95111
            </a>
          </div>
        </div>
      </section>

      {/* Intro Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-fss-neutral-700 leading-relaxed mb-8">
            {cityData.intro}
          </p>

          {/* Popular Venues */}
          <div className="bg-fss-neutral-50 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-fss-neutral-900 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-fss-primary">location_on</span>
              Popular Venues We Serve in {cityData.city}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cityData.popularVenues.map((venue, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-white rounded-full text-sm text-fss-neutral-900 border border-fss-neutral-200">
                  {venue}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Available */}
      <section className="py-16 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-fss-neutral-900 mb-8 text-center">
            Equipment Available for Rent in {cityData.city}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Projectors & Screens', icon: 'airplay', desc: 'HD & 4K projectors with screen options' },
              { name: 'LED Walls & Displays', icon: 'tv', desc: 'Indoor & outdoor LED video walls' },
              { name: 'Sound Systems', icon: 'speaker', desc: 'PA systems with wireless microphones' },
              { name: 'LED TVs & Standees', icon: 'desktop_windows', desc: '43" to 65" displays with stands' },
              { name: 'Laptops & Computers', icon: 'laptop_mac', desc: 'Business & bulk laptop rental' },
              { name: 'Stage Lighting', icon: 'wb_twilight', desc: 'Moving heads, par lights, stage kits' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-fss-neutral-200 hover:border-fss-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-fss-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-fss-primary">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-fss-neutral-900">{item.name}</h3>
                    <p className="text-sm text-fss-primary font-semibold">Quote on WhatsApp</p>
                  </div>
                </div>
                <p className="text-sm text-fss-neutral-700">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/equipment" className="inline-flex items-center gap-2 px-6 py-3 bg-fss-primary text-white font-bold rounded-lg hover:bg-fss-primary-dark transition-colors">
              View Full Equipment Catalog
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-fss-neutral-900 mb-8 text-center">
            Common AV Services for {cityData.city} Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Corporate Conference', link: '/services' },
              { name: 'Wedding Reception', link: '/services' },
              { name: 'College Seminar', link: '/services' },
              { name: 'Exhibition Setup', link: '/services' },
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="bg-fss-neutral-50 rounded-xl p-6 border border-fss-neutral-200 hover:border-fss-primary hover:shadow-lg transition-all text-center">
                <h3 className="font-bold text-fss-neutral-900 mb-3">{service.name}</h3>
                <span className="text-sm text-fss-neutral-700">View services &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-fss-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-fss-neutral-900 mb-8 text-center">
            FAQs — AV Rental in {cityData.city}
          </h2>
          <div className="space-y-4">
            {cityData.faq.map((item, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-fss-neutral-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-bold text-fss-neutral-900 text-left pr-4">{item.question}</h3>
                  <span className="material-symbols-outlined text-fss-primary flex-shrink-0 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-fss-neutral-700 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-fss-primary to-fss-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Need AV Equipment in {cityData.city}?
          </h2>
          <p className="text-lg text-white mb-8">
            Get an instant quote on WhatsApp. We deliver from Rajkot with professional setup and on-site technician.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/919714595111?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get {cityData.city} Quote on WhatsApp
            </a>
            <a
              href="tel:+919714595111"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-fss-primary transition-all"
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
