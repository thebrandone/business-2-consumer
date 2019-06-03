<template>
  <div>
    <div id="userProfile">
      <b-jumbotron id="jumboProfile" class="row">
        <div class="col-sm">
          <h1>{{customerName}}</h1>
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

    <form @submit.prevent="checkin">
    <div id="userCheckin">
      <checkIn/>
    </div>
    </form>

    <div id="userHistory">
      <h1>Most Recent Check-Ins</h1>
      {{customerCheckins}}
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
      checkins:[],
      customerCheckins:[],
      customerName: window.customerUsername
      
    };
  },

  created: function() {
    this.fetchCustomers();
    this.fetchCheckins();
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
    fetchCheckins: function(){
      axios.get("/api/checkins").then(
        function(checkins){
          checkins=checkins.data;
          // console.log(this.customerName);
          // console.log(checkins.data);
          console.log(checkins.length);

          for(var i=0; i<checkins.length; i++){
            if(checkins[i].username === this.customerName){
            this.customerCheckins.push(checkins[i].username);
            }
          }
          
        }.bind(this)
      )
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
