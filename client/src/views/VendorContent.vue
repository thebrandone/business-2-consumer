<template>
  <div>
    <div>
      <div id="userProfile">
        <b-jumbotron id="jumboProfile" class="row">
          <div class="col-sm-6">
            <h1>{{vendorName}}</h1>
            <h3>
              Total Check-Ins: {{totalCheckins}}
              <br>
              Most Recent Check-In: {{recentCheckin}}
            </h3>
          </div>
          <div class="col-sm-3"></div>
          <div class="col-sm-3">
            <img id="profilePic" src="@/assets/defaultProfile.png">
          </div>
        </b-jumbotron>
      </div>

      <div>
        <chart/>
      </div>

      <div id="historyTitle">
        <h1 style="color:red">All Check-Ins</h1>
        <div v-for="checkins in customerCheckins" v-bind:key="checkins.id">
          <div id="listView">
            <b-jumbotron id="userHistory">
              <h2>{{checkins.username}} checked-in on {{checkins.createdAt}}</h2>
            </b-jumbotron>
            <br>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chart from "@/components/chart.vue";
import axios from "axios";

export default {
  name: "vendercontent",
  components: {
    chart
  },

  data: function() {
    return {
      customers: [],
      checkins: [],
      totalCheckins: 0,
      customerCheckins: [],
      vendorName: window.vendorName,
      recentCheckin:""
    };
  },

  created: function() {
    this.fetchCustomers();
    this.fetchCheckins();
  },

  methods: {
    fetchVendors: function() {
      axios.get("/api/vendors").then(
        function(vendors) {
          this.vendors = vendors.data;
        }.bind(this)
      );
    },

    fetchCustomers: function() {
      axios.get("/api/customers").then(
        function(customers) {
          this.customers = customers.data;
        }.bind(this)
      );
    },

    fetchCheckins: function() {
      axios.get("/api/checkins").then(
        function(checkins) {
          this.checkins = checkins.data;
          this.totalCheckins = 0;
          this.customerCheckins = [];

          console.log(this.checkins.length);

          for (var i = 0; i < this.checkins.length; i++) {
            if (this.checkins[i].vendor === this.vendorName) {
              this.customerCheckins.push(this.checkins[i]);
              this.totalCheckins++;
              this.recentCheckin = this.checkins[i].username;
              this.customerCheckins[i].createdAt=this.customerCheckins[i].createdAt.slice(0, 10);
            }
          };
          console.log(this.customerCheckins.length);
        }.bind(this)
      );
    }
  }
};
</script>

<style>
#userProfile {
  text-align: left;
}

#jumboProfile {
  display: flex;
  padding: 1em 0em 1em 1em;
  border-style: solid;
  border-color: black;
  border-width: 5px;
  background-color: white;
  margin-bottom: 0;
}

#profilePic {
  height: 200px;
  width: 200px;
  float: right;
}

#userCheckin {
  background-color: rgb(255, 0, 0);
  padding: 0;
  margin: 0;
}

#userHistory {
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

#dropDown {
  background-color: black;
  font-size: 25px;
  text-align: center;
  align-items: center;
  padding-bottom: 1.25em;
}
#listView {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 50px;
}
#listView.h2 {
  height: 50px;
}
.b-jumbotron {
  height: 150px;
}

#submitCheckIn {
  width: 70%;
}
</style>
