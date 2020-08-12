import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import store from "./store";
import router from "./routes";
import VueCookies from "vue-cookies";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueCookies);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
