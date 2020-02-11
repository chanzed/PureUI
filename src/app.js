import Vue from 'vue'
import Button from './components/button/button.vue'
import Icon from './components/icon/icon.vue'
import ButtonGroup from './components/button/buttonGroup.vue'
import Input from './components/input/input.vue'

Vue.component('p-button', Button)
Vue.component('p-icon', Icon)
Vue.component('p-button-group', ButtonGroup)
Vue.component('p-input', Input)
new Vue({
    el: '#app',
    data: {
        loading1: true,
    },
    methods: {
        xxx(event, a, b) {
            console.log('event', event)
            console.log('a', a)
            console.log('b', b)
        }
    }
})
