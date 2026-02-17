import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-900 text-white">
      
      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            demo={project.demo}
            image={project.image}
          />
        ))}
      </div>

    </section>
  );
};

export default Projects;
