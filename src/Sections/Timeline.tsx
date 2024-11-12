import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/useLanguage";

interface TimelineItem {
  date: string;
  jobTitle: string;
  company: string;
  location: string;
  description: string;
}

const items: TimelineItem[] = [
  {
    date: "Oktober 2021 - heute",
    jobTitle: "Full Stack Developer",
    company: "TabTeam GbR",
    location: "Laberweinting",
    description:
      "Führung eines Unternehmens und Entwicklung von Webanwendungen. Verantwortlich für die Planung, Implementierung und Wartung von Projekten, die sowohl Frontend- als auch Backend-Technologien umfassen.",
  },
  {
    date: "Juli 2019 - Oktober 2021",
    jobTitle: "Kundenservice",
    company: "Neumeier AG",
    location: "Mallersdorf-Pfaffenberg",
    description:
      "IT-Support und Einkauf. Zuständig für die Bearbeitung von Kundenanfragen, Problemlösungen und die Beschaffung von IT-Ressourcen.",
  },
  {
    date: "September 2017 - Juli 2019",
    jobTitle: "Ausbildung zum kaufmännischen Assistenten",
    company: "Mathias-Von-Flurl-Schule",
    location: "Straubing",
    description:
      "Ausbildung zum kaufmännischen Assistenten. Erlernte Fähigkeiten in den Bereichen Buchhaltung, Büroorganisation und betriebswirtschaftliche Prozesse.",
  },
];

const itemsEn: TimelineItem[] = [
  {
    date: "October 2021 - present",
    jobTitle: "Full Stack Developer",
    company: "TabTeam GbR",
    location: "Laberweinting",
    description:
      "Leading a company and developing web applications. Responsible for planning, implementing and maintaining projects that encompass both frontend and backend technologies.",
  },
  {
    date: "July 2019 - October 2021",
    jobTitle: "Customer Service",
    company: "Neumeier AG",
    location: "Mallersdorf-Pfaffenberg",
    description:
      "IT support and procurement. Responsible for handling customer inquiries, troubleshooting and procuring IT resources.",
  },
  {
    date: "September 2017 - July 2019",
    jobTitle: "Training as a commercial assistant",
    company: "Mathias-Von-Flurl-Schule",
    location: "Straubing",
    description:
      "Training as a commercial assistant. Learned skills in accounting, office organization and business processes.",
  },
];

const Timeline: React.FC = () => {
    const { language } = useLanguage();

  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, observerOptions);

    const currentItems = itemsRef.current;
    currentItems.forEach((item) => observer.observe(item));

    return () => {
      currentItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  if (language === "en") {
    return (
      <div className="section">
        <div className="container">
          <div className="content-wrapper">
            <div className="head-wrapper">
              <h2 className="display-2 text-dark-grey">My Career</h2>
            </div>
            <div className="timeline-mask">
              <div className="timeline">
                {itemsEn.map((item, index) => (
                  <div
                    key={index}
                    className="timeline-item"
                    ref={(el) => (itemsRef.current[index] = el!)}
                  >
                    <p className="large">{item.date}</p>

                    <div className="timeline-content">
                      <h3 className="display-5">{item.jobTitle}</h3>
                      <p className="extra-large">
                        {item.company} - {item.location}
                      </p>
                      <p className="large">{item.description}</p>
                    </div>
                  </div>
                ))}
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
            <h2 className="display-2 text-dark-grey">Mein Werdegang</h2>
          </div>
          <div className="timeline-mask">
            <div className="timeline">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="timeline-item"
                  ref={(el) => (itemsRef.current[index] = el!)}
                >
                  <p className="large">{item.date}</p>

                  <div className="timeline-content">
                    <h3 className="display-5">{item.jobTitle}</h3>
                    <p className="extra-large">
                      {item.company} - {item.location}
                    </p>
                    <p className="large">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
