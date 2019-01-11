import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Blog from "./components/Blog.vue";
import Contact from "./components/Contact.vue";
import FlashyGrid from "./components/flashy-grid/FlashyGrid.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/flashygrid", component: FlashyGrid }
];
