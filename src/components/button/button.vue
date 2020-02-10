<template>
  <button class="p-button" :class="`icon-${iconPosition}`">
    <p-icon class='icon' :name='icon'></p-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'right'].includes(value)
      }
    }
  },
}
</script>

<style lang='scss'>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
.p-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 0.7em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  &.icon-left {
    .content {
      order: 2;
    }
    .icon {
      order: 1;
      margin-right: 0.3em;
    }
  }
  &.icon-right {
    .content {
      order: 1;
    }
    .icon {
      order: 2;
      margin-left: 0.3em;
    }
  }
}
</style>