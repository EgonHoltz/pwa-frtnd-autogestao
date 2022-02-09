import Vue from "vue";
import Vuex from "vuex";
import moduleBase from "./module";
import moduleAuth from "./auth/auth.module";
import moduleUser from "./users/user.module";
import moduleCar from "./cars/car.module";


Vue.use(Vuex);

export default new Vuex.Store({
  getters: moduleBase.getters,
  mutations: moduleBase.mutations,
  state: moduleBase.state,
  actions: moduleBase.actions,
  modules: {
    auth: moduleAuth,
    user: moduleUser,
    car: moduleCar
  },
});
