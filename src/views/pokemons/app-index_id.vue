<template>
  <div v-if="pokemon" class="grid grid-cols-6">
      <div class="sm:col-span-2 col-span-6 shadow-lg p-4">
        <div class="w-full aspect-square carousel carousel-vertical rounded-box">
          <div v-for="item, index in sprites" :key="index" class="carousel-item h-full w-full">
            <img class="w-full h-full object-contain" :src="item" alt=""/>
          </div>
        </div>
      </div>
      <div class="sm:col-span-1 col-span-3 p-4">
        <h3 class="text-2xl font-bold underline pb-4">General</h3>
        <ul>
          <li class="pb-2">
            <b>Name:</b>
            <br/>&ensp;<span class="capitalize">{{pokemon.name}}</span>
          </li>
          <li class="pb-2">
            <b>Height:</b>
            <br/>&ensp;<span>{{pokemon.height/10}} m</span>
          </li>
          <li class="pb-2">
            <b>Weight:</b>
            <br/>&ensp;<span>{{pokemon.weight/10}} kg</span>
          </li>
        </ul>
      </div>
      <div class="sm:col-span-1 col-span-3 p-4">
        <h3 class="text-2xl font-bold underline pb-4">Types</h3>
        <ul>
          <li v-for="type, index in types" :key="index"
            class="pb-2 capitalize"
          >
            {{type.name}}
          </li>
        </ul>
      </div>
      <div class="sm:col-span-1 col-span-6 p-4">
        <h3 class="text-2xl font-bold underline pb-4">Abilities</h3>
        <ul>
          <li v-for="ability, index in abilities" :key="index"
            class="pb-2 capitalize"
          >
            {{ability.name}}
          </li>
        </ul>
      </div>
      <div class="col-span-6 p-4">
        <h3 class="text-2xl font-bold underline pb-4">Moves</h3>
        <div class="flex flex-wrap">
          <div v-for="move, index in moves" :key="index"
            class="badge badge-secondary badge-outline badge-lg capitalize m-1"
          >
            {{move.name}}
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();

const store = useStore();

const pokemon = ref({});

const abilities = computed(() => (
  pokemon.value?.abilities
    ? pokemon.value.abilities.map((x) => ({
      id: x.ability.url.split('/')[6],
      name: x.ability.name,
    })) : []
));

const types = computed(() => (
  pokemon.value?.types
    ? pokemon.value.types.map((x) => ({
      id: x.type.url.split('/')[6],
      name: x.type.name,
    })) : []
));

const moves = computed(() => (
  pokemon.value?.moves
    ? pokemon.value.moves.map((x) => ({
      id: x.move.url.split('/')[6],
      name: x.move.name,
    })) : []
));

const sprites = computed(() => {
  const arr = [];
  if (pokemon.value?.sprites) {
    Object.keys(pokemon.value?.sprites).forEach((x) => {
      const value = pokemon.value?.sprites[x];
      if (value && typeof value === 'string') {
        arr.push(value);
      }
    });
  }
  return arr.reverse();
});

store.dispatch('pokemons/fetchPokemon', route.params.id)
  .then((resp) => {
    pokemon.value = resp.data;
  });
</script>

<style>

</style>
