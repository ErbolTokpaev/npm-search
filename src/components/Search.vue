<template>
  <v-text-field
    v-model="search"
    autofocus
    clearable
    hide-details
    variant="outlined"
    placeholder="Start typing to search"
    color="primary"
  />
</template>
<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const search = ref('');

watch(search, (value) => {
  store.commit('SET_QUERY', value);
  if (value && value.length > 0) {
    store.dispatch('search');
  } else {
    store.commit('SET_PACKAGES', []);
    store.commit('SET_PAGE', 0);
  }
});
</script>
