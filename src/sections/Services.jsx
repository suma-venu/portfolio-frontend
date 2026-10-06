import SectionTitle from "../components/SectionTitle";

function Services({ services }) {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Services"
          subtitle="What I can help you with."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service) => (
            <div
              key={service.id}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-5">
                {service.icon || "★"}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;