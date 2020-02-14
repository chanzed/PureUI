<template>
  <div class="col" :style="colGutter" :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PureCol',
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    }
  },
  data() {
    return {
      gutter: 0,
    }
  },
  computed: {
    colGutter() {
      const obj = {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
      return obj
    },
    colClass() {
      const { span, offset } = this
      return {
        [`col-${span}`]: span,
        [`offset-${offset}`]: offset
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;
  @for $n from 1 through 24 {
    &.col-#{$n} {
      width: $n / 24 * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.offset-#{$n} {
      margin-left: $n / 24 * 100%;
    }
  }
}
</style>