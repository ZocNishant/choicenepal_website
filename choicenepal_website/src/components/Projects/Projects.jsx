import React, { useState } from "react";
import "./Projects.css";
import project_1 from "../../assets/hero.jpg";
import tap from "../../assets/tap.jpg";

// Array of project data
const projectData = [
  {
    id: 1,
    image: tap,
    title: "Water Project",
    description: "This project focuses on providing clean drinking water to rural communities.",
  },
  {
    id: 2,
    image: project_1,
    title: "Health Project",
    description: "A project aimed at improving health services in remote areas.",
  },
  {
    id: 3,
    image: project_1,
    title: "Education Project",
    description: "Supporting educational initiatives and providing resources for schools.",
  },
  {
    id: 4,
    image: project_1,
    title: "Economic Development",
    description: "Fostering economic growth and sustainable development in local communities.",
  },
  {
    id: 5,
    image: project_1,
    title: "HBB Program",
    description: "The HBB program is designed to enhance business skills among youth.",
  },
  {
    id: 6,
    image: project_1,
    title: "Expedition",
    description: "An adventurous project focused on exploring new territories and cultures.",
  },
];

const Projects = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div id="projects" className="projects">
        {projectData.map((project) => (
          <div key={project.id} className="project" onClick={() => openPopup(project)}>
            <img src={project.image} alt={project.title} />
            <div className="caption">
              <img src={project.image} alt={project.title} />
              <p>{project.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && selectedProject && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "100%", borderRadius: "10px" }} />
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
