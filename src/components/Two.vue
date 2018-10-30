<template>
  <div class="two">
    <h1>Page 2 of 4</h1>
    
      <p>How well are you understanding the content?</p>
      <p>Enter a number from 0 to 5:</p>
      <input type="number">
      <br />
      <br />
      
      <router-link to="/3">
      <button>Next</button>
      </router-link>

  </div>
</template>

<script>
export default {
  name: 'Two',
  props: {
    msg: String
  }
}
</script>