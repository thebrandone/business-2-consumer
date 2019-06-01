<template>
  <div id="app">
    <div>
      <b-navbar id="mainNav" toggleable="lg" type="light">
        <b-navbar-brand href="#">
          <img
            src="./assets/B2C.png"
            height="100"
            width="100"
            class="d-inline-block align-top"
            alt="Logo"
          >
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/">Home</router-link>|
            <router-link to="/vendor">Vendor</router-link>|
            <router-link to="/customer">Customer</router-link>
            <router-link hidden to="/newvendor">New Vendor</router-link>
            <router-link hidden to="/newcustomer">New Customer</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto"></b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios';

// export default {
//   name: 'app',

//   data: function() {
//     return {
//       burgers: [],
//       burgerName: ""
//     }
//   },

//   created: function() {
//     this.fetchBurgers();
//   },

//   methods: {
//     fetchBurgers: function() {
//       axios.get('/api/burgers/').then(
//         function(burgers) {
//           this.burgers = burgers.data;
//         }.bind(this)
//       );
//     },

//     devourBurger: function(burger_id) {
//       console.log(burger_id);
//       axios.put("/api/burgers/" + burger_id).then(
//         function(data) {
//           // Rerender the page with the updated list
//           this.fetchBurgers();
//         }.bind(this)
//       );
//     },

//     createBurger: function() {
//       console.log(this.burgerName);
//       axios.post("/api/burgers/", {
//         burger_name: this.burgerName
//       }).then(
//         function(data) {
//           // Rerender the page with the updated list
//           this.fetchBurgers();
//         }.bind(this)
//       );
//     }
//   }
// }
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav-collapse {
  font-size: 60px;
}
#nav-collapse {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}
a:hover {
  color: black;
}

#mainNav {
  background-color: rgb(255, 0, 0);
}
</style>
