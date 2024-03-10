import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationHeader.css";

function Navbar() {
  const navRef = useRef();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const navBtnStyle = isHomePage ? "homeNavBtn" : "otherNavBtn";
  const textLogoStyle = isHomePage ? "homeTextLogo" : "otherTextLogo";

  return (
    <header>
      <h3 className={`roboto-thin text-logo ${textLogoStyle}`}>
        <Link to="/">© Code by Alex</Link>
      </h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          X
        </button>
      </nav>
      <button
        className={`nav-btn roboto-thin ${navBtnStyle}`}
        onClick={showNavbar}
      >
        • Menu
      </button>
    </header>
  );
}

export default Navbar;
