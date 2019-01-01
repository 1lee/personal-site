<template>
  <div>
    <div class="control-panel container">
      <div class="row">
        <div class="col-9">
          <div class="input-group-sm mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Border style</label>
            </div>
            <select
              class="custom-select"
              id="inputGroupSelect01"
              v-model="borderStyle"
              @change="changeBorder"
            >
              <option selected value="none">None</option>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
              <option value="double">Double</option>
              <option value="groove">Groove</option>
              <option value="ridge">Ridge</option>
              <option value="inset">Inset</option>
              <option value="outset">Outset</option>
            </select>
          </div>
        </div>

        <div class="col-3">
          <h6 class="text-white">Border Size</h6>
          <input
            type="number"
            name="borderSize"
            step="1"
            min="1"
            max="20"
            v-model="borderSize"
            @input="changeBorder"
          >
        </div>
      </div>

      <div class="row">
        <div class="col-9">
          <div class="border-color-picker">
            <div class="input-group-sm">
              <input
                type="text"
                class="form-control"
                v-model="inputBorderColor"
                placeholder="Select Border Color"
                aria-label="Select color"
                aria-describedby="button-addon4"
                @keydown.enter="addColors(availableBorderColors,inputBorderColor)"
                @keyup.enter="inputBorderColor = ''"
                @input="changeBorder"
              >
            </div>
          </div>
        </div>

        <div class="col-3">
          <h6 class="text-white">Border radius</h6>
          <input
            type="number"
            name="border-radius"
            step="1"
            min="0"
            max="50"
            v-model="radius"
            @input="changeBorder"
          >
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <ul class="color-list">
            <li
              class="badge badge-pill badge-light"
              v-for="(color, index) in availableBorderColors"
              :key="index"
              @click="removeColor(availableBorderColors, index)"
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
      borderStyle: "none",
      borderSize: 0,
      availableBorderColors: [],
      inputBorderColor: "",
      radius: 0
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
    changeBorder() {
      eventBus.$emit("borderWasChanged", {
        borderStyle: this.borderStyle,
        borderSize: this.borderSize,
        availableBorderColors: this.availableBorderColors,
        radius: this.radius
      });
    }
  }
};
</script>

<style>
</style>
