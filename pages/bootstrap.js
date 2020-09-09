const Bootstrap = () => {
  return (
    <>
      {/* <!-- PORTFOLIO INTRO --> */}
      <section className="intro-item">
        <h1 className="section__title section__title--intro">
        Check out
          <strong>Bootstrap<br/> Mock-Ups</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro-item">
        demo showcase
        </p>
        <div className="portfolio-item-individual__item">
          <img
            src="../bootstrap-capture.webp"
            alt="scrolling screen capture"
            className="portfolio-item-individual__img"
          />
        </div>
      </section>

      <div className="portfolio-item-individual__bar">
        <i className="fab fa-bootstrap"></i>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt"></i>
        <i className="fab fa-js"></i>
      </div>
      <div className="portfolio-item-individual">
        <p>
        Bootstrap 4 is an incredible tool set and quickly lets you implement and
        expand upon some really user friendly components and elements. Reading
        and understanding the Sass and CSS files of Bootstrap let me really get
        a new appreciation and understanding of things like CSS variables,
        creating reusable classes and making everything completely responsive
        with industry standard practices in media queries and design.
        </p>
        <img
          src="../bootstrap-capture-lg.webp"
          alt="larger screen capture"
          className="portfolio-item-individual__img-lg"
        />
        <div className="btn-holder">
          <a
            href="https://djdagorne.github.io/bootstrap-playground/"
            className="btn btn-sm"
          >Live Demo</a
          >
          <a
            href="https://github.com/djdagorne/bootstrap-playground"
            className="btn btn-sm"
          >Github Repo</a
          >
        </div>
        <p>
        Feeling like I could use an edge when it comes to making the right first
        impression with a website, I decided to research into Bootstrap
        frameworks and learn some of the secrets when it comes to making simple
        but effective designs.
        </p>
        <p>
        Whether its responsive navigation, tables, or inputs, Bootstrap lets me
        do it all with minimal custom javascript required to get a great looking
        website made in record time.
        </p>
      </div>
    </>
  )
}

export default Bootstrap
