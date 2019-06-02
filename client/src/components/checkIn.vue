<template>
  <div id="dropDown">
    <b-form-select v-model="selected" :options="options" class="mb-3">
      <!-- This slot appears above the options from 'options' prop -->
      <template slot="first">
        <option :value="null" disabled>-- Please select an Check-In Location --</option>
      </template>
    </b-form-select>

    <div class="mt-3">
        <button type="submit" id="submitCheckIn">
      Check-In to
      <strong>{{ selected }}</strong>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkIn",
  data() {
    return {
      selected: null,
      options: [
        { value: "Bojangles", text: "Bojangles" },
        { value: "Panera Bread", text: "Panera Bread" },
        { value: "Pizza Hut", text: "Pizza Hut" }
      ]
    };
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

#submitCheckIn{
    width: 70%;
}
</style>
