<template>
  <div class="customer">
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
</template>
