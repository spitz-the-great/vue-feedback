<template>
  <div class="admin">
    <h1>Admin</h1>

        <table >

             <th>
                 <tr>
                    <td numeric>Feeling</td>
                    <td numeric>Understanding</td>
                    <td numeric>Support</td>
                    <td>Comments</td>
                    <td>Delete?</td>
                </tr>
            </th>
            
            <tbody>      
                <tr v-for="feedbacks in feedback">
                    <td>{{ feedbacks.feeling }}</td>
                    <td>{{ feedbacks.understanding }}</td>
                    <td>{{ feedbacks.support }}</td>
                    <td>{{ feedbacks.comments }}</td>
                    <td> <button>Delete?</button> </td>
                </tr>
            </tbody>
        </table>

    
    
  </div>
</template>

<script>
export default {
  name: 'Admin',
    
  computed: {
    feedback(){
      return this.$store.state.feedback
        }   
    }
}
</script>