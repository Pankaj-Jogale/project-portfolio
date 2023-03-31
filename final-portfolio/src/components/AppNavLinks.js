import { Link } from "react-router-dom";
import { useState } from "react";

function AppNavLinks() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top ps-2 ">
      <div className="container-fluid ">
        <Link
          className="navbar-brand"
          to="#"
          onClick={() => setIsNavOpen(false)}
        >
          Port-Folio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                to="/"
                onClick={toggleNav}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={toggleNav}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume" onClick={toggleNav}>
                Resume
              </Link>
            </li>
            <li className="nav-item pe-2 ">
              <Link className="nav-link" to="/contact" onClick={toggleNav}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default AppNavLinks;
