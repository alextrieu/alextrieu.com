import React from "react";
import { Link } from "react-router-dom";

import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-content">
      <p className="about-paragraph">
        As a <span className="about-title">Digital Media Specialist</span>, I
        help companies and organizations around the world connect with their{" "}
        <span className="about-title">audience</span> and grow their{" "}
        <span className="about-title">business</span>
      </p>
      <p className="about-paragraph">
        My passion for design, code, and UX positions me in a unique place in
        the web design world
      </p>
      <Link to="/about" className="circle">
        About Me
      </Link>
    </div>
  );
}
