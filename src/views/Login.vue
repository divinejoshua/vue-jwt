<template>
  <div class="login-page">

    <form @submit.prevent="" novalidate class="form-box">

      <div>

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
          <button type="submit" class="form-control-btn">Login</button>
        </div>
      </div>

    </form>
    <!-- <router-link to="/">Home</router-link> -->
  </div>
</template>
