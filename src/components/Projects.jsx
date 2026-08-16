import portfolioData from "../data/portfolioData";

function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-label">PROJECTS</div>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <p className="section-description">
          Real-world applications developed using modern programming and web
          development practices.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <ul className="project-features">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {(project.projectLink || project.githubLink) && (
                <div className="project-actions">
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="action-button primary"
                    >
                      View Project
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="action-button secondary"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="view-more-projects">
          <a
            href="https://github.com/Sutharsanam07"
            target="_blank"
            rel="noreferrer"
            className="view-more-button"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;