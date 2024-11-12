import { ReactNode, useState } from "react";
import { LanguageContext } from "./context";

interface LanguageProviderProps {
  children: ReactNode;
}

// Erstelle den LanguageProvider, der die Sprache und die Umschaltfunktion bereitstellt
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"de" | "en">("de"); // Deutsch als Standardsprache

  // Funktion zum Umschalten der Sprache
  const toggleLanguage = (lang: "de" | "en") => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
