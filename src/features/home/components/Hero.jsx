import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import devboy from "../../../assets/images/devboy_converted.png";
import { ReactTyped } from "react-typed";
import Download from "../../../shared/buttons/Download";
import { useNavigate } from "react-router-dom";


export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center bg-[#0f172a] text-white pt-24 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-center md:text-left">

          <h3 className="text-gray-400 mb-2 text-sm sm:text-base">
            Hello, I'm
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Amritash{" "}
            <span className="text-cyan-400">
              <ReactTyped
                strings={[" Dwivedi"]}
                typeSpeed={300}
                backSpeed={0}
                backDelay={2000}
                loop
                showCursor={false}
              />
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
            Frontend Developer  <span className="text-cyan-400 lg:text-4xl">React & Vue</span>
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
            I build scalable and responsive web applications using React and Vue,
            TypeScript and modern frontend tools. Passionate about creating
            clean UI and smooth user experiences.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mb-8 text-xl text-gray-400">
            <FaGithub className="hover:text-cyan-400 cursor-pointer transition" />
            <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition" />
            <FaTwitter className="hover:text-cyan-400 cursor-pointer transition" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            
            <Download />

            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 border border-cyan-400 text-cyan-400 
              hover:bg-cyan-400 hover:text-black 
              rounded-lg font-semibold 
              transition duration-300"
            >
              Contact Me
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center mt-10 md:mt-0">

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            {/* Image */}
            <img
              src={devboy}
              alt="3D Developer"
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 
              object-cover rounded-full border-2 border-cyan-200 shadow-xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}