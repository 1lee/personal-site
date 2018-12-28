import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Projects from "./components/flashy-grid/Projects.vue";
import Blog from "./components/Blog.vue";
import Contact from "./components/Contact.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact }
];
