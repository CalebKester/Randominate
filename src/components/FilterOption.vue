<template lang="pug">
  label.uppercase
    input(
      type="checkbox"
      @change="handleChange"
      :checked="checked"
    )
    span {{option.name}}
</template>

<script>
export default {
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
  data() {
    return {
      checked: false
    };
  },
  methods: {
    handleChange() {
      // console.log("hit");
      this.checked = !this.checked;
      this.$emit("check", this.checked);
    }
  }
};
</script>

<style module>

</style>