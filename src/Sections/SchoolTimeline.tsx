import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/useLanguage";

interface SchoolTimelineItem {
  date: string;
  jobTitle: string;
  company: string;
  location: string;
  description: string;
}

const items: SchoolTimelineItem[] = [
  {
    date: "September 2007 - Juli 2011",
    jobTitle: "Grundschule",
    company: "Volksschule",
    location: "Laberweinting",
    description:
      "Besuch der Grundschule in Laberweinting. Erster Kontakt mit dem Lernen und der Schule.",
  },
  {
    date: "September 2011 - Juli 2017",
    jobTitle: "Realschule",
    company: "staatliche Realschule",
    location: "Neufahrn in Niederbayern",
    description:
      "Besuch der Realschule in Neufahrn in Niederbayern. Erlernte Fähigkeiten in den Bereichen Mathematik, Deutsch und Englisch. Abschluss mit der Mittleren Reife.",
  },
  {
    date: "September 2024 - heute",
    jobTitle: "Berufsoberschule",
    company: "FOS/BOS",
    location: "Straubing",
    description:
      "Besuch der Berufsoberschule in Straubing. Erweiterung der Kenntnisse in den Fächern Mathematik, Deutsch und Englisch. Ziel: Allgemeine Hochschulreife.",
  },
];

const itemsEn: SchoolTimelineItem[] = [
    {
        date: "September 2007 - July 2011",
        jobTitle: "Primary School",
        company: "Volksschule",
        location: "Laberweinting",
        description:
        "Attended primary school in Laberweinting. First contact with learning and school.",
    },
    {
        date: "September 2011 - July 2017",
        jobTitle: "Secondary School",
        company: "staatliche Realschule",
        location: "Neufahrn in Niederbayern",
        description:
        "Attended secondary school in Neufahrn in Niederbayern. Learned skills in mathematics, German and English. Graduated with the Mittlere Reife.",
    },
    {
        date: "September 2024 - present",
        jobTitle: "Vocational High School",
        company: "FOS/BOS",
        location: "Straubing",
        description:
        "Attending the vocational high school in Straubing. Expanding knowledge in the subjects of mathematics, German and English. Goal: General university entrance qualification.",
    },
];

const SchoolTimeline: React.FC = () => {
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
              <h2 className="display-2 text-dark-grey">School Career</h2>
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
            <h2 className="display-2 text-dark-grey">Schullaufbahn</h2>
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

export default SchoolTimeline;
