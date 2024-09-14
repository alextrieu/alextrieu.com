import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-container">
        {/* <h2 className="contact-title">Let's Connect!</h2>
        <hr></hr> */}
        <div className="contact-info-container">
          <h1 className="footer-cta">Let's Talk!</h1>
          <div className="contact-info">
            <Link to="/contact">Get in Touch</Link>
          </div>
        </div>
        <div className="email-container">
          <a href="mailto:trieu.alex1@gmail.com" className="footer-email">
            trieu.alex1@gmail.com
          </a>
          <p>© 2024 Alex Trieu. All Rights Reserved.</p>
        </div>
        <div className="socials">
          <p>Socials</p>
          <ul className="socials-list">
            <li>
              <a href="https://instagram.com/alex.trieu" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/alextrieu" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
