import React from "react";
import xLogo from "../assets/X_logo_2023_original.svg";
import githubLogo from "../assets/github.svg";
import { useLanguage } from "../context/useLanguage";

const Hero: React.FC = () => {
  const { language } = useLanguage();

  if (language === "en") {
    return (
      <div className="section hero">
        <div className="container">
          <div className="hero-grid">
            <div className="content-wrapper">
              <div className="head-wrapper max-width-700">
                <h1 className="display-1">
                  Hi, I'm
                  <br />
                  <span className="text-dark-grey">Christoph</span>
                </h1>
                <p className="extra-large">
                  I'm a full-stack developer from Bavaria. I create
                  <span className="text-dark-grey">
                    {" "}
                    high-quality websites{" "}
                  </span>
                  and
                  <span className="text-dark-grey"> web applications</span> that
                  provide users with a great experience.
                </p>
                <div className="socials-wrapper">
                  <a href="https://github.com/ChristophTabTeam" target="_blank">
                    <img
                      src={githubLogo}
                      alt="Github Logo"
                      className="socials-logo"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/christophlabestin/"
                    target="_blank"
                  >
                    <img
                      src="https://tabteamblob.blob.core.windows.net/website/instagram.svg"
                      alt="Instagram Logo"
                      className="socials-logo"
                    />
                  </a>
                  <a href="" target="_blank">
                    <img src={xLogo} alt="X Logo" className="socials-logo" />
                  </a>
                </div>
              </div>
              <button className="btn-primary">Learn more about me</button>
            </div>
            <div className="hero-image-wrapper"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section hero viewport-height">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-column">
            <div className="content-wrapper">
              <div className="head-wrapper max-width-700">
                <h1 className="display-1">
                  Hi, Ich bin
                  <br />
                  <span className="text-dark-grey">Christoph</span>
                </h1>
                <p className="extra-large">
                  Ich bin ein Full-Stack-Entwickler aus Bayern. Ich erstelle
                  <span className="text-dark-grey">
                    {" "}
                    hochwertige Webseiten{" "}
                  </span>
                  und
                  <span className="text-dark-grey"> Webanwendungen</span>, die
                  den Benutzern ein großartiges Erlebnis bieten.
                </p>
                <div className="socials-wrapper">
                  <a href="https://github.com/ChristophTabTeam" target="_blank">
                    <img
                      src={githubLogo}
                      alt="Github Logo"
                      className="socials-logo"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/christophlabestin/"
                    target="_blank"
                  >
                    <img
                      src="https://tabteamblob.blob.core.windows.net/website/instagram.svg"
                      alt="Instagram Logo"
                      className="socials-logo"
                    />
                  </a>
                  <a href="" target="_blank">
                    <img
                      src="https://tabteamblob.blob.core.windows.net/website/x.svg"
                      alt="X Logo"
                      className="socials-logo"
                    />
                  </a>
                </div>
              </div>
              <button className="btn-primary">Mehr über mich</button>
            </div>
            <div className="hero-image-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
