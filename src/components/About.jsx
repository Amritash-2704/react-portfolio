export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-32 text-white 
      bg-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-center">
          About{" "}
          <span className="text-cyan-400">
            Me
          </span>
        </h2>

         <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side Text */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              I am a passionate React JS Developer with 2+ years of experience
              building scalable, responsive and modern web applications.
            </p>

            <p>
              I specialize in React, TypeScript, state management,
              API integration, and clean UI architecture.
            </p>

            <p>
              My focus is building fast, user-friendly and production-ready
              frontend systems with modern best practices.
            </p>
          </div>

          {/* Right Side Card */}
          <div className="p-8 rounded-2xl 
          backdrop-blur-xl bg-white/5 
          border border-cyan-400/20">

            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              Quick Info
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>🚀 2+ Years Experience</li>
              <li>⚛️ React & TypeScript Specialist</li>
              <li>📡 REST API Integration</li>
              <li>🎨 UI/UX Focused</li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}