<template>
  <div class="contact h-100">
    <div class="c container my-auto">
      <div class="row h-100">
        <div class="card w-75 mx-auto col-sm-8 clip" style="background-color: #000;">
          <div class="card-body">
            <h3 class="card-title">Say Something Nice!</h3>

            <form action="https://formspree.io/1lee.burrell@gmail.com" method="POST">
              <div class="form-row">
                <div class="col-md-10 mx-auto input-group-sm">
                  <input type="text" class="form-control" name="name" placeholder="Name">
                </div>
              </div>
              <br>
              <div class="form-row">
                <div class="form-group col-md-10 mx-auto input-group-sm">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    v-model="email"
                    name="email"
                    placeholder="Email"
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-10 mx-auto input-group-sm">
                  <input type="text" class="form-control" name="subject" placeholder="Subject">
                </div>
              </div>
              <br>
              <div class="form-row">
                <div class="form-group col-md-10 mx-auto input-group-sm">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    name="message"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div class="col-auto my-1 float-right">
                <button type="submit" class="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null
    };
  }
};
</script>

<style scoped>
.background-effect {
  position: fixed;
  top: 0;
}
.contact {
  position: fixed;
  height: 100vh;
  width: 100vw;
}

.card {
  z-index: 10;
}

.c {
  padding-top: 15vh;
  padding-bottom: 20vh;
}

.clip {
  padding: 40px;

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
