<template>
  <div class="p-container" :class="{ hasSider: hasSider }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasSider: false
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'PureSider') {
        this.hasSider = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .p-container {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>