import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';
import { UI_TRANSLATIONS } from '../data/translations';
import {
  Sun,
  Moon,
  Terminal,
  Menu,
  X,
  CheckCircle2,
  Volume2,
  VolumeX
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { isAudioEnabled, setAudioEnabled, playClickSound, playToggleSound } from '../utils/audio';

export const Header = ({ onOpenPlayground, onToggleSidebar, isSidebarOpen }) => {
  const { lang, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { completionPercentage, completedTopics } = useProgress();
  const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.fi;

  const [soundActive, setSoundActive] = useState(isAudioEnabled());

  const handleToggleSound = () => {
    const nextState = !soundActive;
    setSoundActive(nextState);
    setAudioEnabled(nextState);
    if (nextState) {
      playToggleSound();
    }
  };

  const handleThemeChange = () => {
    playToggleSound();
    toggleTheme();
  };

  const handleLanguageChange = (newLang) => {
    if (lang !== newLang) {
      playToggleSound();
      changeLanguage(newLang);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-navy/90 backdrop-blur-md border-b border-navy-border transition-colors shadow-hyper-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playClickSound();
              onToggleSidebar();
            }}
            className="lg:hidden p-2 rounded-xl bg-navy-card text-slate-300 hover:text-white hover:bg-slate-800 border border-navy-border transition-all"
            aria-label="Toggle navigation menu"
          >
            {isSidebarOpen ? <X className="w-5 h-5 text-crimson" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Official Python Logo Branding with Crimson & Gold Halo */}
          <div className="flex items-center gap-3 select-none">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-navy-card border border-navy-border shadow-md">
              <svg className="w-6 h-6" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#E11D48" d="M54.5 5.5c-24.5 0-23 10.6-23 10.6l.03 11h23.5v3.3H21.9C9.8 30.4 0 35.8 0 54.4c0 18.6 8.3 22.9 18.3 22.9h10.9v-15.3c0-11 9.4-20.7 20.7-20.7h23.5v-10.9c0-14.7-18.9-24.9-18.9-24.9zm-10.2 7c2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7z"/>
                <path fill="#FBBF24" d="M55.5 104.5c24.5 0 23-10.6 23-10.6l-.03-11H55v-3.3h33.1c12.1 0 21.9-5.4 21.9-24 0-18.6-8.3-22.9-18.3-22.9H80.8v15.3c0 11-9.4 20.7-20.7 20.7H36.6v10.9c0 14.7 18.9 24.9 18.9 24.9zm10.2-7c-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7 2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7z"/>
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base sm:text-lg tracking-tight text-white flex items-center font-sans">
                  Python<span className="text-gold">Hub</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-crimson/20 text-crimson-light border border-crimson/40">
                  Developer Guide
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-slate-400 font-sans">
                {t.appSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Progress, Audio, Playground, Language, Theme, GitHub */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Progress pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-navy-card border border-navy-border text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300">
              {completedTopics.length}/12
            </span>
            <div className="w-14 bg-navy rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-crimson to-gold h-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <span className="text-[10px] text-gold font-bold">{completionPercentage}%</span>
          </div>

          {/* Playground Button */}
          <button
            onClick={() => {
              playClickSound();
              onOpenPlayground();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-crimson to-rose-600 hover:brightness-110 text-white text-xs font-mono font-bold transition-all shadow-glow-crimson"
            title={t.playground}
          >
            <Terminal className="w-3.5 h-3.5 text-gold" />
            <span className="hidden md:inline">{t.playground}</span>
          </button>

          {/* Audio Feedback Toggle */}
          <button
            onClick={handleToggleSound}
            className={`p-2 rounded-xl border transition-all ${
              soundActive
                ? 'bg-navy-card border-gold/40 text-gold shadow-glow-gold'
                : 'bg-navy-card border-navy-border text-slate-500 hover:text-slate-300'
            }`}
            title={soundActive ? t.soundOn : t.soundOff}
            aria-label="Toggle audio feedback"
          >
            {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Language Toggle (FI / EN) */}
          <div className="flex items-center bg-navy-card p-1 rounded-xl border border-navy-border">
            <button
              onClick={() => handleLanguageChange('fi')}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                lang === 'fi'
                  ? 'bg-crimson text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              FI
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                lang === 'en'
                  ? 'bg-crimson text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle (Dark / Light) */}
          <button
            onClick={handleThemeChange}
            className="p-2 rounded-xl bg-navy-card hover:bg-slate-800 text-slate-300 hover:text-gold transition-all border border-navy-border"
            title={theme === 'dark' ? t.themeToggleDark : t.themeToggleLight}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-gold" />
            ) : (
              <Moon className="w-4 h-4 text-crimson" />
            )}
          </button>

          {/* GitHub Repository Link */}
          <a
            href="https://github.com/FAHAD11ABBAS/python-learning-hub"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="p-2 rounded-xl bg-navy-card hover:bg-slate-800 text-slate-300 hover:text-white transition-all border border-navy-border"
            title="GitHub Repository"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
