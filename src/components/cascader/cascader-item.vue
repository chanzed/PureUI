<template>
  <div class="cascader-item" :style="{ height: height + 'px' }">
    <div class="left">
      <div>selected: {{selected && selected[level] && selected[level].name}} level: {{level}}</div>
      <div class="label" v-for="(item, index) in source" :key="index" @click="onClickLabel(item)">
        {{item.name}}
        <p-icon name="right" v-if="item.children" class="icon"></p-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :source="rightItems" :height="height" :level="level + 1" :selected="selected" @update:selected="onUpdateSelected"></cascader-item>
    </div>
  </div>
</template>

<script>
import Icon from "../icon/icon"
export default {
  name: "CascaderItem",
  components: { "p-icon": Icon, },
  props: {
    source: {
      type: Array,
    },
    height: {
      type: String,
      default: '200',
    },
    selected: {
      type: Array,
      default: () => { return [] }
    },
    level: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      slectedItem: null,
    }
  },
  computed: {
    rightItems() {
      const currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children) {
        return currentSelected.children
      }
    }
  },
  methods: {
    onClickLabel(item) {
      const copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  },
  mounted() {
    console.log(this.height)
  },
}
</script>

<style lang='scss' scoped>
@import "../../assets/_var.scss";
.cascader-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .left {
    height: 100%;
  }
  .right {
    border-left: 1px solid #ddd;
  }
  .label {
    padding: 0.3em 1em;
    display: flex;
    align-items: center;
  }
  .icon {
    transform: scale(0.7);
    margin-left: 0.5em;
  }
}
</style>