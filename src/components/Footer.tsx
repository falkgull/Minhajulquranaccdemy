import React from 'react';
import { AcademyConfig } from '../types';
import { Phone, Mail, MessageCircle, MapPin, Heart, ShieldCheck, CheckCircle2, ArrowUp } from 'lucide-react';

interface FooterProps {
  config: AcademyConfig;
  onBookTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onBookTrial }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1329] text-slate-300 border-t border-slate-800 relative">
      
      {/* Top Banner with Quran Quote & CTA */}
      <div className="bg-[#0f1b38] py-6 px-4 border-b border-slate-800/80 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">
              Begin Your Quran Journey Today
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white font-['Cinzel',serif] mt-0.5">
              Book Your 3-Days Free Trial Class with Zero Obligation
            </h3>
          </div>
          <button
            onClick={onBookTrial}
            className="flex-shrink-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <img
              src={config.logoUrl}
              alt=""
              referrerPolicy="no-referrer"
              className="w-4 h-4 rounded-full object-cover border border-slate-950/40"
            />
            <span>Register Free Trial</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 to-emerald-400 flex-shrink-0 shadow">
                <img
                  src={config.logoUrl}
                  alt={config.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full bg-slate-900"
                />
              </div>
              <div>
                <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-amber-300">
                  {config.name}
                </h3>
                <span className="text-[11px] text-emerald-400 block font-medium">
                  {config.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              A premier global online Islamic academy dedicated to teaching the Holy Quran with authentic Tajweed, Tarteel, Hifz, and Islamic studies to kids and adults worldwide in a comfortable, one-on-one virtual setting.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Certified Faculty • 100% Background-Checked Tutors</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-['Cinzel',serif]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#hero" className="hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-amber-300 transition-colors">All Courses</a></li>
              <li><a href="#pricing" className="hover:text-amber-300 transition-colors">Fee Structure</a></li>
              <li><a href="#how-it-works" className="hover:text-amber-300 transition-colors">How It Works</a></li>
              <li><a href="#tutors" className="hover:text-amber-300 transition-colors">Male & Female Tutors</a></li>
              <li><a href="#tajweed-demo" className="hover:text-amber-300 transition-colors">Tajweed Demo</a></li>
              <li><a href="#testimonials" className="hover:text-amber-300 transition-colors">Student Reviews</a></li>
              <li><a href="#faqs" className="hover:text-amber-300 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Courses (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-['Cinzel',serif]">
              Featured Courses
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#courses" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> Noorani Qaida for Kids</a></li>
              <li><a href="#courses" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> Quran Reading with Tajweed</a></li>
              <li><a href="#courses" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> Quran Memorization (Hifz)</a></li>
              <li><a href="#courses" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> Quran Translation & Tafseer</a></li>
              <li><a href="#courses" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> Islamic Studies & Daily Duas</a></li>
              <li><a href="#courses" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> Quranic Arabic Language</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & WhatsApp (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-['Cinzel',serif]">
              Official Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-amber-300 font-semibold text-slate-100">
                  Call: {config.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-bold"
                >
                  WhatsApp: {config.whatsappNumber}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${config.email}`} className="hover:text-amber-300 break-all font-medium text-slate-200">
                  {config.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-300">{config.address}</span>
              </div>
            </div>

            {/* Payment Badges */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block mb-1.5 font-medium">Accepted Payment Methods:</span>
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-slate-200">
                <span className="bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded-md">Visa</span>
                <span className="bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded-md">MasterCard</span>
                <span className="bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded-md">Payoneer</span>
                <span className="bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded-md">PayPal</span>
                <span className="bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded-md">Stripe</span>
                <span className="bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded-md">Wise</span>
                <span className="bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded-md">JazzCash / EasyPaisa</span>
                <span className="bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded-md">Bank Transfer</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200 font-semibold">{config.name}</strong>. All rights reserved. Serving the Ummah worldwide.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
