<template>
  <div id="app">
    <p>{{selected}}</p>
    <cascader :source="sourceItem" popoverHeight="300" :selected="selected" @update:selected="selected=$event"></cascader>
  </div>
</template>

<script>
import Vue from 'vue'
import Button from './components/button/button.vue'
import Icon from './components/icon/icon.vue'
import ButtonGroup from './components/button/buttonGroup.vue'
import Input from './components/input/input.vue'
import Row from './components/grid/row.vue'
import Col from './components/grid/col.vue'
import Container from './components/container/container.vue'
import Header from './components/container/header.vue'
import Content from './components/container/content.vue'
import Footer from './components/container/footer.vue'
import Sider from './components/container/sider.vue'
import Toast from './components/toast/toastPlugin'
import Tabs from './components/tabs/tabs.vue'
import TabsHead from './components/tabs/tabs-head.vue'
import TabsItem from './components/tabs/tabs-item.vue'
import TabsBody from './components/tabs/tabs-body.vue'
import TabsPane from './components/tabs/tabs-pane.vue'
import Popover from './components/popover/popover.vue'
import Cascader from './components/cascader/cascader.vue'
import CascaderItem from './components/cascader/cascader-item.vue'
export default {
  name: 'App',
  components: {
    Cascader,
  },
  data() {
    return {
      selected: [],
      sourceItem: [
        {
          name: '广东省',
          children: [
            { name: '广州市', children: [{ name: '越秀区' }, { name: '番禺区' }, { name: '黄浦区', }], },
            { name: '肇庆市', children: [{ name: '高要区' }, { name: '鼎湖区' }, { name: '端州区', }], },
          ],
        },
        {
          name: '浙江省',
          children: [
            { name: '杭州市', children: [{ name: '上城区' }, { name: '下城区' }, { name: '余杭区', }], },
            { name: '温州市', children: [{ name: '鹿城区' }, { name: '龙湾区' }, { name: '洞头区', }], },
          ],
        },
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  margin: 20px;
}
</style>
