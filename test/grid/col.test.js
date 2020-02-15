const expect = chai.expect;
import Vue from 'vue'
import Row from '../../src/components/grid/row.vue'
import Col from '../../src/components/grid/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('col', () => {
  const getCol = function (propsData) {
    const ColConstructor = Vue.extend(Col)
    const vm = new ColConstructor({propsData: propsData})
    vm.$mount()
    return vm
  }
  it('存在', () => {
    expect(Col).to.be.exist
  })
  it('接受span', () => {
    const vm = getCol({ span: 1 })
    expect(vm.$el.classList.contains('col-1')).to.eq(true)
  })
  it('接受offset', () => {
    const vm = getCol({ offset: 1 })
    expect(vm.$el.classList.contains('offset-1')).to.eq(true)
  })
  it('接受ipad', () => {
    const propsData = {
      ipad: {
        span: 1,
        offset: 1,
      }
    }
    const vm = getCol(propsData)
    expect(vm.$el.classList.contains('col-ipad-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-ipad-1')).to.eq(true)
  })

  it('接受pc', () => {
    const propsData = {
      pc: {
        span: 1,
        offset: 1,
      }
    }
    const vm = getCol(propsData)
    expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-pc-1')).to.eq(true)
  })
  it('接受narrowPc', () => {
    const propsData = {
      narrowPc: {
        span: 1,
        offset: 1,
      }
    }
    const vm = getCol(propsData)
    expect(vm.$el.classList.contains('col-narrow-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-narrow-pc-1')).to.eq(true)
  })
  it('接受widePc', () => {
    const propsData = {
      widePc: {
        span: 1,
        offset: 1,
      }
    }
    const vm = getCol(propsData)
    expect(vm.$el.classList.contains('col-wide-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-wide-pc-1')).to.eq(true)
  })
  it('接受extraPc', () => {
    const propsData = {
      extraPc: {
        span: 1,
        offset: 1,
      }
    }
    const vm = getCol(propsData)
    expect(vm.$el.classList.contains('col-extra-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-extra-pc-1')).to.eq(true)
  })
})