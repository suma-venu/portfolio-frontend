import SectionTitle from "../components/SectionTitle";

function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="My Projects"
          subtitle="Some of the projects I have worked on."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition"
            >
              {project.image_url && (
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {project.description}
                </p>

                <p className="mt-4 text-sm text-blue-600">
                  {project.technologies}
                </p>

                <div className="flex gap-3 mt-6">
                  {project.project_url && (
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 border rounded-lg"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;