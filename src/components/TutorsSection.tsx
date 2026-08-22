import React, { useState } from 'react';
import { TUTORS } from '../data/academyData';
import { Star, Award, GraduationCap, Globe, Users, BookOpen, UserCheck, ShieldCheck } from 'lucide-react';

interface TutorsSectionProps {
  onBookTrial: (tutorName?: string) => void;
}

export const TutorsSection: React.FC<TutorsSectionProps> = ({ onBookTrial }) => {
  const [filterGender, setFilterGender] = useState<'all' | 'male' | 'female'>('all');

  const filteredTutors = filterGender === 'all'
    ? TUTORS
    : TUTORS.filter((t) => t.gender === filterGender);

  return (
    <section id="tutors" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
            Certified Scholars & Qaris
          </span>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3.5 mb-4">
            Learn from Qualified Male & Female Quran Teachers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            All our instructors are verified Huffaz, Alim/Alimah degree holders, and Islamic scholars with fluent English and years of online teaching experience.
          </p>

          {/* Gender Filter Buttons */}
          <div className="flex items-center justify-center gap-2.5 mt-8 flex-wrap">
            <button
              onClick={() => setFilterGender('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterGender === 'all'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
              }`}
            >
              All Tutors
            </button>
            <button
              onClick={() => setFilterGender('female')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterGender === 'female'
                  ? 'bg-emerald-700 text-white font-bold shadow-md'
                  : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
              }`}
            >
              Female Teachers (For Sisters & Kids)
            </button>
            <button
              onClick={() => setFilterGender('male')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterGender === 'male'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
              }`}
            >
              Male Teachers (Qaris & Huffaz)
            </button>
          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {filteredTutors.map((tutor) => {
            const isFemale = tutor.gender === 'female';

            return (
              <div
                key={tutor.id}
                className="bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white rounded-2xl overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200 flex flex-col justify-between"
              >
                <div>
                  {/* Respectful Islamic Scholar Avatar */}
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-emerald-400 to-amber-200 shadow-sm">
                    <div className="w-full h-full rounded-full bg-white border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-amber-400 transition-colors">
                      
                      {/* Scholar Emblem */}
                      <div className="relative z-10 flex flex-col items-center justify-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isFemale 
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                            : 'bg-amber-100 text-amber-900 border border-amber-300'
                        }`}>
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-700 mt-1 font-['Cinzel',serif] tracking-wider uppercase">
                          {isFemale ? 'Ustadha' : 'Qari'}
                        </span>
                      </div>

                      {/* Verified Tutor Badge */}
                      <div className="absolute top-1 right-2 text-emerald-600">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="absolute -bottom-1 right-0 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white flex items-center gap-0.5 shadow-sm">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      <span>{tutor.rating}</span>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center mb-3">
                    <h3 className="text-base font-bold text-slate-900 font-['Cinzel',serif]">
                      {tutor.name}
                    </h3>
                    <p className="text-xs text-amber-800 font-semibold mt-0.5">
                      {tutor.title}
                    </p>
                    <span className="inline-block mt-1.5 text-[10px] px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 shadow-xs">
                      {isFemale ? '🧕 Female Certified Instructor' : '🧔 Certified Qari & Hafiz'}
                    </span>
                  </div>

                  {/* Info List */}
                  <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-200">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-[11px] text-slate-600 leading-tight">{tutor.qualification}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                      <span>{tutor.experienceYears}+ Years Experience</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>Languages: {tutor.languages.join(', ')}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                      <span>{tutor.studentsTaught}+ Students Taught</span>
                    </div>
                  </div>

                  <div className="mt-3.5 bg-white p-3 rounded-xl text-[11px] text-slate-600 italic border border-slate-200 leading-relaxed shadow-xs">
                    "{tutor.specialization}"
                  </div>
                </div>

                {/* Action */}
                <button
                  onClick={() => onBookTrial(`Trial with ${tutor.name}`)}
                  className="mt-5 w-full bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-amber-200 border border-slate-800 text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <img
                    src="/src/assets/images/academy_logo_1787022953709.jpg"
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-4 h-4 rounded-full object-cover border border-amber-400/50"
                  />
                  <span>Book Free Trial with {isFemale ? 'Teacher' : 'Qari'}</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
