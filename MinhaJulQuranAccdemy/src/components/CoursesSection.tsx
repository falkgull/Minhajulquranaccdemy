import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES } from '../data/academyData';
import { CourseModal } from './CourseModal';
import { ArrowRight, BookOpen, Clock, Users, CheckCircle2 } from 'lucide-react';

interface CoursesSectionProps {
  onBookTrial: (courseTitle?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onBookTrial }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'kids', label: 'Kids & Beginners' },
    { id: 'beginners', label: 'Tajweed & Nazra' },
    { id: 'memorization', label: 'Hifz Program' },
    { id: 'islamic-studies', label: 'Islamic Studies' },
    { id: 'advanced', label: 'Tafseer & Arabic' },
  ];

  const filteredCourses = activeCategory === 'all'
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory || (activeCategory === 'kids' && c.category === 'kids'));

  return (
    <section id="courses" className="py-16 md:py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
            Curriculum & Programs
          </span>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3.5 mb-4">
            Structured Online Quran Courses for All Levels
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From basic letter recognition to advanced Tajweed and complete Hifz-ul-Quran, our courses are carefully tailored for kids, brothers, and sisters.
          </p>

          {/* Quick Featured Programs Matching Core Curriculum */}
          <div className="mt-8 mb-8 p-5 sm:p-6 bg-white border border-slate-200 hover:border-amber-400 rounded-2xl max-w-5xl mx-auto shadow-md transition-all">
            <div className="text-center mb-5">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-['Cinzel',serif] flex items-center justify-center gap-2">
                <img
                  src="/src/assets/images/academy_logo_1787022953709.jpg"
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-4 h-4 rounded-full object-cover border border-amber-500/50"
                />
                <span>Core Featured Courses (Our Main Curriculum)</span>
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
              {[
                {
                  title: 'Noorani Qaida',
                  sub: 'Kids & Beginners',
                  id: 'noorani-qaida',
                  image: '/src/assets/images/noorani_qaida_book_1787026098581.jpg',
                },
                {
                  title: 'Nazra Quran',
                  sub: 'Tajweed Recitation',
                  id: 'quran-reading-tajweed',
                  image: '/src/assets/images/nazra_quran_reading_1787026117824.jpg',
                },
                {
                  title: 'Hifz-ul-Quran',
                  sub: 'Memorization',
                  id: 'quran-memorization-hifz',
                  image: '/src/assets/images/hifz_quran_memorize_1787026136305.jpg',
                },
                {
                  title: 'Complete Salah',
                  sub: 'Namaz Method',
                  id: 'namaz-complete-method',
                  image: '/src/assets/images/namaz_salah_prayer_1787026153004.jpg',
                },
                {
                  title: '40 Masnoon Duas',
                  sub: 'Daily Supplications',
                  id: 'masnoon-duas',
                  image: '/src/assets/images/masnoon_duas_hands_1787026167172.jpg',
                },
                {
                  title: 'Six Kalimas',
                  sub: 'Tajweed & Meaning',
                  id: 'six-kalimas',
                  image: '/src/assets/images/six_kalimas_calligraphy_1787026183249.jpg',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    const c = COURSES.find((course) => course.id === item.id);
                    if (c) setSelectedCourse(c);
                  }}
                  className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-amber-400 p-3 rounded-xl text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 group shadow-sm hover:shadow-md flex flex-col items-center justify-between"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden mb-2.5 p-0.5 bg-gradient-to-tr from-amber-400/40 via-emerald-400/30 to-amber-400/40 group-hover:from-amber-400 group-hover:to-emerald-400 transition-all flex-shrink-0 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-[10px] group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-amber-800 leading-snug">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-slate-500 group-hover:text-slate-600 mt-0.5 font-medium leading-tight">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80 flex flex-col group"
            >
              {/* Course Card Banner Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200 bg-slate-950/85 px-2.5 py-1 rounded-full border border-amber-400/40">
                    {course.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 font-['Amiri',serif] text-xl text-emerald-300 font-bold drop-shadow" dir="rtl">
                  {course.arabicTitle}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors font-['Cinzel',serif]">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                    {course.shortDesc}
                  </p>
                </div>

                {/* Course Metadata pills */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{course.recommendedAge}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2.5">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                    <span>View Syllabus</span>
                  </button>

                  <button
                    onClick={() => onBookTrial(course.title)}
                    className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm cursor-pointer"
                  >
                    <span>Free Trial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Course Detail Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={(title) => {
          setSelectedCourse(null);
          onBookTrial(title);
        }}
      />
    </section>
  );
};
