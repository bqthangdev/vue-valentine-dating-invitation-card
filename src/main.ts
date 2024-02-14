import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Dialog from "primevue/dialog"
import 'primevue/resources/themes/aura-light-green/theme.css'

createApp(App)
.use(PrimeVue)
.component('Dialog', Dialog)
.mount('#app')