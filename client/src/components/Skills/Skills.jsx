import { useState } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "Interface Engineering",
    description:
      "Creating responsive, accessible and polished user experiences.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    number: "02",
    title: "Backend",
    subtitle: "Application Engineering",
    description:
      "Building APIs, server-side logic and data-driven applications.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "Database Design",
    ],
  },
  {
    number: "03",
    title: "Problem Solving",
    subtitle: "Programming & DSA",
    description:
      "Strengthening logic through algorithms, data structures and coding.",
    skills: [
      "Python",
      "Java",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Problem Solving",
    ],
  },
];

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event, index) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });

    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#030712] py-32 text-white"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
                  Technical Expertise
                </span>
              </div>

              <h2 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
                Tools I use to
                <br />
                <span className="text-cyan-400">
                  build & solve.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500 md:text-right">
              A continuously evolving toolkit across frontend engineering,
              backend systems, programming fundamentals and problem solving.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-7 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.number}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -12,
                rotateX: 2,
                rotateY: index === 1 ? 0 : index === 0 ? 1.5 : -1.5,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              onMouseMove={(event) => handleMouseMove(event, index)}
              onMouseLeave={handleMouseLeave}
              className="group relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl transition-colors duration-500 hover:border-cyan-400/30"
            >
              {/* Mouse Spotlight */}
              {activeCard === index && (
                <div
                  className="pointer-events-none absolute h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-3xl"
                  style={{
                    left: mousePosition.x - 144,
                    top: mousePosition.y - 144,
                  }}
                />
              )}

              {/* Top Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition duration-700 group-hover:bg-cyan-400/20" />

              <div className="relative z-10 flex h-full flex-col">
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm tracking-[0.3em] text-cyan-400/70">
                    {group.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-sm text-gray-500 transition duration-500 group-hover:border-cyan-400/30 group-hover:text-cyan-400">
                    ↗
                  </span>
                </div>

                {/* Title */}
                <div className="mt-16">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                    {group.subtitle}
                  </p>

                  <h3 className="mt-3 text-4xl font-bold tracking-tight">
                    {group.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
                    {group.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-9 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: 0.25 + skillIndex * 0.05,
                      }}
                      whileHover={{
                        scale: 1.06,
                        y: -2,
                      }}
                      className="cursor-default rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-auto pt-10">
                  <div className="flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                      Continuous Learning
                    </span>

                    <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-5 backdrop-blur-xl"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              Current focus:
              <span className="ml-2 font-medium text-gray-200">
                MERN Stack · DSA · AI · Full Stack Development
              </span>
            </p>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300">
              Always Learning
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;