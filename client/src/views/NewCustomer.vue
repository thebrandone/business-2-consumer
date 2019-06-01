<template>
  <div class="newcustomer">
      <form @submit.prevent="saveCustomerInfo">
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