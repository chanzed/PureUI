<template>
  <div class="popover">
    <div
      class="content-wrapper"
      :class="`position-${position}`"
      ref="contentWrapper"
      v-if="visible"
      @mouseenter="clearTimer"
      @mouseleave="delayClose"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="trigger-wrapper">
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
      timer: "",
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.triggerWrapper.addEventListener("click", this.onClick)
    } else {
      this.$refs.triggerWrapper.addEventListener("mouseenter", this.open)
      this.$refs.triggerWrapper.addEventListener("mouseleave", this.delayClose)
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.triggerWrapper && this.$refs.triggerWrapper.removeEventListener("click", this.onClick)
    } else {
      this.$refs.triggerWrapper && this.$refs.triggerWrapper.removeEventListener("mouseenter", this.open)
      this.$refs.triggerWrapper && this.$refs.triggerWrapper.removeEventListener("mouseleave", this.delayClose)
    }
  },
  methods: {
    eventHandler(event) {
      const { contentWrapper, triggerWrapper } = this.$refs
      const targetInContent = contentWrapper && contentWrapper.contains(event.target)
      const targetInTrigger = triggerWrapper && triggerWrapper.contains(event.target)
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
      if (this.timer) {
        window.clearTimeout(this.timer);
      }
      this.visible = true
      this.$nextTick(() => {
        this.positionPopover()
        document.addEventListener('click', this.eventHandler)
      })
    },
    positionPopover() {
      const { contentWrapper, triggerWrapper } = this.$refs
      document.body.append(contentWrapper)
      const { top, left, height: ht, width: tw } = triggerWrapper.getBoundingClientRect()
      const { height: hc } = contentWrapper.getBoundingClientRect()
      const positions = {
        top: { top: top + scrollY, left: left + scrollX, },
        bottom: { top: top + scrollY + ht, left: left + scrollX, },
        left: { top: top + scrollY - (hc - ht) / 2, left: left + scrollX, },
        right: { top: top + scrollY - (hc - ht) / 2, left: left + scrollX + tw, },
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'
    },
    delayClose(event) {
      this.timer = setTimeout(() => {
        this.close()
      }, 200)
    },
    clearTimer() {
      window.clearTimeout(this.timer)
    },
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
  position: absolute;
  max-width: 20em;
  word-break: break-all;
  // box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.75);
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.75));
  background-color: white;
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::after,
    &::before {
      position: absolute;
      display: block;
      content: "";
      border: 10px solid transparent;
      top: calc(100% - 1px);
      border-top-color: white;
    }
    &::before {
      border-top-color: #999;
      top: 100%;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::after,
    &::before {
      position: absolute;
      display: block;
      content: "";
      border: 10px solid transparent;
      bottom: calc(100% - 1px);
      border-bottom-color: white;
    }
    &::before {
      border-bottom-color: #999;
      bottom: 100%;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::after,
    &::before {
      position: absolute;
      display: block;
      content: "";
      border: 10px solid transparent;
      border-left-color: white;
      left: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-left-color: #999;
      left: 100%;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::after,
    &::before {
      position: absolute;
      display: block;
      content: "";
      border: 10px solid transparent;
      border-right-color: white;
      right: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-right-color: #999;
      right: 100%;
    }
  }
}
</style>