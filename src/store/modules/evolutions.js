import axiosInstance from '@/helper/axios-instance';
import axios from 'axios';

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
    pushEvolutions(state, payload) {
      state.list = [
        ...state.list,
        ...payload,
      ];
    },
  },
  actions: {
    async fetchEvolutions({ state, commit }) {
      if (state.total !== state.list.length) {
        // find and set total
        const totalUrl = '/evolution-chain/?limit=1&offset=0';
        const totalResp = await axiosInstance.get(totalUrl);
        commit('setTotal', totalResp.data.count);

        // get evolution chains' queries
        const offset = state.list.length;
        const limit = Math.min(offset + state.limit, state.total);
        const chainQueries = [];
        // eslint-disable-next-line no-plusplus
        for (let i = offset + 1; i <= limit; i++) {
          const queryUrl = `/evolution-chain/${i}`;
          chainQueries.push(axiosInstance.get(queryUrl));
        }

        // get evolution chains
        const chains = [];
        const chainResps = await axios.all(chainQueries);
        chainResps.forEach((resp) => {
          const chain = {
            id: resp.data.id,
            chain: resp.data.chain,
          };
          chains.push(chain);
        });
        // push list
        commit('pushEvolutions', chains);
      }
      return true;
    },
    fetchEvolution(_, payload) {
      return axiosInstance.get(`/evolution/${payload}`);
    },
  },
};
