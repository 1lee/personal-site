<template>
  <div>
    #thegrid { {{ gridCss }} }
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
    <br>new Vue({
    <br>el: '#thegrid',
    <br>
    data: { gridSize: {{ gridSize }},
    <br>
    height: {{ height }},
    <br>
    width: {{ width }},
    <br>
    blocks: {{ blocks }},
    <br>
    isOn: {{ isOn }},
    <br>
    inputColor: {{ inputColor | orReturnEmptyString }},
    <br>
    inputBorderColor: {{ inputBorderColor | orReturnEmptyString}},
    <br>
    availableColors: {{ availableColors}},
    <br>
    availableBorderColors: {{ availableBorderColors}},
    <br>
    updatedSpeed: {{ updatedSpeed }},
    <br>
    columns: "{{ columns }}",
    <br>
    rows: "{{ rows }}",
    <br>
    matrix: {{ matrix }},
    <br>
    borderSize: {{ borderSize }},
    <br>
    borderColor: {{ borderColor | orReturnEmptyString}},
    <br>
    borderStyle: {{ borderStyle | orReturnEmptyString}},
    <br>
    transitionRate: {{ transitionRate }},
    <br>
    stopAll: {{ stopAll }},
    <br>
    xGap: {{ xGap }},
    <br>
    yGap: {{ yGap }},
    <br>
    radius: {{ radius }},
    <br>
    perspectiveValue: {{ perspectiveValue }},
    <br>
    yRotation: {{ yRotation }},
    <br>
    xRotation: {{ xRotation }},
    <br>
    zRotation: {{ zRotation }},
    <br>
    opacitySetting: {{ opacitySetting }},
    <br>template:`&#60;ul id="thegrid" class="grid-container">
    &#60;li
    class="item"
    v-for="block in blocks"
    :key="blocks.indexOf(block)"
    v-if="blocks.length > 1"
    >&#60;/li>
    &#60;/ul>`
    },
    <br>computed: {
    <br>nodeCrawl() {
    <br>this.isOn = true;
    <br>this.stopAll = false;
    <br>this.timer(this.updatedSpeed);
    <br>}
    <br>},
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
    <br>
    created(){
    this.renderHTML();
    this.nodeCrawl();
    }
    <br>});
    <br>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
