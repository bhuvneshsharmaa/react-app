import React from "react";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card" onClick={() => window.open(link, "_blank")}>
      <span>{title}</span>
      <span style={{ color: "rgb(148, 148, 149)" }}>{description}</span>
    </div>
  );
};

export default ProjectCard;
