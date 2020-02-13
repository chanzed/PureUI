import Vue from 'vue'
import Button from './components/button/button.vue'
import Icon from './components/icon/icon.vue'
import ButtonGroup from './components/button/buttonGroup.vue'
import Input from './components/input/input.vue'
import Row from './components/grid/row.vue'
import Col from './components/grid/col.vue'

Vue.component('p-button', Button)
Vue.component('p-icon', Icon)
Vue.component('p-button-group', ButtonGroup)
Vue.component('p-input', Input)
Vue.component('p-row', Row)
Vue.component('p-col', Col)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        message: 'hi'
    },
})
