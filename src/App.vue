<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <One />
  </div> --><div>
  <Header></Header>
  <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import One from './components/One.vue'
import Two from './components/Two.vue'
import Three from './components/Three.vue'
import Four from './components/Four.vue'
import Success from './components/SuccessPage.vue'
import Admin from './components/Admin.vue'
import Header from './components/Header.vue'
import Bye from './components/Bye.vue'

export default {
  name: 'app',
  components: {
   
    One,
    Two,
    Three,
    Four,
    Success,
    Admin,
    'Header': Header,
    Bye,
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
