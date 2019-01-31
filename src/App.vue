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
html,
body {
  background-color: rgb(53, 53, 53);
  height: 100vh;
  width: 100vw;
  /*overflow: hidden;*/
}
</style>
