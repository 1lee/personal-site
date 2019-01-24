<template>
  <div id="app">
    <ps-navbar></ps-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    psNavbar: Navbar
  }
};
</script>

<style>
html {
  height: 100vh;
  width: 100vw;
}
body {
  height: 100vh;
  width: 100vw;
}
</style>
