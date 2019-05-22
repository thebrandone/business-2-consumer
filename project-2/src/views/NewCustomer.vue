<template>
  <div class="newcustomer">
      <form @submit.prevent="saveCustomerInfo">
    <h1>Please Enter in your information</h1>
    <p>
      <label for="username-input">
        <span>Username:</span>
        <input
          v-model="username"
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
          type="text"
          id="password-input"
          name="password-input"
        >
      </label>
    </p>
    <p>
      <label for="email-input">
        <span>Email:</span>
        <input
          v-model="email"
          type="text"
          id="email-input"
          name="email-input"
        >
      </label>
    </p>
    <p>
      <label for="firstName-input">
        <span>First Name:</span>
        <input
          v-model="firstName"
          type="text"
          id="firstName-input"
          name="firstName-input"
        >
      </label>
    </p>
    <p>
      <label for="lastName-input">
        <span>Last Name:</span>
        <input
          v-model="lastName"
          type="text"
          id="lastName-input"
          name="lastName-input"
        >
      </label>
    </p>
    <div>
      <button type="submit">Enter information</button>
    </div>
    </form>
  </div>
</template>
<script>
import {Customer as customer} from "../../models/customer";

export default {
    name: 'newcustomer',

    data: function() {
        return {
            username: '',
            password:'',
            email: '',
           firstName: '',
            lastName: ''
        }
    },
    methods:{
        saveCustomerInfo : function (){
            console.log(this.username)
        }
    }
    
}
</script>