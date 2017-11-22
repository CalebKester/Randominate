import Vue from "vue";
import Router from "vue-router";
import HeroChooser from "@/components/HeroChooser";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HeroChooser",
      component: HeroChooser
    }
  ]
});
