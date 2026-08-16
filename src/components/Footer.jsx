import portfolioData from "../data/portfolioData";

function Footer() {
  const { personal } = portfolioData;

  const quickLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Certifications",
    "Contact",
  ];

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="#home" className="logo">
            Sutharsanam<span>.</span>
          </a>
          <p>Full Stack Developer</p>

          <div className="footer-socials">
            <a href={personal.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${personal.email}`}>Email</a>
          </div>
        </div>

        <div>
          <div className="footer-links">
            {quickLinks.map((link) => {
              const id = link.toLowerCase();
              const anchor =
                id === "home" ? "#home" : `#${id === "certifications" ? "certifications" : id}`;

              return (
                <a key={link} href={anchor}>
                  {link}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Sutharsanam S. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;