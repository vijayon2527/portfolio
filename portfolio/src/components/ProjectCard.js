const ProjectCard = ({ title, description, tech, github, demo }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <p className="text-gray-400 mb-4">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold"
          >
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="border border-white px-4 py-2 rounded-md text-sm"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
