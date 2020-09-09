
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <section className="intro hero" id="hero">
        <h1 className="section__title section__title--intro">
          Hi, I am
          <strong>
            Dexter <br className="line-break-size" />
            Dagorne.
          </strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">full stack dev</p>
        <img
          src="dev-dex-01.jpg"
          alt="a picture of Dexter's smiling face"
          className="intro__img"
        />
      </section>

      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I Do</h2>
        <div className="services">
          <div className="service">
            <h3>Front End</h3>
            <p>
              You only get one first impression. That's why your site has to look
              beautiful and play nice with screen readers. Now you got to make it
              SEO friendly. You can't forget the accessibility functions now
              either... When it comes to front end development I'm capable of
              making sure you're site feels
              <i>right</i>, whether you're on the phone, desktop, or using a screen
              reader.
            </p>
          </div>
          <div className="service">
            <h3>Back End</h3>
            <p>
              When it comes to back-end development, you expect your systems to be
              built to scale up and to perform. With my knowledge of algorithms
              and data structures, dedication to readable and well documented code
              and the ability to commit to patterns and reusable functions, I look
              to build code that is clean, bloat free and made to work.
            </p>
          </div>
          <div className="service">
            <h3>Testing, Security</h3>
            <p>
              Whether its PropTyping, Jest, Supertest, Enzyme or Mocha, I've got
              the experience the appreciation for code that only has to be
              deployed once.
            </p>
            <p>
              I've also gained experience with JSON Web Tokens, secured endpoints,
              session expiry, hashing and protecting user data and more, so your
              users won't have to worry about leaving your SaaS running on a
              computer unattended.
            </p>
          </div>
        </div>
        <a href="#work" className="btn">My Work</a>
      </section>

      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I Am</h2>
        <p className="section__subtitle section__subtitle--about">
          web dev & designer based out of Toronto
        </p>
        <div className="about-me__body">
          <p>
            A lifelong tinkerer and artist. I grew up making my own computers, and
            generally hacking out fun and silly stuff online.
          </p>
          <p>
            My first experiences coding were with ActionScript, trying to make things like the
            flash games I'd play on MiniClip or AddictingGames. While once the art
            and animation drew me in, it's coding that kept its allure after all
            these years.
          </p>
          <p>
            Though I no longer see my future in it, I'm proud of the time and achievements I've gotten from
            the hospitality industry. An experienced and seasoned leader, I've worked around Ontario
            training teams and franchisees in running kitchens, making schedules,
            and processing multiple deliveries a week. Now I can make great food after a long day
            of making great code, how could any restaurant compete with that
            lifestyle?
          </p>
        </div>
        <img
          src="dev-dex-coffee.jpg"
          alt="Sipping a fine americano in VanCity"
          className="about-me__img"
        />
      </section>

      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle section__subtitle--work">
          A selection of some of my work.
        </p>
        <div className="portfolio">
          <Link href="tennit" >
            <a
              className="portfolio__item"
              title="to Dexter's Tennit dating application description page"
            >
              <img
                src="tennit-capture.png"
                alt="tennit mobile screen cap"
                className="portfolio__img"
              />
            </a>
          </Link>
          <Link href="bootstrap" >
            <a
              className="portfolio__item"
              title="to Dexter's Bootstrap Sandbox Demo description page"
            >
              <img
                src="bootstrap-capture.png"
                alt="bootstrap-playground mobile screen cap"
                className="portfolio__img"
              />
            </a>
          </Link>
          <Link href="concertfinder" >
            <a
              className="portfolio__item"
              title="to Dexter's Concertfinder App description page"
            >
              <img
                src="concertfinder-capture.png"
                alt="concertfinder mobile screen cap"
                className="portfolio__img"
              />
            </a>
          </Link>
          <Link href="trivia" >
            <a
              className="portfolio__item"
              title="to Dexter's trivia app  description page"
            >
              <img
                src="trivia-capture.png"
                alt="trivia mobile screen cap"
                className="portfolio__img"
              />
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
