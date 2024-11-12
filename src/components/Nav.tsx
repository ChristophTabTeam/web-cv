import React from "react";
import { useLanguage } from "../context/useLanguage";

const Nav: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  const isGerman = language === 'de';

  const handleSwitch = () => {
    toggleLanguage(isGerman ? 'en' : 'de');
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo-wrapper">
          <a href="/" className="logo">
            Christoph <span className="text-dark-grey">Labestin</span>
          </a>
        </div>
        <div className="switch-container">
          <span className="label">DE</span>
          <div className="switch-wrapper" onClick={handleSwitch}>
            <div className={`switch-background ${!isGerman ? "active" : ""}`} />
            <div className={`switch-toggle ${!isGerman ? "active" : ""}`} />
          </div>
          <span className="label">EN</span>
        </div>
        <button className="btn-secondary nav-button">
            {isGerman ? "Kontakt" : "Contact"}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
