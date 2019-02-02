<template>
  <div id="flashyGrid" class="wrapper">
    <ul id="thegrid" class="grid-container">
      <li class="item" v-for="unit in blocks" :key="blocks.indexOf(unit)" v-if="blocks.length > 1">
        <svg width="0" height="0">
          <defs>
            <clipPath id="myClip"></clipPath>
          </defs>
        </svg>
      </li>
      <!-- END block-->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridSize: 16,
      height: 102,
      width: 100,
      blocks: [
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block",
        "block"
      ],
      isOn: true,
      availableColors: [
        "#000000",
        "#FFFFFF",
        "#000000",
        "#000000",
        "#1C1C1C",
        "#141414",
        "#FFFFFF"
      ],
      availableBorderColors: ["white"],
      availableShapes: ["unset"],
      updatedSpeed: 100,
      columns: "repeat(16, 1fr)",
      rows: "repeat(16, 1fr)",
      matrix: {
        scaleX: 0,
        skewX: 0,
        skewY: 0,
        scaleY: 0,
        translateX: 0,
        translateY: 0
      },
      borderSize: 0,
      borderStyle: "none",
      transitionRate: 500,
      stopAll: false,
      xGap: 8,
      yGap: 5.25,
      radius: 0,
      perspectiveValue: 21,
      yRotation: 0,
      xRotation: 0,
      zRotation: 0,
      opacitySetting: 1,
      template: ` <ul id="thegrid" class="grid-container"> <li class="item trans" v-for="block in blocks" :key="blocks.indexOf(block)" v-if="blocks.length > 1" :style="[{borderSize: borderSize}, {borderStyle: borderStyle}, {borderRadius: radius + '%'}, {'transition': transitionRate + 's'}, {'transform': 'skew(' + matrix.skewX + 'deg, ' + matrix.skewY + 'deg)'}]" > <svg width="0" height="0"> <defs> <clipPath id="myClip"></clipPath> </defs> </svg> </li> </ul> `
    };
  },
  methods: {
    getDivs() {
      return document.querySelectorAll(".grid-container > li");
    },
    cycleElements(speed, arrayOfDomElements) {
      for (let i = 0; i < arrayOfDomElements.length; i++) {
        if (speed == this.updatedSpeed) {
          this.colorRandomizer(arrayOfDomElements[i]);
        } else {
          return;
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
        let randomShapes = Math.floor(
          Math.random() * this.availableShapes.length
        );
        domElement.style.backgroundColor = this.availableColors[randomColor];
        domElement.style.borderColor = this.availableBorderColors[
          randomBorderColor
        ];
        domElement.style.clipPath = this.availableShapes[randomShapes];
      }
    },
    timer(speed) {
      this.stopAll = false;
      let blinker = setInterval(() => {
        this.cycleElements(speed, this.getDivs());
      }, this.updatedSpeed);
    },
    renderHTML() {
      let renderTarget = document.getElementById("flashyGrid");
      if (renderTarget) {
        renderTarget.innerHTML = this.template;
      }
    }
  },
  created() {
    this.isOn = true;
    this.stopAll = false;
    this.timer(this.updatedSpeed);
  }
};
</script>

<style scoped>
#flashyGrid {
  height: 90%;
}

#thegrid {
  height: 90vh;
  width: 100vw;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 8% 5.25%;
  transform: perspective(21px) rotateY(0deg) rotateX(0deg) rotateZ(0deg);
}
.grid-container {
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  list-style-type: none;
  padding-left: 0;
  margin-left: 20px;
  margin-right: 20px;
  z-index: -1;
  overflow: hidden;
}
.item {
  transition: all 2s;
}
</style>
