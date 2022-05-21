<template>
  <div class="card card-side bg-base-100 shadow-xl">
    <div class="card-body">
      <div class="order">
        <div>
          <h2 class="card-title capitalize">{{props.item.name}}</h2>
        </div>
        <div>
          <router-link :to="getUrl()" exact
            class="btn btn-primary text-white"
          >
            <eyeglass-2-icon/>
          </router-link>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  routeName: {
    type: String,
    required: true,
  },
});

const getUrl = () => (
  {
    name: props.routeName,
    params: {
      id: props.item.id,
    },
  }
);

</script>

<style scoped>
.card-body > .order {
  display:grid;
  grid-template-columns: auto max-content;
  align-items: center;
}
</style>
