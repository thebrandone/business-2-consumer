<template>
  <div class="vendor">
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
</template>
