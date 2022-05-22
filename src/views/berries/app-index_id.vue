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
        <h3 class="text-2xl font-bold underline pb-4">Firmness</h3>
        <ul>
          <li class="capitalize">
            {{berry.firmness?.name}}
          </li>
        </ul>
        <h3 class="text-2xl font-bold underline pb-4">Natural Gift Type</h3>
        <ul>
          <li class="capitalize">
            {{berry.natural_gift_type?.name}}
          </li>
        </ul>
      </div>
      <div class="sm:col-span-2 col-span-6 p-4">
        <h3 class="text-2xl font-bold underline pb-4">Flavors</h3>
        <ul>
          <li v-for="flavor, index in flavors" :key="index"
            class="pb-2 capitalize"
          >
            {{flavor.name}} (Potency: {{flavor.potency}})
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

const flavors = computed(() => (
  berry.value?.flavors
    ? berry.value.flavors.map((x) => ({
      potency: x.potency,
      name: x.flavor.name,
      id: x.flavor.url.split('/')[6],
    })) : []
));

store.dispatch('berries/fetchBerry', route.params.id)
  .then((resp) => {
    berry.value = resp.data;
  });
</script>

<style>

</style>
