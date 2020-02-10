<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`p-button-group 的子元素只能是 p-button, 但你写的是 ${name}`)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
$border-radius: 4px;
.button-group {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  > .p-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>