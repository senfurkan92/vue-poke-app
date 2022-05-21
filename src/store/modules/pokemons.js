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
    pushPokemons(state, payload) {
      state.list = [
        ...state.list,
        ...payload,
      ];
    },
    setSingleSprite(state, payload) {
      const pokemon = state.list.find((x) => x.id === payload.id);
      pokemon.imgSrc = payload.sprite;
    },
  },
  actions: {
    async fecthPokemons({ state, commit }) {
      if (state.total !== state.list.length) {
        const offset = state.list.length;
        const url = `/pokemon/?limit=${state.limit}&offset=${offset}`;
        const resp = await axiosInstance.get(url);
        commit('setTotal', resp.data.count);
        const pokemons = resp.data.results.map((x) => ({
          id: Number(x.url.split('/')[6]),
          name: x.name,
          url: x.url,
          imgSrc: '',
        }));
        commit('pushPokemons', pokemons);
        // assign imgSrc
        const axiosItems = [];
        pokemons.forEach((x) => {
          const pokeUrl = `/pokemon/${x.id}`;
          axiosItems.push(axiosInstance.get(pokeUrl));
        });
        const resps = await axios.all(axiosItems);
        resps.forEach((x) => {
          const payload = {
            id: x.data.id,
            sprite: x.data.sprites.front_default,
          };
          commit('setSingleSprite', payload);
        });
      }
      return true;
    },
    fetchPokemon(_, payload) {
      return axiosInstance.get(`/pokemon/${payload}`);
    },
  },
};
