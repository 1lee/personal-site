<template>
  <div class="blog-home">
    <div class="container">
      <br>
      <h1 class="my-4 text-light title">
        Blogs
        <span class="subtitle">and reflections</span>
      </h1>

      <div class="row">
        <!-- Blog Entries Column -->
        <div class="col-md-8">
          <!-- Blog Post -->
          <div class="card mb-4 clip" style="background-color: #000;">
            <img class="card-img-top" src="../assets/time.jpg" alt="Card image cap">
            <div class="card-body">
              <h2 class="card-title text-white">The No Time, No Space Developer part 1</h2>
              <p
                class="card-text"
              >Teaching myself to code, while working full time in a non-IT job and rolling with the day-to-day punches of raising a young family has for me been a master’s class in time management. Make no mistake, it is hard, but not impossible. Here are some time-bending, space-bending, mind-bending suggestions to help you level up, where you otherwise could not.</p>
              <a href="#" class="btn btn-primary float-right">Read More &rarr;</a>
            </div>
            <div class="card-footer text-muted text-right">
              by
              <a href="#" class="text-light">1-LEE</a>
            </div>
          </div>

          <!-- Blog Post -->
          <div class="card mb-4 clip" style="background-color: #000;">
            <img class="card-img-top" src="../assets/time.jpg" alt="Card image cap">
            <div class="card-body">
              <h2 class="card-title text-white">The No Time, No Space Developer part 1</h2>
              <p
                class="card-text"
              >Teaching myself to code, while working full time in a non-IT job and rolling with the day-to-day punches of raising a young family has for me been a master’s class in time management. Make no mistake, it is hard, but not impossible. Here are some time-bending, space-bending, mind-bending suggestions to help you level up, where you otherwise could not.</p>
              <a href="#" class="btn btn-primary float-right">Read More &rarr;</a>
            </div>
            <div class="card-footer text-muted text-right">
              by
              <a href="#" class="text-light">1-LEE</a>
            </div>
          </div>

          <!-- Blog Post -->
          <div class="card mb-4">
            <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
            <div class="card-body">
              <h2 class="card-title">Post Title</h2>
              <p
                class="card-text"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
              <a href="#" class="btn btn-primary">Read More &rarr;</a>
            </div>
            <div class="card-footer text-muted">
              Posted on January 1, 2017 by
              <a href="#">Start Bootstrap</a>
            </div>
          </div>

          <!-- Pagination -->
          <ul class="pagination justify-content-center mb-4">
            <li class="page-item">
              <a class="page-link" href="#">&larr; Older</a>
            </li>
            <li class="page-item disabled">
              <a class="page-link" href="#">Newer &rarr;</a>
            </li>
          </ul>
        </div>

        <!-- Sidebar Widgets Column -->
        <div class="col-md-4">
          <!-- Search Widget -->
          <div class="card my-4">
            <h5 class="card-header">Search</h5>
            <div class="card-body">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for...">
                <span class="input-group-btn">
                  <button class="btn btn-secondary" type="button">Go!</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Major+Mono+Display");

.blog-home {
  margin-top: 87px;
}

.title {
  font-family: "Major Mono Display", monospace;
  font-size: 56px;
}
.subtitle {
  font-size: 20px;
}

.clip {
  padding: 60px 60px 40px 40px;
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
