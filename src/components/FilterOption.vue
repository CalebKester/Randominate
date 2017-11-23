<template lang="pug">
  x-button(
    :color="color"
    @click="handleChange"
  ) {{option.name}}
</template>

<script>
import XButton from "./X-Button";

export default {
  components: {
    XButton
  },
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    option: {
      type: Object,
      required: true,
      validator: v => v.name && v.property
    }
    // checked: {
    //   type: Boolean,
    //   default: false
    // }
  },
  computed: {
    color() {
      if (this.checked) {
        return "text";
      }
      return "inactive";
    }
  },
  data() {
    return {
      checked: false
    };
  },
  methods: {
    handleChange() {
      this.checked = !this.checked;
      this.$emit("check", this.checked);
    }
  }
};
</script>

<style module>

</style>