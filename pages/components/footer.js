const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="mailto:dj.dagorne@gmail.com"
        className="footer__link"
        title="to email Dexter"
      >dj.dagorne@gmail.com</a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            href="https://github.com/djdagorne"
            className="social-list__link"
            title="to Dexter's Github"
          ><i className="fab fa-github" aria-hidden></i></a>
        </li>
        <li className="social-list__item">
          <a
            href="https://linkedin.com/in/djdagorne"
            className="social-list__link"
            title="to Dexter's LinkedIn"
          ><i className="fab fa-linkedin" aria-hidden></i></a>
        </li>
      </ul>
    </footer>
  )
}
export default Footer
