import React from "react";
import Navigation from "../Navigation/NavigationHeader";
import HeadShot from "../assets/images/1.png";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="navigation-container">
        <Navigation />
      </div>
      <img className="hero-banner" src={HeadShot} alt="Headshot" />
      <div className="section-text">
        <div className="arrow big" style={{ transform: "translate(0px, 0px)" }}>
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>arrow-up-right</title>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Artboard"
                transform="translate(-1019.000000, -279.000000)"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              >
                <g
                  id="arrow-up-right"
                  transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                >
                  <polyline
                    id="Path"
                    points="2.76923077 0 12 0 12 9.23076923"
                  ></polyline>
                  <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <div className="section-titles">
          <span>Designer | Developer</span>
          <span>Digital Media Specialist</span>
        </div>
      </div>
    </div>
  );
}
