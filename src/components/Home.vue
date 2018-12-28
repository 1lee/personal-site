<template>
  <div id="home">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
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
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="jumbotron">
      <h1 class="display-4 text-left">Hi, I'm Lee!</h1>
      <p class="lead">Tech Enthusiast. Creative Liason. Entrepreneur.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    <img class="profile-pic float-right img-fluid" src="../assets/retro-man.jpg" alt>
  </div>
</template>

<script>
import About from "./About";
import Projects from "./flashy-grid/Projects";
import Blog from "./Blog";
import Contact from "./Contact";

export default {
  components: {
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
}
.profile-pic {
  max-width: 15%;
  height: auto;
}
</style>
