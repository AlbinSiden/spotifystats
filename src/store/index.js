import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// I wanted to use store but on path change store cleared? Decided on localstorage instead because the spotify api token isnt valuable.
// https://forum.vuejs.org/t/vuex-state-data-change-after-route-change/6562

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    mutateUser(state, payload) {
      state.user = payload;
    },
  },
  getters: {
    token: (state) => {
      return state.user;
    },
  },
});
