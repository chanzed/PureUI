<template>
  <div class="p-toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PureToast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: false,
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoClose * 1000)
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    },
  },
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
.p-toast {
  font-size: $font-size;
  padding: 0.5em 1em;
  border: 1px solid red;
  justify-content: center;
  line-height: 1.5;
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>