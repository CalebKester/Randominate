<template>
  <div id="app" class="bg-indigo-darkest h-screen font-sans text-white">
    <header :class="$style.logo" class="pt-8 text-center tracking-tight">
      LiftLog
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "./css/main.scss";
</style>

<style module>
.logo {
  font-size: 16vw;
}
</style>