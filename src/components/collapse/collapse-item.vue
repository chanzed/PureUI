<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "PureCollapseItem",
  inject: ['eventBus'],
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
    }
  },
  data() {
    return {
      open: false,
    }
  },
  mounted() {
    this.eventBus.$on('update:selected', (names) => {
        if (names.indexOf(this.name) !== -1) {
          this.open = true
        } else {
          this.open = false
        }
    })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus.$emit('removeSelected', this.name)
      } else {
        this.eventBus.$emit('addSelected', this.name)
      }
    },
  }
};
</script>
<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
$border-width: 1px;
.collapse-item {
  > .title {
    border: $border-width solid $grey;
    margin-top: -$border-width;
    margin-left: -$border-width;
    margin-right: -$border-width;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 1em;
  }
  &:first-child {
    > .title {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}