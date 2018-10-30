

<template>
  <div class="one">
    <h1>Page 1 of 4</h1>
    
      <p>How are you feeling today?</p>
      <p>Enter a number from 0 to 5:</p>
      <input type="number" v-model="feelingInput">
      <br />
      <br />
      <span>{{ feelingInput }} </span>
        <!-- <router-link to="/2"> -->
        <button v-on:click="addFeeling(feelingInput)">Next</button>
        <!-- </router-link> -->
        <p>{{feedbackToAdd.feeling}}</p>
       
    
  </div>
</template>

<script>

 let feelingInput = '';

export default {
  name: "One",

  // data:{
  //   feelingInput: '',
  // },
  
  computed: {
    feedbackList(){
      return this.$store.state.feedbackList
    },

    feedbackToAdd(){
      return this.$store.state.feedbackToAdd
    },
    
  },
  methods: {
    addFeeling: function(feeling){

      console.log(this.feelingInput);
      console.log('feeling from user: ', feeling);

      //  this.$store.state.feedbackToAdd.feeling = this.feelingInput;
      // dispatches 'addFeeling' action to Vuex store
      this.$store.dispatch('addFeeling', feeling);
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