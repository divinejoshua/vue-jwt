<template>
  <div class="login-page">

    <form @submit.prevent="" novalidate class="form-box">

      <div>

        <div class="form-message">This is for any message</div><br>

        <!-- Email  -->
        <div>
          <input type="email" class="form-control" placeholder="Email">
        </div>

        <!-- Password  -->
        <div><br>
          <input type="password" class="form-control" placeholder="Password">
        </div>

        <!-- Submit button  -->
        <div>
          <br>
          <button type="submit" class="form-control-btn">Login</button>
        </div>
      </div>

    </form>
    <!-- <router-link to="/">Home</router-link> -->
  </div>
</template>


<script>
  export default {
  name: 'Login',


data: () => ({
      valid: true,
       form: {
        username: '',
        password: '',
       },
    }),
    
    methods: {
      submitForm () {
        this.form.username =  this.form.username.toLowerCase()
        console.log(this.form)
      },
    }
  }
</script>