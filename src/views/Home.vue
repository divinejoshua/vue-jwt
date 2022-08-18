<template>
  <div class="page">

    <!-- Header  -->
    <div class="header">
      <div><span class="vue brand">Vue JWT</span> </div>
      <div class="logout">Logout</div>
    </div>

    <!-- Body  -->
    <div class="body">
      <div class="username">divine</div>
      <div class="email">divine@gmail.com</div>
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src

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
      let response = await axios.get("accounts/user")
      this.user = response.data

    }

  },


  mounted(){
    this.getUser()
  }
}
</script>
