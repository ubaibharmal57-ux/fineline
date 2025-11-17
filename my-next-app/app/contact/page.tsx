'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in production, this would send to an API
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fss-primary to-fss-accent py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to make your event extraordinary? Contact us for a free quote or consultation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-fss-neutral-200 p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-fss-neutral-900 mb-6">
                  Request a Quote
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-fss-neutral-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-fss-neutral-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-fss-neutral-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-fss-neutral-900 mb-2">
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="conference">Conference/Seminar</option>
                        <option value="party">Private Party</option>
                        <option value="family">Family Function</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-fss-neutral-900 mb-2">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-fss-neutral-900 mb-2">
                      Event Location (City) *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent"
                      placeholder="e.g., Ahmedabad, Surat, Vadodara"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-fss-neutral-900 mb-2">
                      Equipment Requirements / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent"
                      placeholder="Tell us about your equipment needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-fss-primary text-white font-bold rounded-lg hover:bg-fss-primary-dark transition-all shadow-lg hover:shadow-xl"
                  >
                    Send Inquiry
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-fss-primary to-fss-accent rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">call</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:+919876543210" className="text-white/90 hover:text-white">
                        +91 98765 43210
                      </a>
                      <br />
                      <a href="tel:+919876543211" className="text-white/90 hover:text-white">
                        +91 98765 43211
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">mail</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:info@fineliness.com" className="text-white/90 hover:text-white">
                        info@fineliness.com
                      </a>
                      <br />
                      <a href="mailto:booking@fineliness.com" className="text-white/90 hover:text-white">
                        booking@fineliness.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">location_on</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Address</div>
                      <div className="text-white/90">
                        Gujarat, India<br />
                        Serving all major cities
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">schedule</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Business Hours</div>
                      <div className="text-white/90">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 5:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-fss-neutral-900">Quick Response on WhatsApp</div>
                    <div className="text-sm text-fss-secondary">Get instant replies</div>
                  </div>
                </div>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
                >
                  Chat on WhatsApp
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>

              {/* Quick Response Badge */}
              <div className="bg-fss-neutral-100 rounded-xl p-4 text-center">
                <span className="material-symbols-outlined text-fss-primary text-3xl mb-2 inline-block">verified</span>
                <div className="font-bold text-fss-neutral-900">Quick Response Guaranteed</div>
                <div className="text-sm text-fss-secondary">We reply within 2 hours during business hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & JustDial Section */}
      <section className="py-16 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-fss-neutral-900 mb-4">
              Find Us & Our Reviews
            </h2>
            <p className="text-lg text-fss-secondary">
              Visit our location or check out our 150+ reviews on JustDial
            </p>
          </div>
          
          {/* Map and JustDial Badge Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Google Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-fss-neutral-200">
              <div className="p-4 bg-gradient-to-r from-fss-primary to-fss-accent">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined">location_on</span>
                  Our Location
                </h3>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4378.77967421856!2d70.8023744758664!3d22.299149742936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca03c18fffbb%3A0x334e3d9ae98f1cbe!2sFineline%20System%20And%20Services!5e1!3m2!1sen!2sus!4v1762467336958!5m2!1sen!2sus" 
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fineline System & Services Location"
                />
              </div>
            </div>

            {/* JustDial Reviews */}
            <div className="bg-white rounded-xl shadow-lg border border-fss-neutral-200 p-8 flex flex-col items-center justify-center">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-fss-neutral-900 mb-2">
                  Trusted by 1000+ Clients
                </h3>
                <p className="text-fss-secondary mb-4">
                  Check out our verified reviews on JustDial
                </p>
                <p className="text-sm font-semibold text-fss-primary">
                  150+ Reviews ⭐
                </p>
              </div>
              
              {/* JustDial Badge - Clickable */}
              <div className="flex flex-col items-center gap-4">
                <div id="JdBadge" data-s1="b2" data-s2="Y3RyY3QlNDAlNDAlNDAwMjgxUFgyODElMkJYMjgxJTJCMTIzMTc1ODEyMFc0WTFNOCUyQkRD"></div>
                <div id="JdBadgeDest"></div>
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-sm text-fss-secondary">
                <span className="material-symbols-outlined text-fss-primary">verified</span>
                <span>Verified Business on JustDial</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-fss-neutral-900 mb-4">
              Service Areas Across Gujarat
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Gandhinagar', 'Anand', 'Bharuch'].map((city) => (
              <div key={city} className="bg-white rounded-lg p-4 text-center shadow-sm border border-fss-neutral-200 hover:border-fss-primary transition-colors">
                <span className="material-symbols-outlined text-fss-primary mb-2">location_city</span>
                <div className="font-semibold text-fss-neutral-900">{city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

