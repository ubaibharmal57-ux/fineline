'use client';

import { useState } from 'react';
import Link from 'next/link';

// Equipment data
const equipmentData = [
  // Audio Equipment
  { id: 1, category: 'audio', name: 'Professional PA System', brand: 'JBL', price: 2500, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400', description: 'High-power sound system for large events' },
  { id: 2, category: 'audio', name: 'Wireless Microphone Set', brand: 'Shure', price: 800, image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=400', description: 'Professional wireless mic system' },
  { id: 3, category: 'audio', name: 'Portable Speaker System', brand: 'Bose', price: 1500, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=400', description: 'Compact yet powerful speakers' },
  { id: 4, category: 'audio', name: 'Mixer Console', brand: 'Yamaha', price: 3000, image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=400', description: '24-channel digital mixer' },
  
  // Visual Equipment
  { id: 5, category: 'visual', name: '4K Laser Projector', brand: 'Epson', price: 3500, image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=400', description: 'Ultra HD projection for events' },
  { id: 6, category: 'visual', name: 'Large LED Screen (10x6 ft)', brand: 'Samsung', price: 8000, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=400', description: 'Modular LED video wall' },
  { id: 7, category: 'visual', name: '65" 4K TV', brand: 'Sony', price: 2000, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=400', description: 'Crystal clear display' },
  { id: 8, category: 'visual', name: 'Projector Screen (12x8 ft)', brand: 'Da-Lite', price: 800, image: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=400', description: 'Professional projection screen' },
  
  // Computing Devices
  { id: 9, category: 'computing', name: 'MacBook Pro 16"', brand: 'Apple', price: 4000, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400', description: 'M2 chip, 16GB RAM' },
  { id: 10, category: 'computing', name: 'Dell Laptop', brand: 'Dell', price: 2500, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=400', description: 'i7 processor, 16GB RAM' },
  { id: 11, category: 'computing', name: 'iPad Pro', brand: 'Apple', price: 2000, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=400', description: '12.9" with Magic Keyboard' },
  { id: 12, category: 'computing', name: 'iPhone 15 Pro', brand: 'Apple', price: 3500, image: 'https://images.unsplash.com/photo-1592286927505-f6c80249f3a8?q=80&w=400', description: 'Latest iPhone model' },
  
  // Accessories
  { id: 13, category: 'accessories', name: 'Stage Lighting Kit', brand: 'Chauvet', price: 5000, image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400', description: 'Complete lighting solution' },
  { id: 14, category: 'accessories', name: 'Camera Tripod Stand', brand: 'Manfrotto', price: 500, image: 'https://images.unsplash.com/photo-1606166831276-d8c4ddfb2937?q=80&w=400', description: 'Professional grade tripod' },
  { id: 15, category: 'accessories', name: 'HDMI Cable Bundle', brand: 'Belkin', price: 200, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?q=80&w=400', description: 'Assorted cables and adapters' },
  { id: 16, category: 'accessories', name: 'Power Distribution Unit', brand: 'APC', price: 1000, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400', description: 'Professional power management' },
];

export default function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEquipment = equipmentData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Equipment', icon: 'inventory_2', count: equipmentData.length },
    { id: 'audio', name: 'Audio Equipment', icon: 'speaker_group', count: equipmentData.filter(i => i.category === 'audio').length },
    { id: 'visual', name: 'Visual Equipment', icon: 'videocam', count: equipmentData.filter(i => i.category === 'visual').length },
    { id: 'computing', name: 'Computing Devices', icon: 'laptop_chromebook', count: equipmentData.filter(i => i.category === 'computing').length },
    { id: 'accessories', name: 'Accessories', icon: 'settings_input_hdmi', count: equipmentData.filter(i => i.category === 'accessories').length },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fss-neutral-900 to-fss-neutral-800 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Equipment Catalog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Browse our extensive collection of professional audio-visual equipment
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-fss-secondary">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-fss-neutral-200 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl border border-fss-neutral-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-fss-neutral-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-fss-primary text-white'
                          : 'bg-fss-neutral-50 hover:bg-fss-neutral-100 text-fss-neutral-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-xl">
                          {cat.icon}
                        </span>
                        <span className="font-medium text-sm">{cat.name}</span>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        selectedCategory === cat.id ? 'bg-white/20' : 'bg-fss-neutral-200'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Equipment Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div className="text-fss-secondary">
                  Showing <strong className="text-fss-neutral-900">{filteredEquipment.length}</strong> items
                </div>
              </div>

              {filteredEquipment.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredEquipment.map((item) => (
                    <div
                      key={item.id}
                      className="group bg-white rounded-xl border border-fss-neutral-200 overflow-hidden hover:shadow-2xl hover:border-fss-primary transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-fss-neutral-100">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url('${item.image}')` }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-fss-neutral-900 mb-1 group-hover:text-fss-primary transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-sm text-fss-secondary">{item.brand}</p>
                          </div>
                        </div>
                        <p className="text-sm text-fss-secondary mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-fss-neutral-200">
                          <div>
                            <div className="text-2xl font-black text-fss-primary">
                              ₹{item.price}
                            </div>
                            <div className="text-xs text-fss-secondary">per day</div>
                          </div>
                          <Link
                            href="/contact"
                            className="flex items-center gap-1 px-4 py-2 bg-fss-primary text-white text-sm font-bold rounded-lg hover:bg-fss-primary-dark transition-colors"
                          >
                            Book Now
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <span className="material-symbols-outlined text-6xl text-fss-secondary mb-4 inline-block">
                    search_off
                  </span>
                  <h3 className="text-xl font-bold text-fss-neutral-900 mb-2">
                    No equipment found
                  </h3>
                  <p className="text-fss-secondary">
                    Try adjusting your search or filters
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-fss-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-fss-neutral-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-fss-secondary mb-8">
            We have more equipment available. Contact us for custom requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-fss-primary text-white font-bold rounded-lg hover:bg-fss-primary-dark transition-all shadow-lg hover:shadow-xl"
          >
            Contact Us for Custom Quote
            <span className="material-symbols-outlined">contact_phone</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

