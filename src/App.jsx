import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from './components/Projects';
import Blogs from './components/Blogs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />

      <section id="home" >
        <Hero />
      </section>

      <section id="about" className="min-h-screen border-t border-cyan-250/30">
        <About />
      </section>
{/* 
      <section id="services">
        <div className="py-24 text-white text-center">
          Services Section
        </div>
      </section> */}

      <section id="projects" className="min-h-screen border-t border-cyan-250/30 ">
        <Projects />
      </section>

      <section id="blogs" className="min-h-screen border-t border-cyan-250/30">
        <Blogs />
      </section>

      <section id="resume" className="min-h-screen border-t border-cyan-250/30">
        <div className="py-24 text-white text-center">
          Resume Section
        </div>
      </section>

      <section id="contact">
        <div className="py-24 text-white text-center">
          Contact Section
        </div>
      </section>
    </>
  )
}

export default App
