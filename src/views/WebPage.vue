<script setup lang="ts">

import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="h-screen ">
    <NavBar />
    <RouterView #default="{ Component, route}">
      <template v-if="Component">
        <component :is="Component" :key="route.fullPath"/>

      </template>

    </RouterView>
  </div>
</template>

<style scoped>

</style>
