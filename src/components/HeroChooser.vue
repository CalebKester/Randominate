<template>
  <div>
    <div :class="$style.container">
      <div :class="$style.wrap" :style="carousel">
        <div 
          v-for="(hero, index) in list" 
          :key="hero.id"
          :class="$style.hero"
          :style="getTransform(index)"
          >
          <img
            :src="`/static/img/assets/${hero.name}.png`" 
          />
            <!-- :alt="hero.localized_name"  
            width="256"
            height="144" -->
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="bg-green p-4" @click="addHero(-1)">-</button>
      <button class="bg-red p-4" @click="rotate(5)">Spin to win</button>
      <button class="bg-green p-4" @click="addHero(1)">+</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      width: 208,
      count: 7,
      current: 1
    };
  },
  computed: {
    ...mapState(["heroes"]),
    list() {
      if (this.heroes) {
        return this.heroes.slice(0, this.count);
      }
      return [];
    },
    θ() {
      return 360 / this.count;
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
    rotate() {
      const random = Math.round(Math.random() * (this.count - 1) + this.count);
      this.current = this.current + random;
    },
    addHero(count = 1) {
      this.count = this.count + count;
    }
  }
};
</script>
// https://www.youtube.com/watch?v=8WLiOXfXF1w

<style module>
.container {
  width: 210px;
  height: 140px;
  position: relative;
  margin: 0 auto 40px;
  border: 1px solid #ccc;
  perspective: 1100px;
}
.wrap {
  /* position: relative;
  height: 144px;
  width: 800px;
  margin: 0 auto;
  background: hsla(0, 0%, 0%, 0.2);
  transform-style: preserve-3d; */

  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 1s;
  transform-style: preserve-3d;
}
.hero {
  display: block;
  position: absolute;
  width: 186px;
  height: 116px;
  left: 10px;
  top: 10px;
  border: 2px solid black;
  line-height: 116px;
  font-size: 80px;
  font-weight: bold;
  color: white;
  text-align: center;

  img {
    width: 186px;
    height: 116px;
  }
}
</style>