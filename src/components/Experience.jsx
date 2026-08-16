import portfolioData from "../data/portfolioData";

function Experience() {
  const { internships } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-label">EXPERIENCE</div>

        <h2 className="section-title">
          Internship <span>Experience</span>
        </h2>

        <p className="section-description">
          Hands-on industry experience across full-stack, web, and Java development.
        </p>

        <div className="experience-timeline">
          {internships.map((item) => (
            <article className="experience-item" key={item.number}>
              <div className="experience-marker">{item.number}</div>

              <div className="experience-card">
                <div className="experience-head">
                  <span className="experience-year">{item.year}</span>
                </div>

                <h3>{item.role}</h3>
                <div className="experience-company">{item.company}</div>

                <p>{item.description}</p>

                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;