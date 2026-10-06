function Navbar() {
  const links = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Services", "services"],
    ["Experience", "experience"],
    ["Blog", "blogs"],
    ["Contact", "contact"],
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold text-slate-900"
        >
          Portfolio
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;