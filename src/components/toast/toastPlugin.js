import Toast from './toast.vue'

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, propsData) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast(Vue, message, propsData, () => { currentToast = null })
    }
  }
}

function createToast(Vue, message, propsData, onClose) {
  const ToastConstructor = Vue.extend(Toast)
  const toast = new ToastConstructor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.append(toast.$el)
  return toast
}