<template>
  <div class="newcustomer">
    <form @submit.prevent="saveCustomerInfo">
      <b-alert
        v-model="showGoodAlert"
        variant="success"
        dismissible
      >Your information has been submitted</b-alert>
      <b-alert
        v-model="showBadAlert"
        variant="danger"
        dismissible
      >Im sorry that username is already in use</b-alert>
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
        <label for="firstName-input">
          <span>First Name:</span>
          <input v-model="firstName" type="text" id="firstName-input" name="firstName-input">
        </label>
      </p>
      <p>
        <label for="lastName-input">
          <span>Last Name:</span>
          <input v-model="lastName" type="text" id="lastName-input" name="lastName-input">
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
    fetchCustomers: function() {
      axios.get("/api/customers/").then(
        function(customers) {
          console.log(customers.data.username);
          if (this.username != customers.data.username) {
            this.showGoodAlert = true;
          } else {
            console.log("this username is in use");
            this.showGoodAlert = false;
            this.showBadAlert = true;
          }
        }.bind(this)
      );
    },
    saveCustomerInfo: function() {
      this.fetchCustomers();
      console.log(
        this.username,
        this.password,
        this.email,
        this.firstName,
        this.lastName
      );
      axios
        .post("/api/customers", {
          username: this.username,
          password: this.password,
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName
        })
        .then(function(data) {
          console.log("got t");
        })
        .bind(this);
    }
  }
};
</script>