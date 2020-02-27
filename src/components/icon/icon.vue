<template>
  <svg class="icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
import '../../assets/svg.js'
export default {
  props: ['name'],
}
</script>

<style lang='scss' scoped>
  .icon {
    width: 1em;
    height: 1em;
  }
</style>