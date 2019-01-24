<template>
  <div class="container">
    <div class="row">
      <nav
        class="navbar fixed-top navbar-expand-lg navbar-dark"
        style="background-color: rgba(0, 71, 186, 0.3)"
      >
        <router-link v-if="!onHomePage" to="/" class="navbar-brand display-3">
          <i>Lee!</i>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onHomePage: true
    };
  },
  watch: {
    $route: "displayNavbarBrand"
  },
  methods: {
    displayNavbarBrand() {
      if (this.$route.name != "Home") {
        this.onHomePage = false;
      }
    }
  }
};
</script>

<style scoped>
</style>
