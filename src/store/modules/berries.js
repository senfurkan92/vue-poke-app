import axiosInstance from '@/helper/axios-instance';

export default {
  namespaced: true,
  state() {
    return {
      total: -1,
      list: [],
      limit: 12,
    };
  },
  getters: {
    allFetched(state) {
      return state.total === state.list.length;
    },
  },
  mutations: {
    setTotal(state, payload) {
      state.total = payload;
    },
    pushBerries(state, payload) {
      state.list = [
        ...state.list,
        ...payload,
      ];
    },
  },
  actions: {
    async fecthBerries({ state, commit }) {
      if (state.total !== state.list.length) {
        const offset = state.list.length;
        const url = `/berry/?limit=${state.limit}&offset=${offset}`;
        const resp = await axiosInstance.get(url);
        commit('setTotal', resp.data.count);
        const berries = resp.data.results.map((x) => ({
          id: Number(x.url.split('/')[6]),
          name: x.name,
          url: x.url,
          imgSrc: '',
        }));
        commit('pushBerries', berries);
        // assign imgSrc
        const axiosItems = [];
        berries.forEach((x) => {
          const pokeUrl = `/berry/${x.id}`;
          axiosItems.push(axiosInstance.get(pokeUrl));
        });
      }
      return true;
    },
    fetchBerry(_, payload) {
      return axiosInstance.get(`/berry/${payload}`);
    },
  },
};
