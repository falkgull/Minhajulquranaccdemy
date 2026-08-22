import React, { useState } from 'react';
import { FAQS } from '../data/academyData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { AcademyConfig } from '../types';

interface FaqSectionProps {
  config: AcademyConfig;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ config }) => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'classes', label: 'Classes & Timing' },
    { id: 'tutors', label: 'Tutors & Faculty' },
    { id: 'payment', label: 'Fee & Payment' },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
            Frequently Asked Questions
          </span>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3.5 mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions before starting your 3-days free trial? Here are the most common inquiries from parents.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-slate-900 font-semibold text-sm sm:text-base hover:text-amber-800 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-amber-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/70">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-all shadow-sm">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Still have questions?</h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Our academic advisors are available 24/7 on WhatsApp to guide you.
            </p>
          </div>

          <a
            href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Assalam-o-Alaikum! I have a few questions about your online Quran courses.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-4.5 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat with Support</span>
          </a>
        </div>

      </div>
    </section>
  );
};
