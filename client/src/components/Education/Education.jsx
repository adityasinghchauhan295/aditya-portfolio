import { motion } from "framer-motion";

const education = [
  {
    year: "2023 - 2027",
    title: "Bachelor of Technology (CSE)",
    institute: "ITM University, Gwalior",
    score: "CGPA = 7.4 : Pursuing",
  },
  {
    year: "2022",
    title: "Class XII",
    institute: "Higher Secondary School",
    score: "Completed",
  },
  {
    year: "2020",
    title: "Class X",
    institute: "High School",
    score: "Completed",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#050816] text-white py-20 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Education
      </h2>

      <div className="max-w-4xl mx-auto relative border-l-4 border-cyan-400">

        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="ml-8 mb-12 relative"
          >
            <div className="absolute -left-12 top-2 h-6 w-6 rounded-full bg-cyan-400"></div>

            <h3 className="text-2xl font-bold text-cyan-400">
              {item.title}
            </h3>

            <p className="text-gray-300 mt-2">
              {item.institute}
            </p>

            <p className="text-gray-400 mt-1">
              {item.score}
            </p>

            <span className="inline-block mt-3 bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
              {item.year}
            </span>
          </motion.div>
        ))}

      </div>
    </section>
  );
}