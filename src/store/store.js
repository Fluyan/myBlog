import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state:{
        loading:false
    },
    mutations:{
        show(state){
            state.loading=true
            setTimeout(() => {
                state.loading = false
            }, 1000);
        },
    }
})