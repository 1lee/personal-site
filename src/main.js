import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";
import { dataBus } from "./components/flashy-grid/busMethods.js";

Vue.config.productionTip = false;
Vue.use(VueRouter);

export const eventBus = new Vue(dataBus);

const router = new VueRouter({
  routes
});
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
