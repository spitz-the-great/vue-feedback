import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        feedback:[
                {
                feeling: 0,
                understanding: 0,
                support: 0,
                comments: '', 
            }
        ]
    }
})