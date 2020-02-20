const expect = chai.expect;
import Vue from 'vue'
import Toast from '../../src/components/toast/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.be.exist
  })
  describe('propsData', () => {
    it('接受autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const ToastConstructor = Vue.extend(Toast)
      const vm = new ToastConstructor({
        propsData: {
          autoClose: 1,
        }
      })
      vm.$mount(div)
      // setTimeout(()=> {
      //   expect(document.body.contains(vm.$el)).to.eq(true)
      //   done()
      // }, 1500)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    
    it('接受 closeButton ', () => {
      const ToastConstructor = Vue.extend(Toast)
      const callback = sinon.fake()
      const vm = new ToastConstructor({
        propsData: {
          autoClose: false, 
          closeButton: {
            text: '点我关闭',
            callback: callback,
          },
        }
      })
      vm.$mount()
      const button = vm.$el.querySelector('.close')
      expect(button.textContent.trim()).to.eq('点我关闭')
      button.click()
      expect(callback).to.have.been.called
    })

    it('接受 position', () => {
      const ToastConstructor = Vue.extend(Toast)
      const vm = new ToastConstructor({
        propsData: {
          autoClose: false, 
          position: 'middle',
        }
      })
      vm.$mount()
      expect(vm.$el.classList.contains('position-middle')).to.eq(true)
    })
    it('接受 enableHTML', () => {
      const ToastConstructor = Vue.extend(Toast)
      const vm = new ToastConstructor({
        propsData: {
          autoClose: false, 
          enableHTML: true,
        }
      })
      vm.$slots.default = [`<strong id="hello">hello world</strong>`]
      vm.$mount()
      const strong = vm.$el.querySelector('#hello')
      expect(strong).to.exist
    })
  })
})