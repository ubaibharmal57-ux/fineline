import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fss-primary/10 rounded-full mb-4">
              <span className="material-symbols-outlined text-fss-primary text-sm">history</span>
              <span className="text-sm font-semibold text-fss-primary">Since 2000</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 tracking-tight mb-6">
              25 Years of Excellence in Gujarat
            </h2>
            
            <div className="space-y-4 text-fss-secondary leading-relaxed mb-8">
              <p>
                <strong className="text-fss-neutral-900">Fineline System & Services</strong> has been 
                Gujarat's trusted partner for audio-visual equipment rental since 2000. What started 
                as a small venture has grown into the region's premier AV rental company.
              </p>
              <p>
                We specialize in providing cutting-edge technology and professional support for 
                <strong className="text-fss-neutral-900"> weddings, corporate events, conferences, 
                and special occasions</strong> across Gujarat. Our deep understanding of local 
                requirements and cultural nuances sets us apart.
              </p>
              <p>
                From intimate family functions to grand corporate conferences, we've been part of 
                over <strong className="text-fss-neutral-900">5,000+ successful events</strong>, 
                earning the trust of clients throughout the state.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-fss-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-fss-primary text-xl">emoji_events</span>
                </div>
                <div>
                  <div className="font-bold text-fss-neutral-900">Industry Leader</div>
                  <div className="text-sm text-fss-secondary">Gujarat's #1 AV Rental</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-fss-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-fss-primary text-xl">groups</span>
                </div>
                <div>
                  <div className="font-bold text-fss-neutral-900">Expert Team</div>
                  <div className="text-sm text-fss-secondary">Trained Professionals</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-fss-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-fss-primary text-xl">location_on</span>
                </div>
                <div>
                  <div className="font-bold text-fss-neutral-900">Local Expertise</div>
                  <div className="text-sm text-fss-secondary">All Over Gujarat</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-fss-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-fss-primary text-xl">new_releases</span>
                </div>
                <div>
                  <div className="font-bold text-fss-neutral-900">Latest Tech</div>
                  <div className="text-sm text-fss-secondary">Modern Equipment</div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-fss-primary text-white font-bold rounded-lg hover:bg-fss-primary-dark transition-all shadow-md hover:shadow-lg"
            >
              Read Our Full Story
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="h-96 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800')` 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fss-neutral-900/60 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-black text-fss-primary mb-1">25+</div>
                    <div className="text-sm text-fss-secondary font-medium">Years of Experience</div>
                  </div>
                  <div className="border-l border-fss-neutral-200 pl-6">
                    <div className="text-3xl font-black text-fss-primary mb-1">5000+</div>
                    <div className="text-sm text-fss-secondary font-medium">Successful Events</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -top-6 -right-6 bg-fss-primary rounded-xl p-6 shadow-2xl max-w-xs hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-white text-3xl">star</span>
                <div className="text-white">
                  <div className="text-2xl font-black">4.9/5</div>
                  <div className="text-sm opacity-90">Client Rating</div>
                </div>
              </div>
              <p className="text-sm text-white/90">
                "Excellent service and top-quality equipment. FSS made our wedding perfect!"
              </p>
              <div className="mt-3 text-xs text-white/70">- Recent Client Review</div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-2xl">verified</span>
                </div>
                <div>
                  <div className="font-bold text-fss-neutral-900">ISO Certified</div>
                  <div className="text-xs text-fss-secondary">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos / Trust Badges */}
        <div className="mt-20 pt-12 border-t border-fss-neutral-200">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-fss-neutral-900 mb-2">Trusted by Leading Organizations</h3>
            <p className="text-sm text-fss-secondary">Serving Gujarat's top companies and families</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center text-fss-secondary font-semibold">Corporate Clients</div>
            <div className="text-center text-fss-secondary font-semibold">Event Planners</div>
            <div className="text-center text-fss-secondary font-semibold">Hotels & Venues</div>
            <div className="text-center text-fss-secondary font-semibold">Educational Institutions</div>
          </div>
        </div>
      </div>
    </section>
  );
}

