import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
          Experience
        </h2>

        <div className="relative border-l-4 border-cyan-500 pl-8">

          <div className="mb-12 relative">

            <div className="absolute -left-[46px] bg-cyan-500 p-2 rounded-full">
              <Briefcase size={20} color="black" />
            </div>

            <h3 className="text-2xl font-bold">
              Data Structure and Algorithms (Learning)
            </h3>

            <p className="text-cyan-400 mt-1">
              Self Learning • 2025 - Present
            </p>

            <p className="text-gray-300 mt-4 leading-7">
              Developing MERN Stack projects, solving Data Structures &
              Algorithms problems, learning backend development, REST APIs,
              authentication and deployment.
            </p>

          </div>

          <div className="relative">

            <div className="absolute -left-[46px] bg-cyan-500 p-2 rounded-full">
              <Briefcase size={20} color="black" />
            </div>

            <h3 className="text-2xl font-bold">
              Personal Projects
            </h3>

            <p className="text-cyan-400 mt-1">
              2024 - Present
            </p>

            <p className="text-gray-300 mt-4 leading-7">
              Built multiple web applications including Google Translator,
              Morse Code Converter and Data Structure Visualizer using modern
              technologies.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;