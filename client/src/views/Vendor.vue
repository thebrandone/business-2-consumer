<template>
  <div class="vendor">
    <img src="@/assets/vendorTop.png" width="100%">

    <div class="login">
      <h1>Please login to your Vendor account</h1>
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
      <div>
        <button type="submit">Login</button>
        <a href="/#/newvendor">New Vendor</a>
      </div>
    </div>
    <img src="@/assets/vendorBottom.png" width="100%">
  </div>
</template>

<style>
.login {
  border-width: 5px;
  border-color: black;
  border-style: solid;
  padding: 5px;
}
.login a:hover {
  color: red;
}
</style>

<script>
import axios from "axios";

export default {
  name: "vendor"
}
</script>
