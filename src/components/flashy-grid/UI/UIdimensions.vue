<template>
  <div>
    <div class="control-panel container">
      <div class="row component justify-content-left">
        <div class="col-3">
          <h6 class="text-white">Dimensions</h6>
          <input
            type="number"
            name="quantity"
            step="2"
            min="2"
            max="24"
            v-model="gridDimensions"
            @input="changeDimensions"
          >
        </div>
        <div class="col-3">
          <h6 class="text-white">Height</h6>
          <input
            type="number"
            name="quantity"
            step="1"
            min="10"
            max="200"
            v-model="gridHeight"
            @input="changeDimensions"
          >
        </div>
        <div class="col-3">
          <h6 class="text-white">Width</h6>
          <input
            type="number"
            name="quantity"
            step="1"
            min="10"
            max="200"
            v-model="gridWidth"
            @input="changeDimensions"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../main.js";

export default {
  components: {},
  data() {
    return {
      gridDimensions: 1,
      gridHeight: 100,
      gridWidth: 100
    };
  },
  methods: {
    changeDimensions() {
      eventBus.$emit("dimensionsWereChanged", {
        gridSize: this.gridDimensions,
        height: this.gridHeight,
        width: this.gridWidth
      });
    }
  }
};
</script>

<style scoped>
.control-panel {
  padding: 14px 10px 7px 10px;
  box-shadow: 0 0.2px 0.2px 0.2px white;
}
</style>
