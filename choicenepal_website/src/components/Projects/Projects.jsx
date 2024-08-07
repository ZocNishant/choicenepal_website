import React from "react";
import "./Projects.css";
import project_1 from "../../assets/hero.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project">
        <img src={project_1} alt="" />
        <div className="caption">
          <img src={project_1} alt="" />
          <p>Water Project</p>
        </div>
      </div>
      <div className="project">
        <img src={project_1} alt="" />
        <div className="caption">
          <img src={project_1} alt="" />
          <p>Health Project</p>
        </div>
      </div>
      <div className="project">
        <img src={project_1} alt="" />
        <div className="caption">
          <img src={project_1} alt="" />
          <p>Education Project</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
