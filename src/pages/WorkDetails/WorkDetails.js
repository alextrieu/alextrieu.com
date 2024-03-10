import React from "react";
import MainLayout from "../../layout/MainLayout";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import "./WorkDetails.css";

export default function WorkDetails() {
  let { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <MainLayout>
      {" "}
      <div className="info-wrapper">
        <div class="info-container">
          <div class="info-item">
            <span class="info-title">Client:</span>
            <span class="info">{project.name}</span>
          </div>
          <div class="info-item">
            <span class="info-title">Project Type:</span>
            <span class="info">info</span>
          </div>
          <div class="info-item">
            <span class="info-title">Year:</span>
            <span class="info">{project.year}</span>
          </div>
        </div>
      </div>
      <h1>Mei Garden</h1>
    </MainLayout>
  );
}
