<template>
  <div class="about">
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <div class="card text-white mb-3 clip" style="background-color: #000;">
            <div class="card-body">
              <h5 class="card-title">About Lee</h5>
              <p
                class="card-text"
              >Hi, I’m Lee. My life changed forever when I was 13 and my mother came home with a Packard Bell PC running Windows 3.1. I was introduced to programming in high school where we learned BASIC, which allowed me to make text based adventure RPGs and stop motion animation graphics on the old 70s era terminals.
                <br>
                <br>In my adult life, I’ve had the benefit of experiencing the economy from many angles, from entry level to management, as well as from an entrepreneurial perspective. My professional experience has given me an holistic understanding of what makes businesses successful.
                <br>
                <br>I re-acquainted myself with code as an adult partially from a sense of nostalgia from when I coded as a youth, and because to me, IT is an inflection point where all of my talents come together for creative expression. I love my work. I believe that our work is a reflection. It's important to do the job right. Our work is a representation of who we are.
              </p>

              <router-link to="/contact" class="btn btn-primary float-right">Contact</router-link>
            </div>
          </div>
        </div>
        <!--   <div class="col-sm-4">
          <img class="img-fluid rounded" src="http://placehold.it/300x300" alt>
        </div>-->
      </div>
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  position: relative;
  margin-top: 85px;
}

.clip {
  padding: 40px 60px 40px 40px;

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
  .about {
    overflow: scroll;
  }
  .clip {
    margin-top: 50px;
    padding-bottom: 150px;
  }
  h5 {
    margin-top: 75px;
    padding-top: 15px;
  }
  .card-text {
    color: lightgrey;
  }
}
</style>
