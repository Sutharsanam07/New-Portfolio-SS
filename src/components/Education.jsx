import portfolioData from "../data/portfolioData";

function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-label">EDUCATION</div>

        <h2 className="section-title">
          Academic <span>background.</span>
        </h2>

        {education.map((edu) => (
          <div key={edu.number} className="education-card">
            <div className="education-number">{edu.number}</div>

            <div>
              <p className="education-type">{edu.degree}</p>
              <h3>{edu.degree}</h3>
              <h4>{edu.branch}</h4>
              <p className="education-college">{edu.college}</p>
              {edu.gpa ? (
                <p className="education-gpa">GPA: {edu.gpa}</p>
              ) : (
                <p className="education-gpa">Percentage: {edu.percentage}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;