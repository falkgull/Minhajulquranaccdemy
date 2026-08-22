import React, { useState, useEffect } from 'react';
import { AcademyConfig } from '../types';
import { Menu, X, BookOpen, CheckCircle2, ChevronDown } from 'lucide-react';

interface NavbarProps {
  config: AcademyConfig;
  onBookTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onBookTrial }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Courses', href: '#courses' },
    { name: 'Fee Structure', href: '#pricing' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Our Tutors', href: '#tutors' },
    { name: 'Tajweed Demo', href: '#tajweed-demo' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group text-left"
            aria-label="Minhaj-Ul-Quran Online Academy Home"
          >
            <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-emerald-500 to-amber-400 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300 overflow-hidden flex-shrink-0">
              <img
                src={config.logoUrl}
                alt={config.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full bg-slate-100"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <div className="flex flex-col">
              <span className="font-['Cinzel',serif] text-base sm:text-lg font-extrabold tracking-wide text-slate-900 group-hover:text-amber-700 transition-all">
                {config.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-emerald-700 font-bold tracking-wider uppercase flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Certified Online Quran Academy</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-amber-700 px-3 py-2 text-sm font-semibold transition-colors relative hover:bg-amber-50/80 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onBookTrial}
              className="relative inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold rounded-xl text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 transition-all active:scale-95 cursor-pointer gap-2 group"
            >
              <img
                src={config.logoUrl}
                alt=""
                referrerPolicy="no-referrer"
                className="w-5 h-5 rounded-full object-cover border border-slate-950/40 shadow-sm"
              />
              <span>Book 3-Days Free Trial</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onBookTrial}
              className="sm:hidden bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold shadow transition-colors"
            >
              Free Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-amber-700 p-2 rounded-lg bg-slate-100 border border-slate-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-amber-700 hover:bg-amber-50 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookTrial();
              }}
              className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold py-2.5 rounded-lg shadow flex items-center justify-center gap-2"
            >
              <img
                src={config.logoUrl}
                alt=""
                referrerPolicy="no-referrer"
                className="w-4 h-4 rounded-full object-cover border border-slate-950/40"
              />
              <span>Book 3-Days Free Trial</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
