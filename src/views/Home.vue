<template>
  <div class="page">

    <!-- Header  -->
    <div class="header">
      <div><span class="vue brand">Vue JWT</span> </div>
      <div class="logout">Logout</div>
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
      try{
        let response = await axios.get("accounts/user")
        this.user = response.data
      }
      catch (e){
        console.log(e)
      }      
    }

  },


  mounted(){
    this.getUser()
  }
}
</script>
