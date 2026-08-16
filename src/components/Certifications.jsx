import portfolioData from "../data/portfolioData";

function Certifications() {
  const { certifications, certificateDriveLink } = portfolioData;

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <div className="section-label">CERTIFICATIONS</div>

        <div className="certification-header">
          <div>
            <h2 className="section-title">
              Certifications & <span>learning.</span>
            </h2>

            <p className="section-description">
              Professional certifications and learning programs completed throughout
              my development journey.
            </p>
          </div>

          <a
            href={certificateDriveLink}
            target="_blank"
            rel="noreferrer"
            className="certification-button"
          >
            View All Certificates ↗
          </a>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate, index) => (
            <div className="certification-card" key={certificate.title}>
              <div className="certification-icon">{certificate.icon}</div>

              <div className="certification-content">
                <div className="certification-meta">
                  {certificate.issuer} · {certificate.date}
                </div>
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;