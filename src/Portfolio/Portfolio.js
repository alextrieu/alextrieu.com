import React from "react";
import { Link } from "react-router-dom";

import "./Portfolio.css";
import project1Image from "../assets/images/1.webp";
import project2Image from "../assets/images/2.webp";
import project3Image from "../assets/images/3.webp";
import project4Image from "../assets/images/4.webp";

import projects from "../data/projects.json";

const imageMap = {
  1: project1Image,
  2: project2Image,
  3: project3Image,
  4: project4Image,
};

export default function Portfolio({ showDescription }) {
  return (
    <div className="portfolio-wrapper">
      <h2 className="portfolio-header">
        <Link to="/work">My Latest Projects</Link>
      </h2>
      {showDescription && (
        <div className="portfolio-description-container">
          <span className="portfolio-description">
            Welcome to my curated showcase of recent projects, each reflecting
            my passion and dedication to innovation and quality.
          </span>
          <span className="portfolio-description">
            Click on any project to discover the challenges, technologies, and
            unique value behind each creation.
          </span>
        </div>
      )}
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
            <div className="roles">
              <span>{project.role}</span>
              <span>{project.year}</span>
            </div>
            <hr></hr>
            <Link to={`/work/${project.id}`} className="linkStyle">
              More Details →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
