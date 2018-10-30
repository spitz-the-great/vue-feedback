
<template>
  <div class="header">
    <h1>{{ header }}</h1>
  </div>
</template>

<script>


export default {
  name: "Header",
  props: {
    msg: String
  },
  data() {
      return{
          header: 'Vue Feedback'
      }

  },
 
};

</script>

<style scoped>

h1 {
   text-align: center;
}
</style>