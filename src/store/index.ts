import { createPinia } from 'pinia'

// pinia vue 版本兼容问题
// pinia 2.0+ & vue 3.2+

// pinia 默认安装 3.1+ 版本 与 vite createApp 3.2+ 版本不兼容

const store = createPinia()

export default store

export * from './modules'
