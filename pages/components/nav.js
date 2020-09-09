const Nav = ({ handleNav }) => {
  return (
    <header id="home">
      <a href="#home" className="logo">
        &lt;dexter/&gt;
      </a>
      <button className="nav-toggle" aria-label="toggle navigation" onClick={handleNav}>
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={handleNav}>Home</a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link" onClick={handleNav}>My Services</a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={handleNav}>About Me</a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link" onClick={handleNav}>My Work</a>
          </li>
        </ul>
      </nav>
    </header >
  )
}

export default Nav
