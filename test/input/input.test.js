const expect = chai.expect;
import Vue from 'vue'
import Input from '../../src/components/input/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false
describe('Input', () => {
  const getRenderElement = function (propsData) {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({ propsData: propsData })
    vm.$mount()
    return vm
  }
  it('存在.', () => {
    expect(Input).to.be.ok
  })
  it('接受 value', () => {
    const inputElement = getRenderElement({ value: 'hello' }).$el.querySelector('input')
    expect(inputElement.value).to.eq('hello')
  }) 
  it('接受 readonly', () => {
    const inputElement = getRenderElement({ readonly: true }).$el.querySelector('input')
    expect(inputElement.readOnly).to.eq(true)
  })
  it('接受 disabled', () => {
    const inputElement = getRenderElement({ disabled: true }).$el.querySelector('input')
    expect(inputElement.disabled).to.eq(true)
  })
  it('接受 error', () => {
    const useElement = getRenderElement({ error: 'error' }).$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-error')
  })
  it('支持input blur focus change事件', () => {
    ['input', 'blur', 'focus', 'change'].forEach(eventName => {
      const vm = getRenderElement({ value: '你的名字' })
      const inputElement = vm.$el.querySelector('input')
      const callback = sinon.fake()
      const event = new Event(eventName)
      Object.defineProperty(event, 'target', { value: {value: 'hi' }, enumerable: true, })
      vm.$on(eventName, callback)
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('hi')
    })
  })
})