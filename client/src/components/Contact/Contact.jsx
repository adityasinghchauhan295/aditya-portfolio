import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      setStatus({
        type: "success",
        message:
          response.data.message || "Message sent successfully! ✅",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-32 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Get In Touch
            </span>
          </div>

          <h2 className="mt-6 text-5xl font-bold md:text-7xl">
            Let's build
            <br />

            <span className="text-cyan-400">
              something great.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl leading-7 text-gray-500">
            Have a project idea, internship opportunity, or want to connect?
            Send me a message.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-gray-600">
              Contact Details
            </p>

            <h3 className="mt-5 text-3xl font-bold">
              Let's connect.
            </h3>

            <div className="mt-10 space-y-5">

              <a
                href="mailto:cadityasingh788@gmail.com"
                className="block rounded-2xl border border-white/10 bg-black/20 p-5 hover:border-cyan-400/30 transition"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  Email
                </p>

                <p className="mt-2 text-gray-200">
                  cadityasingh788@gmail.com
                </p>
              </a>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  Location
                </p>

                <p className="mt-2 text-gray-200">
                  Gwalior, Madhya Pradesh, India
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  Availability
                </p>

                <p className="mt-2 text-emerald-400">
                  Open to opportunities
                </p>
              </div>

            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl"
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-cyan-400/50"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-cyan-400/50"
                />

              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-cyan-400/50"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="7"
                placeholder="Your Message"
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-cyan-400/50"
              />

              {/* Status */}
              {status.message && (
                <div
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                      : "border-red-400/20 bg-red-400/10 text-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "Sending..."
                  : "Send Message →"}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;