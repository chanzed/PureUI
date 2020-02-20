const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../../src/components/tabs/tabs'
import TabsHead from '../../src/components/tabs/tabs-head'
import TabsBody from '../../src/components/tabs/tabs-body'
import TabsPane from '../../src/components/tabs/tabs-pane'
import TabsItem from '../../src/components/tabs/tabs-item'

Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-head', TabsHead)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it("存在", () => {
    expect(Tabs).to.exist
  })
  describe('Props', () => {
    it("接受 selected 属性", (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <z-tabs selected="nami">
          <z-tabs-head >
            <z-tabs-item name="luffy" disabled>
              路飞
            </z-tabs-item>
            <z-tabs-item name="nami">
              娜美
            </z-tabs-item>
            <z-tabs-item name="sanji">
              山治
            </z-tabs-item>
          </z-tabs-head>
          <z-tabs-body>
            <z-tabs-pane name="luffy">
              橡胶果实能力者，吃货一枚
            </z-tabs-pane>
            <z-tabs-pane name="nami">
              拥有一支天候棒，可以控制天气
            </z-tabs-pane>
            <z-tabs-pane name="sanji">
              隐形三装备持有者，可以隐身
            </z-tabs-pane>
          </z-tabs-body>
        </z-tabs>
      `
      let vm = new Vue({
        el: div,
      })
      vm.$nextTick(() => {
        let x = vm.$el.querySelector(`.tabs-item[data-name="nami"]`)
        expect(x.classList.contains('active')).to.be.true
        done()
      })
    })
  })
  })