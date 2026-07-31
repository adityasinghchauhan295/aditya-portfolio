import { motion } from "framer-motion";

const education = [
  {
    year: "2023 - 2027",
    degree: "B.Tech in Computer Science Engineering",
    institute: "ITM University, Gwalior",
    description:
      "Pursuing Computer Science Engineering with a focus on software development, Data Structures & Algorithms, web development, databases, and emerging technologies.",
  },
  {
    year: "2022 - 2023",
    degree: "Class XII",
    institute: "National Children Higher Secondary School",
    description:
      "Completed Class XII with a focus on mathematics, computer science, and core academic subjects.",
  },
  {
    year: "2020 - 2021",
    degree: "Class X",
    institute: "St.John Vianney School ",
    description:
      "Completed Class X and built a strong foundation in mathematics, science, and computer fundamentals.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#0B1120] text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Academic Journey
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-3">
            My <span className="text-cyan-400">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cyan-400/20 md:-translate-x-1/2" />

          {education.map((item, index) => (
            <motion.div
              key={`${item.degree}-${item.year}`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] z-10" />

              {/* Card */}
              <div
                className={`ml-12 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 hover:border-cyan-400/50 hover:-translate-y-1 transition duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-sm border border-cyan-400/20">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-5 text-cyan-400">
                    {item.degree}
                  </h3>

                  <p className="text-xl text-gray-200 mt-3">
                    {item.institute}
                  </p>

                  <p className="text-gray-400 leading-7 mt-5">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;