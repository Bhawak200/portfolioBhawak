import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: "1",
    title: "Memory Website",
    description: "Implementing user CURD functionalities and authentication",
    image: "/images/about-me.jpg",
  },
  {
    id: "2",
    title: "Portfolio",
    description: "Create a portfolio with the help of Next js",
    image: "/images/portfolio.webp",
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectData.map((project) => (
          <ProjectCard
            title={project.title}
            imgUrl={project.image}
            description={project.description}
            key={project.id}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
