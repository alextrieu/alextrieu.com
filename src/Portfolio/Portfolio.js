import "./Portfolio.css";
import project1Image from "../assets/images/1.webp";
import project2Image from "../assets/images/2.webp";
import project3Image from "../assets/images/3.webp";
import project4Image from "../assets/images/4.webp";

import projects from "../data/projects.json";
import React from "react";

const imageMap = {
  1: project1Image,
  2: project2Image,
  3: project3Image,
  4: project4Image,
};

export default function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <h2 className="portfolio-header">My Latest Work</h2>
      {projects.map((project) => (
        <div key={project.id} className="portfolio-container">
          <div className="portfolio-img">
            <img
              src={imageMap[project.image]}
              loading="lazy"
              alt={project.name}
            />
          </div>
          <div className="project-container">
            <p className="project-title">{project.name}</p>
            <hr></hr>
            <div className="roles">
              <span>{project.role}</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
