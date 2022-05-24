<template>
  <div class="colorful">
    <div class="grid grid-cols-3 p-3 gap-2 border-b border-slate-400 colorful-item"
      v-for="chain in $store.getters['evolutions/getArrangedEvos']" :key="chain.chainId"
    >
      <div class="md:col-span-1 col-span-3 md:p-0 pb-2 md:border-0 border-b-2 border-slate-700"
        v-for="order in chain.chainOrders.sort((a, b) => a.no - b.no)"
        :key="order.no"
      >
        <div class="flex flex-col">
          <div v-for="poke in order.list" :key="poke.pokeId" class="mb-1 mt-1">
            <AppCard
              :routeName="'pokemons-id'"
              :item="{
                id: poke.pokeId,
                imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.pokeId}.png`,
                name: poke.name,
              }"
            ></AppCard>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center py-3">
        <button class="btn btn-outline btn-wide"
          :class="{loading: fetching}"
          :disabled="fetching"
          @click="fetchEvolutions()"
        >
          Load More
        </button>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import AppCard from '@/components/ui/app-card.vue';

const store = useStore();
store.dispatch('evolutions/fetchEvolutions');

const fetching = ref(false);

const fetchEvolutions = async () => {
  fetching.value = true;
  await store.dispatch('evolutions/fetchEvolutions');
  fetching.value = false;
};
</script>

<style scoped>
.colorful > .colorful-item:nth-child(1) {
  border-radius: 10px 10px 0px 0px;
}

.colorful > .colorful-item:nth-child(odd) {
  background: #fdd8d8;
}

.colorful > .colorful-item:nth-child(even) {
  background: #cef9dd;
}

.colorful > .colorful-item:nth-last-child(2) {
  border-radius: 0px 0px 10px 10px;
  border: 0;
}
</style>
