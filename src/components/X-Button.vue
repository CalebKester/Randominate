<template lang="pug">
  button(
    type="button"
    @click="click"
    class="py-3 px-6 transition uppercase outline-none"
    :class="colorClass"
  )
    slot
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "orange",
      validator: value => ["orange", "text", "inactive"].indexOf(value) !== -1
    }
  },
  computed: {
    colorClass() {
      const colors = {
        orange: "bg-orange text-grey hover:bg-orange-dark",
        text: "text-grey hover:text-grey-darker",
        inactive: "text-grey-darker hover:text-grey"
      };
      return colors[this.color];
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>