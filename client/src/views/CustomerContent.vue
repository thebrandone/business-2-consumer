<template>
  <div>
    <div id="userProfile">
      <b-jumbotron id="jumboProfile" class="row">
        <div class="col-sm">
          <h1>Username Placeholder{{currentCustomer}}</h1>
          <h3>
            Total Check-Ins: {{totalCheckins}}
            <br>
            Most Recent Check-In: {{recentCheckin}}
          </h3>
        </div>
        <div class="col-sm-4"></div>
        <div class="col-sm">
          <img id="profilePic" src="@/assets/defaultProfile.png">
        </div>
      </b-jumbotron>
    </div>

    <div id="userCheckin">
      <checkIn/>
    </div>

    <div id="userHistory">
      <h1>Most Recent Check-Ins</h1>
      <div v-for="customer in customers" v-bind:key="customer.id">
        <pre>
            {{customer.id}}
            {{customer.username}}
            {{customer.password}}
            {{customer.email}}
            {{customer.firstName}}
            {{customer.lastName}}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import checkIn from "@/components/checkIn";

export default {
  name: "customercontent",
  components: {
    checkIn
  },

  data: function() {
    return {
      customers: [],
      currentCustomer,
      checkins:[]
    };
  },

  created: function() {
    this.fetchCustomers();
    console.log(window.customerUsername, window.customerPassword);
  },

  methods: {
    fetchCustomers: function() {
      axios.get("/api/customers").then(
        function(customers) {
          this.customers = customers.data;
        }.bind(this)
      );
    },

    checkin: function(){
      axios.post("api/checkins").then(
        function(checkins){
          this.checkins = checkins.data;
          console.log("Checkin Customer Vue");
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
  text-align: left;
  padding: 10px;
}
</style>
