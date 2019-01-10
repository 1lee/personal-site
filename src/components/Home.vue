<template>
  <div id="home">
    <img class="wallp" src="../assets/water001.jpg" alt>
    <bg></bg>
    <nav
      class="navbar fixed-top navbar-expand-lg navbar-dark"
      style="background-color: rgba(0, 71, 186, 0.3)"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/about" class="text-white">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="text-white">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="text-white">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="text-white">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="jumbotron">
      <h1 class="display-3 text-left text-primary">Hi, I'm Lee!</h1>
      <p class="lead">Tech Enthusiast. Creative Liason. Entrepreneur.</p>
      <hr class="my-4">
      <p>How can I help you?</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    <img class="profile-pic float-right img-fluid" src="../assets/retro-man.jpg" alt>
  </div>
</template>

<script>
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";

import bg from "./BackgroundEffect";

export default {
  components: {
    bg,
    psAbout: About,
    psProjects: Projects,
    psBlog: Blog,
    psContact: Contact
  }
};
</script>

<style>
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 0;
  text-align: center;
}
.profile-pic {
  max-width: 15%;
  height: auto;
}

.jumbotron {
  background: rgb(247, 247, 249, 0.8);
}

.wallp {
  position: absolute;
  display: block;
  z-index: -100;
  opacity: 0.3;
  height: 100%;
  width: 100%;
}
</style>
