import SectionTitle from "../components/SectionTitle";

function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Testimonials"
          subtitle="What people say about my work."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials?.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-2xl shadow-sm border border-slate-200"
            >
              <p className="text-slate-600 leading-8 italic">
                "{item.message}"
              </p>

              <div className="mt-6 flex items-center gap-4">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                    {item.name?.charAt(0)}
                  </div>
                )}

                <div>
                  <h3 className="font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;