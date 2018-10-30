<template>
  <div class="three">
    <h1>Page 3 of 4</h1>
    
      <p>How supported are you feeling?</p>
      <p>Enter a number from 0 to 5:</p>
      <input type="number">
      <br />
      <br />
      
      <router-link to="/4">
      <button>Next</button>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Three',
  props: {
    msg: String
  }
}
</script>