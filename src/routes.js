import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Blog from "./components/BlogHome.vue";
import Blog001 from "./components/blogposts/Blog001.vue";
import Blog002 from "./components/blogposts/Blog002.vue";
import Contact from "./components/Contact.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/blog", component: Blog },
  { path: "/blog/blog001", component: Blog001, name: "blog001" },
  { path: "/blog/blog002", component: Blog002, name: "blog002" },
  { path: "/contact", component: Contact }
];
