<template>
  <link :href="require('./assets/style.css')" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400&display=swap" rel="stylesheet">
  <div id="nav">
     
  </div>
  <router-view/>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>


<script>
import { store } from '@/store'
import axios from 'axios'



export default {
  created: function () {

    

    // check for 401 unauthorized axios errors and recalls the attempt token method in vuex
  // axios.interceptors.response.use((response) => {
  //     return response
  //   }, (error) => {
  //     if (error.response.status == 401) {
  //        if (store.state.access_token) {
  //           store.dispatch('refreshAccessToken').then(() =>{
  //             console.log("error")
  //             axios.request(error.config);
  //           })

  //        }
  //     }
  //     return Promise.reject(error);
  //   })

            let tried = true

          axios.interceptors.response.use(null, (error) => {
            if(tried){
                    tried = false
                if (error.config && error.response && error.response.status === 401) {
                  return store.dispatch('refreshAccessToken').then(() => {
                    error.config.headers.Authorization = store.state.access_token
                    axios.request(error.config);
                  });
                }

                return Promise.reject(error);
            }
        });
    
  //     //  Refresh for access token every 1 minute
  //    setInterval(function() {
  //     if(store.state.access_token){
  //         store.dispatch('refreshAccessToken') 
  //     }
  //   },
  //  2 * 60 * 1000);



  }
}
</script>