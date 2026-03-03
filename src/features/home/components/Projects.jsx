export default function Projects() {
  const projects = [
    {
      title: "E-Commerce App",
      description:
        "Built a scalable React e-commerce platform with cart, authentication and payment integration.",
      tech: ["React", "Redux", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern personal portfolio built with React and Tailwind with smooth animations.",
      tech: ["React", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app with CRUD operations, API integration and state management.",
      tech: ["React", "TypeScript", "REST API"],
      github: "#",
      live: "#",
    },
    
  ];

  return (
    <section
      id="projects"
      className="h-screen overflow-y-auto pt-24 pb-24 bg-[#0f172a] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-16 text-center">
          My{" "}
          <span className="text-cyan-400">
            Projects
          </span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl 
              backdrop-blur-xl bg-white/5 
              border border-cyan-400/20 
              hover:border-cyan-400 
              transition duration-300 
              hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full 
                    bg-cyan-400/10 text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}