import Home from '@/views/home/app-index.vue';

export default [
  {
    path: '/',
    component: Home,
    alias: ['/home'],
    name: 'home',
  },
  {
    path: '/pokemons',
    component: () => import('@/views/pokemons/app-index.vue'),
    alias: ['/pokes'],
    name: 'pokemons',
  },
  {
    path: '/pokemons/:id',
    component: () => import('@/views/pokemons/app-index_id.vue'),
    alias: ['/pokes/:id'],
    name: 'pokemons-id',
  },
  {
    path: '/berries',
    component: () => import('@/views/berries/app-index.vue'),
    name: 'berries',
  },
  {
    path: '/berries/:id',
    component: () => import('@/views/berries/app-index_id.vue'),
    name: 'berries-id',
  },
  {
    path: '/evolutions',
    component: () => import('@/views/evolutions/app-index.vue'),
    name: 'evolutions',
  },
];
