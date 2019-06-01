<template>
  <div>
      

    <div v-for="customer in customers" v-bind:key="customer.id">

      <div id="listView">
        <b-jumbotron>
            <h1>{{vendor.restaurant}}</h1>
            <h3>
            <bold>
            {{vendor.id}}<br>
            {{vendor.username}}<br>
            {{vendor.password}}<br>
            {{vendor.email}}<br>
            {{vendor.city}}
            </bold></h3>
        </b-jumbotron>
        <br><br>
      </div>

    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "vendorcontent",

  data: function() {
    return {
      vendors: []
    };
  },

  created: function() {
    this.fetchVendors();
  },

  methods: {
    fetchVendors: function() {
      axios.get("/api/vendors").then(
        function(vendors) {
          this.vendors = vendors.data;
        }.bind(this)
      );
    }
  }
};
</script>

<style>
#listView{
    width: 80%;
    margin-left: 10%;
    margin-top: 50px;

}

</style>
