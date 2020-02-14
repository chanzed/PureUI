<template>
  <div class="row" :style="rowStyle" :class="{[`align-${align}`]: align}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PureRow',
  props: {
    gutter: {
      type: [String, Number],
    },
    align: {
      type: String,
      validator(value) {
        return ['left', 'right', 'center'].includes(value)
      }
    }
  },
  computed: {
    rowStyle() {
      return {
        'margin-left': -this.gutter / 2 + 'px',
        'margin-right': -this.gutter / 2 + 'px',
      }
    },
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style lang='scss' scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>