<template>
  <div id="element">
    <ul
      id="thegrid"
      class="grid-container"
      :style="[heightWidth, gridTemplateRow, gridTemplateColumns, gridGap, opacity, {'transform': 'perspective(' + perspectiveValue + 'px) rotateY(' + yRotation + 'deg) rotateX(' + xRotation + 'deg) rotateZ(' + zRotation + 'deg)'}]"
    >
      <li
        class="item"
        v-for="unit in blocks"
        :key="blocks.indexOf(unit)"
        v-if="blocks.length > 1"
        :style="[{'transition': transitionRate + 's'}, blockBorderRadius, {'transform': 'skew(' + matrix.skewX + 'deg, ' + matrix.skewY + 'deg)'}, border]"
      ></li>
      <!-- END block -->
    </ul>
    <!---------------------------------------------------------------------------------------------------------->
    <ui-dimensions></ui-dimensions>

    <ui-rates></ui-rates>

    <ui-gaps></ui-gaps>

    <ui-skew></ui-skew>

    <ui-color></ui-color>

    <hr>

    <div class="code-export" v-if="codeBoxVisible">
      <export-template></export-template>
    </div>

    <div class="container-fluid footer-panel float-right">
      <div class="row justify-content-end">
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
          >
        </div>

        <div class="col-2">
          <h6 class="text-white">Perspective</h6>
          <input
            type="number"
            name="perspective"
            step="1"
            min="20"
            max="1100"
            v-model="perspectiveValue"
          >
        </div>
        <div class="col-2">
          <h6 class="text-white">X Rotation</h6>
          <input type="number" name="xRotation" step="1" min="-80" max="80" v-model="xRotation">
        </div>
        <div class="col-2">
          <h6 class="text-white">Y Rotation</h6>
          <input type="number" name="yRotation" step="1" min="-80" max="80" v-model="yRotation">
        </div>
        <div class="col-2">
          <h6 class="text-white">Z Rotation</h6>
          <input type="number" name="zRotation" step="1" min="-180" max="180" v-model="zRotation">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";

import UIdimensions from "./UI/UIdimensions";
import UIrates from "./UI/UIrates";
import UIgaps from "./UI/UIgaps";
import UIskew from "./UI/UIskew";
import UIcolor from "./UI/UIcolor";
import UIborder from "./UI/UIborder";

import ExportTemplate from "./ExportTemplate";

