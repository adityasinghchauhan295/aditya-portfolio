import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#050816]">
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "5%" }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "40%", right: "5%" }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "5%", left: "35%" }}
      />
    </div>
  );
};

export default Background;