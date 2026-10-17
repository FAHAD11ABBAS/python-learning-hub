import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LANGUAGES = {
  fi: {
    code: 'fi',
    name: 'Suomi',
    shortName: 'FI',
    dir: 'ltr',
    flag: '🇫🇮',
  },
  en: {
    code: 'en',
    name: 'English',
    shortName: 'EN',
    dir: 'ltr',
    flag: '🇬🇧',
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    shortName: 'AR',
    dir: 'rtl',
    flag: '🇸🇦',
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('python_hub_lang');
    return saved && LANGUAGES[saved] ? saved : 'fi'; // Default is Finnish
  });

  useEffect(() => {
    const currentLang = LANGUAGES[lang];
    document.documentElement.lang = currentLang.code;
    document.documentElement.dir = currentLang.dir;
    localStorage.setItem('python_hub_lang', lang);
  }, [lang]);

  const changeLanguage = (newLang) => {
    if (LANGUAGES[newLang]) {
      setLang(newLang);
    }
  };

  const isRTL = LANGUAGES[lang].dir === 'rtl';

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, isRTL, currentLangConfig: LANGUAGES[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
