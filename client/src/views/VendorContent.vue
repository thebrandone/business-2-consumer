<template>
  <div>
      

    <div v-for="vendor in vendors" v-bind:key="vendor.id">

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
        <div>
          <chart/>
        </div>
        <br><br>
      </div>

    </div>

  </div>
</template>

<script>
import axios from "axios";
import chart from '@/components/chart.vue';

export default {
  name: 'vendercontent',
  components: {
    chart
  },

  data: function() {
    return {
      vendors: [],
      customers: []
    };
  },

  created: function() {
    this.fetchVendors();
    this.fetchCustomers();
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
    createGraph: function(){
      
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
