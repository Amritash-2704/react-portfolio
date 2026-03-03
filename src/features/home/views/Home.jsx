import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/projects"
import Blogs from "../components/Blogs";
import Resume from "../components/Resume";
import Email from "../components/Email";

export default function Home() {

  

  return (
    <>

      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      <section id="about" className="min-h-screen border-t border-cyan-250/30">
        <About />
      </section>

      <section id="projects" className="min-h-screen border-t border-cyan-250/30">
        <Projects />
      </section>

      <section id="blogs" className="min-h-screen border-t border-cyan-250/30">
        <Blogs />
      </section>

      <section id="resume" className="min-h-screen border-t border-cyan-250/30">
        <Resume />
      </section>

      <section id="email" className="min-h-screen border-t border-cyan-250/30">
        <Email />
      </section>

    </>
  );
}