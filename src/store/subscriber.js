import { store } from '@/store'
import axios from 'axios'

store.subscribe((mutation) => {
    if(mutation.type=="SET_ACCESS_TOKEN" && mutation.payload){

        // Set axios authorisation headers 
        axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
    }
    console.log(mutation.payload)
})
  

// store.subscribe((mutation) => {
//     switch(mutation.type){
//         case 'auth/SET_TOKEN':
//           if(mutation.payload){
//               axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
//           }else{
//                 axios.defaults.headers.common['Authorization'] = null
//           }
//         break;
//     }
// })