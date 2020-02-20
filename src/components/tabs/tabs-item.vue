<template>
  <div class="tabs-item" :class="classes" @click="updateSelected" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "PureTabsItem",
    inject: ['eventBus'],
    props: {
      name: {
        type: [String, Number],
        required: true,
      },
      disabled: {
        type: Boolean, 
        default: false,
      }
    },
    data() {
      return {
        active: false, 
      }
    },
    computed: {
      classes() {
        return {
          disabled: this.disabled,
          active: this.active,
        }
      }
    },
    methods: {
      updateSelected() {
        if (this.disabled) {
          return 
        }
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
      }
    },
    mounted() {
      this.eventBus && this.eventBus.$on('update:selected', (name, vm) => {
        this.active = (name === this.name)
      })
    }
  }
</script>

<style lang='scss' scoped>
  .tabs-item {
    padding: 0.5em 2em;
    cursor: pointer;
    user-select: none;
    &.active {
      font-weight: bold;
      color: blue;
    }
    &.disabled {
      color: grey;
      cursor: not-allowed;
    }
  }
</style>