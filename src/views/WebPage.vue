<script setup lang="ts">

import NavBar from '@/components/NavBar.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(true)

const askRafikeyHandler = () => {
  window.location.href = 'https://chat.askrafikey.com/auth'
}

const handleScroll = () => {
  const footer = document.querySelector('footer')
  if (footer) {
    const footerRect = footer.getBoundingClientRect()
    const windowHeight = window.innerHeight

    // Hide button when footer is visible (when top of footer is within viewport)
    showButton.value = footerRect.top > windowHeight
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="h-screen  relative ">
    <NavBar />
    <div
      v-show="showButton"
      class="fixed bottom-0  left-0 right-0   z-50 flex justify-center items-center space-x-4 p-4 transition-opacity duration-300"
    >
      <div class="w-[298px]  h-[69px] bg-darkgray rounded-full">
        <div class="h-full flex w-full justify-between items-center px-[26px] cursor-pointer" @click="askRafikeyHandler" >
          <div>
            <span class="text-white font-outfit text-[14px]">Ask Rafikey</span>
          </div>
          <div class="bg-lightGrayOne rounded-full h-8 w-8 flex justify-center items-center">
            <span class="material-icons-outlined text-shark-950">arrow_upward</span>
          </div>
        </div>
      </div>
    </div>


    <RouterView #default="{ Component, route}">
      <template v-if="Component">
        <component :is="Component" :key="route.fullPath"/>

      </template>

    </RouterView>

  </div>
</template>

<style scoped>

</style>
