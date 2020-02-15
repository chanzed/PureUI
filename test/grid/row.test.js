const expect = chai.expect;
import Vue from 'vue'
import Row from '../../src/components/grid/row.vue'
import Col from '../../src/components/grid/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.be.exist
  })
  it('接受 gutter ', (done) => {
    // const RowConstructor = Vue.extend(Row)
    // const ColConstructor = Vue.extend(Col)
    Vue.component('p-row', Row)
    Vue.component('p-col', Col)
    const div = document.createElement('div')
    div.innerHTML = `
      <p-row gutter="20">
        <p-col></p-col>
        <p-col></p-col>
      </p-row>
    `
    const vm = new Vue()
    vm.$mount(div)
    setTimeout(() => {
      const cols = vm.$el.querySelectorAll('.col')
      cols.forEach(col => {
        expect(col.style.paddingLeft).to.eq('10px')
        expect(col.style.paddingRight).to.eq('10px')
      })
      vm.$el.remove()
      vm.$destroy()
      done()
    }, 0);
  })

  it('接受 align ', (done) => {
    Vue.component('p-row', Row)
    Vue.component('p-col', Col)
    const div = document.createElement('div')
    document.body.append(div)
    div.innerHTML = `
      <p-row align="right">
        <p-col></p-col>
        <p-col></p-col>
      </p-row>
    `
    const vm = new Vue()
    vm.$mount(div)
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).justifyContent).to.eq('flex-end')
      vm.$el.remove()
      vm.$destroy()
      done()
    }, 0);
  })
})