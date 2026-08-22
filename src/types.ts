export type CurrencyCode = 'USD' | 'GBP' | 'CAD' | 'AUD' | 'EUR' | 'PKR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  flag: string;
  rateToUsd: number; // Multiplier from base USD
}

export interface Course {
  id: string;
  title: string;
  arabicTitle: string;
  category: 'kids' | 'beginners' | 'memorization' | 'advanced' | 'islamic-studies';
  tag: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  prerequisites: string;
  recommendedAge: string;
  curriculum: string[];
  features: string[];
  image: string;
  popular?: boolean;
}

export interface Tutor {
  id: string;
  name: string;
  title: string;
  gender: 'male' | 'female';
  qualification: string;
  experienceYears: number;
  languages: string[];
  studentsTaught: number;
  rating: number;
  specialization: string;
  bio: string;
  avatar: string;
}

export interface FeePlan {
  id: string;
  name: string;
  daysPerWeek: number;
  classesPerMonth: number;
  durationPerClass: string; // e.g. "30 Minutes"
  baseUsdPrice: number;
  pkrPrice?: number;
  popular?: boolean;
  features: string[];
}

export interface Testimonial {
  id: string;
  studentName: string;
  parentName?: string;
  country: string;
  countryFlag: string;
  courseTaken: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'classes' | 'tutors' | 'payment';
}

export interface TajweedVerse {
  num: number;
  arabic: string;
  transliteration: string;
  translation: string;
  tajweedTip: string;
  audioUrl: string;
}

export interface TajweedSurah {
  id: string;
  name: string;
  arabicName: string;
  verses: TajweedVerse[];
}

export interface AcademyConfig {
  name: string;
  tagline: string;
  logoUrl: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  address: string;
  skypeId: string;
  workingHours: string;
  freeTrialDays: number;
  foundedYear: string;
  satisfactionRate: string;
  totalStudents: string;
  countriesCount: string;
}
