<template>
  <div class="cascader-item" :style="{ height: height + 'px' }">
    <div class="left">
      <div class="label" v-for="(item, index) in source" :key="index" @click="slectedItem=item">
        {{item.name}}
        <p-icon name="right" v-if="item.children" class="icon"></p-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :source="rightItems" ></cascader-item>
    </div>
  </div>
</template>

<script>
import Icon from "../icon/icon"
console.log(Icon)
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
    }
  },
  data() {
    return {
      slectedItem: null,
    }
  },
  computed: {
    rightItems() {
      if (this.slectedItem && this.slectedItem.children) {
        return this.slectedItem.children
      }
    }
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