import React from 'react';
import { UserCheck, Clock, Award, ShieldCheck, HeartHandshake, FileText, Monitor, CheckCircle } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <UserCheck className="w-6 h-6 text-amber-600" />,
      title: '1-on-1 Dedicated Attention',
      desc: 'Individual focus on every student. The teacher devotes 100% of the class time to your child’s recitation and Tajweed improvement.',
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      title: 'Certified Male & Female Tutors',
      desc: 'Experienced Qaris, Huffaz, and Alim scholars graduated from prestigious Islamic institutes, with dedicated female teachers for sisters and kids.',
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: 'Flexible Timings (24/7 Availability)',
      desc: 'Pick class times that perfectly match your family routine in USA, UK, Canada, Australia, Europe, or Gulf timezones.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
      title: '3-Days Free Assessment & Trial',
      desc: 'Evaluate our teaching quality and matched teacher with 3 consecutive free classes before deciding to enroll.',
    },
    {
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      title: 'Monthly Progress Reports',
      desc: 'Structured curriculum with monthly evaluations, Tajweed checkpoints, and regular parent-teacher feedback sessions.',
    },
    {
      icon: <Monitor className="w-6 h-6 text-emerald-600" />,
      title: 'Interactive Screen Sharing',
      desc: 'Crystal-clear digital Qaida and Quran display with colored Tajweed highlights, audio feedback, and visual Makharij corrections.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
            Why Choose Minhaj-Ul-Quran Academy
          </span>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3.5 mb-4">
            An Unmatched Online Quran Learning Experience
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We blend classical Islamic scholarship with modern interactive online pedagogy to make Quran learning easy, engaging, and fruitful for all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 border border-slate-200 hover:border-amber-400 hover:bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-amber-400 shadow-sm transition-all">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-amber-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
