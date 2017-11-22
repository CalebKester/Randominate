<template>
  <div id="app" class="bg-blue-darkest min-h-screen font-sans text-white">
    <header class="p-8 text-center md:text-left">
      <img src="/static/img/logo.svg" alt="Randominate" width="250" />
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "app",
  mounted() {
    this.init();
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