export default function Download({ file = "../public/Soumyajit_Behera..pdf", label = "Download Resume" }) {
  return (
    <>
     <a
      href={file}
      download
      className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 
                 rounded-lg font-semibold 
                 shadow-lg shadow-cyan-500/30 
                 transition duration-300 inline-flex items-center justify-center"
    >
      {label}
    </a>
    </>
  );
}