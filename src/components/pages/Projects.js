import React from "react";
import projects from "../../projects.json";



function Projects() {

  const state = {
    projects
  };
  return (
    <div className="container text-center">
      <h1 className="mt-5 mb-5">Projects</h1>

      {state.projects.map(project => (
        <div className="card mb-3" key={project.id}>
          <div className="content">
            <h4 className="mt-3"><strong>{project.name}</strong></h4>
            <p>
              <a href={project.URL} target="_blank"
                className="btn btn-secondary my-2">View</a>
              <a href={project.github} target="_blank" className="btn btn-secondary my-2 ml-3">GitHub Repository</a>
            </p>
            <div className="img-container">
              <img alt={project.name} width="50%" height="300" src={project.image} />
            </div>
            <strong className="text-muted">{project.completion}</strong>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Projects;
