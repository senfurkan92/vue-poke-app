<template>
  <div class="colorful">
    <div class="grid grid-cols-3 p-3 gap-2 border-b border-slate-400 colorful-item"
      v-for="chain in evos" :key="chain.chainId"
    >
      <div class="col-span-1"
        v-for="order in chain.chainOrders.sort((a, b) => a.no - b.no)"
        :key="order.no"
      >
        <div class="flex flex-col">
          <div v-for="poke in order.list" :key="poke.pokeId">
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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import AppCard from '@/components/ui/app-card.vue';

const store = useStore();
store.dispatch('evolutions/fetchEvolutions');

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

const evos = computed(() => {
  const list = [...store.state.evolutions.list].filter((x) => x != null);
  if (list) {
    const arranged = [];
    list.forEach((x) => {
      getEvolvesTo(x.chain, x.id, arranged);
    });
    return arranged;
  }
  return [];
});

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
