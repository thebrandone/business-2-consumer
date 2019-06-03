<template>
  <div class="newcustomer">
    <form @submit.prevent="validateCustomers">
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
        <label for="firstName-input">
          <input
            v-model="firstName"
            type="text"
            id="firstName-input"
            name="firstName-input"
            placeholder="First Name"
          >
        </label>
      </p>
      <p>
        <label for="lastName-input">
          <input
            v-model="lastName"
            type="text"
            id="lastName-input"
            name="lastName-input"
            placeholder="Last Name"
          >
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
  name: "newcustomer",

  data: function() {
    return {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      showBadAlert: false,
      showGoodAlert: false
    };
  },
  methods: {
    validateCustomers: function() {
      axios.get("/api/customers/").then(
        function(customers) {
          this.showGoodAlert = true;
          this.showBadAlert = false;
          for (
            var checkUsername = 0;
            checkUsername < customers.data.length;
            checkUsername++
          ) {
            if (this.username === customers.data[checkUsername].username) {
              this.showBadAlert = true;
              this.showGoodAlert = false;
            }
          }
          if (this.showGoodAlert) {
            this.saveCustomerInfo();
          }
        }.bind(this)
      );
    },
    saveCustomerInfo: function() {
      axios
        .post("/api/customers", {
          username: this.username,
          password: this.password,
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName
        })
        .then(function(data) {
        })
        this.navigation();
    },
    navigation() {
      router.push(("/customer"));
    }
  }
};
</script>