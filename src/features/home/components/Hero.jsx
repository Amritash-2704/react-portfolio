import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import devboy from "../../../assets/images/devboy_converted.png";
import { ReactTyped } from "react-typed";
import Download from "../../../shared/buttons/Download";
import { useNavigate } from "react-router-dom";


export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center bg-[#0f172a] text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h3 className="text-gray-400 mb-2">Hello, I'm</h3>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Amritash {" "}<span className="text-cyan-400">
              <ReactTyped
                strings={["Dwivedi"]}
                typeSpeed={300}      // 300ms per letter
                backSpeed={0}        // no delete animation
                backDelay={2000}     // wait 2000ms after complete
                loop
                showCursor={false}
              />
            </span>
          </h1>

          <h2 className="text-2xl text-gray-300 mb-6">
            React JS Developer
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I build scalable and responsive web applications using React,
            TypeScript and modern frontend tools. Passionate about creating
            clean UI and smooth user experiences.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5 mb-8 text-xl text-gray-400">
            <FaGithub className="hover:text-cyan-400 cursor-pointer transition" />
            <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition" />
            <FaTwitter className="hover:text-cyan-400 cursor-pointer transition" />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Download />

            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 border border-cyan-400 text-cyan-400 
             hover:bg-cyan-400 hover:text-black 
             rounded-lg font-semibold 
             transition duration-300 
             inline-flex items-center justify-center"
            >
              Contact Me
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            {/* Image */}
            <img
              src={devboy}
              alt="3D Developer"
              className="relative w-102 h-102 object-cover rounded-full border-2 border-cyan-200 shadow-xl"
            />
          </div>

        </div>
      </div>
      <div>
      </div>
    </section>
  );
}