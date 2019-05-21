<template>
    <div>
        <p> Coordinates: {{location.lat}} and {{location.lng}} </p>
    </div>
</template>
<script>
export default {
    name: 'app',
    data: function() {
        return {
            location: {}
        }
    },
    methods: {
        getLocation: function() {
             this.$getLocation({
                enableHighAccuracy: false, //defaults to false
                timeout: Infinity, //defaults to Infinity
                maximumAge: 0 //defaults to 0
            })
            .then(coordinates => {
                this.location = coordinates;
                console.log(coordinates);
            })
        }
    },
    created: function() {
         this.$getLocation({
                enableHighAccuracy: false, //defaults to false
                timeout: Infinity, //defaults to Infinity
                maximumAge: 0 //defaults to 0
            })
            .then(coordinates => {
                this.location = coordinates;
                console.log(coordinates);
            })
    }
}
</script>

<style>

</style>
