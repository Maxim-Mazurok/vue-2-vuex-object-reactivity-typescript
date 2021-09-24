<template>
  <div id="app">
    <h1>object.initialProperty = "{{ object.initialProperty }}"</h1>
    <button @click="chageInitialProperty">change object.initialProperty</button>

    <h1>object.newProperty = "{{ object.newProperty }}"</h1>
    <button @click="chageNewProperty">change object.newProperty</button>
  </div>
</template>

<script lang="ts">
import store from './store'

export default {
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    object: () => store.state.object // Vetur is wrong, ignore him
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    chageInitialProperty: () =>
      store.dispatch('onSetObjectProperty', {
        prop: 'initialProperty',
        val: new Date().toISOString()
      }),

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    chageNewProperty: () =>
      store.dispatch('onSetObjectProperty', {
        prop: 'newProperty',
        val: new Date().toISOString()
      })
  }
}
</script>