export default {
  components: {
    exportTemplate: ExportTemplate,
    "ui-dimensions": UIdimensions,
    "ui-rates": UIrates,
    "ui-gaps": UIgaps,
    "ui-skew": UIskew,
    "ui-color": UIcolor,
    "ui-border": UIborder
  },
  data() {
    return {
      gridSize: 1,
      height: 100,
      width: 100,
      blocks: ["block"],
      isOn: false,
      inputBorderColor: "",
      availableColors: ["red", "purple", "black", "white", "magenta", "orange"],
      availableBorderColors: ["white"],
      updatedSpeed: 1000,
      columns: "repeat(10, 1fr)",
      rows: "repeat(10, 1fr)",
      matrix: {
        scaleX: 0,
        skewX: 0,
        skewY: 0,
        scaleY: 0,
        translateX: 0,
        translateY: 0
      },
      borderSize: 0,
      borderColor: "",
      borderStyle: "",
      transitionRate: 0.5,
      stopAll: false,
      xGap: 0,
      yGap: 0,
      radius: 0,
      perspectiveValue: 0,
      yRotation: 0,
      xRotation: 0,
      zRotation: 0,
      opacitySetting: 1,
      gridCss: "",
      codeBoxVisible: false
    };
  },
  filters: {
    orReturnEmptyString(value) {
      if (value !== "") {
        return;
      }
      return '""';
    },
    returnAsString(value) {
      return value.toString();
    }
  },
  computed: {
    nodeCrawl() {
      this.isOn = true;
      this.stopAll = false;
      this.timer(this.updatedSpeed);
    },
    heightWidth() {
      return {
        height: this.height + "vh",
        width: this.width + "vw"
      };
    },
    gridTemplateRow() {
      return {
        gridTemplateRows: this.rows
      };
    },
    gridTemplateColumns() {
      return {
        gridTemplateColumns: this.columns
      };
    },
    gridGap() {
      return {
        gridGap: this.xGap + "%" + " " + this.yGap + "%"
      };
    },
    blockBorderRadius() {
      return {
        borderRadius: this.radius + "%"
      };
    },
    blockTransform() {
      return {
        transform: "skewX(" + this.matrix.skewX + "deg);"
      };
    },
    border() {
      return {
        border:
          this.borderSize +
          "px " +
          this.borderStyle +
          " " +
          this.inputBorderColor
      };
    },
    opacity() {
      return {
        opacity: this.opacitySetting
      };
    }
  },
  watch: {
    stopAll: function reset() {
      this.stopAll = true;
    },
    updatedSpeed: function newSpeed() {
      this.timer(this.updatedSpeed);
    },
    gridSize: function newGridSize() {
      this.gridSizer(this.gridSize);
      this.blocks = [];
      for (let i = 0; i < this.gridSize * this.gridSize; i++) {
        this.blocks.push("block");
      }
    },
    transitionRate: function newTransitionRate() {
      this.timer(this.updatedSpeed);
    }
  },
  methods: {
    turnOff() {
      this.isOn = false;
      this.stopAll = true;
    },
    getDivs() {
      return document.querySelectorAll(".grid-container > li");
    },
    cycleElements(speed, arrayOfDomElements) {
      for (let i = 0; i < arrayOfDomElements.length; i++) {
        if (speed == this.updatedSpeed) {
          this.colorRandomizer(arrayOfDomElements[i]);
        } else {
          return; //if the speed changes the loop breaks
        }
      }
    },
    colorRandomizer(domElement) {
      if (this.isOn) {
        let randomColor = Math.floor(
          Math.random() * this.availableColors.length
        );
        let randomBorderColor = Math.floor(
          Math.random() * this.availableBorderColors.length
        );
        domElement.style.backgroundColor = this.availableColors[randomColor];
        domElement.style.borderColor = this.availableBorderColors[
          randomBorderColor
        ];
      }
    },
    timer(speed) {
      this.stopAll = false;
      let blinker = setInterval(() => {
        this.cycleElements(speed, this.getDivs());
      }, this.updatedSpeed);
    },
    gridSizer(size) {
      this.columns = "repeat(" + size + ", 1fr)";
      this.rows = "repeat(" + size + ", 1fr)";
    },
    addColors(list, inputColor) {
      list.push(inputColor);
      inputColor = "";
    },
    removeColor(list, index) {
      list.splice(index, 1);
    },
    exportCode() {
      let dynamicCss = document.getElementById("thegrid").style.cssText;
      this.gridCss = dynamicCss;
      this.codeBoxVisible = !this.codeBoxVisible;
    }
  },
  created() {
    eventBus.$on("dimensionsWereChanged", data => {
      this.gridSize = data.gridSize;
      this.height = data.height;
      this.width = data.width;
    });
    eventBus.$on("ratesWereChanged", data => {
      this.updatedSpeed = data.blinkRate;
      this.transitionRate = data.transitionRate;
    });

    eventBus.$on("gapsWereChanged", data => {
      this.xGap = data.xGap;
      this.yGap = data.yGap;
    });

    eventBus.$on("skewWasChanged", data => {
      this.matrix.skewX = data.skewX;
      this.matrix.skewY = data.skewY;
    });

    eventBus.$on("colorsWereChanged", data => {
      this.availableColors = data.availableColors;
    });
  },
  mounted() {
    this.nodeCrawl();
  }
};
</script>

<style>
#element {
  min-height: 100%;
}

.footer-panel {
  position: fixed;
  height: auto;
  width: 60vw;
  margin: 15px;
  padding: 10px;
  right: 0;
  bottom: 1%;
  background-color: rgba(110, 110, 110, 0.8);
}
.code-export {
  position: fixed;
  overflow: auto;
  height: 70vh;
  width: 60vw;
  width: 60vw;
  margin: 15px;
  padding: 10px;
  top: 1%;
  right: 0;
  background-color: rgba(110, 110, 110, 0.8);
  color: white;
  font-size: small;
}
.color-field {
  list-style-type: none;
}
.color-list {
  list-style-type: none;
}
.color-list li {
  cursor: pointer;
  display: inline;
}
.reverseSlider {
  transform: rotateZ(180deg);
}
.verticalSlider {
  transform: rotateZ(90deg);
}

.grid-container {
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
  z-index: -50;
}
.item {
  background-color: pink;
}
</style>
