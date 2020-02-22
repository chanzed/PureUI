<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :disabled="disabled" :value="value" :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @input="$emit('input', $event.target.value)"
     />
    <template v-if="error">
      <p-icon class="error-icon" name="error"></p-icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from '../icon/icon'
export default {
  components: {
    'p-icon': Icon,
  },
  props: {
    value: {
      type: String,
    },
    readonly: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    error: {
      type: String,
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../assets/_var';
$red: #f14500;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[readonly],
    &[disabled] {
      cursor: not-allowed;
      border-color: #bbb;
      color: #bbb;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
    > :not(:last-child) {
      margin-right: 0.5em;
    }
    .error-icon {
      fill: $red;
    }
    .error-message {
      color: $red;
    }
  }
}
</style>