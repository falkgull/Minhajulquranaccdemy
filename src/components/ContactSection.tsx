import React, { useState } from 'react';
import { AcademyConfig } from '../types';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2, Globe } from 'lucide-react';

interface ContactSectionProps {
  config: AcademyConfig;
  onBookTrial: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config, onBookTrial }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = `*Inquiry from Website Contact Form - ${config.name}*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone/WhatsApp:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `📌 *Subject:* ${formData.subject}\n` +
      `💬 *Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
            Get in Touch 24/7
          </span>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Contact Minhaj-Ul-Quran Online Academy
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Our admissions and academic support team are available round the clock in all timezones to assist you.
          </p>
        </div>

        {/* Single Focused Contact Cards (Pakistan Official Lines) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <a
            href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
            className="bg-slate-50 border border-slate-200 hover:border-amber-400 p-5 rounded-xl text-center transition-all hover:-translate-y-1 hover:shadow-md group"
          >
            <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center mx-auto mb-2 text-amber-700">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Direct Call Line (Pakistan)</h4>
            <p className="text-base text-amber-800 font-extrabold group-hover:text-amber-900 transition-colors">
              {config.phone}
            </p>
            <span className="text-[11px] text-slate-500 block mt-0.5">Direct Voice Calls & Inquiries</span>
          </a>

          <a
            href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(config.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-50 border border-slate-200 hover:border-emerald-400 p-5 rounded-xl text-center transition-all hover:-translate-y-1 hover:shadow-md group"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto mb-2 text-emerald-700">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">WhatsApp Hotline</h4>
            <p className="text-base text-emerald-800 font-extrabold group-hover:text-emerald-900 transition-colors">
              {config.whatsappNumber}
            </p>
            <span className="text-[11px] text-slate-500 block mt-0.5">24/7 Instant Chat & Trial Booking</span>
          </a>

          <a
            href={`mailto:${config.email}`}
            className="bg-slate-50 border border-slate-200 hover:border-amber-400 p-5 rounded-xl text-center transition-all hover:-translate-y-1 hover:shadow-md group"
          >
            <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center mx-auto mb-2 text-amber-700">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Official Academy Email</h4>
            <p className="text-sm text-slate-800 font-bold group-hover:text-slate-900 transition-colors truncate">
              {config.email}
            </p>
            <span className="text-[11px] text-slate-500 block mt-0.5">Admissions & Official Queries</span>
          </a>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <h3 className="font-['Cinzel',serif] text-lg font-bold text-slate-900 pb-3 border-b border-slate-200">
              Academy Support Channels
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">WhatsApp Instant Support</h4>
                  <p className="text-xs text-slate-500">Response time: usually under 10 mins</p>
                  <a
                    href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-semibold hover:underline inline-block mt-0.5"
                  >
                    {config.whatsappNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Official Email</h4>
                  <p className="text-xs text-slate-500">For inquiries, syllabus & admin</p>
                  <a
                    href={`mailto:${config.email}`}
                    className="text-amber-700 font-semibold hover:underline inline-block mt-0.5"
                  >
                    {config.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-700 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Class Timings & Operation</h4>
                  <p className="text-xs text-slate-500">{config.workingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-700 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Global Online Campus</h4>
                  <p className="text-xs text-slate-500">{config.address}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={onBookTrial}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <img
                  src="/src/assets/images/academy_logo_1787022953709.jpg"
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-4 h-4 rounded-full object-cover border border-slate-950/40"
                />
                <span>Book 3-Days Free Trial Class</span>
              </button>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="font-['Cinzel',serif] text-lg font-bold text-slate-900 mb-2">
              Send an Instant Message
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Fill the form below and we will get back to you with syllabus details or trial scheduling.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-700">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900">Message Dispatched!</h4>
                <p className="text-xs text-slate-600">
                  We have forwarded your inquiry to our admissions desk via WhatsApp for immediate priority handling.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-amber-700 underline font-semibold cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Usman Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:border-amber-500 focus:outline-none shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 718 555 0192"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:border-amber-500 focus:outline-none shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="youremail@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:border-amber-500 focus:outline-none shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 focus:border-amber-500 focus:outline-none shadow-2xs"
                    >
                      <option value="Book Free Trial">Book 3-Days Free Trial</option>
                      <option value="Fee & Payment Inquiry">Fee & Payment Inquiry</option>
                      <option value="Course Syllabus Details">Course Syllabus Details</option>
                      <option value="Female Tutor Request">Female Tutor Request</option>
                      <option value="Hifz Program Question">Hifz Program Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Your Message / Query *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about student age, current reading level, and preferred time slot..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 focus:border-amber-500 focus:outline-none shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold py-3 rounded-lg border border-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp / Email</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
