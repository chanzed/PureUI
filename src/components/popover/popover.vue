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
  border: 1px solid #999;
  padding: 0.5em 1em;
  border-radius: 4px;
  margin-top: -10px;
  position: absolute;
  max-width: 40em;
  word-break: break-all;
  transform: translateY(-100%);
  // box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.75);
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.75));
  background-color: white;
  &::after {
    position: absolute;
    top: calc(100% - 1px);
    display: block;
    content: '';
    border: 10px solid transparent;
    border-top-color: white;
  }
  &::before {
    position: absolute;
    display: block;
    content: '';
    border: 10px solid transparent;
    border-top-color: #999;
    top: 100%;
  }
}
</style>