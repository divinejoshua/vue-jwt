<template>
  <div class="login-page">
    <h1>This is the login page</h1>

    <form @submit.prevent="" novalidate>

      <div>
        <input type="email" class="form-control" placeholder="Email">
        <input type="password" class="form-control" placeholder="Password">
        <button type="submit" class="form-control-btn">Login</button>
      </div>

    </form>
    <router-link to="/">Home</router-link>
  </div>
</template>
