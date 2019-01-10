<template>
  <div>
    #thegrid { {{ gridCss }}
    transform: skewX({{ gridData.matrix.skewX }}deg)
    skewY({{gridData.matrix.skewY}}deg); }
    <br>
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
    transition: all {{ transitionRate }}s;
    }
    <br>new Vue({
    <br>el: '#thegrid',
    <br>
    data: { gridSize: {{ gridData.gridSize }},
    <br>
    height: {{ gridData.height }},
    <br>
    width: {{ gridData.width }},
    <br>
    blocks: {{ blocks }},
    <br>isOn: true,
    <br>
    availableColors: {{ gridData.availableColors}},
    <br>
    availableBorderColors: {{ gridData.availableBorderColors}},
    <br>
    updatedSpeed: {{ updatedSpeed }},
    <br>
    columns: "{{ gridData.columns }}",
    <br>
    rows: "{{ gridData.rows }}",
    <br>
    matrix: {{ gridData.matrix }},
    <br>
    borderSize: {{ gridData.borderSize }},
    <br>
    borderStyle: {{ gridData.borderStyle | orReturnEmptyString }},
    <br>
    transitionRate: {{ transitionRate }},
    <br>
    stopAll: {{ gridData.stopAll }},
    <br>
    xGap: {{ gridData.xGap }},
    <br>
    yGap: {{ gridData.yGap }},
    <br>
    radius: {{ gridData.radius }},
    <br>
    perspectiveValue: {{ gridData.perspectiveValue }},
    <br>
    yRotation: {{ gridData.yRotation }},
    <br>
    xRotation: {{ gridData.xRotation }},
    <br>
    zRotation: {{ gridData.zRotation }},
    <br>
    opacitySetting: {{ gridData.opacitySetting }},
    <br>template:`&#60;ul id="thegrid" class="grid-container">
    &#60;li
    class="item trans"
    v-for="block in blocks"
    :key="blocks.indexOf(block)"
    v-if="blocks.length > 1"
    >&#60;/li>
    &#60;/ul>`
    },
    <br>methods: {
    <br>getDivs() {
    <br>return document.querySelectorAll(".grid-container > li");
    <br>},
    <br>cycleElements(speed, arrayOfDomElements) {
    <br>for (let i = 0; i &#60; arrayOfDomElements.length; i++) {
    <br>if (speed == this.updatedSpeed) {
    <br>this.colorRandomizer(arrayOfDomElements[i]);
    <br>} else {
    <br>return;
    <br>}
    <br>}
    <br>},
    <br>colorRandomizer(domElement) {
    <br>if (this.isOn) {
    <br>let randomColor = Math.floor(
    <br>Math.random() * this.availableColors.length
    <br>);
    <br>let randomBorderColor = Math.floor(
    <br>Math.random() * this.availableBorderColors.length
    <br>);
    <br>domElement.style.backgroundColor = this.availableColors[randomColor];
    <br>domElement.style.borderColor = this.availableBorderColors[
    <br>randomBorderColor
    <br>];
    <br>}
    <br>},
    <br>timer(speed) {
    <br>this.stopAll = false;
    <br>let blinker = setInterval(() => {
    <br>this.cycleElements(speed, this.getDivs());
    <br>}, this.updatedSpeed);
    <br>
    },
    renderHTML(){
    let renderTarget = document.getElementById("flashyGrid");
    if(renderTarget){
    renderTarget.innerHTML = this.template;
    }
    }
    <br>},
    <br>created(){
    this.renderHTML();
    <br>this.isOn = true;
    <br>this.stopAll = false;
    <br>this.timer(this.updatedSpeed);
    }
    <br>});
    <br>
  </div>
</template>

<script>
export default {
  props: ["gridCss", "gridData", "blocks", "updatedSpeed", "transitionRate"],
  filters: {
    orReturnEmptyString(value) {
      if (value !== "") {
        return;
      }
      return '""';
    }
  }
};
</script>

<style>
</style>
