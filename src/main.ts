import { createApp } from 'vue'
import App from './App.vue'
import 'common/less/index.less'
import router from '../src/router'
import {store} from './store'

const app = createApp(App);
app.use(router)
app.use(store)
app.mount('#app')

