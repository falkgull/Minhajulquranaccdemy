import React, { useState, useRef, useEffect } from 'react';
import { TAJWEED_SURAH_SAMPLES } from '../data/academyData';
import { BookOpen, Volume2, VolumeX, Play, Pause, RotateCcw, CheckCircle2, Award } from 'lucide-react';

export const InteractiveTajweedDemo: React.FC = () => {
  const [selectedSurahIndex, setSelectedSurahIndex] = useState<number>(0);
  const [activeVerseNum, setActiveVerseNum] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playingVerseNum, setPlayingVerseNum] = useState<number | null>(null);
  const [autoPlayNext, setAutoPlayNext] = useState<boolean>(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSurah = TAJWEED_SURAH_SAMPLES[selectedSurahIndex];
  const activeVerse = currentSurah.verses.find((v) => v.num === activeVerseNum) || currentSurah.verses[0];

  // Stop audio on surah switch or unmount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsPlaying(false);
    setPlayingVerseNum(null);
  }, [selectedSurahIndex]);

  const playVerseAudio = (verseNum: number, continueSequence = false) => {
    const verse = currentSurah.verses.find((v) => v.num === verseNum);
    if (!verse) return;

    setActiveVerseNum(verseNum);

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(verse.audioUrl);
    audioRef.current = audio;
    setPlayingVerseNum(verseNum);
    setIsPlaying(true);

    audio.play().catch((err) => {
      console.warn('Audio play prevented or network issue:', err);
      setIsPlaying(false);
      setPlayingVerseNum(null);
    });

    audio.onended = () => {
      if (continueSequence && verseNum < currentSurah.verses.length) {
        // Play next verse
        playVerseAudio(verseNum + 1, true);
      } else {
        setIsPlaying(false);
        setPlayingVerseNum(null);
      }
    };
  };

  const handleTogglePlayAll = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      setPlayingVerseNum(null);
    } else {
      // Start playing from currently selected verse or verse 1
      playVerseAudio(activeVerseNum, autoPlayNext);
    }
  };

  const handleSingleVersePlay = (verseNum: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying && playingVerseNum === verseNum) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      setPlayingVerseNum(null);
    } else {
      playVerseAudio(verseNum, false);
    }
  };

  const tajweedRulesLegend = [
    { label: 'Ghunnah (Nasalization)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300', rule: 'Hold sound in nasal cavity for 2 counts on Noon/Meem with Shaddah' },
    { label: 'Qalqalah (Echo Sound)', color: 'bg-blue-100 text-blue-800 border-blue-300', rule: 'Echoing bounce on Qaf, Taa, Baa, Jeem, Dal (ق ط ب ج د) when with Sukoon' },
    { label: 'Ikhfa (Light Concealment)', color: 'bg-amber-100 text-amber-900 border-amber-300', rule: 'Conceal Noon Sakinah / Tanween before 15 Ikhfa letters with gentle nasal sound' },
    { label: 'Madd (Elongation)', color: 'bg-purple-100 text-purple-800 border-purple-300', rule: 'Stretch vowel duration from 2, 4 up to 6 counts based on Hamza / Sukoon' },
  ];

  return (
    <section id="tajweed-demo" className="py-16 md:py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
            Interactive Tajweed Audio Classroom
          </span>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3.5 mb-4">
            Listen & Learn Live Quran Recitation with Tajweed
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Click on any Ayah below or hit <strong>"Play Recitation"</strong> to listen to crystal-clear Qari audio recitation and learn exact pronunciation & Tajweed rules.
          </p>

          {/* Surah Switcher Tabs */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {TAJWEED_SURAH_SAMPLES.map((surah, idx) => (
              <button
                key={surah.id}
                onClick={() => {
                  setSelectedSurahIndex(idx);
                  setActiveVerseNum(1);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedSurahIndex === idx
                    ? 'bg-emerald-700 text-white shadow-md font-bold border border-emerald-600'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {surah.name} ({surah.arabicName})
              </button>
            ))}
          </div>
        </div>

        {/* Tajweed Interactive Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Verses Reader & Audio Player */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
            
            {/* Audio Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-200 mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-700" />
                <h3 className="font-bold text-slate-900 text-base sm:text-lg font-['Cinzel',serif]">
                  {currentSurah.name}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <label className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={autoPlayNext}
                    onChange={(e) => setAutoPlayNext(e.target.checked)}
                    className="accent-amber-500 rounded"
                  />
                  <span>Continuous Play</span>
                </label>

                <button
                  onClick={handleTogglePlayAll}
                  className={`flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-md ${
                    isPlaying
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-amber-500/20'
                      : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>Pause Recitation (Ayah {playingVerseNum})</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Play Recitation</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Now Playing Animated Banner */}
            {isPlaying && (
              <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center justify-between text-xs text-emerald-900 shadow-inner">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                  </span>
                  <span>Reciting <strong>Ayah #{playingVerseNum}</strong> (Sheikh Mishary Rashid Alafasy)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1 h-3 bg-emerald-600 rounded animate-pulse" />
                  <span className="w-1 h-5 bg-emerald-600 rounded animate-pulse delay-75" />
                  <span className="w-1 h-2 bg-emerald-600 rounded animate-pulse delay-150" />
                  <span className="w-1 h-4 bg-emerald-600 rounded animate-pulse" />
                </div>
              </div>
            )}

            {/* Verses List */}
            <div className="space-y-4">
              {currentSurah.verses.map((verse) => {
                const isActive = verse.num === activeVerseNum;
                const isCurrentlyPlaying = isPlaying && playingVerseNum === verse.num;

                return (
                  <div
                    key={verse.num}
                    onClick={() => {
                      setActiveVerseNum(verse.num);
                      playVerseAudio(verse.num, false);
                    }}
                    className={`p-5 rounded-2xl transition-all cursor-pointer group ${
                      isCurrentlyPlaying
                        ? 'bg-emerald-50/50 border-2 border-emerald-500 shadow-md ring-1 ring-emerald-400/40'
                        : isActive
                        ? 'bg-amber-50/40 border-2 border-amber-400 shadow-sm'
                        : 'bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      
                      {/* Play Button & Ayah Number */}
                      <div className="flex items-center gap-2.5 flex-shrink-0">
                        <button
                          onClick={(e) => handleSingleVersePlay(verse.num, e)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                            isCurrentlyPlaying
                              ? 'bg-emerald-600 text-white font-bold'
                              : 'bg-white border border-slate-300 group-hover:bg-amber-400 group-hover:border-amber-400 group-hover:text-slate-950 text-slate-700'
                          }`}
                          title="Click to Listen"
                        >
                          {isCurrentlyPlaying ? (
                            <Pause className="w-3.5 h-3.5 fill-current" />
                          ) : (
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          )}
                        </button>

                        <span className="text-xs font-bold text-slate-500">
                          #{verse.num}
                        </span>
                      </div>
                      
                      {/* Arabic Quranic Ayah */}
                      <p
                        className="font-['Amiri',serif] text-xl sm:text-2xl md:text-3xl text-right text-slate-900 font-bold leading-loose flex-1"
                        dir="rtl"
                      >
                        {verse.arabic} ۝{verse.num}
                      </p>
                    </div>

                    {/* Transliteration */}
                    <p className="text-xs sm:text-sm text-emerald-800 font-semibold italic mt-2">
                      {verse.transliteration}
                    </p>

                    {/* Translation */}
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                      {verse.translation}
                    </p>

                    {/* Quick Hint */}
                    <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="text-amber-800 font-medium">💡 Tajweed: {verse.tajweedTip}</span>
                      <span className="text-emerald-700 hover:underline">Click to listen 🔊</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right: Tajweed Rule Inspector & Live Tips */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Ayah Analysis Card */}
            <div className="bg-white border border-slate-200 hover:border-emerald-400 rounded-2xl p-6 shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  <img
                    src="/src/assets/images/academy_logo_1787022953709.jpg"
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-4 h-4 rounded-full object-cover border border-emerald-400/50"
                  />
                  <span>Verse #{activeVerse.num} Tajweed Analysis</span>
                </div>
                <button
                  onClick={() => playVerseAudio(activeVerse.num, false)}
                  className="text-xs text-amber-700 hover:text-amber-800 flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Listen to Ayah #{activeVerse.num}</span>
                </button>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-slate-900 font-['Cinzel',serif] mb-3">
                Teacher's Tajweed & Makharij Note:
              </h4>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeVerse.tajweedTip}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Our certified Qari listens to your live recitation and gives instant waveform & pronunciation corrections in every class.</span>
              </div>
            </div>

            {/* Color-Coded Rules Guide */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md">
              <h4 className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-4">
                Color-Coded Tajweed Rules Guide
              </h4>

              <div className="space-y-3">
                {tajweedRulesLegend.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${item.color}`}>
                        {item.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                      {item.rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
