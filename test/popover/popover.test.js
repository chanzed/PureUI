const expect = chai.expect;
import Vue from 'vue'
import Popover from '../../src/components/popover/popover.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })
  it('接受position属性', (done) => {
    Vue.component('p-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <p-popover position="bottom" ref="p">
        <template v-slot:content>
          弹出内容
        </template>
        <button>点我</button>
      </p-popover>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        let { contentWrapper } = vm.$refs.p.$refs
        expect(contentWrapper.classList.contains('position-bottom')).to.eq(true)
        done()
      })
    })
  })
})