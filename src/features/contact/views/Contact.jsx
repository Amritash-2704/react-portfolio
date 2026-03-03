import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 bg-[#020617] text-white">

      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Contact <span className="text-cyan-400">Me</span>
        </h1>

        <div className="bg-[#0f172a] p-8 rounded-xl border border-cyan-400/20 space-y-6">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-cyan-400" />
            <span>amritashdwivedi27@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-cyan-400" />
            <span>+91-XXXXXXXXXX</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-cyan-400" />
            <span>Bengaluru, India</span>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-cyan-400" />
            <span>github.com/Amritash-2704</span>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-cyan-400" />
            <span>linkedin.com/in/amritash-dwivedi</span>
          </div>

        </div>

      </div>

    </div>
  );
}