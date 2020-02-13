<template>
  <div class="col" :class="span && `col-${span}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PureCol',
  props: {
    span: {
      type: [Number, String],
    }
  }
}
</script>

<style lang="scss" scoped>
  .col {
    width: 50%;
    border: 1px solid green;
    @for $n from 1 through 24 {
      &.col-#{$n} {
        width: $n / 24 * 100%;
      }
    }
  }
</style>