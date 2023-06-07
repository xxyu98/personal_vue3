import { createApp } from 'vue'

import type { App } from 'vue'
import './style.css'
import AppRoot from './App.vue'

import router from './router'

import store from './store'

const app: App = createApp(AppRoot)

app.use(router)
app.use(store)

app.mount('#app')
