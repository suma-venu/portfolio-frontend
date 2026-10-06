import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";
import {
  getAbout,
  getSkills,
  getProjects,
  getServices,
  getExperience,
  getTestimonials,
  getBlogs,
} from "./api";

function App() {
  const [about, setAbout] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [experience, setExperience] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const [
          aboutResponse,
          skillsResponse,
          projectsResponse,
          servicesResponse,
          experienceResponse,
          testimonialsResponse,
          blogsResponse,
        ] = await Promise.all([
          getAbout(),
          getSkills(),
          getProjects(),
          getServices(),
          getExperience(),
          getTestimonials(),
          getBlogs(),
        ]);

        setAbout(aboutResponse.data);
        setSkills(skillsResponse.data);
        setProjects(projectsResponse.data);
        setServices(servicesResponse.data);
        setExperience(experienceResponse.data);
        setTestimonials(testimonialsResponse.data);
        setBlogs(blogsResponse.data);
      } catch (err) {
        console.error("Portfolio loading error:", err);

        setError(
          "Unable to load portfolio data. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    loadPortfolio();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>

          <p>Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-3">
            Something went wrong
          </h1>

          <p className="text-slate-300">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero about={about} />

        <About about={about} />

        <Skills skills={skills} />

        <Projects projects={projects} />

        <Services services={services} />

        <Experience experience={experience} />

        <Testimonials testimonials={testimonials} />

        <Blogs blogs={blogs} />
        <Contact />
      </main>

      <footer className="bg-slate-900 text-slate-400 text-center py-10">
        <p>
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;