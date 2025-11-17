'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const stats = [
  {
    number: 25,
    suffix: '+',
    label: 'Years of Excellence',
    icon: 'workspace_premium',
    description: 'Industry-leading experience',
    color: 'from-fss-primary to-fss-accent'
  },
  {
    number: 10000,
    suffix: '+',
    label: 'Events Delivered',
    icon: 'celebration',
    description: 'Across India',
    color: 'from-fss-accent to-fss-primary-light'
  },
  {
    number: 500,
    suffix: '+',
    label: 'Corporate Clients',
    icon: 'business_center',
    description: 'Fortune 500 companies',
    color: 'from-fss-primary-light to-fss-primary'
  },
  {
    number: 1000,
    suffix: '+',
    label: 'Premium Equipment',
    icon: 'inventory_2',
    description: 'Latest technology',
    color: 'from-fss-accent-dark to-fss-accent'
  }
];

const trustBadges = [
  { icon: 'verified', text: 'ISO 9001 Certified' },
  { icon: 'security', text: 'Insured & Licensed' },
  { icon: 'support_agent', text: '24/7 Technical Support' },
  { icon: 'verified_user', text: 'Trusted Brand' },
  { icon: 'schedule', text: 'On-Time Delivery' },
  { icon: 'workspace_premium', text: 'Award Winning Service' },
];

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function TrustSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative w-full py-20 sm:py-28 overflow-hidden">
      {/* Premium Background with Gradient */}
      <div className="absolute inset-0 gradient-dark" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fss-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fss-accent/30 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-dark rounded-full mb-6 border border-fss-primary/30">
            <span className="material-symbols-outlined text-fss-primary text-xl">military_tech</span>
            <span className="text-fss-primary font-bold text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            India's Most{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
              Trusted
            </span>
            <br />
            AV Rental Partner
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Delivering excellence across the nation with unmatched quality, reliability, and service
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:border-fss-primary/50 transition-all duration-300">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="material-symbols-outlined text-white text-3xl">
                      {stat.icon}
                    </span>
                  </div>
                </div>

                {/* Number */}
                <div className={`text-5xl font-black mb-2 text-center bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  <Counter end={stat.number} />
                  {stat.suffix}
                </div>

                {/* Label */}
                <div className="text-white text-lg font-bold text-center mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-gray-400 text-sm text-center font-medium">
                  {stat.description}
                </div>

                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-dark p-8 rounded-2xl border border-fss-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Certified Excellence & Trust
            </h3>
            <p className="text-gray-400">
              Your success is backed by our commitment to quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fss-primary to-fss-accent flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">
                    {badge.icon}
                  </span>
                </div>
                <span className="text-white text-xs font-semibold text-center leading-tight">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pan India Coverage Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 glass-dark px-8 py-5 rounded-2xl border border-fss-primary/30">
            <span className="material-symbols-outlined text-fss-primary text-4xl">public</span>
            <div className="text-left">
              <div className="text-2xl font-black text-white">
                All Over India Coverage
              </div>
              <div className="text-gray-400 font-medium">
                Serving clients from Kashmir to Kanyakumari
              </div>
            </div>
            <div className="w-3 h-3 bg-fss-primary rounded-full animate-pulse-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
