<template>
  <div id="home">
    <bg></bg>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="jumboT justify-items-center tilt">
            <h1
              class="display-4 text-white"
              style="font-family: 'Major Mono Display', monospace
"
            >Hi, I'm Lee!</h1>
            <p class="lead text-white">Tech Enthusiast. Creative Liason. Entrepreneur.</p>
            <hr class="my-4">
            <p class="text-white">How can I help you?</p>
            <a class="btn btn-light btn-lg" href="#" role="button">Learn more</a>
          </div>
        </div>
      </div>
    </div>
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
@import url("https://fonts.googleapis.com/css?family=Major+Mono+Display");

#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 67px;
  margin-left: 0;
  text-align: center;
  height: 75%;
}

.jumboT {
  /*background: url("../assets/backgroundimage.jpg") no-repeat center center fixed;*/
  background-color: black;
  padding: 15% 0 0 0;
  height: 70vh;
  margin-top: 10%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10%;

  -webkit-clip-path: polygon(
    4% 1%,
    28% 8%,
    26% 0%,
    51% 9%,
    55% 0%,
    79% 10%,
    76% 1%,
    97% 9%,
    95% 36%,
    100% 40%,
    92% 66%,
    98% 73%,
    91% 95%,
    96% 99%,
    67% 96%,
    69% 100%,
    37% 94%,
    45% 99%,
    8% 91%,
    19% 98%,
    0% 89%,
    3% 63%,
    0% 57%,
    1% 22%,
    2% 28%
  );
  clip-path: polygon(
    4% 1%,
    28% 8%,
    26% 0%,
    51% 9%,
    55% 0%,
    79% 10%,
    76% 1%,
    97% 9%,
    95% 36%,
    100% 40%,
    92% 66%,
    98% 73%,
    91% 95%,
    96% 99%,
    67% 96%,
    69% 100%,
    37% 94%,
    45% 99%,
    8% 91%,
    19% 98%,
    0% 89%,
    3% 63%,
    0% 57%,
    1% 22%,
    2% 28%
  );
}
.tilt {
  transform: rotateZ(-15deg);
}
</style>