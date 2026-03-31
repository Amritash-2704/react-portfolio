export default function Blogs() {
  const blogs = [
    {
      title: "Understanding React Hooks",
      description:
        "A complete beginner to advanced guide on React Hooks with real-world examples.",
      date: "Jan 2026",
      link: "#",
    },
    {
      title: "State Management in React",
      description:
        "Comparing Redux, Context API and modern state management patterns.",
      date: "Feb 2026",
      link: "#",
    },
    {
      title: "Building Scalable Frontend Apps",
      description:
        "Best practices and folder structure strategies for large React applications.",
      date: "Mar 2026",
      link: "#",
    },
  ];

  return (
    <section
      id="blogs"
      className="min-h-screen  pt-32 bg-[#0f172a] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-16 text-center">
          My{" "}
          <span className="text-cyan-400">
            Blogs
          </span>
        </h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl 
              backdrop-blur-xl bg-white/5 
              border border-cyan-400/20 
              hover:border-cyan-400 
              transition duration-300 
              hover:-translate-y-2"
            >
              <p className="text-sm text-gray-400 mb-2">
                {blog.date}
              </p>

              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                {blog.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {blog.description}
              </p>

              <a
                // href={blog.link}
                className="text-sm text-gray-400 hover:text-cyan-400 transition"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}