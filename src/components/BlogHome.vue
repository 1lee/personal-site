<template>
  <div class="blog-home">
    <div class="container">
      <br>
      <h1 class="my-4 text-light title">
        Blog
        <span class="subtitle">and reflections</span>
      </h1>

      <div class="row">
        <!-- Blog Entries Column -->
        <div class="col-md-8">
          <!-- Blog Post -->
          <div class="card mb-4 clip" style="background-color: #000;">
            <router-link :to="{ name: 'blog001'}" class="text-white">
              <img class="card-img-top" src="../assets/time.jpg" alt="Card image cap">
            </router-link>
            <div class="card-body">
              <h2 class="card-title text-white blog-title">The No Time, No Space Developer part 1</h2>
              <p
                class="card-text"
              >Teaching myself to code, while working full time in a non-IT job and rolling with the day-to-day punches of raising a young family has for me been a master’s class in time management. Make no mistake, it is hard, but not impossible. Here are some time-bending, space-bending, mind-bending suggestions to help you level up, where you otherwise could not.</p>
              <router-link
                :to="{ name: 'blog001'}"
                class="text-white btn btn-primary float-right"
              >Read More &rarr;</router-link>
            </div>
            <div class="card-footer text-muted text-right">
              by
              <a href="#" class="text-light">1-LEE</a>
            </div>
          </div>

          <!-- Blog Post -->
          <div class="card mb-4 clip" style="background-color: #000;">
            <router-link :to="{ name: 'blog002'}" class="text-white">
              <img class="card-img-top owl" src="../assets/owl.jpg" alt="Card image cap">
            </router-link>
            <div class="card-body">
              <h2 class="card-title text-white blog-title">The No Time, No Space Developer part 2</h2>
              <p
                class="card-text text-light"
              >Great! We've laid the ground work. You're saturated with information, you've got the tools for the job, and you're nestled cozily into your designated corner... Here's what to do next.</p>
              <router-link
                :to="{ name: 'blog002'}"
                class="text-white btn btn-primary float-right"
              >Read More &rarr;</router-link>
            </div>
            <div class="card-footer text-muted text-right">
              by
              <a href="#" class="text-light">1-LEE</a>
            </div>
          </div>

          <!-- Blog Post
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
          </div>-->
          <!-- Pagination
          <ul class="pagination justify-content-center mb-4">
            <li class="page-item">
              <a class="page-link" href="#">&larr; Older</a>
            </li>
            <li class="page-item disabled">
              <a class="page-link" href="#">Newer &rarr;</a>
            </li>
          </ul>-->
        </div>

        <!-- Sidebar Column -->
        <div class="col-md-4">
          <!-- Begin Mailchimp Signup Form -->
          <div id="mc_embed_signup" class="subscribe-form">
            <form
              action="https://1-lee.us20.list-manage.com/subscribe/post?u=4477faaa170446b0e856fb2d3&amp;id=c271a7ed85"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <input
                  type="email"
                  value
                  name="EMAIL"
                  class="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                >
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input
                    type="text"
                    name="b_4477faaa170446b0e856fb2d3_c271a7ed85"
                    tabindex="-1"
                    value
                  >
                </div>
                <div class="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button float-left"
                  >
                </div>
              </div>
            </form>
          </div>

          <!--End mc_embed_signup-->
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

#mc_embed_signup {
  color: #fff;
  clear: left;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.4);
}
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */

.subscribe-form {
  height: 100px;
}
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
.blog-title {
}
.owl {
  transform: scale(1.27);
  margin-bottom: 60px;
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
@media (max-width: 768px) {
  .blog-title {
    font-size: 16px;
  }
}
</style>
