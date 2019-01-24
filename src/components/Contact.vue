<template>
  <div class="contact h-100">
    <div class="c container my-auto">
      <div class="row h-100">
        <div class="card w-75 mx-auto col-sm-8">
          <div class="card-body">
            <h5 class="card-title">Say Something Nice!</h5>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              >
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Subject</span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              >
            </div>

            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Message</span>
              </div>
              <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
            <br>
            <a href="#" class="btn btn-primary">Submit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
  height: 100vh;
}
.c {
  padding-top: 20vh;
  padding-bottom: 20vh;
}
</style>
