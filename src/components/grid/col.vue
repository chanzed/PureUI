<template>
  <div class="col" :style="colGutter" :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
const validator = (value) => {
  const keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: 'PureCol',
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    ipad: {
      type: Object,
      validator: validator,
    },
    narrowPc: {
      type: Object,
      validator: validator
    },
    pc: {
      type: Object,
      validator: validator
    },
    widePc: {
      type: Object,
      validator: validator
    },
    extraPc: {
      type: Object,
      validator: validator
    }
  },
  data() {
    return {
      gutter: 0,
    }
  },
  methods: {
    createClass(obj, device) {
      if (obj) {
        return {
          [`col-${device}-${obj.span}`]: obj.span,
          [`offset-${device}-${obj.offset}`]: obj.offset,
        }
      }
    },
  },
  computed: {
    colGutter() {
      const obj = {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
      return obj
    },
    colClass() {
      const { span, offset, ipad, pc, narrowPc, extraPc, widePc } = this
      return {
        [`col-${span}`]: span,
        [`offset-${offset}`]: offset,
        ...this.createClass(ipad, 'ipad'),
        ...this.createClass(narrowPc, 'narrow-pc'),
        ...this.createClass(pc, 'pc'),
        ...this.createClass(widePc, 'wide-pc'),
        ...this.createClass(extraPc, 'extra-pc'),
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;
  @for $n from 1 through 24 {
    &.col-#{$n} {
      width: $n / 24 * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.offset-#{$n} {
      margin-left: $n / 24 * 100%;
    }
  }
  $devices: (
    "ipad": "577px",
    "narrow-pc": "769px",
    "pc": "993px",
    "wide-pc": "1200px",
    "extra-pc": "1600px"
  );
  @each $device, $pixel in $devices {
    @media (min-width: $pixel) {
      @for $n from 1 through 24 {
        &.col-#{$device}-#{$n} {
          width: $n / 24 * 100%;
        }
        &.offset-#{$device}-#{$n} {
          margin-left: $n / 24 * 100%;
        }
      }
    }
  }
}
</style>