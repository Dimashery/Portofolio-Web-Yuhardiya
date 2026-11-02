import { projects } from "@/data/project";

export function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <article key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            {project.techstack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </article>
      ))}
    </section>
  );
}