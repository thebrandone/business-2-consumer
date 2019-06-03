<template>
  <div>
    <div id="userProfile">
      <b-jumbotron id="jumboProfile" class="row">
        <div class="col-sm-6">
          <h1>{{customerName}}</h1>
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

    <form>
      <div id="userCheckin">
        <div id="dropDown">
          <b-form-select v-model="selected" :options="options" class="mb-3">
            <!-- This slot appears above the options from 'options' prop -->
            <template slot="first">
              <option :value="null" disabled>CHOOSE A CHECK-IN LOCATION</option>
            </template>
          </b-form-select>

          <form @submit.prevent="checkin">
            <div class="mt-3">
              <button type="submit" id="submitCheckIn">
                Check-In to
                <strong>{{ selected }}</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>

    <div id="historyTitle">
        <h1 style="color:red">All Check-Ins</h1>
      <div v-for="checkins in customerCheckins" v-bind:key="checkins.id">
        <div id="listView">
          <b-jumbotron id="userHistory">
            <h2>Checked-In to {{checkins.vendor}} on {{checkins.createdAt.slice(0,10)}}</h2>
          </b-jumbotron>
          <br>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "customercontent",
  components: {
    
  },

  data: function() {
    return {
      customers: [],
      checkins: [],
      customerCheckins: [],
      customerName: window.customerUsername,
      totalCheckins: 0,
      recentCheckin:"",
      selected: null,
      options: [],
      vendors: [],
    };
  },

  created: function() {
    this.fetchCustomers();
    this.fetchCheckins();
    this.fetchVendors();
  },

  methods: {
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
          
          for (var i = 0; i < this.checkins.length; i++) {
            if (this.checkins[i].username === this.customerName) {
              this.customerCheckins.push(this.checkins[i]);
              this.totalCheckins++;
              this.recentCheckin = this.checkins[i].vendor;
            }
          }

        }.bind(this)
      );
      
    },
    checkin: function() {
      axios
        .post("/api/checkins", {
          username: window.customerUsername,
          vendor: this.selected
        })
        .then(function(data) {
          
        });

        this.fetchCheckins();
    },
    fetchVendors: function() {
      axios.get("/api/vendors").then(
        function(vendors) {
          this.vendors = vendors.data;

          this.populateVendors();
        }.bind(this)
      );
    },

    populateVendors: function() {
      for (var i = 0; i < this.vendors.length; i++) {
        this.options.push(this.vendors[i].restaurant);
      }
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

#userHistory{
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
#listView{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 50px;
}
#listView.h2{
  height: 50px;
}
.b-jumbotron{
  height: 150px;
}

#submitCheckIn {
  width: 70%;
}
</style>
