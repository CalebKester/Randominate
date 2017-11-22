import Vue from "vue";
import Router from "vue-router";
import Lifting from "@/components/Lifting";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Lifting",
      component: Lifting
    }
  ]
});
