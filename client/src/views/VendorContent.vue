<template>
<div>
    <div v-for="vendor in vendors" v-bind:key="vendor.id">
        <pre>
            {{vendor.id}}
            {{vendor.username}}
            {{vendor.password}}
            {{vendor.email}}
            {{vendor.restaurant}}
            {{vendor.city}}
        </pre>
    </div>
</div>
    
</template>

<script>
import axios from 'axios';
export default {
    name: 'vendorcontent',

    data: function() {
        return {
            vendors: []
        }
    },

    created: function() {
        this.fetchVendors();
    },

    methods: {
        fetchVendors: function() {
            axios.get('/api/vendors').then(
                function(vendors) {
                    this.vendors = vendors.data;
                }.bind(this)
            );
        }
    }
}
</script>

<style>

</style>
