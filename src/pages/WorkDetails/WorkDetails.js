import React from "react";
import MainLayout from "../../layout/MainLayout";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import "./WorkDetails.css";
import ScrollToTop from "../../ScrollToTop";

import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo5.png";

import project1Image from "../../assets/images/1.webp";
import project2Image from "../../assets/images/2.webp";
import project3Image from "../../assets/images/3.webp";
import project4Image from "../../assets/images/4.webp";

const imageMap = {
  1: project1Image,
  2: project2Image,
  3: project3Image,
  4: project4Image,
};

const logoMap = {
  1: logo1,
  2: logo2,
  3: logo3,
  4: logo4,
};

export default function WorkDetails() {
  ScrollToTop();
  let { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <MainLayout>
      {" "}
      <div className="info-wrapper">
        <div className="info-container">
          <div className="info-item">
            <span className="info-title">Company:</span>
            <span className="info">{project.name}</span>
          </div>
          <div className="info-item">
            <span className="info-title">Project Type:</span>
            <span className="info">Design, Development, SEO/CRO</span>
          </div>
          <div className="info-item">
            <span className="info-title">Tech Stack:</span>
            <span className="info">{project.techStack}</span>
          </div>
          <div className="info-item">
            <span className="info-title">Year:</span>
            <span className="info">{project.year}</span>
          </div>
        </div>
        <div className="project-overview-container">
          <div className="project-overview">
            <img
              src={logoMap[project.image]}
              className="project-overview-logo"
            />
            <p className="project-overview-description">
              {project.projectDescription}
            </p>
          </div>
          <a
            href={project.website}
            className="visit-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website →
          </a>

          <img className="project-overview" src={imageMap[project.image]} />
        </div>
      </div>
    </MainLayout>
  );
}
