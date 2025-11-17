import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Fineline System & Services - 25 Years in Gujarat',
  description: 'Learn about FSS, Gujarat\'s leading AV equipment rental company with 25+ years of experience serving weddings, corporate events, and more.',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-fss-neutral-900 to-fss-neutral-800 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-fss-primary/20 rounded-full mb-6">
            <span className="material-symbols-outlined text-fss-primary text-sm">history</span>
            <span className="text-sm font-semibold text-fss-primary">Established 2000</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            25 Years of Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From a small local business to Gujarat's most trusted audio-visual equipment rental company
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-fss-secondary leading-relaxed">
                <p>
                  Established in 2000, <strong className="text-fss-neutral-900">Fineline System & Services</strong> began 
                  with a simple mission: to provide high-quality audio-visual equipment and exceptional service to the 
                  people of Gujarat.
                </p>
                <p>
                  What started in a small office with just a handful of equipment has grown into one of Gujarat's largest 
                  and most trusted AV rental companies. Today, we maintain an extensive inventory of cutting-edge equipment 
                  and serve clients across all major cities in Gujarat.
                </p>
                <p>
                  Over the past 25 years, we've had the privilege of being part of more than <strong className="text-fss-neutral-900">5,000 
                  successful events</strong> - from intimate family gatherings to grand corporate conferences, from traditional 
                  weddings to modern product launches.
                </p>
                <p>
                  Our deep understanding of Gujarat's culture, languages, and business practices allows us to provide 
                  personalized service that truly meets our clients' needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="h-96 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800')` 
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-fss-primary rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-black text-white mb-2">25+</div>
                <div className="text-white/90">Years Serving Gujarat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-fss-secondary max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-fss-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-fss-primary text-3xl">verified</span>
              </div>
              <h3 className="text-xl font-bold text-fss-neutral-900 mb-2">Quality First</h3>
              <p className="text-fss-secondary text-sm">
                We maintain only the highest quality equipment and never compromise on standards
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-fss-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-fss-primary text-3xl">schedule</span>
              </div>
              <h3 className="text-xl font-bold text-fss-neutral-900 mb-2">Punctuality</h3>
              <p className="text-fss-secondary text-sm">
                On-time delivery and setup - because we understand your event schedule is critical
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-fss-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-fss-primary text-3xl">handshake</span>
              </div>
              <h3 className="text-xl font-bold text-fss-neutral-900 mb-2">Integrity</h3>
              <p className="text-fss-secondary text-sm">
                Transparent pricing and honest communication - building trust with every interaction
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-fss-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-fss-primary text-3xl">support_agent</span>
              </div>
              <h3 className="text-xl font-bold text-fss-neutral-900 mb-2">Support</h3>
              <p className="text-fss-secondary text-sm">
                24/7 technical support to ensure your event runs smoothly from start to finish
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-fss-primary to-fss-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">25+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">5000+</div>
              <div className="text-white/90">Events Completed</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">500+</div>
              <div className="text-white/90">Equipment Items</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">100%</div>
              <div className="text-white/90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-4">
              Why Choose FSS?
            </h2>
            <p className="text-lg text-fss-secondary max-w-2xl mx-auto">
              What sets us apart from other AV rental companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Local Expertise', desc: 'Deep understanding of Gujarat market and cultural requirements' },
              { title: 'Latest Technology', desc: 'Regularly updated inventory with cutting-edge equipment' },
              { title: 'Competitive Pricing', desc: 'Best rates in Gujarat without compromising on quality' },
              { title: 'Professional Team', desc: 'Trained technicians with years of field experience' },
              { title: 'Comprehensive Service', desc: 'Delivery, setup, operation, and technical support' },
              { title: 'Flexible Packages', desc: 'Customizable solutions for every budget and requirement' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-fss-neutral-50 rounded-xl">
                <div className="w-10 h-10 bg-fss-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white">check</span>
                </div>
                <div>
                  <h3 className="font-bold text-fss-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-fss-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-fss-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-fss-neutral-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-fss-secondary mb-8">
            Let's discuss how we can make your event a success
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-fss-primary text-white font-bold rounded-lg hover:bg-fss-primary-dark transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </div>
  );
}

