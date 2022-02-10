import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from 'moment';
import jQuery from "jquery";
global.jQuery = jQuery;
global.jquery = jQuery; // jquery lowercase was the solution for me
global.$ = jQuery;
import BootstrapVue from 'bootstrap-vue'
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'mdbvue/lib/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueSimpleAlert from "vue-simple-alert";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjsWrpNXhJhJuqTWCjw6P9GmYQVjvAtxA",
  authDomain: "autogestao-e3d48.firebaseapp.com",
  projectId: "autogestao-e3d48",
  storageBucket: "autogestao-e3d48.appspot.com",
  messagingSenderId: "737130986098",
  appId: "1:737130986098:web:bc63c61f72b03f6e5be0eb",
  measurementId: "G-F4LM8RDHZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

Vue.use(BootstrapVue)
Vue.use(VueSimpleAlert)

Vue.config.productionTip = false;

Vue.filter('formatDateHours', function(value) {
  if (value) {
      return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});

Vue.filter('formatDate', function(value) {
  if (value) {
      return moment(String(value)).format('MM/DD/YYYY')
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
