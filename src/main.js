import App from './App.vue'
import * as Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'





const app = Vue.createApp(App)
app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.mount("#app")