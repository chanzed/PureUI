import Toast from './toast.vue'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message) {
      const ToastConstructor = Vue.extend(Toast)
      const toast = new ToastConstructor()
      toast.$slots.default = [message]
      toast.$mount()
      document.body.append(toast.$el)
    }
  }
}