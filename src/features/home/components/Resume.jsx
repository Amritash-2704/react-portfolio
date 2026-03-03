import Download from "../../../shared/buttons/Download";

export default function Resume() {
  return (
    <section
      id="resume"
      className="h-screen overflow-y-auto pt-24 pb-24 bg-[#020617] text-white"
    >
      <div className="max-w-10xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10 text-center">
          My <span className="text-cyan-400">Resume</span>
        </h2>

        {/* Resume Viewer */}
        <div className="max-w-7xl mx-auto px-0 mb-4 flex justify-between items-center">

          <iframe
            src="../public/Soumyajit_Behera..pdf"
            title="Resume"
            className="w-full h-[1000px]"
          />

        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-10 mb-20">
          <Download />
        </div>

      </div>
    </section>
  );
}