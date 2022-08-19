import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// Require subscriber 
require('@/store/subscriber')


// Add axios defaults 
axios.defaults.baseURL = "http://127.0.0.1:8000/"

// Axios credentials 
// axios.defaults.withCredentials = true 

store.dispatch('getAccessToken').then(() =>{
    createApp(App).use(router).use(store).mount('#app')
})
