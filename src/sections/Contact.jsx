import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setSending(true);
  setSuccess(false);

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message");
    }

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  } catch (error) {
    console.error("Contact form error:", error);
  } finally {
    setSending(false);
  }
};

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Contact Me"
          subtitle="Have a project or opportunity in mind? Let's talk."
        />

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Let's work together
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              I'm always interested in learning, building useful
              applications and working on new opportunities.
            </p>

            <div className="mt-8 space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-semibold text-slate-900">
                  Get in touch through the form
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-500">Availability</p>
                <p className="font-semibold text-slate-900">
                  Open to opportunities and projects
                </p>
              </div>
            </div>
          </div>
{success && (
  <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 animate-[fadeIn_0.3s_ease-out]">
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">
      ✓
    </div>

    <div>
      <p className="font-semibold">
        Message sent successfully!
      </p>

      <p className="text-sm text-emerald-700 mt-1">
        Thanks for reaching out. I'll get back to you soon.
      </p>
    </div>
  </div>
)}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-7 rounded-2xl shadow-sm border border-slate-200"
          >
            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

           <button
  type="submit"
  disabled={sending}
  className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition"
>
  {sending ? "Sending..." : "Send Message"}
</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;