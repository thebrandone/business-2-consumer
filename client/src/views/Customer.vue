<template>
  <div class="customer">
    
    
    
    <div class="login">
    <h1>Please login to your Customer account</h1>
    <p>
      <label for="username-input">
        <span>Username:</span>
        <input
          v-model="username"
          :disabled="loading"
          type="text"
          id="username-input"
          name="username-input"
        >
      </label>
    </p>
    <p>
      <label for="password-input">
        <span>Password:</span>
        <input
          v-model="username"
          :disabled="loading"
          type="text"
          id="password-input"
          name="password-input"
        >
      </label>
    </p>
    <button type="submit">Login</button>
    <a href="/#/newcustomer">New Customer</a>
    </div>

  </div>
</template>

<script>
import customercontent from '@/views/CustomerContent.vue';

export default {
  name: "customer",
  components: {
    customercontent
  }
};


</script>

<style>
.CustomerContent{

  
  width: 80%;

}
</style>



