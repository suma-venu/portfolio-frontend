import SectionTitle from "../components/SectionTitle";

function Skills({ skills }) {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies and tools I work with."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills?.map((skill) => (
            <div
              key={skill.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {skill.name}
              </h3>

              <p className="text-blue-600 mt-2">
                {skill.category}
              </p>

              <p className="text-sm text-slate-500 mt-2">
                Level: {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;