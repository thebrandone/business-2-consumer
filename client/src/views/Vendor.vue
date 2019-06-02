<template>
  <div class="vendor">
    <img src="@/assets/vendorTop.png" width="100%">

    <div class="vendorlogin">
      <form @submit.prevent="validateVendors">
        <h1>Please login to your Vendor account</h1>
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
        <div>
          <button type="submit">Login</button>
          <a href="/#/newvendor">New Vendor</a>
        </div>
      </form>
     
    </div>
    <img src="@/assets/vendorBottom.png" width="100%">
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
import vendorcontent from "@/views/VendorContent.vue";

export default {
  name: "vendorLogin",

  data: function() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
     validateVendors: function() {
      axios.get("/api/vendors/").then(
        function(vendors) {
          this.showGoodAlert = false;
          this.showBadAlert = false;
          for (
            var checkUsername = 0;
            checkUsername < customers.data.length;
            checkUsername++
          ) {
            if (this.username === vendors.data[checkUsername].username && this.password === vendors.data[checkUsername].password) {
              this.showGoodAlert = true;
            } else {
              this.showBadAlert = true;
            }
          }
          if (this.showGoodAlert) {
            this.moveVendorPage();
          }
        }.bind(this)
      );
    },
    moveVendorPage: function() {
      router.push(('/VendorContent'))
    }
  }
};
</script>

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


