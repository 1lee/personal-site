<template>
  <div>
    <div class="control-panel container">
      <div class="row">
        <div class="col-3">
          <h6 class="text-white">Skew X</h6>
          <input
            class="xSkewSlider"
            type="range"
            min="-85"
            max="85"
            step="1"
            value="skewX"
            v-model="skewX"
            @input="changeSkew"
          >
        </div>
        <div class="col-3">
          <h6 class="text-white">Skew Y</h6>
          <input
            class="ySkewSlider"
            type="range"
            min="-85"
            max="85"
            step="1"
            value="skewY"
            v-model="skewY"
            @input="changeSkew"
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
      skewX: 0,
      skewY: 0
    };
  },
  methods: {
    changeSkew() {
      eventBus.$emit("skewWasChanged", {
        skewX: this.skewX,
        skewY: this.skewY
      });
    }
  }
};
</script>

<style>
</style>
