<template>
  <div id="app">
    
  <div>
  <b-navbar id="mainNav" toggleable="lg" type="light" >
    <b-navbar-brand href="#">
      <img src="https://i.ibb.co/nLNL8R4/B2C.png"  height=100 width=100 class="d-inline-block align-top" alt="Kitten">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/vendor">Vendor</router-link> |
        <router-link to="/customer">Customer</router-link>
        <router-link hidden to="/newvendor">New Vendor</router-link>
        <router-link hidden to="/newcustomer">New Customer</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav-collapse{
  font-size: 60px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#mainNav{
  background-color:rgb(217,68,50);
}

</style>
