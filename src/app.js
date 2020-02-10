import Vue from 'vue'
import Button from './components/button/button.vue'
import Icon from './components/icon/icon.vue'

Vue.component('p-button', Button)
Vue.component('p-icon', Icon)
new Vue({
    el: '#app',
})