import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store<{ object: { [key: string]: string } }>({
  state: {
    object: {
      initialProperty: 'defined'
    }
  },
  mutations: {
    setPropOnObject (state, { prop, val }: { prop: string; val: string }) {
      state.object[prop] = val
    }
  },
  actions: {
    onSetObjectProperty: (
      context,
      { prop, val }: { prop: string; val: string }
    ) => {
      context.commit('setPropOnObject', { prop, val })
    }
  },
  modules: {}
})
