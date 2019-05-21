<template>

  <div class="home">
    <test/>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to B2C</h1>
    <h2>Please use the nav bar to login in page you would like to go to.</h2>
  </div>
  
</template>

<script>
// @ is an alias to /src
import test from '@/components/test.vue'

export default {
  name: 'home',
  components: {
    test
  }
}
</script>
