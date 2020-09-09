const Trivia = () => {
  return (
    <>
      <section className="intro-item">
        <h1 className="section__title section__title--intro">
        Check out
          <strong
          >Nintendo <br />
          Trivia</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro-item">
        quiz app
        </p>
        <div className="portfolio-item-individual__item">
          <img
            src="../trivia-capture.webp"
            alt="scrolling screen capture"
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
        An early jQuery app of mine. A 10 question quiz web application, using
        jQuery, CSS, HTML. Not very complex, but was a fundamental stepping
        stone where I learned early lessons on the importance of accessibility,
        precise use of HTML elements, utilizing JSON to make data driven
        experiences and keeping organized CSS class tags. Not only the
        fundamentals of good website design but really started to realize the
        kind of tools I had at my fingertips.
        </p>
        <img
          src="../trivia-capture-lg.webp"
          alt="larger screen capture"
          className="portfolio-item-individual__img-lg"
        />
        <div className="btn-holder">
          <a href="https://djdagorne.github.io/quiz-app/" className="btn btn-sm"
          >Live Demo</a
          >
          <a href="https://github.com/djdagorne/quiz-app" className="btn btn-sm"
          >Github Repo</a
          >
        </div>
        <p>
          For this project, I really wanted to keep it simple and have minimal
          reliance on outside frameworks and issues surrounding scaling for
          multiple viewport sizes. Nintendo has always inspired me with the
          elegant feeling simplicity in their aesthetic, so I figured why not
          utilize their simple design tenets, my love of trivia and make something
          simple but effective and accessible.
        </p>
      </div>
    </>
  )
}

export default Trivia
