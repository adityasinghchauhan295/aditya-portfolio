import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={45} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={45} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={45} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={45} className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-500" /> },
  { name: "Express", icon: <SiExpress size={45} className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql size={45} className="text-blue-400" /> },
  { name: "Python", icon: <FaPython size={45} className="text-yellow-300" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={45} className="text-cyan-500" /> },
  { name: "Git", icon: <FaGitAlt size={45} className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub size={45} className="text-white" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#050816] text-white py-20 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-14">
        My Skills
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#111827] rounded-2xl p-8 text-center hover:scale-105 hover:border-cyan-400 border border-transparent transition-all duration-300 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              {skill.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;