import { motion } from "framer-motion";

const stats = [
  {
    number: "6+",
    label: "Projects / Practice Builds",
  },
  {
    number: "50+",
    label: "DSA Problems Practiced",
  },
  {
    number: "4+",
    label: "Core Technologies",
  },
  {
    number: "1",
    label: "Major Project in Progress",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0B1120] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Get To Know Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-3">
            About <span className="text-cyan-400">Me</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold">
              Building, Learning & Improving
            </h3>

            <p className="text-gray-400 leading-8 mt-6">
              Hi, I'm{" "}
              <span className="text-cyan-400 font-semibold">
                Aditya Singh Chauhan
              </span>
              , a Computer Science Engineering student at ITM University,
              Gwalior. I enjoy building modern web applications and solving
              programming problems.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              My current focus is on{" "}
              <span className="text-white font-semibold">
                MERN Stack, Python, Data Structures & Algorithms, and AI
              </span>
              . I learn by building projects and turning ideas into working
              applications.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              My goal is to grow into a strong software engineer and work on
              products that solve real-world problems.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mt-8 inline-block px-6 py-3 rounded-xl border border-cyan-400/30 bg-cyan-400/5 text-cyan-300"
            >
              🎯 Focus: Full Stack Development + DSA + AI
            </motion.div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-7"
              >
                <h3 className="text-4xl font-bold text-cyan-400">
                  {stat.number}
                </h3>

                <p className="text-gray-400 mt-3 leading-6">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;