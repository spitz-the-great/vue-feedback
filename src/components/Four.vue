<template>
  <div class="four">
    <h1>Page 4 of 4</h1>
    
      <p>Do you want to add a comment?</p>
      <p>Type some feels out:</p>
      <input type="text">
      <br />
      <br />
      
      <router-link to="/confirm">
      <button>Submit</button>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Four',
  props: {
    msg: String
  }
}
</script>