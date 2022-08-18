import { store } from '@/store'
import axios from 'axios'

store.subscribe((mutation) => {
    if(mutation.type=="SET_ACCESS_TOKEN" && mutation.payload){

        // Set axios authorisation headers 
        axios.defaults.headers.common['Authorization'] = `Bearer X ${mutation.payload}`
    } else {
        axios.defaults.headers.common['Authorization'] = null
    }
})
  