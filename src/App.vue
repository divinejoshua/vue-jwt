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


export default {
  created: function () {
    
      //  Refresh for access token every 2 minutes
     setInterval(function() {
      if(store.state.access_token){
          store.dispatch('refreshAccessToken') 
      }
    },
   2 * 60 * 100);



  }
}
</script>