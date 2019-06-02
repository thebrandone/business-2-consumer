<template>
  <div id="dropDown">
    <b-form-select v-model="selected" :options="options" class="mb-3">
      <!-- This slot appears above the options from 'options' prop -->
      <template slot="first">
        <option :value="null" disabled>-- Please select an Check-In Location --</option>
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
</template>

<script>
import axios from "axios";
import customercontent from "@/views/CustomerContent.vue";

export default {
  name: "checkIn",
  data() {
    return {
      selected: null,
      options: [],
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

          this.populateVendors();
        }.bind(this)
      );
    },

    populateVendors: function() {
      for (var i = 0; i < this.vendors.length; i++) {
        this.options.push(this.vendors[i].restaurant);
      }
    },

    checkin: function() {
      console.log("Checkin Vue Checkin");
      console.log(window.customerUsername);

      axios
        .post("/api/checkins", {
          username: window.customerUsername,
          vendor: this.selected
        })
        .then(function(data) {
          console.log("Checkin Vue Checkin");
        });
    }
  }
};
</script>

<style>
#dropDown {
  background-color: black;
  font-size: 25px;
  text-align: center;
  align-items: center;
  padding-bottom: 1.25em;
}

#submitCheckIn {
  width: 70%;
}
</style>
