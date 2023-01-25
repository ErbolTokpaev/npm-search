<template>
  <div v-if="packages.length">
    <v-table>
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header.name"
          >
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="pack in packages"
          :key="pack.name"
          class="clickable-row"
          @click="getFullInfo(pack.name)"
        >
          <td>{{ pack.name }}</td>
          <td>{{ pack.description }}</td>
          <td>{{ new Date(pack.created).toLocaleDateString() }}</td>
          <td>{{ pack.owner.name }}</td>
          <td>{{ pack.version }}</td>
        </tr>
      </tbody>
    </v-table>
    <v-container style="max-width: 70%;">
      <v-pagination
        v-model="page"
        :length="totalPages"
      ></v-pagination>
    </v-container>
  </div>
  <div v-if="!packages.length && query" class="no-data">
    <span>There is no data</span>
  </div>
  <div v-if="!query" class="idea">
    <TestProject/>
  </div>
  <FullInfo v-model="visible" v-if="visible" @closed="visible = false"/>
</template>
<script setup>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import TestProject from "./TestProject.vue";
import FullInfo from "./FullInfo.vue";

const store = useStore();

const packages = computed(
  () => store.getters['packages'],
);
const totalPages = computed(
  () => store.getters['totalPages'],
);

const query = computed(
  () => store.getters['query'],
);
const page = ref(1);
const headers = ref([
  { name: 'name', text: 'Name' },
  { name: 'description', text: 'Description' },
  { name: 'created', text: 'Created date' },
  { name: 'owner', text: 'Author' },
  { name: 'version', text: 'Version' },
]);
const visible = ref(false);

watch(page, (value) => {
  store.commit('SET_PAGE', value - 1);
  if (value > 1) store.dispatch('search')
});

watch(query, (value) => {
  if (!value) page.value = 1;
})
const getFullInfo = (name) => {
  store.dispatch('getFullInfo', { name });
  visible.value = true;
}

</script>
<style lang="scss">
td {
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.clickable-row {
  cursor: pointer;
}
.no-data {
  margin-top: 40px;
  font-size: 18px;
  margin-bottom: 20px;
}

.idea {
  width: 100%;
}

</style>
