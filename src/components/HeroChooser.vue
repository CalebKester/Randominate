// https://desandro.github.io/3dtransforms/examples/carousel-02-dynamic.html
// https://www.youtube.com/watch?v=8WLiOXfXF1w

<template lang="pug">
  .mt-8
    div(
      :class="$style.container"
      :style="perspective"
    )

      div(
        v-if="heroes.length === 0"
        class="bg-blue-darkest flex items-center justify-center absolute pin text-5xl"
      ) ?
      div(:class="$style.wrap" :style="carousel")
        div(
          v-for="(hero, index) in heroes" 
          :key="hero.id"
          :class="$style.hero"
          class="bg-blue-darkest"
          :style="getTransform(index)"
        ) 
          img(
            :src="`/static/img/assets/${hero.name}.png`" 
            width="256"
            height="144"
          )
    .text-center.mt-8
      x-button(
        @click="rotate()"
        :class="$style.button"
      ) Spin
</template>

<script>
import XButton from "./X-Button";

export default {
  components: {
    XButton
  },
  props: {
    heroes: {
      type: Array,
      default: () => []
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      width: 276,
      current: 1
    };
  },
  computed: {
    θ() {
      return 360 / this.count;
    },
    perspective() {
      // Magic, I dunno what these numbers mean
      // smaller numbers are good for lots of crap
      // larger numbers are good for a few craps
      // needless to say, I don't give a crap.
      const ratio = 1 - this.count / 100;
      const num = 1100 * ratio + 100;
      return `perspective: ${num}px`;
    },
    count() {
      return this.heroes.length;
    },
    radius() {
      return Math.round(this.width / 2 / Math.tan(Math.PI / this.count));
    },
    carousel() {
      const deg = this.current * (this.θ * -1);
      return `transform: translateZ(-${this.radius}px) rotateY(${deg}deg);`;
    }
  },
  methods: {
    getTransform(index) {
      const angle = this.θ * index;
      // return `transform: rotateY(${angle}deg) translateZ(${this.radius}px)`;
      return `transform: rotateY(${angle}deg) translateZ(${this.radius}px)`;
    },
    playAudio() {
      const audio = new Audio("/static/spin.mp3");
      audio.play();
    },
    rotate() {
      this.playAudio();
      const random = Math.round(Math.random() * (this.count - 1) + this.count);
      this.current = this.current + random;
    }
  }
};
</script>

<style module>
.container {
  width: 276px;
  height: 144px;
  position: relative;
  margin: 0 auto 40px;
  perspective: 1100px;
}
.wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 6s;
  transform-style: preserve-3d;
}
.hero {
  /* backface-visibility: hidden; */
  display: block;
  position: absolute;
  width: 256px;
  height: 144px;
  left: 0px;
  top: 0px;
}

.button {
  width: 256px;
}
</style>