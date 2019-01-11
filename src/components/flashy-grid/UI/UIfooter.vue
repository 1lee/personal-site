<template>
  <div>
    <div class="container-fluid">
      <div class="row justify-content-start">
        <div class="col-2">
          <h6 class="text-white">Perspective</h6>
          <input
            type="number"
            name="perspective"
            step="1"
            min="20"
            max="1100"
            v-model="perspectiveValue"
            @input="changeOpacityAndPerspective"
          >
        </div>
        <div class="col-2">
          <h6 class="text-white">X Rotation</h6>
          <input
            type="number"
            name="xRotation"
            step="1"
            min="-80"
            max="80"
            v-model="xRotation"
            @input="changeOpacityAndPerspective"
          >
        </div>
        <div class="col-2">
          <h6 class="text-white">Y Rotation</h6>
          <input
            type="number"
            name="yRotation"
            step="1"
            min="-80"
            max="80"
            v-model="yRotation"
            @input="changeOpacityAndPerspective"
          >
        </div>
        <div class="col-2">
          <h6 class="text-white">Z Rotation</h6>
          <input
            type="number"
            name="zRotation"
            step="1"
            min="-180"
            max="180"
            v-model="zRotation"
            @input="changeOpacityAndPerspective"
          >
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <h6 class="text-white">Opacity</h6>
          <input
            class="opacity"
            type="range"
            min="0"
            max="1"
            step=".01"
            value="opacity"
            v-model="opacitySetting"
            @input="changeOpacityAndPerspective"
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
      opacitySetting: 1,
      perspectiveValue: 0,
      xRotation: 0,
      yRotation: 0,
      zRotation: 0
    };
  },
  methods: {
    changeOpacityAndPerspective() {
      eventBus.$emit("opacityOrPerspectiveChanged", {
        opacitySetting: this.opacitySetting,
        perspectiveValue: this.perspectiveValue,
        xRotation: this.xRotation,
        yRotation: this.yRotation,
        zRotation: this.zRotation
      });
    }
  }
};
</script>

<style>
</style>
