import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { translations, type Language } from '../i18n/translations';
import { LanguageContext } from './language-context';

const STORAGE_KEY = 'portfolio-language';

const getInitialLanguage = (): Language => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'es' || stored === 'en' ? stored : 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'es' : 'en'));

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
