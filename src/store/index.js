import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    heroes: []
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    setHeroes(state, list) {
      state.heroes = list;
    }
    /* eslint-enable no-param-reassign */
  }
});

export default store;
