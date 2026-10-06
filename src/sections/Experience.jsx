import SectionTitle from "../components/SectionTitle";

function Experience({ experience }) {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey."
        />

        <div className="space-y-6">
          {experience?.map((item) => (
            <div
              key={item.id}
              className="border-l-4 border-blue-600 pl-6 py-2"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {item.position}
              </h3>

              <p className="text-blue-600 font-semibold mt-1">
                {item.company}
              </p>

              <p className="text-sm text-slate-500 mt-2">
                {item.start_date || ""}{" "}
                {item.end_date ? `— ${item.end_date}` : "— Present"}
              </p>

              <p className="mt-4 text-slate-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;