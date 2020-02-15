<template>
  <div class="p-sider" v-if="visible">
    <slot></slot>
    <button @click="visible=false" v-if="closable">close</button>
  </div>
</template>

<script>
export default {
  name: 'PureSider',
  data() {
    return {
      visible: true,
    }
  },
  props: {
    closable: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  .p-sider {
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
</style>