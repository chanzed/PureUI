<template>
  <div class="tabs-head" ref='head'>
    <slot></slot>
    <div class="line" ref='line'></div>
  </div>
</template>

<script>
  export default {
    name: "PureTabsHead",
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (item, vm) => {
        const { width, left } = vm.$el.getBoundingClientRect()
        const { left: left2 } = this.$refs.head.getBoundingClientRect()
        const line = this.$refs.line
        line.style.width = width + 'px'
        line.style.left = left - left2 + 'px'
      })
    },
  }
</script>

<style lang='scss' scoped>
.tabs-head {
  border-bottom: 1px solid #ddd;
  display: flex;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid blue;
    transition: all 0.3s;
  }
}
</style>