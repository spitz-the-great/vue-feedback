<template>
  <div class="one">
    <h1>Confirmation Page</h1>

    <h2>Your feedback was submitted successfully!</h2>

      <p>Do you want to leave another feedback?</p>

      <router-link to="/">
      <button>Yes, I desire to express my feelings through a series of numbers again.</button>
      </router-link>
      <br>
      <br>
      <router-link to="/bye">
      <button>Nah son. I'm out.</button>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Success',
  props: {
    msg: String
  },
  methods: {
   
  }
}
</script>