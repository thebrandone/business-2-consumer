<template>
  <div>
    <div v-for="checkin in checkins" v-bind:key="checkin.id">
      <pre>{{checkin.id}} {{checkin.username}} {{checkin.vendor}}</pre>
    </div>

    <!-- <div v-for="vendor in vendors" v-bind:key="vendor.id">

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

    </div> -->

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "vendorcontent",

  data: function() {
    return {
      vendors: [],
      customers: [],
      checkins: []
    };
  },

  created: function() {
    this.fetchVendors();
    this.fetchCustomers();
    this.fetchCheckins();
    console.log(window.vendorUsername, window.vendorPassword);
  },

  methods: {
    fetchVendors: function() {
      axios.get("/api/vendors").then(
        function(vendors) {

          this.vendors = vendors.data;

        }.bind(this)
      );
    },

    fetchCustomers: function(){
        axios.get("/api/customers").then(
          function(customers) {

            this.customers=customers.data;
            
          }.bind(this)
        )
    },
      fetchCheckins: function(){
        axios.get("/api/checkins").then(
          function(checkins) {

            this.checkins = checkins.data;
            
          }.bind(this)
        )
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
