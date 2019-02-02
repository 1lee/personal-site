<template>
  <div id="app">
    <ps-navbar></ps-navbar>
    <bg class="background-effect"></bg>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import bg from "./components/BackgroundEffect";

export default {
  name: "app",
  components: {
    bg,
    psNavbar: Navbar
  }
};
</script>

<style>
html,
body {
  background-color: rgb(72, 72, 72);
  height: 100vh;
  width: 90vw;
  margin: 0 auto;
}

.background-effect {
  position: fixed;
  margin-top: 45px;
  left: 2%;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: transform;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  transform: rotateY(90deg);
}
</style>
