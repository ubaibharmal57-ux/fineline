export interface GujaratCityPageData {
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

interface CityProfile {
  city: string;
  context: string;
  venueAreas: string[];
  eventFocus: string;
  delivery: string;
  routeNote: string;
  nearby: string;
}

const profiles: CityProfile[] = [
  {
    city: 'Gandhinagar',
    context: 'As Gujarat’s administrative capital and home to GIFT City, Infocity, Mahatma Mandir, universities, and government institutions, Gandhinagar hosts formal conferences, public programs, training sessions, exhibitions, and corporate events throughout the year.',
    venueAreas: ['Mahatma Mandir Area', 'GIFT City', 'Infocity', 'Kudasan & Sargasan Banquets', 'University Auditoriums'],
    eventFocus: 'government functions, conferences, corporate programs, exhibitions, and university events',
    delivery: 'Advance scheduled delivery and setup',
    routeNote: 'Planned transport from our Rajkot base',
    nearby: 'GIFT City, Kalol, Koba, and Ahmedabad',
  },
  {
    city: 'Anand',
    context: 'Anand combines a strong dairy and cooperative business community with the education hub of Vallabh Vidyanagar. Local requirements commonly include dealer meetings, university seminars, training programs, weddings, and community functions.',
    venueAreas: ['Vallabh Vidyanagar', 'University Auditoriums', 'Anand Corporate Offices', 'Hotel Banquets', 'Community Halls'],
    eventFocus: 'cooperative meetings, academic programs, corporate training, weddings, and community events',
    delivery: 'Advance scheduled delivery and setup',
    routeNote: 'Planned transport from Rajkot to Central Gujarat',
    nearby: 'Vallabh Vidyanagar, Karamsad, Petlad, and Nadiad',
  },
  {
    city: 'Nadiad',
    context: 'Nadiad is an important education, healthcare, and commercial centre in Kheda district. Projectors, PA systems, LED displays, and laptops are regularly useful for seminars, medical programs, institutional events, weddings, and public gatherings.',
    venueAreas: ['College Campuses', 'Hospital Conference Halls', 'Hotel Banquets', 'Community Halls', 'Wedding Venues'],
    eventFocus: 'education events, healthcare seminars, weddings, public programs, and business meetings',
    delivery: 'Advance scheduled delivery and setup',
    routeNote: 'Planned Central Gujarat route from Rajkot',
    nearby: 'Kheda, Uttarsanda, Mahemdavad, and Anand',
  },
  {
    city: 'Mehsana',
    context: 'Mehsana’s dairy, energy, engineering, and agricultural economy creates steady demand for dealer meets, safety training, product presentations, conferences, and social functions. Equipment plans can be scaled for offices, industrial sites, hotels, and open grounds.',
    venueAreas: ['Mehsana GIDC', 'Corporate Training Rooms', 'Hotel Conference Halls', 'Party Plots', 'Educational Campuses'],
    eventFocus: 'industrial training, dealer meets, corporate presentations, weddings, and college programs',
    delivery: 'Advance scheduled delivery and setup',
    routeNote: 'Planned North Gujarat delivery from Rajkot',
    nearby: 'Unjha, Visnagar, Kadi, and Modhera',
  },
  {
    city: 'Bharuch',
    context: 'Bharuch is a major industrial centre serving chemical, manufacturing, logistics, and port-linked businesses. Corporate presentations, plant training, safety programs, dealer conferences, exhibitions, and hotel events often need dependable sound and display systems.',
    venueAreas: ['Bharuch Industrial Areas', 'Dahej Road Venues', 'Hotel Conference Halls', 'Corporate Campuses', 'Wedding Banquets'],
    eventFocus: 'industrial conferences, safety training, dealer meetings, exhibitions, and weddings',
    delivery: 'Pre-scheduled delivery and technical setup',
    routeNote: 'Planned South-Central Gujarat transport',
    nearby: 'Dahej, Ankleshwar, Jhagadia, and Palej',
  },
  {
    city: 'Ankleshwar',
    context: 'Ankleshwar’s large industrial estate and manufacturing base make AV reliability especially important for training, safety briefings, annual meetings, product demonstrations, and corporate celebrations. We plan equipment quantities around the room, shift timing, and audience size.',
    venueAreas: ['Ankleshwar GIDC', 'Industrial Training Halls', 'Hotel Meeting Rooms', 'Company Auditoriums', 'Community Venues'],
    eventFocus: 'industrial training, safety programs, annual meetings, product demonstrations, and social events',
    delivery: 'Pre-scheduled delivery and technical setup',
    routeNote: 'Planned delivery for the Bharuch–Ankleshwar belt',
    nearby: 'Bharuch, Jhagadia, Panoli, and Dahej',
  },
  {
    city: 'Navsari',
    context: 'Navsari supports a lively mix of education, business, community, and wedding events. Typical setups range from compact projector-and-screen packages for seminars to LED walls, sound systems, and lighting for larger celebrations.',
    venueAreas: ['University & College Campuses', 'Lunsikui Area', 'Hotel Banquets', 'Wedding Lawns', 'Community Halls'],
    eventFocus: 'weddings, educational programs, business meetings, cultural functions, and community events',
    delivery: 'Pre-scheduled delivery and setup',
    routeNote: 'Planned South Gujarat transport from Rajkot',
    nearby: 'Bilimora, Chikhli, Gandevi, and Surat',
  },
  {
    city: 'Vapi',
    context: 'Vapi is one of South Gujarat’s busiest industrial and commercial zones, with frequent requirements for plant training, dealer events, corporate conferences, exhibitions, and annual functions. Venue access, loading time, power, and backup planning are considered before dispatch.',
    venueAreas: ['Vapi GIDC', 'Gunjan Area Hotels', 'Corporate Training Centres', 'Daman Road Venues', 'Industrial Auditoriums'],
    eventFocus: 'industrial programs, dealer meets, conferences, exhibitions, and company celebrations',
    delivery: 'Pre-scheduled delivery and technical support',
    routeNote: 'Long-distance delivery planned in advance',
    nearby: 'Daman, Silvassa, Pardi, and Umbergaon',
  },
  {
    city: 'Bhuj',
    context: 'Bhuj is a key centre for Kutch’s government, tourism, education, NGO, business, and cultural activity. Events may range from development workshops and institutional seminars to Kutchi weddings, exhibitions, and outdoor cultural programs.',
    venueAreas: ['Bhuj Hotel Venues', 'University & College Auditoriums', 'Government Halls', 'Cultural Grounds', 'Wedding Venues'],
    eventFocus: 'government programs, NGO workshops, Kutchi weddings, educational events, and cultural functions',
    delivery: 'Advance Kutch route planning required',
    routeNote: 'Scheduled transport from Rajkot',
    nearby: 'Madhapar, Anjar, Mandvi, and Gandhidham',
  },
  {
    city: 'Porbandar',
    context: 'Porbandar’s coastal economy, educational institutions, public organisations, and wedding venues create varied AV needs. We plan clear speech systems, projection, LED displays, and lighting for indoor halls as well as open coastal venues.',
    venueAreas: ['Coastal Hotel Venues', 'College Auditoriums', 'Public Function Grounds', 'Community Halls', 'Wedding Banquets'],
    eventFocus: 'public functions, education events, business meetings, weddings, and cultural programs',
    delivery: 'Advance scheduled delivery and setup',
    routeNote: 'Planned Saurashtra route from Rajkot',
    nearby: 'Kutiyana, Ranavav, Madhavpur, and Dwarka route venues',
  },
  {
    city: 'Surendranagar',
    context: 'Surendranagar serves ceramic, engineering, cotton, education, and trading communities. Dealer meets, factory presentations, training sessions, college events, weddings, and community programs can each be matched with an appropriately sized AV package.',
    venueAreas: ['Wadhwan Venues', 'Industrial Meeting Rooms', 'College Auditoriums', 'Hotel Banquets', 'Community Grounds'],
    eventFocus: 'dealer meets, industrial presentations, college events, weddings, and community functions',
    delivery: 'Advance scheduled delivery and setup',
    routeNote: 'Planned delivery from Rajkot',
    nearby: 'Wadhwan, Limbdi, Dhrangadhra, and Chotila',
  },
  {
    city: 'Amreli',
    context: 'Amreli’s educational, agricultural, cooperative, and community organisations host seminars, public meetings, training sessions, cultural events, and weddings. Compact and medium-sized venues benefit from careful speaker placement and correctly sized displays.',
    venueAreas: ['Educational Campuses', 'Cooperative Meeting Halls', 'Hotel Venues', 'Community Halls', 'Wedding Grounds'],
    eventFocus: 'seminars, cooperative meetings, public programs, weddings, and cultural events',
    delivery: 'Advance scheduled delivery and setup',
    routeNote: 'Planned Saurashtra delivery from Rajkot',
    nearby: 'Lathi, Savarkundla, Bagasara, and Dhari',
  },
  {
    city: 'Palanpur',
    context: 'Palanpur is a North Gujarat centre for dairy, agriculture, diamond trading, education, and regional commerce. Common event needs include dealer conferences, institutional seminars, community functions, weddings, and training programs.',
    venueAreas: ['Palanpur City Hotels', 'Diamond Business Venues', 'College Auditoriums', 'Community Halls', 'Wedding Lawns'],
    eventFocus: 'dealer conferences, education events, business presentations, weddings, and community programs',
    delivery: 'Advance North Gujarat route planning',
    routeNote: 'Scheduled transport from Rajkot',
    nearby: 'Deesa, Danta, Ambaji, and Siddhpur',
  },
  {
    city: 'Godhra',
    context: 'Godhra is the administrative and commercial centre of Panchmahal, with demand from government offices, schools, colleges, businesses, healthcare organisations, and community groups. Clear speech reinforcement and reliable projection are central to many local programs.',
    venueAreas: ['Government Meeting Halls', 'School & College Auditoriums', 'Hotel Venues', 'Community Halls', 'Outdoor Function Grounds'],
    eventFocus: 'government programs, educational seminars, healthcare events, weddings, and community functions',
    delivery: 'Advance scheduled delivery and setup',
    routeNote: 'Planned Central-Eastern Gujarat transport',
    nearby: 'Halol, Kalol Panchmahal, Lunawada, and Dahod route venues',
  },
  {
    city: 'Dahod',
    context: 'Dahod hosts government development programs, educational events, healthcare initiatives, cultural gatherings, and regional business meetings. Equipment is planned for clear communication in auditoriums, meeting halls, temporary structures, and outdoor grounds.',
    venueAreas: ['Government Function Venues', 'Educational Campuses', 'Healthcare Meeting Halls', 'Community Grounds', 'Hotel Banquets'],
    eventFocus: 'development programs, education events, healthcare seminars, cultural gatherings, and business meetings',
    delivery: 'Advance route and crew planning required',
    routeNote: 'Scheduled long-distance delivery from Rajkot',
    nearby: 'Limkheda, Jhalod, Devgadh Baria, and Godhra',
  },
  {
    city: 'Veraval',
    context: 'Veraval and the wider Somnath area combine fisheries, tourism, hospitality, education, religious travel, and social celebrations. AV plans can cover hotel conferences, community functions, wedding receptions, and outdoor programs near the coast.',
    venueAreas: ['Somnath Road Hotels', 'Coastal Event Venues', 'College Auditoriums', 'Community Halls', 'Wedding Grounds'],
    eventFocus: 'hotel conferences, tourism events, weddings, education programs, and community functions',
    delivery: 'Advance scheduled delivery and setup',
    routeNote: 'Planned coastal Saurashtra delivery',
    nearby: 'Somnath, Prabhas Patan, Kodinar, and Talala',
  },
  {
    city: 'Patan',
    context: 'Patan’s university community, heritage institutions, government offices, businesses, and social organisations require AV support for seminars, cultural programs, public functions, exhibitions, and weddings. Venue size and room brightness guide the equipment plan.',
    venueAreas: ['University Campuses', 'Government Halls', 'Heritage Event Spaces', 'Hotel Banquets', 'Community Venues'],
    eventFocus: 'university seminars, cultural programs, public functions, exhibitions, and weddings',
    delivery: 'Advance scheduled delivery and setup',
    routeNote: 'Planned North Gujarat transport',
    nearby: 'Siddhpur, Unjha, Chanasma, and Mehsana',
  },
  {
    city: 'Himmatnagar',
    context: 'Himmatnagar is a growing commercial, ceramic, education, and administrative centre in Sabarkantha. Corporate meetings, dealer programs, training sessions, college functions, and weddings can be supported with scalable display and sound packages.',
    venueAreas: ['Himmatnagar GIDC', 'Hotel Conference Halls', 'College Auditoriums', 'Party Plots', 'Government Venues'],
    eventFocus: 'corporate meetings, dealer programs, education events, government functions, and weddings',
    delivery: 'Advance North Gujarat route planning',
    routeNote: 'Scheduled transport from Rajkot',
    nearby: 'Idar, Prantij, Modasa, and Gandhinagar',
  },
  {
    city: 'Mundra',
    context: 'Mundra’s port, logistics, energy, and industrial businesses frequently organise safety programs, training sessions, conferences, annual functions, and stakeholder meetings. These events need dependable projection, speech reinforcement, and backup planning.',
    venueAreas: ['Port Area Corporate Venues', 'Industrial Training Halls', 'Township Auditoriums', 'Hotel Meeting Rooms', 'Outdoor Company Grounds'],
    eventFocus: 'port and industrial training, safety programs, conferences, annual functions, and corporate meetings',
    delivery: 'Advance Kutch route and access planning',
    routeNote: 'Scheduled transport from Rajkot',
    nearby: 'Gandhidham, Adipur, Anjar, and Mandvi',
  },
  {
    city: 'Deesa',
    context: 'Deesa is a regional centre for agriculture, dairy, trade, defence-linked activity, education, and community events. Typical requirements include training presentations, dealer meetings, school functions, public programs, weddings, and cultural gatherings.',
    venueAreas: ['Business Meeting Halls', 'Educational Campuses', 'Community Venues', 'Wedding Lawns', 'Outdoor Function Grounds'],
    eventFocus: 'training sessions, dealer meetings, school events, public programs, and weddings',
    delivery: 'Advance North Gujarat route planning',
    routeNote: 'Scheduled transport from Rajkot',
    nearby: 'Palanpur, Tharad, Dhanera, and Patan route venues',
  },
];

function createCityPage(profile: CityProfile): GujaratCityPageData {
  const slug = `av-equipment-rental-in-${profile.city.toLowerCase().replace(/\s+/g, '-')}`;
  return {
    slug,
    city: profile.city,
    service: 'AV Equipment Rental',
    metaTitle: `AV Equipment Rental in ${profile.city} | Fineline Gujarat`,
    metaDescription: `Rent projectors, LED walls, PA systems, displays and laptops in ${profile.city}. Planned delivery, professional setup and technician support from Fineline.`,
    h1: `AV Equipment Rental in ${profile.city}`,
    intro: `Fineline System & Services provides planned AV equipment rental in ${profile.city} for ${profile.eventFocus}. ${profile.context} We coordinate equipment from our Rajkot base, confirm venue access and setup timing in advance, and test the complete signal path before the program begins. Available equipment includes HD and laser projectors, projection screens, indoor and outdoor LED walls, PA systems, wireless microphones, televisions, digital standees, laptops, and stage lighting. For nearby requirements, we can also plan service around ${profile.nearby}. Share the date, venue, audience size, indoor or outdoor setting, and event schedule so the equipment list can be sized for the actual room rather than built from a generic package.`,
    deliveryTime: profile.delivery,
    distanceFromRajkot: profile.routeNote,
    popularVenues: profile.venueAreas,
    faq: [
      {
        question: `Does Fineline deliver AV equipment to ${profile.city}?`,
        answer: `Yes. We provide pre-scheduled delivery, setup, testing, and optional on-site technical support in ${profile.city}. Transport and crew timing are confirmed according to the venue, equipment quantity, and event schedule.`,
      },
      {
        question: `What AV equipment can I rent in ${profile.city}?`,
        answer: `You can request projectors, screens, LED walls, PA systems, wireless microphones, TVs, digital standees, laptops, computers, and stage lighting. We can combine them into one coordinated setup for ${profile.eventFocus}.`,
      },
      {
        question: `How early should I book AV equipment in ${profile.city}?`,
        answer: `Advance booking is recommended, especially for LED walls, large sound systems, multi-day events, and dates during the wedding or festival season. Early confirmation gives the crew time to plan transport, power, access, and testing.`,
      },
      {
        question: `How do I get an AV rental quote for ${profile.city}?`,
        answer: `Send the event date, exact venue, audience size, event type, schedule, and equipment you already have on WhatsApp. We will prepare a practical equipment list with delivery, setup, and support requirements.`,
      },
    ],
  };
}

export const additionalCityPages: Record<string, GujaratCityPageData> = Object.fromEntries(
  profiles.map((profile) => {
    const page = createCityPage(profile);
    return [page.slug, page];
  })
);

const existingCities = [
  ['Rajkot', 'av-equipment-rental-in-rajkot'],
  ['Ahmedabad', 'av-equipment-rental-in-ahmedabad'],
  ['Surat', 'av-equipment-rental-in-surat'],
  ['Vadodara', 'av-equipment-rental-in-vadodara'],
  ['Bhavnagar', 'av-equipment-rental-in-bhavnagar'],
  ['Jamnagar', 'av-equipment-rental-in-jamnagar'],
  ['Junagadh', 'av-equipment-rental-in-junagadh'],
  ['Morbi', 'av-equipment-rental-in-morbi'],
  ['Gandhidham', 'av-equipment-rental-in-gandhidham'],
] as const;

export const gujaratLocations = [
  ...existingCities.map(([city, slug]) => ({ city, slug })),
  ...profiles.map((profile) => ({
    city: profile.city,
    slug: `av-equipment-rental-in-${profile.city.toLowerCase().replace(/\s+/g, '-')}`,
  })),
].sort((a, b) => a.city.localeCompare(b.city));

export const specializedRajkotSlugs = [
  'projector-on-rent-in-rajkot',
  'led-screen-on-rent-in-rajkot',
  'sound-system-on-rent-in-rajkot',
  'laptop-on-rent-in-rajkot',
];

export const allLocationSlugs = [
  ...gujaratLocations.map((location) => location.slug),
  ...specializedRajkotSlugs,
];
