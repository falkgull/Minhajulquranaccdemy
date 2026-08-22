import React from 'react';
import { Course } from '../types';
import { X, CheckCircle2, Clock, Users, BookOpen, ArrowRight } from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onEnroll }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Background image or gradient */}
        <div className="relative h-44 sm:h-52 bg-slate-900 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 p-2 rounded-full border border-slate-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Course Title & Badge */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-500/40 px-2.5 py-0.5 rounded mb-1.5">
                {course.tag}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Cinzel',serif]">
                {course.title}
              </h2>
            </div>
            <div className="font-['Amiri',serif] text-xl sm:text-2xl text-emerald-300 font-bold" dir="rtl">
              {course.arabicTitle}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-700" />
              <div>
                <span className="text-slate-500 block text-[11px]">Duration:</span>
                <span className="font-semibold text-slate-900">{course.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-700" />
              <div>
                <span className="text-slate-500 block text-[11px]">Recommended:</span>
                <span className="font-semibold text-slate-900">{course.recommendedAge}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <div>
                <span className="text-slate-500 block text-[11px]">Prerequisite:</span>
                <span className="font-semibold text-slate-900">{course.prerequisites}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              Course Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {course.fullDesc}
            </p>
          </div>

          {/* Curriculum Breakdown */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
              Curriculum Topics & Lessons
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.curriculum.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-xs sm:text-sm text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Features Included */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2.5">
              Key Features Included
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
              {course.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
            <img
              src="/src/assets/images/academy_logo_1787022953709.jpg"
              alt=""
              referrerPolicy="no-referrer"
              className="w-4 h-4 rounded-full object-cover border border-amber-400/50 flex-shrink-0"
            />
            <span>Includes <strong className="text-amber-800 font-bold">3 Days Free Trial</strong> before any payment.</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-200 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course.title);
              }}
              className="w-1/2 sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-lg text-xs sm:text-sm shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <img
                src="/src/assets/images/academy_logo_1787022953709.jpg"
                alt=""
                referrerPolicy="no-referrer"
                className="w-4 h-4 rounded-full object-cover border border-slate-950/40"
              />
              <span>Enroll for Free Trial</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
