import React from "react";
import { useLanguage } from "../context/useLanguage";

const Contact: React.FC = () => {
  const { language } = useLanguage();

  if (language === "en") {
    return (
      <div className="section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="head-wrapper">
              <h2 className="display-2 text-dark-grey">Contact</h2>
            </div>
            <div className="contact-wrapper">
              <p className="large">
                Write me an email to
                <br />
                <a
                  href="mailto:mail@christophlabestin.de"
                  className="display-5"
                >
                  mail@christophlabestin.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="head-wrapper">
            <h2 className="display-2 text-dark-grey">Kontakt</h2>
          </div>
          <div className="contact-wrapper">
            <p className="large">
              Schreiben Sie mir eine E-Mail an
              <br />
              <a href="mailto:mail@christophlabestin.de" className="display-5">
                mail@christophlabestin.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
