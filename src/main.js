import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery"
global.jQuery = jQuery
global.jquery = jQuery // jquery lowercase was the solution for me
global.$ = jQuery
import 'mdbvue/lib/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.css'

//Vue.use(bootstrap)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
