<template>
  <div>
    <div class="control-panel container">
      <div class="row">
        <div class="col-9">
          <div class="input-group-sm mb-3">
            <input
              type="text"
              class="form-control"
              v-model="inputColor"
              placeholder="Select Color"
              aria-label="Select color"
              aria-describedby="button-addon4"
              @keydown.enter="addColors(availableColors, inputColor)"
              @keyup.enter="inputColor = ''"
              @input="changeColors"
            >
          </div>
        </div>
        <div class="col-3">
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
      <div class="row">
        <div class="col-6">
          <ul class="color-list">
            <li
              class="badge badge-pill badge-light"
              v-for="(color, i) in availableColors"
              :key="i"
              @click="removeColor(availableColors, i)"
              @input="changeColors"
            >{{ color }}</li>
          </ul>
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
      availableColors: [],
      inputColor: ""
    };
  },
  methods: {
    addColors(list, inputColor) {
      list.push(inputColor);
      inputColor = "";
    },
    removeColor(list, index) {
      list.splice(index, 1);
    },
    changeColors() {
      eventBus.$emit("colorsWereChanged", {
        availableColors: this.availableColors
      });
    },
    changeOpacityAndPerspective() {
      eventBus.$emit("opacityOrPerspectiveChanged", {
        opacitySetting: this.opacitySetting
      });
    }
  }
};
</script>

<style>
.control-panel {
  padding: 7px 10px 7px 10px;
  box-shadow: 0 0.2px 0.2px 0.2px white;
  background-color: rgba(36, 25, 25, 0.7);
}
.color-list {
  list-style-type: none;
}
.color-list li {
  cursor: pointer;
  display: inline;
}
</style>
