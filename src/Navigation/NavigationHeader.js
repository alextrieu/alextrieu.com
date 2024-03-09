import { useRef } from "react";
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
        <a href="/#">Home</a>
        <a href="/#">Work</a>
        <a href="/#">About</a>
        <a href="/#">Contact</a>
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
