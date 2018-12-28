<template>
  <div>
    <div class="control-panel container">
      <div class="row">
        <div class="col-3">
          <h6 class="text-white">Border Size</h6>
          <input type="number" name="borderSize" step="1" min="1" max="20" v-model="borderSize">
        </div>
        <div class="col-9">
          <div class="input-group-sm mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Border style</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01" v-model="borderStyle">
              <option selected value="solid">Solid</option>
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
              >
            </div>
          </div>
        </div>

        <div class="col-3">
          <h6 class="text-white">Border radius</h6>
          <input type="number" name="border-radius" step="1" min="0" max="50" v-model="radius">
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
      <div class="row justify-content-end" v-if="!codeBoxVisible">
        <div class="col-3">
          <button class="btn btn-primary btn-light btn-sm" @click="exportCode()">Get Code</button>
        </div>
      </div>
      <div class="row justify-content-end" v-if="codeBoxVisible">
        <div class="col-3">
          <button class="btn btn-primary btn-light btn-sm" @click="exportCode()">Close Code Box</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
