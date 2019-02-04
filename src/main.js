import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";
import VueDisqus from "vue-disqus";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueDisqus);

const router = new VueRouter({
  routes
});
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
