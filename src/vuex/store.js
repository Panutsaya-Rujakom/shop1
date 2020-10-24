import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// Application initial state
const state = {
    count: 10
}

// Define the required mutations
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}

// Create store instance
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})