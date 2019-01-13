<template>
  <div>
    <div class="control-panel container">
      <div class="row">
        <div class="col-3">
          <h6 class="text-white">Blink Rate</h6>
          <input
            class="reverseSlider text-white"
            type="range"
            min="100"
            max="1000"
            step="10"
            value="blinkSpeed"
            v-model="blinkRate"
            @input="changeRate"
          >
        </div>
        <div class="col-3">
          <h6 class="text-white">Transition</h6>
          <input
            class="transitionRate reverseSlider text-white"
            type="range"
            min=".1"
            max="5"
            step=".1"
            value="transitionRate"
            v-model="transitionRate"
            @input="changeRate"
          >
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
      blinkRate: 1000,
      transitionRate: 0.5
    };
  },
  methods: {
    changeRate() {
      eventBus.$emit("ratesWereChanged", {
        blinkRate: this.blinkRate,
        transitionRate: this.transitionRate
      });
    }
  }
};
</script>

<style scoped>
.control-panel {
  padding: 7px 10px 7px 10px;
  box-shadow: 0 0.2px 0.2px 0.2px white;
  background-color: rgba(36, 25, 25, 0.7);
}
.reverseSlider {
  transform: rotateZ(180deg);
}
</style>
