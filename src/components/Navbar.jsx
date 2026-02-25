import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    const links = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        // { name: "Services", id: "services" },
        { name: "Projects", id: "projects" },
        { name: "Blogs", id: "blogs" },
        { name: "Resume", id: "resume" },
        { name: "Email", id: "contact" },
    ];

    return (
        <nav className="fixed w-full top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-white">
                    Amritash<span className="text-cyan-400">.</span>
                </h1>

                {/* Links */}
                <ul className="hidden md:flex space-x-8 text-gray-300">
                    {links.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className="hover:text-cyan-400 transition-all duration-300 ease-in-out cursor-pointer"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* GitHub */}
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-white text-xl hidden md:block"
                >
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
}