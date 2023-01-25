<template>
  <v-dialog
    v-model="dialog"
    max-width="700"
  >
    <v-card>
      <v-card-title class="d-flex align-content-end pt-5">
        <h3>{{ fullInfo.name }}</h3>
        <v-spacer></v-spacer>
        <v-btn
          size="small"
          icon
          dark
          @click="closeHandler()"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider/>
      <v-card-text>
        <v-row>
          <v-col>
            <v-banner
              :text="fullInfo.description || 'There is no description for this package'"
              class="px-0"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>Link to homepage</v-col>
          <v-col>
            <a :href="fullInfo.homepage" target="_blank">{{ fullInfo.name }}</a>
          </v-col>
        </v-row>
        <v-divider/>
        <v-row>
          <v-col>Version</v-col>
          <v-col>
            {{ fullInfo.version }}
          </v-col>
        </v-row>
        <v-divider/>
        <v-row>
          <v-col>Created Date</v-col>
          <v-col> {{ new Date(fullInfo.created).toLocaleDateString() }}</v-col>
        </v-row>
        <v-divider/>
        <v-row>
          <v-col>Author name</v-col>
          <v-col> {{ fullInfo.originalAuthor?.name }}</v-col>
        </v-row>
        <v-divider/>
        <v-row>
          <v-col class="d-flex align-center">Owner</v-col>
          <v-col>
            <v-avatar :image="fullInfo.owner?.avatar" class="mr-3"></v-avatar>
            <a :href="fullInfo.owner?.link" target="_blank">{{ fullInfo.owner?.name }}</a>
          </v-col>
        </v-row>
        <v-divider/>
        <v-row>
          <v-col>ChangeLog</v-col>
          <v-col>
            <a :href="fullInfo.changelogFilename" target="_blank">ChangeLog</a>
          </v-col>
        </v-row>
        <v-divider/>
        <v-row class="mb-3">
          <v-col>Statistics last 30 days</v-col>
          <v-col>
            {{ formatNumber(fullInfo.downloadsLast30Days)}}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref, watch, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
  value: {
    type: Boolean,
  },
})
const emit = defineEmits(['closed']);

const closeHandler = () => {
  emit('closed', false);
};
const formatNumber = (value) => {
  if (!value && value !== 0) return '-';
  const count = Number(value);
  if (isNaN(count)) return '-';
  if (Math.round(Math.abs(count) * 100) === 0) return '0';
  return count.toLocaleString('en-US', { maximumFractionDigits: 2 });
}

const dialog = ref(false);

watch(
  () => props.value,
  (val) => {
    dialog.value = val;
  },
);
const fullInfo = computed(
  () => store.getters['fullInfo'],
);
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000;
}
</style>
