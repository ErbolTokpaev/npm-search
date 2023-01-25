import { createStore } from 'vuex';
import NpmPackages from '../plugins/algoliasearch';

const store = createStore({
  state: () => ({
    query: '',
    page: 0,
    packages: [],
    totalPages: 0,
    fullInfo: {},
  }),
  mutations: {
    SET_PACKAGES(state, packages) {
      state.packages = [...packages];
    },
    SET_TOTAL_PAGES(state, pages) {
      state.totalPages = pages;
    },
    SET_QUERY(state, searchText) {
      state.query = searchText;
    },
    SET_PAGE(state, page) {
      state.page = page;
    },
    SET_FULL_INFO(state, info) {
      state.fullInfo = {...info};
    }
  },
  actions: {
    async search({ commit, state }) {
      const { query, page } = state;
      const result = await NpmPackages.search(query, page,10);
      commit('SET_PACKAGES', result.hits);
      commit('SET_TOTAL_PAGES', result.nbPages);
    },
    async getFullInfo({ commit, state}, payload) {
      const { name } = payload;
      const result = await NpmPackages.getByName(name);
      commit('SET_FULL_INFO', result);
    }
  },
  getters: {
    packages: (s) => s.packages,
    totalPages: (s) => s.totalPages,
    query: (s) => s.query,
    fullInfo: (s) => s.fullInfo,
  },
});

export default store;
