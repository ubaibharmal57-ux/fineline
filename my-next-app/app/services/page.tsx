import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | AV Equipment Rental & Event Support - FSS Gujarat',
  description: 'Comprehensive AV rental services in Gujarat including wedding packages, corporate events, delivery & setup, and 24/7 technical support.',
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fss-primary to-fss-accent py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive audio-visual solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Wedding Services */}
            <div className="bg-white rounded-2xl border border-fss-neutral-200 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(245, 166, 35, 0.3), rgba(245, 166, 35, 0.2)), url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800')` 
                }}
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-fss-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-fss-primary text-2xl">celebration</span>
                  </div>
                  <h2 className="text-2xl font-black text-fss-neutral-900">Wedding Equipment Rental</h2>
                </div>
                <p className="text-fss-secondary mb-6 leading-relaxed">
                  Make your special day unforgettable with our premium wedding AV packages. From traditional ceremonies 
                  to modern celebrations, we provide complete sound, lighting, and visual solutions.
                </p>
                <h3 className="font-bold text-fss-neutral-900 mb-3">What's Included:</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    'Professional sound systems for ceremonies and receptions',
                    'LED screens for photo/video displays',
                    'Stage and ambient lighting',
                    'Wireless microphones for speeches',
                    'Technical crew for setup and operation',
                    'Backup equipment for peace of mind'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-fss-secondary">
                      <span className="material-symbols-outlined text-fss-primary text-base mt-0.5">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-fss-primary text-white font-bold rounded-lg hover:bg-fss-primary-dark transition-colors"
                >
                  Get Wedding Quote
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Corporate Services */}
            <div className="bg-white rounded-2xl border border-fss-neutral-200 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(245, 166, 35, 0.3), rgba(245, 166, 35, 0.2)), url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800')` 
                }}
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-fss-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-fss-primary text-2xl">business_center</span>
                  </div>
                  <h2 className="text-2xl font-black text-fss-neutral-900">Corporate Event Solutions</h2>
                </div>
                <p className="text-fss-secondary mb-6 leading-relaxed">
                  Professional AV solutions for conferences, seminars, product launches, and business meetings. 
                  Ensure your corporate events run smoothly with our reliable equipment and expert support.
                </p>
                <h3 className="font-bold text-fss-neutral-900 mb-3">What's Included:</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    '4K projectors and large screens',
                    'Conference room audio systems',
                    'Live streaming and recording equipment',
                    'Laptops and presentation devices',
                    'On-site technical support',
                    'Video conferencing solutions'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-fss-secondary">
                      <span className="material-symbols-outlined text-fss-primary text-base mt-0.5">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-fss-primary text-white font-bold rounded-lg hover:bg-fss-primary-dark transition-colors"
                >
                  Get Corporate Quote
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-fss-neutral-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-fss-secondary">
              Complete support for your event success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-fss-neutral-200">
              <div className="w-14 h-14 bg-fss-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-fss-primary text-3xl">local_shipping</span>
              </div>
              <h3 className="text-xl font-bold text-fss-neutral-900 mb-3">Delivery & Setup</h3>
              <p className="text-fss-secondary text-sm leading-relaxed">
                Timely delivery and professional installation at your venue. Our team ensures everything is 
                properly set up and tested before your event begins.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-fss-neutral-200">
              <div className="w-14 h-14 bg-fss-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-fss-primary text-3xl">support_agent</span>
              </div>
              <h3 className="text-xl font-bold text-fss-neutral-900 mb-3">24/7 Technical Support</h3>
              <p className="text-fss-secondary text-sm leading-relaxed">
                Round-the-clock technical assistance during your event. Our support team is always available 
                to resolve any issues quickly and efficiently.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-fss-neutral-200">
              <div className="w-14 h-14 bg-fss-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-fss-primary text-3xl">settings</span>
              </div>
              <h3 className="text-xl font-bold text-fss-neutral-900 mb-3">Equipment Operation</h3>
              <p className="text-fss-secondary text-sm leading-relaxed">
                Optional equipment operation service. Our trained operators can manage all technical aspects, 
                allowing you to focus on your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-fss-neutral-900 mb-4">
              We Serve All of Gujarat
            </h2>
            <p className="text-lg text-fss-secondary">
              Fast delivery to major cities across the state
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Anand'].map((city) => (
              <div key={city} className="bg-white border border-fss-neutral-200 rounded-lg p-4 text-center hover:border-fss-primary transition-colors">
                <span className="material-symbols-outlined text-fss-primary mb-2">location_on</span>
                <div className="font-semibold text-fss-neutral-900">{city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-fss-primary to-fss-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Book Our Services?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us today for a free consultation and customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-fss-primary font-bold rounded-lg hover:bg-fss-neutral-50 transition-all shadow-lg"
            >
              Get Free Quote
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-fss-primary transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

