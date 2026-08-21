import React, { useState } from 'react';
import { AcademyConfig } from '../types';
import { CheckCircle2, ShieldCheck, Award, Users, Star, MessageCircle, PlayCircle, ArrowRight, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  config: AcademyConfig;
  onBookTrial: () => void;
  onSelectCourse?: (courseId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onBookTrial }) => {
  const [quickForm, setQuickForm] = useState({
    name: '',
    whatsapp: '',
    course: 'noorani-qaida',
    tutorGender: 'any',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // WhatsApp redirect with prefilled booking
    const text = `Assalam-o-Alaikum! My name is ${quickForm.name || 'Student'}. I want to book a 3-Day Free Trial class for course: "${quickForm.course}". Preferred tutor: ${quickForm.tutorGender}. My contact/WhatsApp: ${quickForm.whatsapp || 'Provided'}`;
    const url = `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] py-12 md:py-20 border-b border-slate-200">
      
      {/* Ambient Islamic Geometric Glow & Radial Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-amber-400/15 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Blessed Hadith Calligraphy Banner */}
        <div className="flex flex-col items-center justify-center text-center mb-9">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 text-amber-800 text-xs sm:text-sm font-semibold mb-3 shadow-sm">
            <img
              src={config.logoUrl}
              alt=""
              referrerPolicy="no-referrer"
              className="w-4 h-4 rounded-full object-cover border border-amber-500/50"
            />
            <span>3 Days Free Trial • No Credit Card Required • Global Flexible Timezones</span>
          </div>

          <div className="font-['Amiri',serif] text-2xl sm:text-3xl md:text-4xl text-emerald-800 font-bold tracking-wide my-1.5 drop-shadow-sm" dir="rtl">
            « خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ »
          </div>
          <p className="text-xs sm:text-sm text-slate-600 italic">
            "The best among you are those who learn the Quran and teach it." — Sahih al-Bukhari
          </p>
        </div>

        {/* Main 2-Column Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Column: Academy Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3.5 py-1 rounded-full border border-amber-300">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>World-Class Islamic Education</span>
            </div>

            <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              Learn Quran Online with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700">
                Proper Tajweed
              </span>{' '}
              from Certified Scholars
            </h1>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Personalized 1-on-1 live interactive classes for kids, brothers, and sisters worldwide. Master Noorani Qaida, Nazra Quran, Hifz, and Islamic studies from the comfort of your home with certified male & female tutors.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 bg-white border border-slate-200 hover:border-emerald-500/50 p-3 rounded-xl text-xs sm:text-sm text-slate-800 shadow-sm transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Dedicated Female Tutors for Sisters & Kids</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200 hover:border-emerald-500/50 p-3 rounded-xl text-xs sm:text-sm text-slate-800 shadow-sm transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>1-on-1 Interactive Live Screen Classes</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200 hover:border-emerald-500/50 p-3 rounded-xl text-xs sm:text-sm text-slate-800 shadow-sm transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>24/7 Scheduling (US, UK, CA, AU, EU)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200 hover:border-emerald-500/50 p-3 rounded-xl text-xs sm:text-sm text-slate-800 shadow-sm transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Monthly Progress & Tajweed Evaluation</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onBookTrial}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2.5 text-base active:scale-95 cursor-pointer"
              >
                <img
                  src={config.logoUrl}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-5 h-5 rounded-full object-cover border border-slate-950/40 shadow-sm"
                />
                <span>Start 3-Days Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(config.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-base shadow-md shadow-emerald-600/20 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#courses"
                className="text-slate-700 hover:text-amber-700 text-sm font-semibold underline underline-offset-4 py-2 transition-colors"
              >
                Explore Courses & Plans
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual + Fast Free Trial Booking Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white border border-slate-200/90 hover:border-amber-400 rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/60 backdrop-blur-xl transition-all">
              
              {/* Decorative Header with Academy Logo preview */}
              <div className="flex items-center gap-3.5 pb-5 border-b border-slate-200">
                <div className="w-13 h-13 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 to-emerald-400 flex-shrink-0 shadow">
                  <img
                    src={config.logoUrl}
                    alt={config.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 font-['Cinzel',serif]">
                    Book Your Free Trial Class
                  </h2>
                  <p className="text-xs text-slate-600">
                    Instant 1-on-1 assessment with certified Qari
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">JazakAllah Khair! Request Received</h3>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    We have redirected you to WhatsApp. Our academic coordinator will confirm your free trial class timing within 15 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-amber-700 underline font-semibold"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3.5 mt-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student / Parent Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmad Tariq"
                      value={quickForm.name}
                      onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 focus:border-amber-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp / Phone Number (with Country Code) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 718 555 0192 / +44 7946 0912"
                      value={quickForm.whatsapp}
                      onChange={(e) => setQuickForm({ ...quickForm, whatsapp: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 focus:border-amber-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Select Course
                      </label>
                      <select
                        value={quickForm.course}
                        onChange={(e) => setQuickForm({ ...quickForm, course: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-amber-500 focus:bg-white rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none"
                      >
                        <option value="noorani-qaida">Noorani Qaida (Kids & Beginners)</option>
                        <option value="quran-reading-tajweed">Nazra Quran with Tajweed</option>
                        <option value="quran-memorization-hifz">Hifz-ul-Quran (Memorization)</option>
                        <option value="namaz-complete-method">Complete Salah / Namaz Method</option>
                        <option value="masnoon-duas">40 Daily Masnoon Duas & Azkar</option>
                        <option value="six-kalimas">Six Kalimas with Tajweed</option>
                        <option value="quran-translation-tafseer">Quran Translation & Tafseer</option>
                        <option value="quranic-arabic-language">Quranic Arabic & Grammar</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Teacher Preference
                      </label>
                      <select
                        value={quickForm.tutorGender}
                        onChange={(e) => setQuickForm({ ...quickForm, tutorGender: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-amber-500 focus:bg-white rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none"
                      >
                        <option value="any">Any Qualified Tutor</option>
                        <option value="female">Female Tutor Only</option>
                        <option value="male">Male Tutor (Qari / Hafiz)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold py-3 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <img
                      src={config.logoUrl}
                      alt=""
                      referrerPolicy="no-referrer"
                      className="w-4 h-4 rounded-full object-cover border border-slate-950/40"
                    />
                    <span>Register 3-Days Free Trial</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    🔒 Zero commitment • 100% Free Trial • No Credit Card Required
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Bottom Trust Counters / Key Figures */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          
          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
            <div className="font-['Cinzel',serif] text-2xl sm:text-3xl font-extrabold text-amber-700">
              {config.totalStudents}
            </div>
            <p className="text-xs text-slate-600 mt-1 font-semibold">Students Enrolled Worldwide</p>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
            <div className="font-['Cinzel',serif] text-2xl sm:text-3xl font-extrabold text-emerald-700">
              {config.satisfactionRate}
            </div>
            <p className="text-xs text-slate-600 mt-1 font-semibold">Parent & Student Satisfaction</p>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
            <div className="font-['Cinzel',serif] text-2xl sm:text-3xl font-extrabold text-amber-700">
              {config.countriesCount}
            </div>
            <p className="text-xs text-slate-600 mt-1 font-semibold">Countries Reached</p>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
            <div className="font-['Cinzel',serif] text-2xl sm:text-3xl font-extrabold text-emerald-700">
              100%
            </div>
            <p className="text-xs text-slate-600 mt-1 font-semibold">Certified Hafiz & Alim Tutors</p>
          </div>

        </div>

      </div>
    </section>
  );
};
