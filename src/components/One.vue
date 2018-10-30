

<template>
  <div class="one">
    <h1>Page 1 of 4</h1>
    
      <p>How are you feeling today?</p>
      <p>Enter a number from 0 to 5:</p>
      <input type="number">
      <br />
      <br />
      
        <router-link to="/2">
        <button v-on:click="pageTwo"> Next</button>
        </router-link>
       
    
  </div>
</template>

<script>


export default {
  name: "One",
  props: {
    msg: String
  },
  methods: {
    pageTwo: function(){
      console.log('in pageTwo');
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>