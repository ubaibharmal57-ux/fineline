'use client';

import { useState } from 'react';
import Link from 'next/link';

const whatsappMessage = encodeURIComponent(
  'Hi Fineline, I need AV equipment for an event. Can you share details?'
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    city: '',
    equipment: [] as string[],
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const equipmentList = formData.equipment.length > 0 ? formData.equipment.join(', ') : 'Not specified';
    const waMessage = encodeURIComponent(
      `Hi Fineline, I need AV equipment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEvent Type: ${formData.eventType}\nDate: ${formData.eventDate}\nCity: ${formData.city}\nEquipment: ${equipmentList}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919714595111?text=${waMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEquipmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      equipment: e.target.checked
        ? [...prev.equipment, value]
        : prev.equipment.filter(item => item !== value)
    }));
  };

  const equipmentOptions = [
    'Projector & Screen',
    'LED Wall',
    'LED TV',
    'Digital Standee',
    'Sound System / PA System',
    'Wireless Microphone',
    'Laptops',
    'Stage Lighting',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fss-primary to-fss-accent py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Share your event details.
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Tell us the date, city, venue, audience size, and what you need. We will reply with the next practical step.
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
                <h2 className="text-2xl font-bold text-fss-neutral-900 mb-2">
                  Request a setup quote
                </h2>
                <p className="text-sm text-fss-neutral-700 mb-6">
                  The form opens WhatsApp with your details filled in, so the conversation starts with useful context.
                </p>
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
                        className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent text-fss-neutral-900"
                        placeholder="Your name"
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
                        className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent text-fss-neutral-900"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-fss-neutral-900 mb-2">
                        Event format *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent text-fss-neutral-900"
                      >
                        <option value="">Select event type</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Exhibition">Exhibition / Trade Show</option>
                        <option value="College Event">College / Educational Event</option>
                        <option value="Other">Other</option>
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
                        className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent text-fss-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-fss-neutral-900 mb-2">
                      Event City *
                    </label>
                    <select
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent text-fss-neutral-900"
                    >
                      <option value="">Select city</option>
                      <option value="Rajkot">Rajkot</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Jamnagar">Jamnagar</option>
                      <option value="Morbi">Morbi</option>
                      <option value="Junagadh">Junagadh</option>
                      <option value="Bhavnagar">Bhavnagar</option>
                      <option value="Surat">Surat</option>
                      <option value="Vadodara">Vadodara</option>
                      <option value="Gandhidham">Gandhidham</option>
                      <option value="Gandhinagar">Gandhinagar</option>
                      <option value="Anand">Anand</option>
                      <option value="Other">Other City</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-fss-neutral-900 mb-3">
                      Equipment you may need
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {equipmentOptions.map((item) => (
                        <label key={item} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value={item}
                            checked={formData.equipment.includes(item)}
                            onChange={handleEquipmentChange}
                            className="w-4 h-4 text-fss-primary border-fss-neutral-300 rounded focus:ring-fss-primary"
                          />
                          <span className="text-sm text-fss-neutral-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-fss-neutral-900 mb-2">
                      Email Address (optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent text-fss-neutral-900"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-fss-neutral-900 mb-2">
                      Notes about the venue or program
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-fss-neutral-300 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent text-fss-neutral-900"
                      placeholder="Example: indoor hall, 200 guests, stage presentation, needs two mics..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send details on WhatsApp
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details Card */}
              <div className="bg-gradient-to-br from-fss-primary to-fss-accent rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Direct contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">call</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:+919714595111" className="text-white hover:text-white block">
                        +91 97145 95111
                      </a>
                      <a href="tel:+919825214052" className="text-white hover:text-white block">
                        +91 98252 14052
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">mail</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:info@finelinesystem.com" className="text-white hover:text-white">
                        info@finelinesystem.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">location_on</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Address</div>
                      <a
                        href="https://maps.google.com/?q=Fineline+System+And+Services+Rajkot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white"
                      >
                        Kandoi Bazar Chowk, nr. Aziz Traders, Kandoi Bazar, Para Bazar, Dela Vadi, Lohana Para, Rajkot, Gujarat 360001
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">schedule</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Business Hours</div>
                      <div className="text-white">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: By Appointment
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
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-fss-neutral-900">Fastest on WhatsApp</div>
                    <div className="text-sm text-fss-neutral-700">Best for quotes and availability</div>
                  </div>
                </div>
                <a
                  href={`https://wa.me/919714595111?text=${whatsappMessage}`}
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
                <div className="font-bold text-fss-neutral-900">Useful details help</div>
                <div className="text-sm text-fss-neutral-700">Date, city, venue, audience size, and equipment list</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Service Areas */}
      <section className="py-16 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-fss-neutral-900 mb-4">
              Visit or verify Fineline
            </h2>
            <p className="text-lg text-fss-neutral-700">
              Our Rajkot location and public review profiles are linked below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Google Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-fss-neutral-200">
              <div className="p-4 bg-gradient-to-r from-fss-primary to-fss-accent">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined">location_on</span>
                  Fineline System & Services - Rajkot
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
                  title="Fineline System & Services Location - Kandoi Bazar, Rajkot"
                />
              </div>
            </div>

            {/* JustDial Reviews */}
            <div className="bg-white rounded-xl shadow-lg border border-fss-neutral-200 p-8 flex flex-col items-center justify-center">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-fss-neutral-900 mb-2">
                  Public review profiles
                </h3>
                <p className="text-fss-neutral-700 mb-4">
                  View current reviews and business details on Google Maps and JustDial.
                </p>
                <p className="text-sm font-semibold text-fss-primary">
                  250+ JustDial reviews | 200+ Google Maps reviews
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div id="JdBadge" data-s1="b2" data-s2="Y3RyY3QlNDAlNDAlNDAwMjgxUFgyODElMkJYMjgxJTJCMTIzMTc1ODEyMFc0WTFNOCUyQkRD"></div>
                <div id="JdBadgeDest"></div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-fss-neutral-700">
                <span className="material-symbols-outlined text-fss-primary">verified</span>
                <span>JustDial badge embedded from the official widget</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-fss-neutral-900 mb-4">
              Common service areas
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: 'Rajkot', href: '/av-equipment-rental-in-rajkot', hq: true },
              { city: 'Ahmedabad', href: '/av-equipment-rental-in-ahmedabad' },
              { city: 'Jamnagar', href: '/av-equipment-rental-in-jamnagar' },
              { city: 'Surat', href: '/av-equipment-rental-in-surat' },
              { city: 'Vadodara', href: '/av-equipment-rental-in-vadodara' },
              { city: 'Bhavnagar', href: '/av-equipment-rental-in-bhavnagar' },
              { city: 'Junagadh', href: '/av-equipment-rental-in-junagadh' },
              { city: 'Morbi', href: '/av-equipment-rental-in-morbi' },
              { city: 'Gandhidham', href: '/av-equipment-rental-in-gandhidham' },
              { city: 'Gandhinagar', href: '/' },
              { city: 'Anand', href: '/' },
              { city: 'Bharuch', href: '/' },
            ].map((area) => (
              <Link
                key={area.city}
                href={area.href}
                className={`bg-white rounded-lg p-4 text-center shadow-sm border hover:border-fss-primary transition-colors ${
                  area.hq ? 'border-fss-primary bg-fss-primary/5' : 'border-fss-neutral-200'
                }`}
              >
                <span className="material-symbols-outlined text-fss-primary mb-2">location_city</span>
                <div className="font-semibold text-fss-neutral-900">{area.city}</div>
                {area.hq && <span className="text-xs text-fss-primary font-bold">Headquarters</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
