import React, { useState } from 'react';
import { AcademyConfig, CurrencyCode } from './types';
import { DEFAULT_ACADEMY_CONFIG } from './data/academyData';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CoursesSection } from './components/CoursesSection';
import { FeeCalculator } from './components/FeeCalculator';
import { InteractiveTajweedDemo } from './components/InteractiveTajweedDemo';
import { TutorsSection } from './components/TutorsSection';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TrialBookingModal } from './components/TrialBookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const STORAGE_KEY = 'minhaj_quran_academy_config_v2';

export default function App() {
  const [config] = useState<AcademyConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_ACADEMY_CONFIG, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Failed to load saved academy config:', e);
    }
    return DEFAULT_ACADEMY_CONFIG;
  });

  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('USD');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [trialPrefilledCourse, setTrialPrefilledCourse] = useState<string>('');

  const handleOpenTrial = (courseName?: string) => {
    setTrialPrefilledCourse(courseName || 'Noorani Qaida Course');
    setIsTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-400/30 selection:text-amber-900">
      {/* Top Notice & Contact Hotlines Bar */}
      <TopBar
        config={config}
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onBookTrial={() => handleOpenTrial()}
      />

      {/* Main Sticky Header */}
      <Navbar
        config={config}
        onBookTrial={() => handleOpenTrial()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          config={config}
          onBookTrial={() => handleOpenTrial()}
        />

        <FeaturesSection />

        <CoursesSection
          onBookTrial={(courseTitle) => handleOpenTrial(courseTitle)}
        />

        <FeeCalculator
          currentCurrency={currentCurrency}
          onCurrencyChange={setCurrentCurrency}
          onBookTrial={(plan) => handleOpenTrial(plan ? `${plan} Plan` : undefined)}
        />

        <InteractiveTajweedDemo />

        <TutorsSection
          onBookTrial={(tutor) => handleOpenTrial(tutor)}
        />

        <HowItWorks
          onBookTrial={() => handleOpenTrial()}
        />

        <TestimonialsSection />

        <FaqSection config={config} />

        <ContactSection
          config={config}
          onBookTrial={() => handleOpenTrial()}
        />
      </main>

      {/* Footer */}
      <Footer
        config={config}
        onBookTrial={() => handleOpenTrial()}
      />

      {/* Floating WhatsApp Action & Trial Launcher */}
      <FloatingWhatsApp
        config={config}
        onBookTrial={() => handleOpenTrial()}
      />

      {/* 3-Days Free Trial Booking Modal */}
      <TrialBookingModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        config={config}
        prefilledCourse={trialPrefilledCourse}
      />
    </div>
  );
}
