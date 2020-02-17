<template>
  <div class="wrapper" :class="`position-${position}`">
    <div class="p-toast">
      <div class="message" :class="{ line: !autoClose }">
        <slot></slot>
      </div>
      <div class="close" v-if="!autoClose" @click="close">{{this.closeButton.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PureToast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 5,
    },
    closeButton: {
      type: Object,
      default: function () {
        return {
          text: '关闭',
          callback: null,
        }
      }
    },
    position: {
      type: String,
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) !== -1
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
        console.log(typeof this.callback)
      }, this.autoClose * 1000)
    }
  },
  methods: {
    close() {
      if (typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
      this.$emit('close')
      this.$el.remove()
      this.$destroy()
      console.log('close')
    },
  },
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slide-down {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  .p-toast {
    display: flex;
    font-size: $font-size;
    align-items: stretch;
    justify-content: center;
    line-height: 1.5;
    color: white;
    background-color: rgba(0, 0, 0, 0.75);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    transform: translateX(-50%);
    .message {
      padding: 0.5em 1em;
      max-width: 20.1em;
      &.line {
        border-right: 1px solid #aaa;
      }
    }
    .close {
      padding: 0 1em;
      white-space: nowrap;
      vertical-align: middle;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &.position-bottom {
    animation: slide-up 0.3s linear;
    bottom: 0;
    .p-toast {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &.position-top {
    animation: slide-down 0.3s linear;
    top: 0;
    .p-toast {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateY(-50%);
    animation: fade-in 0.3s linear;
  }
}
</style>