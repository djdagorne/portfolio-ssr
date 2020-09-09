const Tennit = () => {
  return (
    <>
      <section className="intro-item">
        <h1 className="section__title section__title--intro">
        Check out <strong>Tennit</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro-item">
        true love<br/>
        & cheap rent
        </p>
        <div className="portfolio-item-individual__item">
          <img
            src="../tennit-capture.png"
            alt="scrolling screen capture"
            className="portfolio-item-individual__img"
          />
        </div>
      </section>

      <div className="portfolio-item-individual__bar">
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-react"></i>
        <i className="fas fa-database"></i>
        <i className="fas fa-server"></i>
      </div>
      <div className="portfolio-item-individual">
        <p>
        Tennit is a full stack ReactJS app made with vanilla CSS, Express/NodeJS
        Server and PostgreSQL database. Included in the full stack app is
        logging in with expiring web session tokens, messaging, matching,
        searching, user data hashing and a... weird sense of humor.
        </p>
        <p>
        I wanted a full stack app idea that would get me practice building
        different API endpoints like messaging, matching, searching, while all
        feeling cohesive. After a little deliberation, I figured a dating app
        would be a good way to utilize a lot of different features and would be
        a great practice for front end development: all the UX is largely
        dictated by user generated data. But how do I make it unique and how do
        I make it <i>Dexter's</i> online dating app? Make it funny is how!
        </p>
        <img
          src="../tennit-capture-lg.png"
          alt="larger screen capture"
          className="portfolio-item-individual__img-lg"
        />
        <div className="btn-holder">
          <a href="https://tennit.djdagorne.now.sh/" className="btn btn-sm"
          >Live Demo</a
          >
          <a href="https://github.com/djdagorne/tennit-client" className="btn btn-sm"
          >Client Repo</a
          >
          <a href="https://github.com/djdagorne/tennit-server" className="btn btn-sm"
          >Server Repo</a
          >
        </div>
        <p>
        Tennit is designed as a satirical dating app about dating people to save
        on rent. I knew this one would be weird <i>before</i> covid... but I had
        a lot of fun making it and got some laughs from showing it off!
        </p>
      </div>
    </>
  )
}

export default Tennit
