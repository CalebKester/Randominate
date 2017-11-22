<template lang="pug">
  button(
    type="button"
    @click="click"
    class="bg-orange text-grey hover:bg-orange-dark py-3 px-6 transition"
  )
    slot
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>
