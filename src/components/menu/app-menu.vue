<template>
  <div class="flex flex-col items-center">
        <router-link :to="{name: 'home'}"
            class="pb-3 text-xl hover:text-pink-400 hover:underline transition-all"
            active-class="text-violet-600 scale-105"
        >
            Home
        </router-link>
        <router-link :to="{name: 'pokemons'}"
            class="pb-3 text-xl hover:text-pink-400 hover:underline transition-all"
            active-class="text-violet-600 scale-105"
        >
            Pokemons
        </router-link>
        <router-link :to="{name: 'berries'}"
            class="pb-3 text-xl hover:text-pink-400 hover:underline transition-all"
            active-class="text-violet-600 scale-105"
        >
            Berries
        </router-link>
  </div>
</template>
