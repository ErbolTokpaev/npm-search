<script setup>
import TopBar from "./components/TopBar.vue";
import Footer from "./components/Footer.vue";
import Search from "./components/Search.vue";
import DataTable from "./components/DataTable.vue";
</script>

<template>
  <v-app>
    <TopBar />
    <v-main>
      <v-container>
        <Search/>
        <DataTable/>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>
.main {
  max-width: 1200px;
  margin: 32px auto;
  height: 100%;
}
</style>
