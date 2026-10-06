function Hero({ about }) {
  const item = about?.[0];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          <p className="text-blue-300 font-semibold mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {item?.title || "Full Stack Developer"}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
            {item?.description ||
              "I build modern, responsive and user-friendly web applications."}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;