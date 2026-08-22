// Copy this code into academyData.ts
import { Course, Tutor, FeePlan, FaqItem, AcademyConfig, CurrencyConfig } from '../types';

export const DEFAULT_ACADEMY_CONFIG: AcademyConfig = {
  name: 'Minhaj-Ul-Quran Online Academy',
  tagline: 'Global Online Quran & Islamic Education',
  logoUrl: '/academy_logo_178702293709.jpg',
  phone: '+92 327 1998424',
  whatsappNumber: '+923271998424',
  whatsappMessage: 'Hi! I want to book a free trial.',
  email: 'MinjhajulQuranAccdemy@gmail.com',
  address: 'Online Campus',
  skypeId: 'MinhajQuranAcademy',
  workingHours: '24/7',
  freeTrialDays: 3,
  foundedYear: '2014',
  satisfactionRate: '99.4%',
  totalStudents: '12,500+',
  countriesCount: '48+',
};

export const COURSES: Course[] = [
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida',
    image: '/noorani_qaida_book_1787026098581.jpg',
    category: 'kids',
    shortDesc: 'Basic Qaida for kids.',
    duration: '2-4 Months',
    features: ['1-on-1 Classes'],
    popular: true,
  },
  {
    id: 'nazra',
    title: 'Nazra Quran',
    image: '/nazra_quran_reading_1787026117824.jpg',
    category: 'beginners',
    shortDesc: 'Quran reading with Tajweed.',
    duration: '6-12 Months',
    features: ['Live correction'],
    popular: true,
  },
  {
    id: 'hifz',
    title: 'Hifz-ul-Quran',
    image: '/hifz_quran_memorize_1787026136305.jpg',
    category: 'memorization',
    shortDesc: 'Full Quran Memorization.',
    duration: '2-3 Years',
    features: ['Daily testing'],
    popular: true,
  }
];
