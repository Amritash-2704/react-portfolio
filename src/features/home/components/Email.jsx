import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Email() {
  return (
    <section
      id="contact"
      className="min-h-screen pt-24 pb-24 bg-[#020617] text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center">
           <span className="text-cyan-400">Email </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Info */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <a
                href="mailto:amritashdwivedi27@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                amritashdwivedi27@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-xl" />
              <span>+91-XXXXXXXXXX</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              <span>Bengaluru, India</span>
            </div>

          </div>

          {/* Right Form */}
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-cyan-400/20 focus:border-cyan-400 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-cyan-400/20 focus:border-cyan-400 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-cyan-400/20 focus:border-cyan-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold shadow-lg shadow-cyan-500/30 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}