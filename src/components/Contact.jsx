import portfolioData from "../data/portfolioData";

function Contact() {
  const { personal } = portfolioData;

  const contactItems = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}?subject=Portfolio%20Contact`,
      icon: "✉",
    },
    {
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s+/g, "")}`,
      icon: "☎",
    },
    {
      label: "GitHub",
      value: "Sutharsanam07",
      href: personal.github,
      icon: "GH",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: personal.linkedin,
      icon: "in",
      external: true,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-label">CONTACT</div>

        <div className="contact-layout">
          <div className="contact-copy">
            <h2>
              Let&apos;s build <span>something together.</span>
            </h2>

            <p>
              I&apos;m open to internship opportunities, freelance work, collaborations,
              and development projects where I can contribute practical software
              solutions and meaningful product thinking.
            </p>
          </div>

          <div className="contact-list">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="contact-card"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                <div className="contact-icon">{item.icon}</div>

                <div className="meta">
                  <span className="label">{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;