<template>
  <div>
    <div class="export-button">
      <div class="row justify-content-center" v-if="!codeBoxVisible">
        <div class="col-4">
          <button class="btn btn-primary btn-light btn-xl" @click="exportCode()">Get Code</button>
        </div>
      </div>

      <div class="row justify-content-right bring-to-top" v-if="codeBoxVisible">
        <div class="col-4">
          <button class="btn btn-primary btn-light btn-xl" @click="exportCode()">Close Code Box</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../main.js";

export default {
  data() {
    return {
      codeBoxVisible: false
    };
  },
  methods: {
    exportCode() {
      this.codeBoxVisible = !this.codeBoxVisible;

      eventBus.$emit("exportRequested", {
        codeBoxVisible: this.codeBoxVisible
      });
    }
  }
};
</script>

<style scoped>
.bring-to-top {
  position: absolute;
  z-index: 100;
  right: 10%;
}
</style>
