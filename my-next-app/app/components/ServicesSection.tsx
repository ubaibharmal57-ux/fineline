'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Luxury Wedding Solutions',
    description: 'Transform your special day into a magical experience with our premium audio-visual and lighting solutions designed for perfection.',
    icon: 'celebration',
    features: ['Premium Sound Systems', '4K LED Displays', 'Cinematic Lighting', 'Dedicated Event Manager'],
    color: 'from-fss-primary to-fss-accent',
    gradient: 'from-fss-primary/10 to-fss-accent/10',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400'
  },
  {
    title: 'Corporate Excellence',
    description: 'Elevate your business events with professional-grade AV solutions, ensuring seamless presentations and impactful communication.',
    icon: 'business_center',
    features: ['Advanced Conferencing', '8K Projection Systems', 'Live Broadcast Setup', 'Technical Expert Team'],
    color: 'from-fss-accent to-fss-accent-dark',
    gradient: 'from-fss-accent/10 to-fss-accent-dark/10',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400'
  },
  {
    title: 'White-Glove Delivery',
    description: 'Experience hassle-free service with our punctual delivery, professional installation, and comprehensive equipment briefing.',
    icon: 'local_shipping',
    features: ['GPS-Tracked Delivery', 'Professional Installation', 'Equipment Calibration', 'Comprehensive Training'],
    color: 'from-fss-primary-light to-fss-primary',
    gradient: 'from-fss-primary-light/10 to-fss-primary/10',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400'
  },
  {
    title: 'Premium 24/7 Support',
    description: 'Rest easy with our round-the-clock technical assistance, ensuring your event proceeds flawlessly from start to finish.',
    icon: 'support_agent',
    features: ['Live Expert Support', 'Emergency Response Team', 'Remote Diagnostics', 'Instant Backup Systems'],
    color: 'from-fss-accent-dark to-fss-accent',
    gradient: 'from-fss-accent-dark/10 to-fss-accent/10',
    image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=400'
  }
];

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full py-20 sm:py-28 relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-fss-neutral-50 to-white" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-fss-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-fss-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-fss-primary/10 rounded-full mb-6 border border-fss-primary/20">
            <span className="material-symbols-outlined text-fss-primary text-xl">star</span>
            <span className="text-fss-primary font-bold text-sm tracking-wider uppercase">
              Our Services
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-fss-neutral-900 tracking-tight mb-6 leading-tight">
            Comprehensive
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
              AV Excellence
            </span>
          </h2>

          <p className="text-xl text-fss-secondary max-w-3xl mx-auto leading-relaxed">
            From intimate weddings to grand corporate events, we deliver unmatched audio-visual
            experiences backed by professional expertise across India
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="glass rounded-3xl overflow-hidden border-2 border-white/50 hover:border-fss-primary/30 transition-all duration-500 shadow-xl hover:shadow-2xl">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Image Header with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.6)), url('${service.image}')`,
                    }}
                  />

                  {/* Icon Badge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                    >
                      <span className="material-symbols-outlined text-white text-4xl">
                        {service.icon}
                      </span>
                    </motion.div>
                  </div>

                  {/* Premium Badge */}
                  <div className="absolute top-4 right-4 glass-dark px-4 py-2 rounded-full border border-fss-primary/30">
                    <span className="text-fss-primary text-xs font-bold uppercase tracking-wider">
                      Premium
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <h3 className="text-2xl font-black text-fss-neutral-900 mb-3 group-hover:text-fss-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-fss-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIdx) => (
                      <motion.li
                        key={featureIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.1 + featureIdx * 0.05 }}
                        className="flex items-center gap-3 text-sm text-fss-neutral-700 font-medium"
                      >
                        <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <span className="material-symbols-outlined text-white text-xs">check</span>
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-fss-primary font-bold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>

                {/* Decorative Corner Glow */}
                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us - Premium Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Premium Dark Background */}
          <div className="absolute inset-0 gradient-dark" />

          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-fss-primary/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-fss-accent/40 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 p-12 sm:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 glass-dark rounded-full mb-6 border border-fss-primary/30">
                    <span className="material-symbols-outlined text-fss-primary text-lg">workspace_premium</span>
                    <span className="text-fss-primary text-xs font-bold uppercase tracking-wider">
                      Excellence Guaranteed
                    </span>
                  </div>

                  <h3 className="text-4xl font-black mb-6 text-white leading-tight">
                    Why We're India's
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fss-primary to-fss-accent">
                      Most Trusted Choice
                    </span>
                  </h3>

                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    With 25 years of excellence serving clients across India, we've perfected the art
                    of delivering exceptional audio-visual experiences that exceed expectations.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="glass-dark p-6 rounded-2xl border border-fss-primary/20">
                      <div className="text-3xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-fss-primary to-fss-accent">
                        Best Value
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        Competitive pricing without compromising quality
                      </div>
                    </div>
                    <div className="glass-dark p-6 rounded-2xl border border-fss-primary/20">
                      <div className="text-3xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-fss-primary to-fss-accent">
                        Premium Only
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        Latest, top-tier equipment exclusively
                      </div>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-fss-primary to-fss-accent text-white font-bold rounded-xl shadow-2xl hover:shadow-fss-primary/50 transition-all"
                    >
                      Explore All Services
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right - Trust Badges Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { icon: 'verified', title: 'Certified', desc: 'ISO Compliant' },
                  { icon: 'schedule', title: 'Punctual', desc: 'Always On-Time' },
                  { icon: 'handshake', title: 'Trusted', desc: '10K+ Events' },
                  { icon: 'workspace_premium', title: 'Premium', desc: 'Top-Tier Quality' },
                ].map((badge, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-dark p-8 rounded-2xl text-center border border-fss-primary/20 hover:border-fss-primary/50 transition-all"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-fss-primary to-fss-accent flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-3xl">{badge.icon}</span>
                    </div>
                    <div className="text-xl font-bold text-white mb-2">{badge.title}</div>
                    <div className="text-sm text-gray-400 font-medium">{badge.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
