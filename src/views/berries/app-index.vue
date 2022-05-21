<template>
  <div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3 py-3">
        <template v-for="berry in $store.state.berries.list" :key="berry.id">
          <AppBasicCard :item="berry" :routeName="'berries-id'"/>
        </template>
      </div>
      <div class="text-center py-3">
        <button class="btn btn-outline btn-wide"
          :class="{loading: fetching}"
          :disabled="fetching"
          @click="fetchPBerries()"
        >
          Load More
        </button>
      </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import AppBasicCard from '@/components/ui/app-basic-card.vue';

const store = useStore();

const fetching = ref(false);

const fetchPBerries = async () => {
  fetching.value = true;
  await store.dispatch('berries/fecthBerries');
  fetching.value = false;
};

onMounted(() => {
  store.dispatch('berries/fecthBerries');
});
</script>

<style>

</style>
