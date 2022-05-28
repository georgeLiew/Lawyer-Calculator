import { createApp } from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import App from './App.vue'
import LegalFeeCalc from './page/LegalFeeCalc.vue'
import HomePage from './page/HomePage.vue'
import Form from './components/Form.vue'


const router = createRouter({
  history:createWebHistory(),
  routes:[
    {path: '/',name:'home',component:HomePage},
    {path: '/legalfeecalc',name:'Legal Fee Calculator',component:LegalFeeCalc},
    {path: '/othercalc',name:'other',component:Form}
  ]

})

createApp(App)
.use(router)
.mount('#app')
