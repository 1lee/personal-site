<template>
  <div>
    <div class="control-panel container">
      <div class="row">
        <div class="col-3">
          <h6 class="text-white">X - Gap</h6>
          <input
            class="xGap"
            type="range"
            min="0"
            max="99"
            step="1"
            value="xGap"
            v-model="xGap"
            @input="changeGap"
          >
        </div>

        <div class="col-3">
          <h6 class="text-white">Y - Gap</h6>
          <input
            class="yGap"
            type="range"
            min="0"
            max="99"
            step="1"
            value="yGap"
            v-model="yGap"
            @input="changeGap"
          >
        </div>

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
      xGap: 0,
      yGap: 0,
      skewX: 0,
      skewY: 0
    };
  },
  props: ["value"],
  methods: {
    changeGap() {
      eventBus.$emit("gapsWereChanged", {
        xGap: this.xGap,
        yGap: this.yGap
      });
    },
    changeSkew() {
      eventBus.$emit("skewWasChanged", {
        skewX: this.skewX,
        skewY: this.skewY
      });
    }
  }
};
</script>

<style scoped>
.control-panel {
  padding: 7px 10px 7px 10px;
  box-shadow: 0 0.2px 0.2px 0.2px white;
}
</style>
