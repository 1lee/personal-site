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
      yGap: 0
    };
  },
  props: ["value"],
  methods: {
    changeGap() {
      eventBus.$emit("gapsWereChanged", {
        xGap: this.xGap,
        yGap: this.yGap
      });
    }
  }
};
</script>

<style>
</style>
