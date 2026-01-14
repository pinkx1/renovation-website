import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { translations, type Language } from './translations';

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: <T = string>(key: string, fallback?: T) => T;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = 'renovia-language';
const SUPPORTED_LANGUAGES: Language[] = ['en', 'ru'];

const getNestedValue = (source: Record<string, unknown>, path: string): unknown => {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, source);
};

const detectLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
    return stored;
  }

  const browserLanguage = window.navigator.language?.toLowerCase() ?? '';
  if (browserLanguage.startsWith('ru')) {
    return 'ru';
  }

  return 'en';
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(detectLanguage);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback(
    <T,>(key: string, fallback?: T) => {
      const value = getNestedValue(translations[language], key);
      if (value === undefined) {
        return (fallback ?? key) as T;
      }
      return value as T;
    },
    [language]
  );

  const contextValue = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t]
  );

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
