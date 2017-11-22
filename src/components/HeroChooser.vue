<template>
  <div>
    <div v-for="hero in heroes" :key="hero.id">
      <img :src="`/static/img/assets/${hero.name}.png`" :alt="hero.localized_name"  />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      weight: 225,
      percent: 50
    };
  },
  computed: {
    ...mapState(["heroes"]),
    result() {
      return Math.round(this.weight * this.percent / 100);
    }
  },
  methods: {
    handleAdjustWeight(amount = 5) {
      this.weight = this.weight + amount;
    }
  }
};
</script>

<style module>
.text {
  font-size: 20vw;
}
.text-small {
  font-size: 5vw;
}
</style>