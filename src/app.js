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

Vue.use(Toast)


Vue.component('p-button', Button)
Vue.component('p-icon', Icon)
Vue.component('p-button-group', ButtonGroup)
Vue.component('p-input', Input)
Vue.component('p-row', Row)
Vue.component('p-col', Col)
Vue.component('p-container', Container)
Vue.component('p-header', Header)
Vue.component('p-content', Content)
Vue.component('p-footer', Footer)
Vue.component('p-sider', Sider)
Vue.component('p-tabs', Tabs)
Vue.component('p-tabs-head', TabsHead)
Vue.component('p-tabs-item', TabsItem)
Vue.component('p-tabs-body', TabsBody)
Vue.component('p-tabs-pane', TabsPane)
Vue.component('p-popover', Popover)
Vue.component('p-cascader', Cascader)
Vue.component('p-cascader-item', CascaderItem)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        message: 'hi',
        selected: 'sports',
        sourceItem: [
            {
                name: '广东省',
                children: [
                    { name: '广州市', children: [{ name: '越秀区'}, {name: '番禺区'}, {name: '黄浦区', }], },
                    { name: '肇庆市', children: [{ name: '高要区'}, {name: '鼎湖区'}, {name: '端州区', }], },
                ],
            },
            {
                name: '浙江省',
                children: [
                    { name: '杭州市', children: [{ name: '上城区'}, {name: '下城区'}, {name: '余杭区', }], },
                    { name: '温州市', children: [{ name: '鹿城区'}, {name: '龙湾区'}, {name: '洞头区', }], },
                ],
            },
        ]
    },
    methods: {
        showToast1() {
            this.$toast('你的名字', {
                autoClose: false,
                position: 'top',
                closeButton: {
                    text: '充值',
                }
            })
        },
        showToast2() {
            this.$toast('你的名字', {
                autoClose: false,
                position: 'bottom',
                closeButton: {
                    text: '充值',
                }
            })
        },
        showToast3() {
            this.$toast('<a href="https://www.baidu.com">百度一下你就知道</a><strong>hello world</strong>', {
                enableHTML: true,
                autoClose: false,
                position: 'middle',
                closeButton: {
                    text: '充值',
                }
            })
        }
    }
})