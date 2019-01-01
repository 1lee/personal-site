<template>
  <div id="element">
    <ul
      id="thegrid"
      class="grid-container"
      :style="[heightWidth, gridTemplateRow, gridTemplateColumns, gridGap, opacity, {'transform': 'perspective(' + gridData.perspectiveValue + 'px) rotateY(' + gridData.yRotation + 'deg) rotateX(' + gridData.xRotation + 'deg) rotateZ(' + gridData.zRotation + 'deg)'}]"
    >
      <li
        class="item"
        v-for="unit in blocks"
        :key="blocks.indexOf(unit)"
        v-if="blocks.length > 1"
        :style="[{'transition': transitionRate + 's'}, blockBorderRadius, {'transform': 'skew(' + gridData.matrix.skewX + 'deg, ' + gridData.matrix.skewY + 'deg)'}, border]"
      ></li>
      <!-- END block -->
    </ul>
    <!---------------------------------------------------------------------------------------------------------->
    <ui-dimensions></ui-dimensions>

    <ui-rates></ui-rates>

    <ui-gaps></ui-gaps>

    <ui-skew></ui-skew>

    <ui-color></ui-color>

    <ui-border></ui-border>

    <ui-footer></ui-footer>

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

    <div class="code-export" v-if="codeBoxVisible">
      <export-template
        :gridData="gridData"
        :blocks="blocks"
        :updatedSpeed="updatedSpeed"
        :transitionRate="transitionRate"
      ></export-template>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";
import { dataBus } from "./busMethods.js";

import UIdimensions from "./UI/UIdimensions";
import UIrates from "./UI/UIrates";
import UIgaps from "./UI/UIgaps";
import UIskew from "./UI/UIskew";
import UIcolor from "./UI/UIcolor";
import UIborder from "./UI/UIborder";
import UIfooter from "./UI/UIfooter";

import ExportTemplate from "./ExportTemplate";

export default {
  components: {
    exportTemplate: ExportTemplate,
    "ui-dimensions": UIdimensions,
    "ui-rates": UIrates,
    "ui-gaps": UIgaps,
    "ui-skew": UIskew,
    "ui-color": UIcolor,
    "ui-border": UIborder,
    "ui-footer": UIfooter
  },
  data() {
    return {
      gridData: {
        gridSize: 1,
        height: 100,
        width: 100,
        columns: "repeat(10, 1fr)",
        rows: "repeat(10, 1fr)",
        isOn: false,
        availableColors: [
          "red",
          "purple",
          "black",
          "white",
          "magenta",
          "orange"
        ],
        inputBorderColor: "",
        availableBorderColors: ["white"],
        borderSize: 0,
        borderColor: "",
        borderStyle: "",
        stopAll: false,
        xGap: 0,
        yGap: 0,
        radius: 0,
        opacitySetting: 1,
        perspectiveValue: 0,
        xRotation: 0,
        yRotation: 0,
        zRotation: 0,
        matrix: {
          scaleX: 0,
          skewX: 0,
          skewY: 0,
          scaleY: 0,
          translateX: 0,
          translateY: 0
        }
      },
      blocks: ["block"],
      updatedSpeed: 1000,
      transitionRate: 0.5,
      gridCss: "",
      codeBoxVisible: false
    };
  },
  filters: {
    returnAsString(value) {
      return value.toString();
    }
  },
  computed: {
    nodeCrawl() {
      this.isOn = true;
      // this.stopAll = false;
      this.timer(this.updatedSpeed);
    },
    heightWidth() {
      return {
        height: this.gridData.height + "vh",
        width: this.gridData.width + "vw"
      };
    },
    gridTemplateRow() {
      return {
        gridTemplateRows: this.gridData.rows
      };
    },
    gridTemplateColumns() {
      return {
        gridTemplateColumns: this.gridData.columns
      };
    },
    gridGap() {
      return {
        gridGap: this.gridData.xGap + "%" + " " + this.gridData.yGap + "%"
      };
    },
    blockBorderRadius() {
      return {
        borderRadius: this.gridData.radius + "%"
      };
    },
    blockTransform() {
      return {
        transform: "skewX(" + this.gridData.matrix.skewX + "deg);"
      };
    },
    border() {
      return {
        border:
          this.gridData.borderSize +
          "px " +
          this.gridData.borderStyle +
          " " +
          this.gridData.inputBorderColor
      };
    },
    opacity() {
      return {
        opacity: this.gridData.opacitySetting
      };
    }
  },
  watch: {
    "gridData.stopAll": function reset() {
      this.gridData.stopAll = true;
    },
    updatedSpeed: function newSpeed() {
      this.timer(this.updatedSpeed);
    },
    "gridData.gridSize": function newGridSize() {
      this.gridSizer(this.gridData.gridSize);
      this.blocks = [];
      for (
        let i = 0;
        i < this.gridData.gridSize * this.gridData.gridSize;
        i++
      ) {
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
      this.gridData.stopAll = true;
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
          Math.random() * this.gridData.availableColors.length
        );
        let randomBorderColor = Math.floor(
          Math.random() * this.gridData.availableBorderColors.length
        );
        domElement.style.backgroundColor = this.gridData.availableColors[
          randomColor
        ];
        domElement.style.borderColor = this.gridData.availableBorderColors[
          randomBorderColor
        ];
      }
    },
    timer(speed) {
      this.gridData.stopAll = false;
      let blinker = setInterval(() => {
        this.cycleElements(speed, this.getDivs());
      }, this.updatedSpeed);
    },
    gridSizer(size) {
      this.gridData.columns = "repeat(" + size + ", 1fr)";
      this.gridData.rows = "repeat(" + size + ", 1fr)";
    },
    exportCode() {
      let dynamicCss = document.getElementById("thegrid").style.cssText;
      this.gridCss = dynamicCss;
      this.codeBoxVisible = !this.codeBoxVisible;
    }
  },
  created() {
    eventBus.$on("dimensionsWereChanged", data => {
      this.gridData.gridSize = data.gridSize;
      this.gridData.height = data.height;
      this.gridData.width = data.width;
    });
    eventBus.$on("ratesWereChanged", data => {
      this.updatedSpeed = data.blinkRate;
      this.transitionRate = data.transitionRate;
    });

    eventBus.$on("gapsWereChanged", data => {
      this.gridData.xGap = data.xGap;
      this.gridData.yGap = data.yGap;
    });

    eventBus.$on("skewWasChanged", data => {
      this.gridData.matrix.skewX = data.skewX;
      this.gridData.matrix.skewY = data.skewY;
    });

    eventBus.$on("colorsWereChanged", data => {
      this.gridData.availableColors = data.availableColors;
    });

    eventBus.$on("borderWasChanged", data => {
      this.gridData.borderStyle = data.borderStyle;
      this.gridData.borderSize = data.borderSize;
      this.gridData.availableBorderColors = data.availableBorderColors;
      this.gridData.radius = data.radius;
    });

    eventBus.$on("opacityOrPerspectiveChanged", data => {
      this.gridData.opacitySetting = data.opacitySetting;
      this.gridData.perspectiveValue = data.perspectiveValue;
      this.gridData.xRotation = data.xRotation;
      this.gridData.yRotation = data.yRotation;
      this.gridData.zRotation = data.zRotation;
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
