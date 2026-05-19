'use client';

import { useState } from 'react';

// Equipment data
const equipmentData = [
  // Projectors & Screens
  { id: 1, category: 'projectors', name: 'HD Projector (3000-4000 lumens)', specs: 'HD resolution, portable, quick setup', bestFor: 'Small meetings up to 50 pax', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600', note: '' },
  { id: 2, category: 'projectors', name: 'HD Projector (5000+ lumens)', specs: 'High brightness, crisp visuals', bestFor: 'Conferences & events 50-200 pax', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600', note: '' },
  { id: 3, category: 'projectors', name: '4K Laser Projector (7000+ lumens)', specs: '4K resolution, laser light source, vivid colors', bestFor: 'Premium & outdoor events', image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=600', note: '' },
  { id: 4, category: 'projectors', name: 'Tripod Screen 6ft', specs: 'Portable tripod stand, matte white', bestFor: 'Small rooms & presentations', image: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=600', note: 'Projector add-on' },
  { id: 5, category: 'projectors', name: 'Tripod Screen 8ft', specs: 'Portable tripod stand, matte white', bestFor: 'Medium rooms & meetings', image: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=600', note: 'Projector add-on' },
  { id: 6, category: 'projectors', name: 'Motorized Screen 10ft+', specs: 'Electric motorized, wall/ceiling mount', bestFor: 'Auditoriums & large venues', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600', note: '' },

  // LED Walls & Video Displays
  { id: 7, category: 'led-walls', name: 'Indoor LED Wall (P3/P3.9)', specs: 'High resolution, seamless panels, vibrant', bestFor: 'Indoor events & conferences', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600', note: 'Custom size' },
  { id: 8, category: 'led-walls', name: 'Outdoor LED Wall (P4.8/P5)', specs: 'Weatherproof, high brightness', bestFor: 'Outdoor events & festivals', image: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=600', note: 'Custom size' },
  { id: 9, category: 'led-walls', name: 'LED Wall 6x4ft Setup', specs: '24 sqft, ready-to-install setup', bestFor: 'Small stages & backdrops', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600', note: 'Most Popular' },
  { id: 10, category: 'led-walls', name: 'LED Wall 10x6ft Setup', specs: '60 sqft, stunning visual impact', bestFor: 'Weddings & corporate events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600', note: '' },
  { id: 11, category: 'led-walls', name: 'LED Wall 12x8ft Setup', specs: '96 sqft, massive display', bestFor: 'Concerts, expos & large events', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600', note: '' },

  // TVs & Digital Standees
  { id: 12, category: 'tvs', name: 'LED TV 43" with Stand', specs: 'Full HD, floor stand included', bestFor: 'Reception desks & small displays', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=600', note: '' },
  { id: 13, category: 'tvs', name: 'LED TV 55" with Stand', specs: '4K UHD, adjustable floor stand', bestFor: 'Presentations & welcome displays', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=600', note: '' },
  { id: 14, category: 'tvs', name: 'LED TV 65" with Stand', specs: '4K UHD, premium display quality', bestFor: 'Exhibitions & showrooms', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=600', note: '' },
  { id: 15, category: 'tvs', name: 'Digital Standee 43"', specs: 'Portrait display, sleek design', bestFor: 'Lobbies, retail & signage', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600', note: '' },
  { id: 16, category: 'tvs', name: 'Digital Standee 55"', specs: 'Large portrait display, eye-catching', bestFor: 'Events, expos & branding', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600', note: '' },

  // Sound Systems & Audio
  { id: 17, category: 'sound', name: 'PA System Small (2 speakers + mic)', specs: '2 speakers, 1 wireless mic, compact', bestFor: 'Small gatherings up to 50 pax', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600', note: '' },
  { id: 18, category: 'sound', name: 'PA System Medium (4 speakers + mixer)', specs: '4 speakers, mixer console, clear audio', bestFor: 'Events with 50-200 pax', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600', note: '' },
  { id: 19, category: 'sound', name: 'PA System Large (6+ speakers)', specs: '6+ speakers, sub-woofers, full coverage', bestFor: 'Large events 200+ pax', image: 'https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?q=80&w=600', note: '' },
  { id: 20, category: 'sound', name: 'Wireless Microphone (handheld)', specs: 'UHF wireless, clear range, reliable', bestFor: 'Speeches, anchoring & presentations', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600', note: '' },
  { id: 21, category: 'sound', name: 'Collar/Lapel Microphone', specs: 'Clip-on wireless, hands-free', bestFor: 'Speakers, trainers & presenters', image: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=600', note: '' },
  { id: 22, category: 'sound', name: 'DJ Sound System (full setup)', specs: 'DJ console, speakers, sub, lights', bestFor: 'Parties, sangeet & celebrations', image: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d1e?q=80&w=600', note: '' },

  // Laptops & Computers
  { id: 23, category: 'laptops', name: 'Basic Laptop (i3/i5, 8GB)', specs: 'Windows 11, 8GB RAM, SSD', bestFor: 'Registration, data entry & browsing', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=600', note: '' },
  { id: 24, category: 'laptops', name: 'Business Laptop (i5/i7, 16GB)', specs: 'i5/i7, 16GB RAM, fast SSD', bestFor: 'Presentations & business use', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600', note: '' },
  { id: 25, category: 'laptops', name: 'Premium Laptop (MacBook Pro/Dell XPS)', specs: 'High-performance, premium build', bestFor: 'Creative work & demos', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600', note: '' },
  { id: 26, category: 'laptops', name: 'Desktop PC with Monitor', specs: 'Full desktop setup with keyboard & mouse', bestFor: 'Kiosks, counters & offices', image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=600', note: '' },
  { id: 27, category: 'laptops', name: 'Bulk Laptops (10+ units)', specs: 'Identical config, pre-setup, bulk ready', bestFor: 'Training, exams & workshops', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600', note: 'Bulk rental' },

  // Lighting & Stage
  { id: 28, category: 'lighting', name: 'Stage Lighting Kit (basic)', specs: 'Par lights, stand, DMX controller', bestFor: 'Small stages & conferences', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600', note: '' },
  { id: 29, category: 'lighting', name: 'Stage Lighting Kit (premium)', specs: 'Moving heads, wash lights, full rig', bestFor: 'Weddings, concerts & galas', image: 'https://images.unsplash.com/photo-1504501650895-2441b7915699?q=80&w=600', note: '' },
  { id: 30, category: 'lighting', name: 'Moving Head Lights (pair)', specs: 'Beam/spot, DMX, multiple patterns', bestFor: 'Dynamic stage effects', image: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?q=80&w=600', note: '' },
  { id: 31, category: 'lighting', name: 'LED Par Lights (set of 4)', specs: 'RGBW, DMX, versatile colors', bestFor: 'Uplighting & ambiance', image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600', note: '' },
];

const categories = [
  { id: 'all', name: 'All Equipment', icon: 'inventory_2' },
  { id: 'projectors', name: 'Projectors & Screens', icon: 'videocam' },
  { id: 'led-walls', name: 'LED Walls & Displays', icon: 'tv' },
  { id: 'tvs', name: 'TVs & Digital Standees', icon: 'monitor' },
  { id: 'sound', name: 'Sound Systems & Audio', icon: 'speaker_group' },
  { id: 'laptops', name: 'Laptops & Computers', icon: 'laptop_chromebook' },
  { id: 'lighting', name: 'Lighting & Stage', icon: 'light' },
];

const faqItems = [
  {
    question: 'What equipment can I rent?',
    answer: 'You can rent projectors, screens, LED walls, TVs, digital standees, sound systems, microphones, laptops, computers, and stage lighting. If you are unsure, share your venue and event format and we will suggest a setup.',
  },
  {
    question: 'Can I book for one day?',
    answer: 'Yes. Most equipment can be booked for a single day. Multi-day events and bulk requirements are quoted separately.',
  },
  {
    question: 'Are setup charges included?',
    answer: 'Setup is included for most rentals. Rajkot bookings are easiest to coordinate; other cities may include transport charges depending on distance and timing.',
  },
  {
    question: 'Can LED walls be made to a custom size?',
    answer: 'Yes. You can choose from common sizes or share the stage/backdrop dimensions for a custom LED wall quote.',
  },
  {
    question: 'Can a technician stay during the event?',
    answer: 'Yes. For events that need live operation or troubleshooting, we can include a technician on-site.',
  },
  {
    question: 'Where do you deliver?',
    answer: 'We are based in Rajkot and serve major cities across Gujarat and Saurashtra. Share the venue location and we will confirm transport and crew timing.',
  },
  {
    question: 'How do I get a quote?',
    answer: 'Send the event date, city, venue, audience size, and equipment list on WhatsApp. If you do not know what to choose, tell us the event type and we will guide you.',
  },
  {
    question: 'Do you handle bulk or multi-day rentals?',
    answer: 'Yes. Bulk laptops, exhibition equipment, and multi-day event setups can be quoted together after we understand the venue, dates, and quantity.',
  },
];

function getWhatsAppLink(equipmentName: string) {
  const message = encodeURIComponent(`Hi, I want to rent ${equipmentName}. Please share details.`);
  return `https://wa.me/919714595111?text=${message}`;
}

export default function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredEquipment = equipmentData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return equipmentData.length;
    return equipmentData.filter((i) => i.category === catId).length;
  };

  const activeCategoryName = categories.find((c) => c.id === selectedCategory)?.name || 'All Equipment';

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fss-neutral-900 to-fss-neutral-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fss-primary/10 border border-fss-primary/20 rounded-full mb-6">
              <span className="material-symbols-outlined text-fss-primary text-sm">inventory_2</span>
              <span className="text-sm font-semibold text-fss-primary">Rental catalogue</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Find the equipment
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
                your event actually needs
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-10">
              Browse projectors, LED walls, displays, sound, laptops, and lighting. Use the list to shortlist items, or message us for a room-ready recommendation.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-fss-neutral-700">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search equipment... (e.g. projector, LED wall, mic)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-fss-neutral-200 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-fss-neutral-700 hover:text-fss-neutral-900 transition-colors"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                )}
              </div>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10 text-white">
              {[
                { icon: 'inventory_2', text: '30+ rental options' },
                { icon: 'tune', text: 'Custom setup advice' },
                { icon: 'support_agent', text: 'Crew support available' },
                { icon: 'location_on', text: 'Rajkot-based service' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-fss-primary text-lg">{item.icon}</span>
                  <span className="text-sm font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-white rounded-xl border border-fss-neutral-200 font-bold text-fss-neutral-900"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-fss-primary">filter_list</span>
                  <span>Filter: {activeCategoryName}</span>
                </div>
                <span className={`material-symbols-outlined transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
            </div>

            {/* Sidebar - Categories */}
            <aside className={`lg:w-72 flex-shrink-0 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-2xl border border-fss-neutral-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-fss-neutral-900 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-fss-primary">category</span>
                  Filter equipment
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setMobileFilterOpen(false);
                      }}
                      className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-fss-primary text-white shadow-lg shadow-fss-primary/20'
                          : 'bg-fss-neutral-50 hover:bg-fss-neutral-100 text-fss-neutral-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                        <span className="font-medium text-sm text-left">{cat.name}</span>
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full ${
                          selectedCategory === cat.id ? 'bg-white/20' : 'bg-fss-neutral-200'
                        }`}
                      >
                        {getCategoryCount(cat.id)}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Quick Contact in Sidebar */}
                <div className="mt-6 pt-6 border-t border-fss-neutral-200">
                  <p className="text-sm text-fss-neutral-700 mb-3">Unsure what fits?</p>
                  <a
                    href="https://wa.me/919714595111?text=Hi%2C%20I%20need%20help%20choosing%20AV%20equipment%20for%20my%20event.%20Can%20you%20suggest%20the%20right%20setup%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Ask for a setup
                  </a>
                </div>
              </div>
            </aside>

            {/* Equipment Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div className="text-fss-neutral-700">
                  Showing <strong className="text-fss-neutral-900">{filteredEquipment.length}</strong> items
                  {selectedCategory !== 'all' && (
                    <span>
                      {' '}in <strong className="text-fss-primary">{activeCategoryName}</strong>
                    </span>
                  )}
                </div>
                {selectedCategory !== 'all' && (
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="text-sm text-fss-primary hover:underline font-medium flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-base">close</span>
                    Clear filter
                  </button>
                )}
              </div>

              {filteredEquipment.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredEquipment.map((item) => (
                    <div
                      key={item.id}
                      className="group bg-white rounded-2xl border border-fss-neutral-200 overflow-hidden hover:shadow-2xl hover:border-fss-primary/50 transition-all duration-300 flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-fss-neutral-100">
                        <div
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url('${item.image}')` }}
                        />
                        {/* Badge */}
                        {item.note && (
                          <div className="absolute top-3 left-3">
                            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                              item.note === 'Most Popular'
                                ? 'bg-fss-primary text-white'
                                : item.note === 'Projector add-on'
                                ? 'bg-green-500 text-white'
                                : 'bg-fss-neutral-900 text-white'
                            }`}>
                              {item.note}
                            </span>
                          </div>
                        )}
                        {/* Category tag */}
                        <div className="absolute top-3 right-3">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-fss-neutral-900 backdrop-blur-sm">
                            {categories.find((c) => c.id === item.category)?.name || ''}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="font-bold text-fss-neutral-900 mb-1 group-hover:text-fss-primary transition-colors text-base leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-sm text-fss-neutral-700 mb-3">{item.specs}</p>

                        {/* Best for tag */}
                        <div className="flex items-start gap-1.5 mb-4">
                          <span className="material-symbols-outlined text-fss-primary text-base mt-0.5 flex-shrink-0">
                            tips_and_updates
                          </span>
                          <span className="text-xs text-fss-neutral-700">
                            <span className="font-semibold text-fss-neutral-900">Best for:</span> {item.bestFor}
                          </span>
                        </div>

                        {/* CTA */}
                        <div className="mt-auto pt-4 border-t border-fss-neutral-200">
                          <a
                            href={getWhatsAppLink(item.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-xl transition-colors"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Book on WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-fss-neutral-200">
                  <span className="material-symbols-outlined text-6xl text-fss-neutral-700 mb-4 inline-block">
                    search_off
                  </span>
                  <h3 className="text-xl font-bold text-fss-neutral-900 mb-2">No equipment found</h3>
                  <p className="text-fss-neutral-700 mb-6">
                    Try adjusting your search or filters
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-fss-primary text-white font-bold rounded-xl hover:bg-fss-primary-dark transition-colors"
                  >
                    <span className="material-symbols-outlined">refresh</span>
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fss-neutral-900 via-fss-neutral-900 to-fss-neutral-800" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-fss-primary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-fss-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Need the equipment list checked?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
              Send the event details
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Share the venue, guest count, schedule, and what you already have. We will suggest a clean setup and remove anything unnecessary.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://wa.me/919714595111?text=Hi%2C%20I%20need%20a%20custom%20AV%20setup.%20Can%20you%20help%20me%20with%20a%20quote%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-green-500 hover:bg-green-600 text-white text-lg font-bold rounded-2xl transition-all shadow-2xl hover:shadow-green-500/50 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get a setup quote
            </a>
            <a
              href="tel:+919714595111"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/20 text-white text-lg font-bold rounded-2xl border-2 border-white/30 hover:border-white/50 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">call</span>
              Call +91 97145 95111
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white">
            {[
              { icon: 'schedule', text: 'Quote in 30 mins' },
              { icon: 'tune', text: 'Custom shortlist' },
              { icon: 'local_shipping', text: 'Free Setup (Rajkot)' },
              { icon: 'engineering', text: 'Technician Included' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-fss-primary text-lg">{item.icon}</span>
                <span className="text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fss-primary/10 rounded-full mb-4">
              <span className="material-symbols-outlined text-fss-primary text-sm">help</span>
              <span className="text-sm font-semibold text-fss-primary">Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-4">
              Equipment questions, answered simply
            </h2>
            <p className="text-lg text-fss-neutral-700">
              Practical details before you shortlist or book equipment.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-fss-neutral-50 rounded-2xl border border-fss-neutral-200 overflow-hidden hover:border-fss-primary/30 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-bold text-fss-neutral-900 text-left pr-4">{faq.question}</h3>
                  <span className="material-symbols-outlined text-fss-primary flex-shrink-0 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-fss-neutral-700 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-fss-neutral-700 mb-4">Still have questions?</p>
            <a
              href="https://wa.me/919714595111?text=Hi%2C%20I%20have%20a%20question%20about%20AV%20equipment%20rental."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-fss-primary text-white font-bold rounded-xl hover:bg-fss-primary-dark transition-colors"
            >
              <span className="material-symbols-outlined">chat</span>
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
