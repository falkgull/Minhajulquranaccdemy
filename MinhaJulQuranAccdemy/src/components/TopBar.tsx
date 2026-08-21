import React from 'react';
import { AcademyConfig, CurrencyCode } from '../types';
import { Phone, Mail, MessageCircle, Clock, Globe } from 'lucide-react';

interface TopBarProps {
  config: AcademyConfig;
  currentCurrency: CurrencyCode;
  onCurrencyChange: (code: CurrencyCode) => void;
  onBookTrial: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  config,
  currentCurrency,
  onCurrencyChange,
  onBookTrial,
}) => {
  const currencies: CurrencyCode[] = ['USD', 'GBP', 'CAD', 'AUD', 'EUR', 'PKR'];

  return (
    <div id="top-bar" className="bg-[#050914] text-slate-200 text-xs border-b border-slate-800/80 py-2.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Contact Hotlines */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 text-slate-300">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold tracking-wide">
            <img
              src={config.logoUrl}
              alt=""
              referrerPolicy="no-referrer"
              className="w-4 h-4 rounded-full object-cover border border-amber-400/50"
            />
            <span>3 Days Free Trial Available</span>
          </div>

          <span className="hidden sm:inline text-slate-700">•</span>

          <a
            href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-medium"
            title="Call / Contact Hotline"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Call / WhatsApp: <strong className="text-amber-300 font-semibold">{config.phone}</strong></span>
          </a>

          <span className="hidden lg:inline text-slate-700">•</span>

          <a
            href={`mailto:${config.email}`}
            className="hidden sm:flex items-center gap-1.5 hover:text-amber-300 transition-colors text-slate-400 hover:text-slate-200"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>{config.email}</span>
          </a>
        </div>

        {/* Right: Actions, Currency & WhatsApp */}
        <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-3">
          
          {/* 24/7 badge */}
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800 text-[11px] font-medium">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>24/7 Global Timing</span>
          </div>

          {/* WhatsApp quick link */}
          <a
            href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(config.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded-md font-semibold text-xs transition-all shadow-sm shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* Currency dropdown */}
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-md px-2.5 py-1 text-amber-300 transition-colors">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <select
              value={currentCurrency}
              onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
              className="bg-transparent text-xs font-semibold focus:outline-none cursor-pointer text-amber-200"
              aria-label="Select Currency"
            >
              {currencies.map((curr) => (
                <option key={curr} value={curr} className="bg-slate-950 text-slate-100">
                  {curr}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>
    </div>
  );
};
