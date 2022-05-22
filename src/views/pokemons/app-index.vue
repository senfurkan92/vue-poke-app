<template>
  <div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3 py-3">
        <template v-for="pokemon in $store.state.pokemons.list" :key="pokemon.id">
          <AppCard :item="pokemon" :routeName="'pokemons-id'"/>
        </template>
      </div>
      <div class="text-center py-3">
        <button class="btn btn-outline btn-wide"
          :class="{loading: fetching}"
          :disabled="fetching"
          @click="fetchPokemons()"
        >
          Load More
        </button>
      </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import AppCard from '@/components/ui/app-card.vue';

const store = useStore();

const fetching = ref(false);

const fetchPokemons = async () => {
  fetching.value = true;
  await store.dispatch('pokemons/fetchPokemons');
  fetching.value = false;
};

onMounted(() => {
  store.dispatch('pokemons/fetchPokemons');
});
</script>

<style>

</style>
