<template>
  <div id="home">
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
</template>

<script>
import About from "./About";
import Projects from "./Projects";
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
  position: fixed;
}

.jumboT {
  background-color: black;
  padding: 15% 0 0 0;
  height: 70vh;
  width: 60vw;
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
.btn {
  background: #a100cc;
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0.5em 1em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
}
.btn:hover {
  background: #e83c3c;
  color: #fff;
}
.btn:before,
.btn:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #e83c3c;
  transition: 400ms ease all;
}
.btn:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
.btn:hover:before,
.btn:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
</style>