import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-backend-0gym.onrender.com/api",
});

export const getAbout = () => API.get("/about");

export const getSkills = () => API.get("/skills");

export const getProjects = () => API.get("/projects");

export const getServices = () => API.get("/services");

export const getExperience = () => API.get("/experience");

export const getTestimonials = () => API.get("/testimonials");

export const getBlogs = () => API.get("/blogs");

export default API;