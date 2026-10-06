import SectionTitle from "../components/SectionTitle";

function Blogs({ blogs }) {
  const publishedBlogs = blogs?.filter(
    (blog) => blog.published
  );

  return (
    <section id="blogs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Blog"
          subtitle="Thoughts, tutorials and things I've learned."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedBlogs?.map((blog) => (
            <article
              key={blog.id}
              className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition"
            >
              {blog.image_url && (
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {blog.title}
                </h3>

                <p className="mt-3 text-slate-600 line-clamp-4">
                  {blog.content}
                </p>

                <p className="mt-4 text-sm text-blue-600">
                  #{blog.slug}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;