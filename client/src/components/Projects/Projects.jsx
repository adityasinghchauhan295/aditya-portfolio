import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Interview Preparation & Placement Portal",
    description:
      "A full-stack placement platform featuring AI mock interviews, ATS resume analysis, coding practice, company-wise interview questions, recruiter dashboard, and analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AI"],
    featured: true,
  },
  {
    title: "Data Structure Visualizer",
    description:
      "An interactive application that visually explains data structures and algorithms, making complex DSA concepts easier to understand.",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    title: "Google Translator",
    description:
      "A translation application designed to provide a simple interface for converting text between multiple languages.",
    tech: ["Python", "API"],
    featured: false,
  },
  {
    title: "Morse Code Converter",
    description:
      "A utility application that converts normal text into Morse code and decodes Morse code back into readable text.",
    tech: ["Python"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#050816] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            My Work
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-3">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 mt-5 leading-7">
            A collection of projects that demonstrate my skills in
            development, problem solving, APIs, and full-stack engineering.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`relative overflow-hidden rounded-3xl p-8 border backdrop-blur-md transition-all duration-300 ${
                project.featured
                  ? "border-cyan-400/50 bg-cyan-400/5"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative z-10">

                {project.featured && (
                  <span className="inline-block mb-5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                    ⭐ Featured Project
                  </span>
                )}

                <h3 className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mt-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 rounded-full text-sm bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">

                  <a
                    href="#"
                    className="px-5 py-2.5 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="px-5 py-2.5 rounded-lg border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
                  >
                    Live Demo
                  </a>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;