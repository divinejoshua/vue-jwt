<template>
  <div class="login-page">

    <form @submit.prevent="submitForm" novalidate class="form-box">

      <div>

        <div class="form-message" v-if="message">{{message}}</div><br>

        <!-- Email  -->
        <div>
          <input type="email" class="form-control" placeholder="Email" v-model="form.username">
        </div>

        <!-- Password  -->
        <div><br>
          <input type="password" class="form-control" placeholder="Password" v-model="form.password" autocomplete="">
        </div>

        <!-- Submit button  -->
        <div>
          <br>
          <button type="submit" class="form-control-btn">Login</button>
        </div>
      </div>

    </form>
  </div>
</template>


<script>
import axios from 'axios'



  export default {
  name: 'Login',


data: () => ({
      valid: true,
       form: {
        username: '',
        password: '',
       },
       message : '',
    }),
    
    methods: {

      // Login function 
      async submitForm () {
        this.message = ""
        this.form.username =  this.form.username.toLowerCase()

        try{
          // Login request 
          let response = await axios.post("accounts/auth/login/", this.form)

          //Store refresh
          // localStorage.setItem("refresh", response.data.refresh_token);

          // Set access token 
          this.$store.dispatch('commitAccessToken', response.data.access_token)

          // Redirect to home page 
          this.$router.replace({ path : '/' })
        }
        catch{
          this.message = "An error occurred"
        }

       
      },
    }
  }
</script>