import { createStore } from 'vuex';
import pokemons from './modules/pokemons';
import berries from './modules/berries';
import evolutions from './modules/evolutions';

export default createStore({
  modules: {
    pokemons,
    berries,
    evolutions,
  },
});
