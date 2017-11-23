<template lang="pug">
  div
    h2.mb-8.text-xs.uppercase {{filter.name}}
    ul.list-reset
      li(v-for="option in filter.options").mb-8
        filter-option(
          :option="option"
          @check="toggleFilter($event, option)"
        )
</template>

<script>
import { mapMutations } from "vuex";
import FilterOption from "./FilterOption";

export default {
  components: {
    FilterOption
  },
  props: {
    filter: {
      type: Object,
      required: true,
      validator: v => v.name && v.property
    },
    activeFilters: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapMutations(["addFilter", "removeFilter"]),
    // checkFilter(filter) {
    //   return (
    //     this.activeFilters.find(
    //       f => this.filter.property === f.property && filter.value === f.value
    //     ) !== undefined
    //   );
    // },
    toggleFilter(value, option) {
      if (value) {
        // console.log("add", option);
        this.addFilter({
          property: this.filter.property,
          value: option.property
        });
      } else {
        console.log("remove");
        this.removeFilter({
          property: this.filter.property,
          value: option.property
        });
      }
    }
  }
};
</script>
