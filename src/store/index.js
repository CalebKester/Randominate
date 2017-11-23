import Vue from "vue";
import Vuex from "vuex";
import _isEqual from "lodash/isEqual";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    heroes: [],
    // Maybe generate this list?
    filterOptions: [
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
        property: "roles",
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
    ],
    filters: [
      // {
      //   property: "primary_attr",
      //   value: "str"
      // },
      // {
      //   property: "attack_type",
      //   value: "Melee"
      // },
      // {
      //   property: "roles",
      //   value: "Jungler"
      // }
    ]
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    setHeroes(state, list) {
      state.heroes = list;
    },
    addFilter(state, filter) {
      state.filters = [...state.filters, filter];
    },
    removeFilter(state, filter) {
      state.filters = state.filters.filter(option => !_isEqual(filter, option));
    }
    /* eslint-enable no-param-reassign */
  },
  getters: {
    // filteredHeroes: state => state.heroes
    filteredHeroes: state =>
      state.heroes.filter(hero =>
        state.filters.every(filter => {
          const property = filter.property;
          const value = filter.value;
          // console.log(`Filter ${property} value ${value} for ${hero.name}`);
          return hero[property].indexOf(value) !== -1;
        })
      )
  }
});

export default store;
