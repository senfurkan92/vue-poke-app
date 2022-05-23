<template>
  <AppLayout>
    <template #header>
      <div class="flex border-b shadow sticky top-0 z-30 bg-white">
        <div class="h-100">
          <button class="btn btn-outline border-0 btn-square rounded-none" @click="isShow=true">
            <menu-2-icon/>
          </button>
        </div>
        <div class="text-2xl h-100 self-center px-5">Header</div>
      </div>
    </template>
    <template #main>
      <main class="container mx-auto md:py-10 py-5">
        <router-view></router-view>
      </main>
    </template>
    <template #footer>
      <div class="flex border-t shadow">
        <div class="container mx-auto">
          Footer
        </div>
      </div>
    </template>
    <template #sidebar>
      <AppSidebar :position="'left'" :isShow="isShow" @close="isShow = false">
        <AppMenu></AppMenu>
      </AppSidebar>
    </template>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue';
import AppLayout from '@/layout/app-layout.vue';
import AppSidebar from '@/components/ui/app-sidebar.vue';
import AppMenu from '@/components/menu/app-menu.vue';

const isShow = ref(false);
</script>
