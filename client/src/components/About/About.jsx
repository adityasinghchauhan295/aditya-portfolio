import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#050816] text-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#111827] rounded-3xl p-10 shadow-2xl border border-cyan-500"
        >
          <p className="text-lg leading-9 text-gray-300">
            Hello! I'm <span className="text-cyan-400 font-semibold">Aditya Singh Chauhan</span>,
            a passionate <span className="text-cyan-400">MERN Stack Developer</span> and
            final-year B.Tech Computer Science student at ITM University, Gwalior.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            I enjoy building modern, responsive, and scalable web applications.
            Along with Full Stack Development, I actively practice
            Data Structures & Algorithms and continuously improve my problem-solving skills.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            My goal is to become a Software Development Engineer (SDE) and build
            impactful products that solve real-world problems.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-[#1f2937] rounded-xl p-5">
              <h3 className="text-cyan-400 font-bold mb-2">🎓 Education</h3>
              <p>B.Tech Computer Science Engineering</p>
              <p>ITM University, Gwalior</p>
            </div>

            <div className="bg-[#1f2937] rounded-xl p-5">
              <h3 className="text-cyan-400 font-bold mb-2">💻 Interests</h3>
              <p>MERN Stack</p>
              <p>DSA • AI • Web Development</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;