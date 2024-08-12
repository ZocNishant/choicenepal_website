import React from "react";
import "./Projects.css";
import project_1 from "../../assets/hero.jpg";

const Projects = () => {
  return (
    <>
      <div id="projects" className="projects">
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
      <div id="projects" className="projects">
        <div className="project">
          <img src={project_1} alt="" />
          <div className="caption">
            <img src={project_1} alt="" />
            <p>Economic Development</p>
          </div>
        </div>
        <div className="project">
          <img src={project_1} alt="" />
          <div className="caption">
            <img src={project_1} alt="" />
            <p>HBB Program</p>
          </div>
        </div>
        <div className="project">
          <img src={project_1} alt="" />
          <div className="caption">
            <img src={project_1} alt="" />
            <p>Expedition</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
