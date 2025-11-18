import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import EventTypesSection from './components/EventTypesSection';
import WhyRentSection from './components/WhyRentSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import JustDialBadge from './components/JustDialBadge';
import StatsSection from './components/StatsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <EventTypesSection />
      <StatsSection />
      <WhyChooseUsSection />
      <WhyRentSection />
      <TrustSection />
      <AboutSection />
      
      {/* Testimonials Section - Premium Design */}
      <section className="w-full py-20 sm:py-28 relative overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-fss-neutral-50 to-white" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-fss-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-fss-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-fss-primary/10 rounded-full mb-6 border border-fss-primary/20">
              <span className="material-symbols-outlined text-fss-primary text-xl">reviews</span>
              <span className="text-fss-primary font-bold text-sm tracking-wider uppercase">Client Success Stories</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-fss-neutral-900 tracking-tight mb-6 leading-tight">
              Trusted by Thousands
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
                Across India
              </span>
            </h2>

            <p className="text-xl text-fss-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Real experiences from real clients who trust us with their most important events
            </p>

            {/* JustDial Badge */}
            <div className="flex justify-center mb-12">
              <JustDialBadge />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rahul Kumar",
                role: "Wedding in Ahmedabad",
                initials: "RK",
                review: "FSS transformed our wedding into an unforgettable experience! The sound quality was crystal clear and their team's professionalism exceeded all expectations. Absolutely worth every penny!",
              },
              {
                name: "Priya Shah",
                role: "Corporate Event Manager",
                initials: "PS",
                review: "We've partnered with FSS for countless corporate events. Their cutting-edge equipment and punctual delivery have made them our go-to AV provider. Simply the best in the business!",
              },
              {
                name: "Amit Patel",
                role: "Conference Organizer",
                initials: "AP",
                review: "Outstanding service! The technical support team was available round-the-clock during our 3-day conference. Their expertise and reliability are unmatched in the industry.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="glass rounded-3xl p-8 border-2 border-white/50 hover:border-fss-primary/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="mb-6">
                  <span className="material-symbols-outlined text-fss-primary text-5xl opacity-30">format_quote</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined text-fss-primary text-xl">grade</span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-fss-secondary mb-8 leading-relaxed text-base">
                  "{testimonial.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-fss-neutral-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-fss-primary to-fss-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-bold text-fss-neutral-900 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-fss-secondary font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="w-full py-24 sm:py-32 relative overflow-hidden">
        {/* Premium Dark Background */}
        <div className="absolute inset-0 gradient-dark" />

        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-fss-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-fss-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fss-primary-light rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-dark rounded-full mb-8 border border-fss-primary/30">
            <span className="material-symbols-outlined text-fss-primary text-xl">rocket_launch</span>
            <span className="text-fss-primary font-bold text-sm tracking-wider uppercase">
              Let's Get Started
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Ready to Elevate<br />
            Your Event to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent animate-gradient">
              Extraordinary Heights?
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience premium audio-visual excellence backed by 25 years of expertise.
            <br />
            <span className="text-fss-primary-light font-semibold">Get your free consultation today!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-fss-primary to-fss-accent text-white text-lg font-bold rounded-2xl transition-all shadow-2xl hover:shadow-fss-primary/50 hover:scale-105"
            >
              Get Free Consultation
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 glass-dark text-white text-lg font-bold rounded-2xl border-2 border-fss-primary/50 hover:border-fss-primary hover:bg-white/10 transition-all shadow-xl"
            >
              <span className="material-symbols-outlined text-2xl">call</span>
              Call Now
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            {[
              { icon: 'verified', text: 'Certified Excellence' },
              { icon: 'schedule', text: 'On-Time Guarantee' },
              { icon: 'support_agent', text: '24/7 Support' },
              { icon: 'workspace_premium', text: 'Premium Equipment' },
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
