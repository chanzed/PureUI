import Vue from 'vue'
import Button from './components/button/button.vue'
import Icon from './components/icon/icon.vue'
import ButtonGroup from './components/button/buttonGroup.vue'

Vue.component('p-button', Button)
Vue.component('p-icon', Icon)
Vue.component('p-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data: {
        loading1: true,
    }
})

//unit test
import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    //把button挂载到内存里
    button.$mount()
    const useElement = button.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    button.$el.remove()
    button.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true,
        }
    })
    //把button挂载到内存里
    button.$mount()
    const useElement = button.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'loading',
            iconPosition: 'right',
        }
    })
    //把button挂载到内存里
    button.$mount(div)
    const svg = button.$el.querySelector('svg')
    const { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'loading',
            iconPosition: 'left',
        }
    })
    //把button挂载到内存里
    vm.$mount(div)
    const svg = vm.$el.querySelector('svg')
    const { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'loading',
        }
    })
    //把button挂载到内存里
    vm.$mount()
    const button = vm.$el
    const spy = chai.spy(()=>{})
    vm.$on('click', spy)
    button.click()
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
}