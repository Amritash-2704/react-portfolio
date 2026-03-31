import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Blogs", id: "blogs" },
    { name: "Resume", id: "resume" },
    { name: "Email", id: "email" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      if (id === "home") {
        window.history.pushState(null, "", "/");
      } else {
        window.history.pushState(null, "", `/${id}`);
      }
    }

    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Amritash<span className="text-cyan-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {links.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="hover:text-cyan-400 transition duration-300"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Github Icon Desktop */}
        <a
          href="https://github.com/Amritash-2704"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-white text-xl hidden md:block"
        >
          <FaGithub />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-800">

          <ul className="flex flex-col items-center space-y-6 py-6 text-gray-300">

            {links.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="hover:text-cyan-400 transition duration-300"
                >
                  {item.name}
                </button>
              </li>
            ))}

            <a
              href="https://github.com/Amritash-2704"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-cyan-400"
            >
              <FaGithub />
            </a>

          </ul>

        </div>
      )}

    </nav>
  );
}