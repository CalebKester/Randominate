<template lang="pug">
  div
    h2.mb-8.text-xs.uppercase {{filter.name}}
    ul.list-reset
      li(v-for="option in filter.options").mb-8
        .uppercase {{option.name}}
</template>

<script>
export default {
  props: {
    filter: {
      type: Object,
      required: true,
      validator: v => v.name && v.property
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>
