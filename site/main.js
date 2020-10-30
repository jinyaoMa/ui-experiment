import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import YaoUI from '../packages'

const info = require('../package.json')

const app = createApp(App)
app.config.globalProperties.YAO_UI_VERSION = info.version
app.use(YaoUI)
  .use(store)
  .use(router)
  .mount('#app')
