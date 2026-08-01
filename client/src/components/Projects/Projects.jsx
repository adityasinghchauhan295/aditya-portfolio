const projects = [
  {
    title: "AI Interview Preparation Portal",
    description:
      "Full Stack MERN application with AI mock interviews, ATS Resume Checker, Coding Contests and Recruiter Dashboard.",
    tech: "React • Node.js • Express • MongoDB",
    github: "https://github.com/adityasinghchauhan295",
    live: "https://your-live-link.vercel.app",
  },
  {
    title: "Data Structure Visualizer",
    description:
      "Interactive visualization of Sorting, Searching, Stack, Queue and Linked List algorithms.",
    tech: "React • JavaScript • CSS",
    github: "https://github.com/adityasinghchauhan295",
    live: "#",
  },
  {
    title: "Google Translator",
    description:
      "Language translation web app using Translation API with responsive UI.",
    tech: "HTML • CSS • JavaScript",
    github: "https://github.com/adityasinghchauhan295",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] text-white py-20 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-14">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              {project.title}
            </h3>

            <p className="text-gray-300 mt-4">
              {project.description}
            </p>

            <p className="text-sm mt-4 text-cyan-300">
              {project.tech}
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border border-cyan-500 hover:bg-cyan-500 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}