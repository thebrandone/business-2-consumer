<template>
  <div class="customer">
    <img src="@/assets/customerTop.png" width="100%">

    <div class="customerLogin">
      <form @submit.prevent="validateCustomers">
        
      <h1>Please login to your Customer account</h1>
      <b-alert
        v-model="showBadAlert"
        variant="danger"
        dismissible
      >User information is incorrect</b-alert>
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
            v-model="password"
            :disabled="loading"
            type="text"
            id="password-input"
            name="password-input"
          >
        </label>
      </p>
      <button type="submit">Login</button>
      <a href="/#/newcustomer">New Customer</a>
      </form>
      
    </div>
    <img src="@/assets/customerBottom.png" width="100%">
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
import customercontent from "@/views/CustomerContent.vue";

export default {
  name: "customerLogin",

  data: function() {
    return {
      username: '',
      password: '',
      loading: false
    };
  },
  methods: {
     validateCustomers: function() {
      axios.get("/api/customers/").then(
        function(customers) {
          this.showBadAlert = true;
          for (
            var checkUsername = 0;
            checkUsername < customers.data.length;
            checkUsername++
          ) {
            if (this.username === customers.data[checkUsername].username && this.password === customers.data[checkUsername].password) {
              this.saveInfo();
              this.moveCustomerPage();
            } else {
              this.throwLoginError();
            }
          }
        }.bind(this)
      );
    },
     throwLoginError: function() {
      this.showBadAlert = true
    },
    moveCustomerPage: function() {
      router.push(('/CustomerContent'))
    },
      saveInfo: function() {
        console.log(this.username, this.password);
        window.customerUsername = this.username;
        window.customerPassword = this.password;
    }
  }
};
</script>

<style>
.CustomerContent {
  width: 80%;
}

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



