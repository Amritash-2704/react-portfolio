import { Routes, Route } from "react-router-dom";
import Home from "../features/home/views/Home";
import Contact from "../features/contact/views/Contact";
import Projects from "../features/home/components/projects";
import Resume from "../features/home/components/Resume";
import About from "../features/home/components/About";

export default function AppRoutes() {
  const load = false;
  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}