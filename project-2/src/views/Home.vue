<template>
  <div class="home">
    <test/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import test from '@/components/test.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    test
  }
}
</script>
