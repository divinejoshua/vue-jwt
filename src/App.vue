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
            if (error.config && error.response && error.response.status === 401 && store.state.access_token) {
              // if (!store.state.access_token){ this.$router.replace({ path : '/login' })}
              return store.dispatch('getAccessToken').then(() => {
                error.config.headers.Authorization = `Bearer ${store.state.access_token}`
                return axios.request(error.config);
              });
            }

            return Promise.reject(error);
    });
    
  }
}
</script>