import React, { useState, useEffect } from 'react';
import { AcademyConfig } from '../types';
import { X, CheckCircle2, ShieldCheck, Clock, Users, Send } from 'lucide-react';

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AcademyConfig;
  prefilledCourse?: string;
}

export const TrialBookingModal: React.FC<TrialBookingModalProps> = ({
  isOpen,
  onClose,
  config,
  prefilledCourse,
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    whatsapp: '',
    country: 'United States',
    course: prefilledCourse || 'Noorani Qaida Course',
    tutorGender: 'female',
    timeSlot: 'Evening (5:00 PM - 9:00 PM)',
    studentAge: '7',
    notes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefilledCourse) {
      setFormData((prev) => ({ ...prev, course: prefilledCourse }));
    }
  }, [prefilledCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    // Generate WhatsApp text message
    const msg = `*New 3-Days Free Trial Request - ${config.name}*\n\n` +
      `👤 *Student Name:* ${formData.studentName}\n` +
      `👨‍👩‍👧 *Parent Name:* ${formData.parentName || 'N/A'}\n` +
      `👶 *Age:* ${formData.studentAge}\n` +
      `📚 *Course:* ${formData.course}\n` +
      `👩‍🏫 *Teacher Preference:* ${formData.tutorGender === 'female' ? 'Female Teacher' : formData.tutorGender === 'male' ? 'Male Teacher' : 'Any Qualified Teacher'}\n` +
      `🌍 *Country:* ${formData.country}\n` +
      `⏰ *Preferred Time Slot:* ${formData.timeSlot}\n` +
      `📱 *WhatsApp/Phone:* ${formData.whatsapp}\n` +
      `✉️ *Email:* ${formData.email || 'N/A'}\n` +
      (formData.notes ? `📝 *Notes:* ${formData.notes}\n` : '');

    const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 p-6 border-b border-slate-800 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white bg-slate-800/80 p-2 rounded-full border border-slate-700 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 to-emerald-400 flex-shrink-0">
              <img
                src={config.logoUrl}
                alt={config.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-300 uppercase tracking-wider bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-500/30 mb-1">
                <img
                  src={config.logoUrl}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-3.5 h-3.5 rounded-full object-cover border border-amber-400/50"
                />
                <span>3-Days Free Trial Registration</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-['Cinzel',serif]">
                Book Your 1-on-1 Free Trial Class
              </h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[72vh] overflow-y-auto bg-slate-50/50">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-700 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Cinzel',serif]">
                JazakAllah Khair! Booking Submitted
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                We have prepared your booking on WhatsApp. Our academic coordinator will confirm your class schedule and provide the Zoom/Skype meeting link shortly.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-2.5 rounded-lg text-sm transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zayd Ahmad"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tariq Ahmad"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp Number (with Country Code) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 327 1998424 / 0327 1998424"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. family@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Age
                  </label>
                  <select
                    value={formData.studentAge}
                    onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
                    className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none shadow-2xs"
                  >
                    <option value="4-6">4 - 6 Years</option>
                    <option value="7-10">7 - 10 Years</option>
                    <option value="11-15">11 - 15 Years</option>
                    <option value="16-20">16 - 20 Years</option>
                    <option value="Adult">Adult (21+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Country / Timezone
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none shadow-2xs"
                  >
                    <option value="United States">🇺🇸 United States (EST/CST/PST)</option>
                    <option value="United Kingdom">🇬🇧 United Kingdom (GMT/BST)</option>
                    <option value="Canada">🇨🇦 Canada (EST/PST)</option>
                    <option value="Australia">🇦🇺 Australia (AEST/AWST)</option>
                    <option value="Germany / Europe">🇩🇪 Germany / Europe (CET)</option>
                    <option value="Saudi Arabia / Gulf">🇸🇦 Saudi Arabia / UAE</option>
                    <option value="Pakistan">🇵🇰 Pakistan (PKT)</option>
                    <option value="Other">🌍 Other International</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Teacher Preference
                  </label>
                  <select
                    value={formData.tutorGender}
                    onChange={(e) => setFormData({ ...formData, tutorGender: e.target.value })}
                    className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none shadow-2xs"
                  >
                    <option value="female">Female Teacher</option>
                    <option value="male">Male Teacher (Qari/Hafiz)</option>
                    <option value="any">Any Qualified Teacher</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Selected Course
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none shadow-2xs"
                  >
                    <option value="Noorani Qaida Course (Beginners & Kids)">Noorani Qaida (Beginners & Kids)</option>
                    <option value="Nazra Quran with Tajweed">Nazra Quran with Tajweed</option>
                    <option value="Quran Memorization (Hifz)">Quran Memorization (Hifz-ul-Quran)</option>
                    <option value="Complete Method of Salah (Namaz)">Complete Method of Salah (Namaz)</option>
                    <option value="40 Daily Masnoon Duas & Azkar">40 Daily Masnoon Duas & Azkar</option>
                    <option value="Six Kalimas with Tajweed & Meanings">Six Kalimas with Tajweed & Meanings</option>
                    <option value="Quran Translation & Tafseer">Quran Translation & Tafseer</option>
                    <option value="Quranic Arabic & Grammar">Quranic Arabic & Grammar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none shadow-2xs"
                  >
                    <option value="Morning (7:00 AM - 11:00 AM)">Morning (7:00 AM - 11:00 AM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                    <option value="Night (9:00 PM - 12:00 AM)">Night (9:00 PM - 12:00 AM)</option>
                    <option value="Weekends Only">Weekends (Flexible Hours)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Notes / Student Background (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Needs slow pace, has completed Qaida previously, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none shadow-2xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                >
                  <img
                    src={config.logoUrl}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-5 h-5 rounded-full object-cover border border-slate-950/40 shadow-sm"
                  />
                  <span>Submit & Start 3-Days Free Trial</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  100% Free Trial
                </span>
                <span>•</span>
                <span>No Credit Card</span>
                <span>•</span>
                <span>Cancel Anytime</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
