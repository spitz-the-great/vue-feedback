import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        feedbackList:[
                {
                feeling: 0,
                understanding: 0,
                support: 0,
                comments: '', 
            }
        ],

        feedbackToAdd:{
            feeling: 0,
            understanding: 0,
            support: 0,
            comments: '',
        }
    },

    mutations:{
        addFeeling: (state, payload) =>{
            console.log('feeling mutation payload: ', payload);
            state.feedbackToAdd.feeling = payload;
            console.log('feedbackToAdd after mutation: ', state.feedbackToAdd.feeling);
        }
    },

    actions: {

        //listens for 'addFeeling' dispatch from components
        addFeeling: (context, payload) => {

            console.log('payload from feeling page: ', payload)

            // .commit calls the 'addFeeling' mutation on line 26
            // the ('addFeeling') below correlates to the addFeeling mutation on line 26
             context.commit('addFeeling', payload);
        }
    }
    

})