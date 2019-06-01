<template>
  <div class="newvendor">
    <form @submit.prevent="fetchVendors">
      <b-alert
        v-model="showGoodAlert"
        variant="success"
        dismissible
      >Your information was successfully entered</b-alert>
      <b-alert
        v-model="showBadAlert"
        variant="danger"
        dismissible
      >That username is already in use please enter in a new one</b-alert>
      <h1>Please Enter in your information</h1>
      <p>
        <label for="username-input">
          <input
            v-model="username"
            type="text"
            id="username-input"
            name="username-input"
            placeholder="username"
          >
        </label>
      </p>
      <p>
        <label for="password-input">
          <input
            v-model="password"
            type="text"
            id="password-input"
            name="password-input"
            placeholder="password"
          >
        </label>
      </p>
      <p>
        <label for="email-input">
          <input
            v-model="email"
            type="text"
            id="email-input"
            name="email-input"
            placeholder="email"
          >
        </label>
      </p>
      <p>
        <label for="restaurant-input">
          <input
            v-model="restaurant"
            type="text"
            id="restaurant-input"
            name="restaurant-input"
            placeholder="restaurant"
          >
        </label>
      </p>
      <p>
        <label for="city-input">
          <input v-model="city" type="text" id="city-input" name="city-input" placeholder="city">
        </label>
      </p>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import router from "../router";

export default {
  name: "newvendor",

  data: function() {
    return {
      username: "",
      password: "",
      email: "",
      restaurant: "",
      city: "",
      showBadAlert: false,
      showGoodAlert: false
    };
  },
  methods: {
    fetchVendors: function() {
      axios.get("/api/vendors/").then(
        function(vendors) {
          this.showGoodAlert = true;
          this.showBadAlert = false;
          for (
            var checkUsername = 0;
            checkUsername < vendors.data.length;
            checkUsername++
          ) {
            if (this.username === vendors.data[checkUsername].username) {
              this.showBadAlert = true;
              this.showGoodAlert = false;
            }
          }
          if (this.showGoodAlert) {
            this.saveVendorInfo();
          }
        }.bind(this)
      );
    },
    saveVendorInfo: function() {
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
        });
      this.navigation();
    },
    navigation() {
      router.push("/vendor");
    }
  }
};
</script>