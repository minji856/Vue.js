import { createApp } from 'vue'
import App from './step3/App.vue'

import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"

// 전역등록
const app = createApp(App)
app.component("HeaderComponent", HeaderComponent)
app.component("FooterComponent", FooterComponent)
app.mount('#app')

