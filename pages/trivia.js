const Trivia = () => {
  return (
    <>
      <section class="intro-item">
        <h1 class="section__title section__title--intro">
        Check out
          <strong
          >Nintendo <br />
          Trivia</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro-item">
        quiz app
        </p>
        <div class="portfolio-item-individual__item">
          <img
            src="../trivia-capture.png"
            alt="scrolling screen capture"
            class="portfolio-item-individual__img"
          />
        </div>
      </section>

      <div class="portfolio-item-individual__bar">
        <i class="fab fa-html5"></i>
        <i class="fab fa-css3-alt"></i>
        <i class="fab fa-js"></i>
      </div>
      <div class="portfolio-item-individual">
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
          src="../trivia-capture-lg.png"
          alt="larger screen capture"
          class="portfolio-item-individual__img-lg"
        />
        <div class="btn-holder">
          <a href="https://djdagorne.github.io/quiz-app/" class="btn btn-sm"
          >Live Demo</a
          >
          <a href="https://github.com/djdagorne/quiz-app" class="btn btn-sm"
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
