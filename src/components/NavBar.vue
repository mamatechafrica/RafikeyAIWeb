<script setup lang="ts">
import { useTabStore } from '@/stores'
import { useRouter } from 'vue-router'

const tabStore = useTabStore()
const router = useRouter()

const handleRouteChange = (tab: string) =>{
  tabStore.setActiveTab(tab)
  router.push({
    name: tab
  })
}

const loginHandler = () => {
  window.location.href = 'https://rafikeyaichatbot-frontend.onrender.com/auth/login'
}

const registerHandler = () => {
  window.location.href = 'https://rafikeyaichatbot-frontend.onrender.com/auth'
}
</script>

<template>
  <div class="fixed left-0 right-0 top-0 bg-white">
    <div class="flex justify-between py-4 px-8  gap-4 ">
<!--      icon-->
      <div class="">
        <img src="@/assets/images/RAFIKey.png" alt="rafikey-name-image">
      </div>
<!--      navs-->
      <div class="flex gap-10 ">
        <div v-for="tab in tabStore.getTabs" :key="tab.value">
          <button @click="handleRouteChange(tab.value)">
            <span class="text-xl font-semibold" :class="[tabStore.activeTab === tab.value? 'text-black': 'text-gray-400']">{{ tab.name }}</span>
          </button>
        </div>
      </div>
<!--      buttons-->
      <div class="flex gap-4">
        <button @click="loginHandler">
          <span class="text-xl font-semibold text-gray-400">Log In</span>
        </button>
        <button
          @click="registerHandler"
          class="btn btn-sm bg-black drop-shadow-2xl">
          <span class="text-lg py-3  font-semibold text-white">Register</span>
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
