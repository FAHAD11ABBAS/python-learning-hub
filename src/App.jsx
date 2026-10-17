import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ProgressProvider } from './context/ProgressContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TopicView } from './components/TopicView';
import { PlaygroundModal } from './components/PlaygroundModal';
import { CodeMatrixBackground } from './components/CodeMatrixBackground';
import { UI_TRANSLATIONS } from './data/translations';
import { GithubIcon } from './components/GithubIcon';

const AppContent = () => {
  const { lang, isRTL } = useLanguage();
  const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.fi;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);
  const [playgroundInitialCode, setPlaygroundInitialCode] = useState('');

  const handleOpenPlaygroundWithCode = (code) => {
    setPlaygroundInitialCode(code);
    setIsPlaygroundOpen(true);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-navy text-slate-100 transition-colors duration-200 relative ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Subtle Matrix/Code Stream Background */}
      <CodeMatrixBackground />

      {/* Top Header */}
      <Header
        onOpenPlayground={() => {
          setPlaygroundInitialCode('');
          setIsPlaygroundOpen(true);
        }}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Content Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex relative z-10">
        {/* Sidebar Navigation */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Topic Content Area */}
        <main className="flex-1 min-w-0 pb-16">
          <TopicView onOpenPlaygroundWithCode={handleOpenPlaygroundWithCode} />
        </main>
      </div>

      {/* Modern Hyper-car Footer */}
      <footer className="border-t border-navy-border bg-navy-dark/90 backdrop-blur-md py-8 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-400 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wide">Python Learning Hub</span>
            <span className="text-crimson font-bold">&bull;</span>
            <span className="text-gold">Interactive Developer Guide</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/FAHAD11ABBAS/python-learning-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-slate-400" />
              <span>FAHAD11ABBAS/python-learning-hub</span>
            </a>
            <a
              href="https://fahad11abbas.github.io/python-learning-hub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light font-bold transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
      </footer>

      {/* Python REPL / Playground Modal */}
      <PlaygroundModal
        isOpen={isPlaygroundOpen}
        onClose={() => setIsPlaygroundOpen(false)}
        initialCode={playgroundInitialCode}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProgressProvider>
          <AppContent />
        </ProgressProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
