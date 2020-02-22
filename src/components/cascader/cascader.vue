<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover" v-if="popoverVisible">
      <cascader-item :source="source" :height="popoverHeight"></cascader-item>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item'
export default {
  name: "PureCascader",
  components: { CascaderItem },
  props: {
    source: {
      type: Array,
    },
    popoverHeight: {
      type: String,
    }
  },
  data() {
    return {
      popoverVisible: false,
    }
  },
}
</script>

<style lang='scss' scoped>
@import "../../assets/_var.scss";
.cascader {
  position: relative;
  font-size: $font-size;
  .trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }
  .popover {
    @extend .box-shadow;
    position: absolute;
    display: flex;
    flex-shrink: 0;
    top: 100%;
    background-color: #fff;
  }
}
</style>