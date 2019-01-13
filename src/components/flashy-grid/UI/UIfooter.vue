<template>
  <div>
    <div class="control-panel container">
      <div class="row">
        <div class="col-3">
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
        <div class="col-3">
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
        <div class="col-3">
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
        <div class="col-3">
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
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../main.js";

export default {
  data() {
    return {
      perspectiveValue: 0,
      xRotation: 0,
      yRotation: 0,
      zRotation: 0
    };
  },
  methods: {
    changeOpacityAndPerspective() {
      eventBus.$emit("opacityOrPerspectiveChanged", {
        perspectiveValue: this.perspectiveValue,
        xRotation: this.xRotation,
        yRotation: this.yRotation,
        zRotation: this.zRotation
      });
    }
  }
};
</script>

<style scoped>
.control-panel {
  padding: 7px 10px 7px 10px;
  background-color: rgba(36, 25, 25, 0.7);
}
</style>
