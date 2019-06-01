<template>
<div>
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
    
</template>

<script>
import axios from 'axios';
export default {
    name: 'customercontent',

    data: function() {
        return {
            customers: []
        }
    },

    created: function() {
        this.fetchCustomers();
    },

    methods: {
        fetchCustomers: function() {
            axios.get('/api/customers').then(
                function(customers) {
                    this.customers = customers.data;
                }.bind(this)
            );
        }
    }
}
</script>

<style>

</style>
