import axiosInstance from '@/helper/axios-instance';
import axios from 'axios';

function getEvolvesTo(item, chainId, arr, order = 0) {
  const evolve = {
    chainOrder: order,
    name: item.species.name,
    pokeId: Number(item.species.url.toString().split('/')[6]),
  };
  if (item.evolves_to.length > 0) {
    // continue to recursive
    item.evolves_to.forEach((x) => getEvolvesTo(x, chainId, arr, order + 1));
  }
  let sub = arr.find((x) => x.chainId === chainId);
  if (sub) {
    const currentOrder = sub.chainOrders.find((x) => x.no === evolve.chainOrder);
    if (currentOrder) {
      currentOrder.list.push(evolve);
    } else {
      sub.chainOrders.push({
        no: evolve.chainOrder,
        list: [evolve],
      });
    }
  } else {
    sub = {
      chainId,
      chainOrders: [
        {
          no: evolve.chainOrder,
          list: [evolve],
        },
      ],
    };
    arr.push(sub);
  }
}

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
    getArrangedEvos(state) {
      const list = [...state.list].filter((x) => x != null);
      if (list) {
        const arranged = [];
        list.forEach((x) => {
          getEvolvesTo(x.chain, x.id, arranged);
        });
        return arranged;
      }
      return [];
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
          const banned = [210, 222, 226, 225, 227, 231, 238, 251];
          const queryUrl = `/evolution-chain/${banned.includes(i) ? 1 : i}`;
          chainQueries.push(axiosInstance.get(queryUrl));
        }

        // get evolution chains
        const chains = [];
        try {
          const chainResps = await axios.all(chainQueries);
          chainResps.forEach((resp) => {
            try {
              const chain = {
                id: resp.data.id,
                chain: resp.data.chain,
              };
              chains.push(chain);
            } catch (error) {
              console.log('1. error');
              chains.push(null);
            }
          });
        } catch (error) {
          console.log('2. error');
          chains.push(null);
        }
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
