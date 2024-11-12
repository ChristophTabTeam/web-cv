import { createContext } from 'react';

// Definiere den Typen für den Kontext
interface LanguageContextType {
  language: 'de' | 'en';
  toggleLanguage: (lang: 'de' | 'en') => void;
}

// Erstelle den Context mit einem Standardwert
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
