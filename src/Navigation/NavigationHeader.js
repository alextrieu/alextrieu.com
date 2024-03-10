import { useRef } from "react";
import { Link } from "react-router-dom";
import "./NavigationHeader.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3 className="roboto-thin">© Code by Alex</h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          X
        </button>
      </nav>
      <button className="nav-btn roboto-thin" onClick={showNavbar}>
        • Menu
      </button>
    </header>
  );
}

export default Navbar;
