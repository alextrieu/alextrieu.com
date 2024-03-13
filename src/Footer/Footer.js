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
          <div className="contact-info">
            <Link to="/contact">Get in Touch</Link>
          </div>
        </div>
        <div className="email-container">
          <a href="mailto:hello@alextrieu.com" className="footer-email">
            hello@alextrieu.com
          </a>
          <p>© 2024 Alex Trieu. All Rights Reserved.</p>
        </div>
        <div className="socials">
          <p>Socials</p>
          <ul className="socials-list">
            <li>
              <a href="https://instagram.com" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
