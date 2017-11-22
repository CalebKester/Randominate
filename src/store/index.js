import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    heroes: [],
    // Maybe generate this list?
    filters: [
      {
        name: "Attribute",
        property: "primary_attr",
        options: [
          {
            name: "Strength",
            property: "str"
          },
          {
            name: "Agility",
            property: "agi"
          },
          {
            name: "Intelligence",
            property: "int"
          }
        ]
      },
      {
        name: "Type",
        property: "role",
        options: [
          {
            name: "Nuker",
            property: "Nuker"
          },
          {
            name: "Disabler",
            property: "Disabler"
          },
          {
            name: "Durable",
            property: "Durable"
          },
          {
            name: "Escape",
            property: "Escape"
          },
          {
            name: "Pusher",
            property: "Pusher"
          },
          {
            name: "Initiator",
            property: "Initiator"
          }
        ]
      },
      {
        name: "Attack Type",
        property: "attack_type",
        options: [
          {
            name: "Ranged",
            property: "Ranged"
          },
          {
            name: "Melee",
            property: "Melee"
          }
        ]
      }
    ]
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    setHeroes(state, list) {
      state.heroes = list;
    }
    /* eslint-enable no-param-reassign */
  },
  getters: {
    filteredHeroes: state => state.heroes
  }
});

export default store;
