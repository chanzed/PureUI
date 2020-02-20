<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "PureTabs",
  props: {
    selected: {
      type: [String, Number],
    }
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  mounted() {
    this.$children.forEach(childVm => {
      if (childVm.$options.name === 'PureTabsHead') {
        childVm.$children.forEach(child => {
          if (child.$options.name === 'PureTabsItem' && child.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, child)
          }
        })
      }
    })
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  }

}
</script>

<style lang='scss' scoped>
.tabs {
}
</style>    

