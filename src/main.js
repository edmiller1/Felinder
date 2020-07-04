import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js";
import VueSwing from "vue-swing";
import {
  Modal
} from 'buefy';
import 'buefy/dist/buefy.css';


Vue.use(Modal);
Vue.config.productionTip = false;
Vue.component('vue-swing', VueSwing);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");