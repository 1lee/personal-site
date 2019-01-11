<template>
  <div class="theUi">
    <img class="texture" src="../../../assets/carbon-fiber.jpg" alt>
    <ui-dimensions class="dimensions flush-left-column"></ui-dimensions>

    <ui-rates class="rates flush-left-column"></ui-rates>

    <ui-gaps class="gaps flush-left-column"></ui-gaps>

    <ui-skew class="skew flush-left-column"></ui-skew>

    <ui-color class="color flush-left-column"></ui-color>

    <ui-border class="border flush-left-column"></ui-border>

    <ui-footer class="footer flush-left-column"></ui-footer>
  </div>
</template>

<script>
import UIdimensions from "./UIdimensions";
import UIrates from "./UIrates";
import UIgaps from "./UIgaps";
import UIskew from "./UIskew";
import UIcolor from "./UIcolor";
import UIborder from "./UIborder";
import UIfooter from "./UIfooter";

export default {
  components: {
    "ui-dimensions": UIdimensions,
    "ui-rates": UIrates,
    "ui-gaps": UIgaps,
    "ui-skew": UIskew,
    "ui-color": UIcolor,
    "ui-border": UIborder,
    "ui-footer": UIfooter
  }
};
</script>

<style scoped>
.texture {
  opacity: 0.6;
}
.theUi {
  margin-top: 70px;
  display: grid;
  grid-template-columns: 20px [leftMargin] auto [uiEnd] 0.8fr;
  grid-template-rows: 70px [topMargin] auto [dimension-rate-line] auto [rate-gap-line] auto [gap-skew-line] auto;
  overflow: hidden;
}
.flush-left-column {
  grid-column: 2 / span 1;
}
.dimensions {
  grid-row: topMargin / 1;
}
.rates {
  grid-row: dimension-rate-line / 2;
}
</style>
