import portfolioData from "../data/portfolioData";

function SkillGroup({ number, title, description, skills }) {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <span className="skill-index">{number}</span>
        <h3>{title}</h3>
      </div>

      <p>{description}</p>

      <div className="skill-tags">
        {skills.map((skill) => (
          <span className="skill-tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const { skills } = portfolioData;

  const skillGroups = [
    {
      number: "01",
      title: "Programming Languages",
      description: "Core languages used for software development and problem solving.",
      skills: skills.languages,
    },
    {
      number: "02",
      title: "Frontend",
      description: "Interface development and modern user-focused web experiences.",
      skills: skills.frontend,
    },
    {
      number: "03",
      title: "Backend & APIs",
      description: "Server-side logic and API-driven application architecture.",
      skills: skills.backend,
    },
    {
      number: "04",
      title: "Databases",
      description: "Data storage solutions and relational or document-based models.",
      skills: skills.databases,
    },
    {
      number: "05",
      title: "Tools & Platforms",
      description: "Development tools and platforms that streamline build workflows.",
      skills: skills.tools,
    },
    {
      number: "06",
      title: "Core Concepts",
      description: "Engineering fundamentals that strengthen practical software design.",
      skills: skills.concepts,
    },
  ];

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-label">TECHNICAL SKILLS</div>

        <h2 className="section-title">
          Technologies I <span>work with.</span>
        </h2>

        <p className="section-description">
          Programming languages, frameworks, databases and development tools that I
          use while building responsive and practical applications.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.title}
              number={group.number}
              title={group.title}
              description={group.description}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;