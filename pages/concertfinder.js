const Concertfinder = () => {
  return (
    <>
      <section className="intro-item">
        <h1 className="section__title section__title--intro">
        Check out
          <strong>CONCERT<br/>FINDER</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro-item">
        from a pre-covid era...
        </p>
        <div className="portfolio-item-individual__item">
          <img
            src="../concertfinder-capture.png"
            alt="scrolling demo pic"
            className="portfolio-item-individual__img"
          />
        </div>
      </section>

      <div className="portfolio-item-individual__bar">
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt"></i>
        <i className="fab fa-js"></i>
      </div>
      <div className="portfolio-item-individual">
        <p>
        A concert lookup web application, using
          <strong> Last.fm Tastemaker and Ticketmasters Eventfinder APIs, jQuery,
          vanilla CSS, HTML. </strong>
        You supply the artist and optionally the city you want and Concertfinder
        will return a list of related acts as dictate by Last.fm, and their
        upcoming concerts on Ticketmaster.
        </p>
        <img
          src="../concertfinder-capture-lg.png"
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
        While learning about RESTful APIs and back-end development I wanted to
        use my front-end and javascript skills as a springboard. As a first step
        to making my own APIs I used all sorts of public and developer APIs to
        understand industry standard procedures when it comes to setting up,
        documenting and making applications using data fetched from working
        endpoints.
        </p>
        <p>
        Eventually I found a couple of related APIs with Ticketmaster and
        Last.fm and utilized them together to create a useful application that
        will take a user input and recommend similar acts using Last.fm's
        Tastemaker API and upon expanding the link will present tour dates as
        found by Ticketmaster's Eventfinder API. Was a lot of fun getting this
        working and showing it off to friends for the first time!
        </p>
      </div>
    </>
  )
}

export default Concertfinder
