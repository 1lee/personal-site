<template>
  <div id="flashyGrid">
    <ul id="thegrid" class="grid-container">
      <li
        class="item"
        v-for="block in blocks"
        :key="blocks.indexOf(block)"
        v-if="blocks.length > 1"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridSize: 8,
      height: 144,
      width: 169,
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
        "block"
      ],
      isOn: true,
      availableColors: [
        "rgba(0, 71, 186, 0.3)",
        "rgba(255,255,255,0.3)",
        "rgba(0,0,0,0.3)",
        "rgba(200, 203, 209, 0.3)",
        "rgba(252, 252, 22, 0.15)",
        "rgba(1, 94, 160, .7)"
      ],
      availableBorderColors: ["white"],
      updatedSpeed: 3000,
      columns: "repeat(8, 1fr)",
      rows: "repeat(8, 1fr)",
      matrix: {
        scaleX: 0,
        skewX: "8",
        skewY: "27",
        scaleY: 0,
        translateX: 0,
        translateY: 0
      },
      borderSize: 0,
      borderStyle: "",
      transitionRate: 0.7,
      stopAll: false,
      xGap: 1,
      yGap: 0,
      radius: 0,
      perspectiveValue: 106,
      yRotation: 4,
      xRotation: -11,
      zRotation: 27,
      opacitySetting: 1,
      template: `<ul id="thegrid" class="grid-container"> <li class="item trans" v-for="block in blocks" :key="blocks.indexOf(block)" v-if="blocks.length > 1" ></li> </ul>`
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
    renderHTML() {
      let renderTarget = document.getElementById("flashyGrid");
      if (renderTarget) {
        renderTarget.innerHTML = this.template;
      }
    }
  },
  created() {},
  beforeMount() {
    this.isOn = true;
    this.stopAll = false;
    this.timer(this.updatedSpeed);
  }
};
</script>

<style scoped>
#flashyGrid {
  height: 100%;
  width: 100%;
}
#thegrid {
  height: 144vh;
  width: 169vw;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1% 0%;
  opacity: 1;
  transform: perspective(106px) rotateY(4deg) rotateX(-11deg) rotateZ(27deg);
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
.grid-container > li {
  transition: all 1.75s;
}

.item {
  background-color: rgba(255, 255, 255, 0);
}
</style>
