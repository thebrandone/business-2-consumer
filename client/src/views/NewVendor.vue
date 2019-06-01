<template>
  <div class="newvendor">
    <form @submit.prevent="saveVendorInfo">
      <h1>Please Enter in your information</h1>
      <p>
        <label for="username-input">
          <span>Username:</span>
          <input v-model="username" type="text" id="username-input" name="username-input">
        </label>
      </p>
      <p>
        <label for="password-input">
          <span>Password:</span>
          <input v-model="password" type="text" id="password-input" name="password-input">
        </label>
      </p>
      <p>
        <label for="email-input">
          <span>Email:</span>
          <input v-model="email" type="text" id="email-input" name="email-input">
        </label>
      </p>
      <p>
        <label for="restaurant-input">
          <span>Restaurant:</span>
          <input v-model="restaurant" type="text" id="restaurant-input" name="restaurant-input">
        </label>
      </p>
      <p>
        <label for="city-input">
          <span>City:</span>
          <input v-model="city" type="text" id="city-input" name="city-input">
        </label>
      </p>
      <div>
        <button type="submit">Enter information</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "newvendor",

  data: function() {
    return {
      username: "",
      password: "",
      email: "",
      restaurant: "",
      city: ""
    };
  },
  methods: {
    saveVendorInfo: function() {
      console.log(
        this.username,
        this.password,
        this.email,
        this.restaurant,
        this.city
      );
      axios
        .post("/api/vendors", {
          username: this.username,
          password: this.password,
          email: this.email,
          restaurant: this.restaurant,
          city: this.city
        })
        .then(function(data) {
          console.log("got it");
        })
        .bind(this);
    }
  }
};
</script>