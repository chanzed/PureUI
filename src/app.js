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

new Vue({
    el: '#app',
    data: {
        loading1: true,
        message: 'hi'
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
