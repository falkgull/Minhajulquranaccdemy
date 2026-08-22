import React, { useState } from 'react';
import { CurrencyCode, FeePlan } from '../types';
import { CURRENCIES, FEE_PLANS } from '../data/academyData';
import { Check, ShieldCheck, HeartHandshake, HelpCircle, Users, ArrowRight } from 'lucide-react';

interface FeeCalculatorProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (code: CurrencyCode) => void;
  onBookTrial: (planName?: string) => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({
  currentCurrency,
  onCurrencyChange,
  onBookTrial,
}) => {
  const [numStudents, setNumStudents] = useState<number>(1);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plan-3days');

  const activeCurrencyConfig = CURRENCIES.find((c) => c.code === currentCurrency) || CURRENCIES[0];

  const formatPrice = (plan: FeePlan, studentsCount: number) => {
    let singlePrice = plan.baseUsdPrice * activeCurrencyConfig.rateToUsd;
    if (currentCurrency === 'PKR' && plan.pkrPrice) {
      singlePrice = plan.pkrPrice;
    }
    
    // Sibling discount formula:
    // 1st student: 100%
    // 2nd student: 90% (10% off)
    // 3rd+ students: 80% (20% off)
    let total = 0;
    for (let i = 1; i <= studentsCount; i++) {
      if (i === 1) total += singlePrice;
      else if (i === 2) total += singlePrice * 0.90;
      else total += singlePrice * 0.80;
    }

    if (currentCurrency === 'PKR') {
      return `${activeCurrencyConfig.symbol} ${Math.round(total).toLocaleString()}`;
    }
    return `${activeCurrencyConfig.symbol}${Math.round(total)}`;
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
            Affordable & Transparent Pricing
          </span>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3.5 mb-4">
            Monthly Fee Structure & Plans
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            No admission fees, no hidden charges. All plans include 3-days free assessment & trial classes.
          </p>

          {/* Interactive Currency Selector Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-1">Select Currency:</span>
            {CURRENCIES.map((curr) => (
              <button
                key={curr.code}
                onClick={() => onCurrencyChange(curr.code)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  currentCurrency === curr.code
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
                }`}
              >
                <span>{curr.flag}</span>
                <span>{curr.code} ({curr.symbol})</span>
              </button>
            ))}
          </div>

          {/* Sibling / Family Discount Controller */}
          <div className="mt-6 inline-flex items-center gap-3 bg-slate-50 border border-slate-200 hover:border-amber-400 px-4 py-2.5 rounded-2xl text-xs sm:text-sm text-slate-800 transition-colors">
            <Users className="w-4 h-4 text-amber-600" />
            <span className="font-medium">Number of Students / Children:</span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((count) => (
                <button
                  key={count}
                  onClick={() => setNumStudents(count)}
                  className={`w-7 h-7 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                    numStudents === count
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-300'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
            {numStudents > 1 && (
              <span className="text-[11px] text-emerald-800 font-bold bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                {numStudents === 2 ? '10% Sibling Off' : 'Up to 20% Family Off'}
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {FEE_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const isSelected = selectedPlanId === plan.id;

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isPopular
                    ? 'border-2 border-amber-500 bg-white shadow-xl shadow-amber-500/10 lg:-translate-y-2'
                    : isSelected
                    ? 'border-2 border-emerald-500 bg-white shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-50/90 border border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="text-center pb-4 border-b border-slate-200">
                    <h3 className="font-bold text-slate-900 text-base font-['Cinzel',serif]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {plan.classesPerMonth} classes / month ({plan.durationPerClass})
                    </p>

                    <div className="mt-4 flex items-baseline justify-center gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-amber-700 font-['Cinzel',serif]">
                        {formatPrice(plan, numStudents)}
                      </span>
                      <span className="text-xs text-slate-500">/ month</span>
                    </div>

                    {numStudents > 1 && (
                      <span className="text-[10px] text-emerald-700 block mt-1 font-semibold">
                        For {numStudents} students with discount
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="py-5 space-y-2.5 text-xs text-slate-600">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan CTA */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookTrial(plan.name);
                  }}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isPopular
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 shadow-md shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <img
                    src="/src/assets/images/academy_logo_1787022953709.jpg"
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-4 h-4 rounded-full object-cover border border-slate-950/40"
                  />
                  <span>Start 3-Days Free Trial</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-emerald-50/80 border border-emerald-200 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                100% Satisfaction & Money-Back Guarantee
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                If you or your child are not 100% satisfied after starting regular classes, we refund your remaining monthly fee without hassle.
              </p>
            </div>
          </div>

          <button
            onClick={() => onBookTrial()}
            className="flex-shrink-0 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2 shadow-md cursor-pointer"
          >
            <span>Book Free Trial Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
