<template>
  <div class="theUi">
    <ui-dimensions class="dimensions flush-left-column"></ui-dimensions>

    <ui-rates class="rates flush-left-column"></ui-rates>

    <ui-gaps class="gaps flush-left-column"></ui-gaps>

    <ui-color class="color flush-left-column"></ui-color>

    <ui-border class="border flush-left-column"></ui-border>

    <ui-footer class="footer flush-left-column"></ui-footer>

    <ui-export-button class="ui-export-button flush-left-column"></ui-export-button>
  </div>
</template>

<script>
import UIdimensions from "./UIdimensions";
import UIrates from "./UIrates";
import UIgaps from "./UIgaps";
import UIcolor from "./UIcolor";
import UIborder from "./UIborder";
import UIfooter from "./UIfooter";
import UIExportButton from "./UIexportButton";

export default {
  components: {
    "ui-dimensions": UIdimensions,
    "ui-rates": UIrates,
    "ui-gaps": UIgaps,
    "ui-color": UIcolor,
    "ui-border": UIborder,
    "ui-footer": UIfooter,
    "ui-export-button": UIExportButton
  }
};
</script>

<style scoped>
.theUi {
  margin-top: 67px;
  display: grid;
  grid-template-columns: 20px [leftMargin] auto [uiEnd] 0.8fr;
  grid-template-rows: 70px [topMargin] auto [dimension-rate-line] auto [rate-gap-line] auto [gap-skew-line] auto;
}
.flush-left-column {
  grid-column: 2 / uiEnd;
}
.dimensions {
  grid-row: topMargin / 1;
}
.rates {
  grid-row: dimension-rate-line / 2;
}
</style>
