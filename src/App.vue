<template lang="pug">
  #app(   
    class="min-h-screen p-4 md:p-8 bg-blue-darkest font-sans text-grey tracking-wide uppercase"
  )
    header(class="text-center md:text-left")
      img(
        src="/static/img/logo.svg"
        alt="Randominate" 
        width="250"
      )
    main
      hero-chooser
      .flex.flex-wrap.justify-center.mt-8
        attribute-filter(
          v-for="filter in filters"
          :key="filter.property"
          :filter="filter" 
          class="md:w-auto p-8"
        )
</template>

<script>
import axios from "axios";
import { mapState, mapMutations, mapGetters } from "vuex";
import HeroChooser from "./components/HeroChooser";
import AttributeFilter from "./components/AttributeFilter";

export default {
  components: {
    AttributeFilter,
    HeroChooser
  },
  mounted() {
    this.init();
  },
  computed: {
    ...mapState(["filters"]),
    ...mapGetters(["filteredHeroes"])
  },
  methods: {
    ...mapMutations(["setHeroes"]),
    init() {
      // console.log("here");
      const API_HEROES = "https://api.opendota.com/api/heroes";
      axios.get(API_HEROES).then(res => {
        this.setHeroes(res.data);
      });
      // .catch(e => {
      // console.warn(e);
      // });
    }
  }
};
</script>

<style lang="scss">
@import "./css/main.scss";
</style>

<style>

</style>