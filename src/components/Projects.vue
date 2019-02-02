<template>
  <div class="projects">
    <!-- Page Content -->
    <div class="container">
      <!-- Page Heading -->
      <br>
      <h1 class="my-4 text-light title">
        Projects
        <span class="subtitle">and expressions</span>
      </h1>

      <!-- Project Two -->
      <div class="row">
        <div class="col-md-6">
          <a href="#">
            <video width="420" height="300" autoplay loop>
              <source src="../assets/FlashyGrid.mp4" type="video/mp4">Your browser does not support the video tag.
            </video>
          </a>
        </div>
        <div class="col-md-6">
          <div class="card text-white mb-3 clip" style="background-color: #000;">
            <div class="card-body">
              <h5 class="card-title">Flashy Grid</h5>
              <p
                class="card-text"
              >The Flashy Grid is an online tool for UI designers to quickly create elements leveraging the power of CSS grid.</p>
              <a href="#" class="btn btn-primary float-right">Try It</a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->
      <hr style="background-color: white;">

      <!-- Project One -->
      <div class="row">
        <div class="col-md-6">
          <a href="#">
            <video width="420" height="300" autoplay loop>
              <source src="../assets/Factbook.mp4" type="video/mp4">Your browser does not support the video tag.
            </video>
          </a>
        </div>
        <div class="col-md-6">
          <div class="card text-white mb-3 clip" style="background-color: #000;">
            <div class="card-body">
              <h5 class="card-title">CIA World Factbook</h5>
              <p
                class="card-text"
              >A UI implementation for the CIA World Factbook citing a JSON database. Built with Angular.</p>
              <a href="#" class="btn btn-primary float-right">Check It Out</a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->
      <hr style="background-color: white;">

      <!-- Project Three -->
      <div class="row">
        <div class="col-md-6">
          <a href="#">
            <video width="420" height="300" autoplay loop>
              <source src="../assets/AKlogo.mp4" type="video/mp4">Your browser does not support the video tag.
            </video>
          </a>
        </div>
        <div class="col-md-6">
          <div class="card text-white mb-3 clip" style="background-color: #000;">
            <div class="card-body">
              <h5 class="card-title">Amenta's Key Logo</h5>
              <p class="card-text">An animated SVG logo</p>
              <a href="#" class="btn btn-primary float-right">See It</a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->
      <hr style="background-color: white;">

      <!-- Project Four -->
      <div class="row">
        <div class="col-md-6">
          <a href="#">
            <video width="420" height="300" autoplay loop>
              <source src="../assets/LoveSurvived.mp4" type="video/mp4">Your browser does not support the video tag.
            </video>
          </a>
        </div>
        <div class="col-md-6">
          <div class="card text-white mb-3 clip" style="background-color: #000;">
            <div class="card-body">
              <h5 class="card-title">A Personal Page</h5>
              <p class="card-text">A freelance project.</p>
              <a href="#" class="btn btn-primary float-right">Visit</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination 
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>-->
    </div>
    <!-- /.container -->
    <!-- Footer -->
    <footer class="py-5" style="background-color: #000;">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; 1Lee 2019</p>
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Major+Mono+Display");
.projects {
  position: relative;
  z-index: 1;
  margin-top: 85px;
}
.title {
  font-family: "Major Mono Display", monospace;
  font-size: 56px;
}
.subtitle {
  font-size: 20px;
}
.clip {
  padding: 40px;
  opacity: 0.8;
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
</style>
