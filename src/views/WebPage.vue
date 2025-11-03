<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRafikeyWebstore } from '@/stores'

const showButton = ref(true)
const isChatFrameOpen = computed(() => rafikeyWebStore.openChatFrame)
const chatbot_url = import.meta.env.VITE_APP_RAFIKEY_CHATBOT_FRONTEND as string
const rafikeyWebStore = useRafikeyWebstore()

const askRafikeyHandler = () => {
  rafikeyWebStore.openChatFrame = !rafikeyWebStore.openChatFrame
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

const scrollTopHandler = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen relative">
    <NavBar />
    <div
      v-show="showButton"
      class="fixed bottom-0 left-0 right-0 z-[99999] flex justify-center items-center space-x-4 p-4 transition-opacity duration-300"
    >
      <div class="w-[298px] h-[69px] bg-darkgray rounded-full">
        <div
          class="h-full flex w-full justify-between items-center px-[26px] cursor-pointer"
          @click="askRafikeyHandler"
        >
          <div>
            <span v-if="!rafikeyWebStore.openChatFrame" class="text-white font-outfit text-[14px]"
              >Ask Rafikey</span
            >
            <span v-else class="text-white font-outfit text-[14px]">Close Rafikey</span>
          </div>
          <div class="bg-lightGrayOne rounded-full h-8 w-8 flex justify-center items-center">
            <span
              v-if="!rafikeyWebStore.openChatFrame"
              class="material-icons-outlined text-shark-950"
              >arrow_upward</span
            >
            <span v-else class="material-icons-outlined text-shark-950">close</span>
          </div>
        </div>
      </div>
    </div>

    <RouterView #default="{ Component, route }">
      <template v-if="Component">
        <component :is="Component" :key="route.fullPath" />
      </template>
    </RouterView>
    <!--    floating button-->

    <div
      @click.stop="scrollTopHandler"
      v-if="!showButton && !isChatFrameOpen"
      class="fixed bottom-24 right-10 z-50 cursor-pointer "
    >
      <div
        class="shadow-[0_10px_6px_rgba(0,0,0,0.3)] rounded-full border-2 border-casablanca-300 md:h-12 md:w-12 h-10 w-10 flex justify-center items-center"
      >
        <span class="material-icons-outlined font-bold  rotate-90 text-casablanca-300">arrow_back_ios</span>
      </div>
    </div>

    <div v-if="isChatFrameOpen" class="" >
      <div @click="askRafikeyHandler">
        <iframe
          style="
            position: fixed;
            bottom: 20px;
            right: 10px;
            width: 300px;
            height: 500px;
            max-height: 80dvh;
            border: none;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            z-index: 1000;
          "
          id="rafikey-iframe" :src="`${chatbot_url}/guest-user?embed=true`"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
