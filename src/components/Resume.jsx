function Resume() {
  return (
    <section className="resume-section">
      <div className="container resume-box">

        <div>
          <p className="eyebrow">MY RESUME</p>

          <h2>
            Want to know more about my
            <span> experience?</span>
          </h2>
        </div>

        <a
          href={`${import.meta.env.BASE_URL}Sutharsanam_Resume.pdf`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          View Resume ↗
        </a>

      </div>
    </section>
  );
}

export default Resume;