<template>
  <div class="p-cascader-item">
    {{sourceItem.name}}
    <template v-if="sourceItem.children">
      <cascader-item v-for="item in sourceItem.children" :key="item.name" :sourceItem="item"></cascader-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "CascaderItem",
  props: {
    sourceItem: {
      type: Object,
    }
  }
}
</script>

<style lang='scss' scoped>
.p-cascader-item {
  border: 1px solid red;
  padding: 10px;
}
</style>