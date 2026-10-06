import SectionTitle from "../components/SectionTitle";

function About({ about }) {
  const item = about?.[0];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me and what I do."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {item?.profile_image ? (
              <img
                src={item.profile_image}
                alt={item.title}
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
              />
            ) : (
              <div className="w-full max-w-sm h-80 mx-auto rounded-2xl bg-slate-200 flex items-center justify-center text-slate-500">
                Profile Image
              </div>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {item?.title || "About Me"}
            </h3>

            <p className="mt-5 text-slate-600 leading-8">
              {item?.description ||
                "Welcome to my portfolio. I enjoy creating useful and modern web applications."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;