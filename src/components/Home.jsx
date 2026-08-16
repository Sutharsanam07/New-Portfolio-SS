import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";
import "../App.css";

const name = "Sutharsanam S";

function Home() {
  const [displayedName, setDisplayedName] = useState("");
  const { personal } = portfolioData;

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setDisplayedName(name.slice(0, index + 1));
      index++;

      if (index === name.length) {
        clearInterval(timer);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <p className="home-intro">HELLO, I'M</p>

        <h1 className="home-name">
          {displayedName}
          <span className="name-cursor">|</span>
        </h1>

        <h2 className="home-role">Computer Science Engineer</h2>

        <h3 className="home-subtitle">Full Stack Developer</h3>

        <p className="home-description">
          I am a Computer Science and Engineering student passionate about software
          development, full-stack web technologies, and building real-world
          applications.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-button">
            View My Projects
          </a>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="secondary-button"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="home-socials">
          <a href={personal.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={`mailto:${personal.email}`}>Email</a>

          <a href={`tel:${personal.phone.replace(/\s+/g, "")}`}>Phone</a>
        </div>
      </div>

      <div className="home-image-wrapper">
        <div className="image-glow"></div>

        <div className="home-image-card">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Sutharsanam S"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;