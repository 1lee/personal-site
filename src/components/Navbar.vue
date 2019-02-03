<template>
  <div class="container wrapper">
    <div class="row">
      <nav
        class="navbar fixed-top navbar-expand-lg navbar-dark"
        style="background-color: rgb(0, 0, 0)"
      >
        <router-link to="/" class="navbar-brand display-3">
          <img src="../assets/spades-token.svg" width="30" height="30">
        </router-link>
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
            <li class="nav-item">
              <router-link to="/projects" class="text-white">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="text-white">Blog</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/about" class="text-white">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="text-white">Contact</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
