<template>
  <div class="theUi">
    <ui-dimensions class="dimensions"></ui-dimensions>

    <ui-rates class="rates"></ui-rates>

    <ui-gaps class="gaps"></ui-gaps>

    <ui-skew class="skew"></ui-skew>

    <ui-color class="color"></ui-color>

    <ui-border class="border"></ui-border>

    <ui-footer class="footer"></ui-footer>
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
.theUi {
  margin-top: 70px;
  display: grid;
  grid-template-columns: 20px [leftMargin] auto [uiEnd] 0.6fr;
}
.dimensions,
.rates,
.gaps {
  grid-column: 2 / span 1;
  background-color: rgba(84, 146, 247, 0.4);
}
</style>
