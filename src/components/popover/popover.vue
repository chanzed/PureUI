<template>
  <div class="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="trigger-wrapper" @click="onClick">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'PurePopover',
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    eventHandler(event) {
      const targetInContent = this.$refs.contentWrapper && this.$refs.contentWrapper.contains(event.target)
      const targetInTrigger = this.$refs.triggerWrapper && this.$refs.triggerWrapper.contains(event.target)
      if (!targetInContent && !targetInTrigger) {
        this.close()
      }
    },
    onClick() {
      if (this.visible) {
        this.close()
      } else {
        this.open()
      }
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.eventHandler)
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionPopover()
        document.addEventListener('click', this.eventHandler)
      })
    },
    positionPopover() {
      const contentWrapper = this.$refs.contentWrapper
      const triggerWrapper = this.$refs.triggerWrapper
      document.body.append(contentWrapper)
      const { top, left } = triggerWrapper.getBoundingClientRect()
      contentWrapper.style.left = left + scrollX + 'px'
      contentWrapper.style.top = top + scrollY + 'px'
    }
  }
}
</script>

<style lang='scss' scoped>
.popover {
  display: inline-flex;
}
.content-wrapper {
  border: 1px solid red;
  position: absolute;
  transform: translateY(-100%);
}
</style>