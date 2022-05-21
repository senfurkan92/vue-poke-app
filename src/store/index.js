import { createStore } from 'vuex';
import pokemons from './modules/pokemons';
import berries from './modules/berries';

export default createStore({
  modules: {
    pokemons,
    berries,
  },
});
