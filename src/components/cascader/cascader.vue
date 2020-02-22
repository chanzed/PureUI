<template>
  <div class="p-cascader">
    <div class="p-trigger">
      <slot></slot>
    </div>
    <div class="p-popover">
      <cascader-item v-for="item in source" :source-item="item" :key="item.name"></cascader-item>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item'
export default {
  name: "PureCascader",
  components: { CascaderItem },
  props: {
    source: {
      type: Array,
    }
  }
}
</script>

<style lang='scss' scoped>
</style>