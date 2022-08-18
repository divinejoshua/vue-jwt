<template>
  <div class="page">

    <!-- Header  -->
    <div class="header">
      <div><span class="vue brand">Vue JWT</span> </div>
      <div class="logout" @click="logoutUser()">Logout</div>
      <div class="logout" @click="getUser()">Get user details</div>
    </div>

    <!-- Body  -->
    <div class="body">
      <div class="username">{{user.username}}</div>
      <div class="email">{{user.email}}</div>
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  
  data(){
    return {
      user : []
    }
  },

  methods:{
    // Get user details 
    async getUser(){
      this.user = []
      try{
        let response = await axios.get("accounts/user")
        this.user = response.data
      }
      catch (e){
        console.log(e)
      }      
    },

    logoutUser(){
          localStorage.setItem("refresh", null);
          this.$router.replace({ path : '/login' })
    }

  },


  mounted(){

    //  setInterval(()=> {
          this.getUser()
    // },
  //  2 * 60 * 100);

   
  }
}
</script>
