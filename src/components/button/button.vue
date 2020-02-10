<template>
  <button class="p-button" :class="`icon-${iconPosition}`" @click="$emit('click')">
    <p-icon v-if="icon && !loading" :name="icon"></p-icon>
    <p-icon v-if="loading" name="loading" class="loading"></p-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: String,
    loading: {
      type: Boolean,
    },
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

<style lang='scss' scoped>
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
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>