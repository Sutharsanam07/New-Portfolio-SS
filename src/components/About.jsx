import portfolioData from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-label">ABOUT ME</div>

        <h2 className="section-title">
          Turning ideas into <span>real applications.</span>
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <p className="lead">{portfolioData.summary}</p>

            <p>
              My primary interest is full-stack development, where I enjoy building
              responsive interfaces and practical software applications.
            </p>

            <p>
              I enjoy learning new technologies, solving programming problems and
              transforming ideas into useful products.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <strong>03</strong>
              <span>Internships</span>
            </div>

            <div className="stat-card">
              <strong>05+</strong>
              <span>Projects</span>
            </div>

            <div className="stat-card">
              <strong>06+</strong>
              <span>Technical Areas</span>
            </div>

            <div className="stat-card">
              <strong>CSE</strong>
              <span>Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;