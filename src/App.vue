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


      // Axios interceptors
      axios.interceptors.response.use(null, (error) => {

      // if the access token is expired
        if (error.config && error.response && error.response.status === 401) {

          // if the url is froms the refresh token
          if (error.config.url == "accounts/auth/token/refresh/") { 
            store.commit('SET_ACCESS_TOKEN', null); 
            localStorage.setItem('refresh', null)
            return
          }

          // if There is no access token 
          if (!store.state.access_token){ return this.$router.replace({ path : '/login' })}

          // Get a new access token 
          return store.dispatch('getAccessToken').then(() => {
            error.config.headers.Authorization = `Bearer ${store.state.access_token}`

            console.log("yooo")
            // Resend the request
            return axios.request(error.config);
          });
        }
        return Promise.reject(error);
        
    });
    
  }
}
</script>