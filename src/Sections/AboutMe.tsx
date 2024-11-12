import React from "react";
import { useLanguage } from "../context/useLanguage";

const AboutMe: React.FC = () => {
  const { language } = useLanguage();

  if (language === "en") {
    return (
      <div className="section">
        <div className="container">
          <div className="content-wrapper">
            <div className="head-wrapper">
              <div className="display-2 text-dark-grey">About Me</div>
            </div>
            <div className="about-me-grid">
              <div className="about-me-item">
                <div className="extra-large">
                  I am a passionate Full Stack Developer with extensive
                  experience in web development. Currently, I work independently
                  and develop modern, user-friendly websites for a variety of
                  clients. My career began in an IT company, where I worked in
                  purchasing and IT support, and then led me to customer service
                  in a BMW car dealership.
                </div>
              </div>
              <div className="about-me-item"></div>
              <div className="about-me-item"></div>
              <div className="about-me-item">
                <div className="extra-large">
                  Through my commercial training and my current goal of
                  obtaining my high school diploma, I have been able to
                  continuously expand my skills. In the frontend, I particularly
                  enjoy working with HTML, CSS, and JavaScript, as well as with
                  frameworks like Angular, React, and .NET Blazor. In the
                  backend, I currently mainly rely on Google Firebase, but I am
                  also well-versed in Node.js, C#, and SQL.
                </div>
              </div>
              <div className="about-me-item">
                <div className="extra-large">
                  In addition to my technical expertise, I am a passionate
                  mentor and enjoy sharing my knowledge with others. I believe
                  that the exchange of knowledge and continuous learning are the
                  keys to remaining successful in the dynamic tech industry.
                </div>
              </div>
              <div className="about-me-item"></div>
              <div className="about-me-item"></div>
              <div className="about-me-item">
                <div className="extra-large">
                  Apart from programming, I am enthusiastic about aviation and
                  flight simulations - an area in which I could also see myself
                  professionally, should I ever decide to make a change. In my
                  free time, I love immersing myself in the world of movies and
                  experiencing new perspectives.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        <div className="content-wrapper">
          <div className="head-wrapper">
            <div className="display-2 text-dark-grey">Über Mich</div>
          </div>
          <div className="about-me-grid">
            <div className="about-me-item">
              <div className="extra-large">
                Ich bin ein leidenschaftlicher Full Stack Developer mit
                umfangreicher Erfahrung in der Webentwicklung. Aktuell arbeite
                ich selbstständig und entwickle moderne, benutzerfreundliche
                Webseiten für eine Vielzahl von Kunden. Meine Karriere begann in
                einer IT-Firma, wo ich im Einkauf und IT-Support tätig war und
                führte mich dann in den Kundenservice in einem BMW Autohaus.
              </div>
            </div>
            <div className="about-me-item"></div>
            <div className="about-me-item"></div>
            <div className="about-me-item">
              <div className="extra-large">
                Durch meine kaufmännische Ausbildung und mein derzeitiges Ziel,
                mein Abitur nachzuholen, konnte ich meine Fähigkeiten
                kontinuierlich ausbauen. Im Frontend arbeite ich besonders gern
                mit HTML, CSS und JavaScript, sowie mit Frameworks wie Angular,
                React und .NET Blazor. Im Backend setze ich aktuell
                hauptsächlich auf Google Firebase, bin aber ebenso versiert in
                Node.js, C# und SQL.
              </div>
            </div>
            <div className="about-me-item">
              <div className="extra-large">
                Neben meiner technischen Expertise bin ich leidenschaftlicher
                Mentor und teile mein Wissen gerne mit anderen. Ich glaube
                daran, dass der Austausch von Wissen und kontinuierliches Lernen
                der Schlüssel sind, um in der dynamischen Tech-Branche
                erfolgreich zu bleiben.
              </div>
            </div>
            <div className="about-me-item"></div>
            <div className="about-me-item"></div>
            <div className="about-me-item">
              <div className="extra-large">
                Abseits der Programmierung begeistern mich die Luftfahrt und
                Flugsimulationen - ein Bereich, in dem ich mich auch gerne
                beruflich sehen könnte, sollte ich mich jemals für einen Wechsel
                entscheiden. In meiner Freizeit liebe ich es, in die Welt der
                Filme einzutauchen und neue Perspektiven zu erleben.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
