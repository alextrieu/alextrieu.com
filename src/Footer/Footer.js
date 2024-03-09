import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect!</h2>
        <hr></hr>
        <div className="contact-info-container">
          <div className="contact-info">
            <a href="mailto:hello@alextrieu.com">hello@alex.com</a>
          </div>
          <div className="contact-info">
            <a href="tel:+7788771116">778-877-1116</a>
          </div>
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
