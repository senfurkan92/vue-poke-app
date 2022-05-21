<template>
  <div v-if="berry" class="grid grid-cols-6">
      <div class="sm:col-span-2 col-span-3 p-4">
        <h3 class="text-2xl font-bold underline pb-4">General</h3>
        <ul>
          <li class="pb-2">
            <b>Name:</b>
            <br/>&ensp;<span class="capitalize">{{berry.name}}</span>
          </li>
          <li class="pb-2">
            <b>Growth Time:</b>
            <br/>&ensp;<span>{{berry.growth_time}}</span>
          </li>
          <li class="pb-2">
            <b>Max Harvest:</b>
            <br/>&ensp;<span>{{berry.max_harvest}}</span>
          </li>
          <li class="pb-2">
            <b>Size:</b>
            <br/>&ensp;<span>{{berry.size}}</span>
          </li>
          <li class="pb-2">
            <b>Natural Gift Power:</b>
            <br/>&ensp;<span>{{berry.natural_gift_power}}</span>
          </li>
          <li class="pb-2">
            <b>Smoothness:</b>
            <br/>&ensp;<span>{{berry.smoothness}}</span>
          </li>
          <li class="pb-2">
            <b>Soil Dryness:</b>
            <br/>&ensp;<span>{{berry.soil_dryness}}</span>
          </li>
        </ul>
      </div>
      <div class="sm:col-span-2 col-span-3 p-4">
        <h3 class="text-2xl font-bold underline pb-4">Types</h3>
        <ul>
          <li v-for="type, index in types" :key="index"
            class="pb-2 capitalize"
          >
            {{type.name}}
          </li>
        </ul>
      </div>
      <div class="sm:col-span-2 col-span-6 p-4">
        <h3 class="text-2xl font-bold underline pb-4">Abilities</h3>
        <ul>
          <li v-for="ability, index in abilities" :key="index"
            class="pb-2 capitalize"
          >
            {{ability.name}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();

const store = useStore();

const berry = ref({});

const abilities = computed(() => (
  berry.value?.abilities
    ? berry.value.abilities.map((x) => ({
      id: x.ability.url.split('/')[6],
      name: x.ability.name,
    })) : []
));

const types = computed(() => (
  berry.value?.types
    ? berry.value.types.map((x) => ({
      id: x.type.url.split('/')[6],
      name: x.type.name,
    })) : []
));

store.dispatch('berries/fetchBerry', route.params.id)
  .then((resp) => {
    berry.value = resp.data;
    console.log(resp.data);
  });
</script>

<style>

</style>
