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
                <tr v-for="feedback in feedbackList">
                    <td>{{ feedback.feeling }}</td>
                    <td>{{ feedback.understanding }}</td>
                    <td>{{ feedback.support }}</td>
                    <td>{{ feedback.comments }}</td>
                    <td> <button>Delete?</button> </td>
                </tr>
            </tbody>
        </table>

    <p>{{feedbackToAdd.feeling}}</p>
    
  </div>
</template>

<script>
export default {
  name: 'Admin',
    
  computed: {
    feedbackList(){
      return this.$store.state.feedbackList
        },
        
    feedbackToAdd(){
      return this.$store.state.feedbackToAdd
        }  
    },

     
    
}
</script>