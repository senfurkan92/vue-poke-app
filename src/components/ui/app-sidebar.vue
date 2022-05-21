<template>
  <div class="fixed top-0 left-0 overflow-x-hidden z-50 transition-all bg-slate-700/60"
    :style="{width: props.isShow ? '100vw': '0vw'}"
  >
    <div
      class="bg-white overflow-y-auto rounded-r-xl"
      :class="{'right-0': props.position == 'right', 'left-0': props.position == 'left'}"
      style="width: clamp(325px, 75% ,600px); height: 100vh"
    >
      <div class="text-right">
        <button class="btn btn-square btn-ghost hover:bg-red-400 hover:text-white
          rounded-none rounded-bl-lg rounded-tr-lg" @click="$emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  position: {
    type: String,
    default: 'left',
  },
  isShow: {
    type: Boolean,
    default: false,
  },
});
</script>

<style>

</style>
