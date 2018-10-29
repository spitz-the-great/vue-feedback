<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <One />
  </div> -->
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import One from './components/One.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    One
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
