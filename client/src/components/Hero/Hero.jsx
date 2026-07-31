import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "MERN Stack Developer",
  "Python Developer",
  "AI Enthusiast",
  "Problem Solver",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-24 md:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Intro */}
          <p className="mb-4 text-xl text-cyan-400">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Aditya
            <br />

            <span className="text-cyan-400">
              Singh Chauhan
            </span>
          </h1>

          {/* Animated Role */}
          <motion.h2
            key={roles[roleIndex]}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 text-2xl font-semibold text-gray-300 md:text-3xl"
          >
            {roles[roleIndex]}
          </motion.h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            I build modern web applications using MERN Stack and Python,
            while continuously improving my Data Structures, Algorithms,
            and Artificial Intelligence skills.
          </p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Resume */}
            <a
              href="/resume.pdf"
              download="Aditya-Singh-Chauhan-Resume.pdf"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              Download Resume
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-black"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* GitHub */}
            <a
              href="https://github.com/adityasinghchauhan295"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-gray-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
            >
              GitHub ↗
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aditya-singh-chauhan-b34895287"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-gray-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
            >
              LinkedIn ↗
            </a>

            {/* Email */}
            <a
              href="mailto:cadityasingh788@gmail.com"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-gray-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
            >
              Email ↗
            </a>
          </motion.div>

          {/* Extra Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500"
          >
            <span>📍 Gwalior, India</span>
            <span>🎓 B.Tech CSE</span>
            <span>💻 Open to Opportunities</span>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 scale-110 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Gradient Ring */}
            <div className="relative h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1.5 md:h-[400px] md:w-[400px]">

              {/* Inner Frame */}
              <div className="h-full w-full rounded-full bg-[#050816] p-2">

                {/* Actual Profile Photo */}
                <img
                  src="/profile.jpg"
                  alt="Aditya Singh Chauhan"
                  className="h-full w-full rounded-full object-cover object-center"
                />

              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/30 bg-black/70 px-6 py-2.5 backdrop-blur-xl"
            >
              <span className="text-sm font-medium text-cyan-300">
                Full Stack Developer
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;