<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "PureCollapse",
  props: {
    single: {
      type: Boolean,
      default: false,
      validator(value) {
        return [false, true].indexOf(value) !== -1;
      }
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("removeSelected", name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      let index = selectedCopy.indexOf(name);
      selectedCopy.splice(index, 1);
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
    this.eventBus.$on("addSelected", name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if (this.single) {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
  }
};
</script>
<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
$border-width: 1px;
.collapse {
  border: $border-width solid $grey;
  border-radius: $border-radius;
}