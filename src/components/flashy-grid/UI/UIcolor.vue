<template>
  <div>
    <div class="control-panel container">
      <div class="row">
        <div class="col-12">
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
    }
  }
};
</script>

<style>
.color-list {
  list-style-type: none;
}
.color-list li {
  cursor: pointer;
  display: inline;
}
</style>
