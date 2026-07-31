import { motion } from "framer-motion";

const certificates = [
  {
    number: "01",
    title: "Python Programming",
    issuer: "Certificate / Organization Name",
    year: "2025",
    description:
      "Programming fundamentals, problem solving and Python development concepts.",
  },
  {
    number: "02",
    title: "Data Structures & Algorithms",
    issuer: "Certificate / Organization Name",
    year: "2025",
    description:
      "Core data structures, algorithms and problem-solving concepts.",
  },
  {
    number: "03",
    title: "MERN Stack Development",
    issuer: "Certificate / Organization Name",
    year: "2026",
    description:
      "Frontend, backend, REST APIs, databases and full-stack web development.",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#030712] py-32 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
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
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Achievements
            </span>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
              Certificates
              <br />
              <span className="text-cyan-400">& Learning.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-gray-500 md:text-right">
              Certifications and learning milestones that support my journey
              as a developer.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-7 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl transition duration-500 hover:border-cyan-400/30"
            >
              {/* Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition duration-700 group-hover:bg-cyan-400/20" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm tracking-[0.3em] text-cyan-400/70">
                    {certificate.number}
                  </span>

                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-500">
                    {certificate.year}
                  </span>
                </div>

                <div className="mt-14">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                    Certification
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-tight">
                    {certificate.title}
                  </h3>

                  <p className="mt-4 text-sm text-cyan-300">
                    {certificate.issuer}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-gray-500">
                    {certificate.description}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                    Verified Learning
                  </span>

                  <button
                    type="button"
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
                  >
                    View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-5 text-center backdrop-blur-xl"
        >
          <p className="text-sm text-gray-500">
            More certifications and learning milestones will be added as I
            continue developing my skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;