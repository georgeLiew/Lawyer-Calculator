import { createApp } from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import App from './App.vue'
import LegalFeeCalc from './page/LegalFeeCalc.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {path: '/legalfeecalc',name:'Home',component:LegalFeeCalc}
  ]

})

createApp(App)
.use(router)
.mount('#app')
