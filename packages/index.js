import "./themes/default.styl"
import "./icons/dist/yui-icon.styl"
import Components from './components'

export default {
  install(Vue) {
    Components.install(Vue)
  }
}