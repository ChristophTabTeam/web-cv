import { useContext } from "react";
import { LanguageContext } from "./context";

// Custom Hook zum Verwenden des LanguageContext
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
      throw new Error('useLanguage muss innerhalb des LanguageProviders verwendet werden');
    }
    return context;
  };