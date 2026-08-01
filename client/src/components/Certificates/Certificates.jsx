const certificates = [
  {
    title: "Python Programming",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Coding Platform",
    year: "2025",
  },
  {
    title: "Web Development",
    issuer: "Coursera",
    year: "2025",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#050816] text-white py-20 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-14">
        Certificates
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {certificates.map((item, index) => (
          <div
            key={index}
            className="bg-[#111827] rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-5xl mb-5">🏆</div>

            <h3 className="text-2xl font-bold text-cyan-400">
              {item.title}
            </h3>

            <p className="text-gray-300 mt-3">
              {item.issuer}
            </p>

            <p className="text-gray-500 mt-2">
              {item.year}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}