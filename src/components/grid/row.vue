<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PureRow',
  
}
</script>

<style lang='scss' scoped>
  .row {
    border: 1px solid black;
    height: 100px;
    width: 50vw;
    background-color: grey;
    display: flex;
  }
</style>