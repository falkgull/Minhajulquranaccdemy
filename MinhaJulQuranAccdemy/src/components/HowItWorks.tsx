import React from 'react';
import { UserPlus, CalendarCheck, Laptop, GraduationCap, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onBookTrial: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onBookTrial }) => {
  const steps = [
    {
      step: '01',
      icon: <UserPlus className="w-6 h-6 text-amber-600" />,
      title: 'Fill Free Trial Form',
      desc: 'Submit your quick details, select your preferred course, suitable time slot, and teacher preference (Male or Female).',
    },
    {
      step: '02',
      icon: <CalendarCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Schedule Confirmation',
      desc: 'Our academic coordinator connects via WhatsApp or Email within 15 minutes to confirm your live class link and teacher.',
    },
    {
      step: '03',
      icon: <Laptop className="w-6 h-6 text-amber-600" />,
      title: 'Attend 3-Days Free Classes',
      desc: 'Join your live 1-on-1 classes via Zoom, Skype, or Google Meet. Experience our teaching methodology with zero payment upfront.',
    },
    {
      step: '04',
      icon: <GraduationCap className="w-6 h-6 text-emerald-600" />,
      title: 'Begin Regular Learning',
      desc: 'Once completely satisfied, choose your monthly plan and continue your child’s rewarding Quranic journey with monthly evaluations.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
            Simple 4-Step Process
          </span>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            How to Start Learning in 4 Easy Steps
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Getting started is completely free and takes less than 60 seconds.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-slate-200 hover:border-amber-400 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
            >
              {/* Step number badge */}
              <div className="text-3xl font-extrabold font-['Cinzel',serif] text-slate-300 group-hover:text-amber-500/50 transition-colors mb-2">
                {item.step}
              </div>

              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-amber-800 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onBookTrial}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all text-sm cursor-pointer"
          >
            <img
              src="/src/assets/images/academy_logo_1787022953709.jpg"
              alt=""
              referrerPolicy="no-referrer"
              className="w-4 h-4 rounded-full object-cover border border-slate-950/40"
            />
            <span>Book Your Free 3-Days Trial Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
