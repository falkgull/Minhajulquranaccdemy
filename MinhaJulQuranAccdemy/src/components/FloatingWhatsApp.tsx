import React, { useState } from 'react';
import { AcademyConfig } from '../types';
import { MessageCircle, X, Phone, CheckCircle2 } from 'lucide-react';

interface FloatingWhatsAppProps {
  config: AcademyConfig;
  onBookTrial: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ config, onBookTrial }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const cleanNumber = config.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(config.whatsappMessage);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;

  return (
    <div id="floating-actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="relative bg-white border border-slate-200 rounded-2xl p-4 shadow-xl backdrop-blur-md max-w-xs animate-bounce-short">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 to-emerald-400 flex-shrink-0">
              <img
                src={config.logoUrl}
                alt={config.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1">
                <span>Online Support Active</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <p className="text-slate-600 text-[11px] mt-0.5">
                Need guidance or want to book a free trial class? Chat with us instantly!
              </p>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold py-1.5 px-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => {
                setShowTooltip(false);
                onBookTrial();
              }}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-[11px] font-bold py-1.5 px-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              <img
                src={config.logoUrl}
                alt=""
                referrerPolicy="no-referrer"
                className="w-3.5 h-3.5 rounded-full object-cover border border-slate-950/40"
              />
              <span>Free Trial</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        className="relative group bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer border-2 border-emerald-300"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>

    </div>
  );
};
