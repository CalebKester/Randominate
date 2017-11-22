<template>
  <!-- <div class="absolute pin-b pin-x"> -->
  <div class="absolute pin-b pin-x">
    <div class="p-4 mb-8">
      <div :class="$style.text" class="flex mr-auto ml-auto">
        <button
          @click="handleAdjustWeight(-5)"
          class="w-auto text-white ml-auto text-indigo-light"
          type="button"
        >&minus;</button>
        <div
          class="w-1/2 text-center text-indigo-lightest"
        >{{ weight }}</div>
        <button
          @click="handleAdjustWeight(5)"
          class="w-auto text-white mr-auto text-indigo-light"
          type="button"
        >+</button>
      </div>
      <div :class="$style['text-small']" class="text-center mt-2">MAX</div>
    </div>

    <div class="py-8 px-8 bg-indigo-darker">
      <input
        type="range"
        class="w-full"
        min="0"
        max="100"
        v-model="percent"
      />
      <div :class="$style['text-small']"  class="text-center mt-2">{{percent}}%</div>
    </div>

    <div class="p-4 bg-indigo-dark">
      <div
        :class="$style.text"
        class="text-center text-indigo-lightest"
      >{{ result }}</div>
      <div :class="$style['text-small']" class="text-center mt-2">POUNDS</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      weight: 225,
      percent: 50
    };
  },
  computed: {
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