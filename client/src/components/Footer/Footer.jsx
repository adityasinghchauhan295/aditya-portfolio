import { useEffect, useState } from "react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712] text-white">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-3xl font-bold text-cyan-400"
            >
              Aditya.
            </a>

            <p className="mt-5 max-w-md leading-7 text-gray-500">
              Computer Science Engineering student passionate about
              Full Stack Development, DSA, Python and AI.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Navigation
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a href="#home" className="text-gray-500 hover:text-cyan-400 transition">
                Home
              </a>

              <a href="#about" className="text-gray-500 hover:text-cyan-400 transition">
                About
              </a>

              <a href="#skills" className="text-gray-500 hover:text-cyan-400 transition">
                Skills
              </a>

              <a href="#education" className="text-gray-500 hover:text-cyan-400 transition">
                Education
              </a>

              <a href="#projects" className="text-gray-500 hover:text-cyan-400 transition">
                Projects
              </a>

              <a href="#certificates" className="text-gray-500 hover:text-cyan-400 transition">
                Certificates
              </a>

              <a href="#contact" className="text-gray-500 hover:text-cyan-400 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Connect
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:cadityasingh788@gmail.com"
                className="block text-gray-500 hover:text-cyan-400 transition"
              >
                cadityasingh788@gmail.com
              </a>

              <a
                href="https://github.com/adityasinghchauhan295"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-500 hover:text-cyan-400 transition"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-singh-chauhan-b34895287"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-500 hover:text-cyan-400 transition"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-600">
            © 2026 Aditya Singh Chauhan. All rights reserved.
          </p>

          <p className="text-sm text-gray-600">
            Built with React + Tailwind CSS + Framer Motion
          </p>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 backdrop-blur-xl transition hover:bg-cyan-400 hover:text-black"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;