<script setup lang="ts">
import { useRafikeyWebstore, useTabStore } from '@/stores'
import { useRouter } from 'vue-router'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const tabStore = useTabStore()
const router = useRouter()
const webStore = useRafikeyWebstore()

const handleRouteChange = (tab: string) =>{
  tabStore.setActiveTab(tab)
  // webStore.setCollapseSidebarSmall(true)
  setTimeout(()=>{
    webStore.setCollapseSidebarSmall(true)
    router.push({
      name: tab
    })
    // webStore.setCollapseSidebarSmall(true)
  }, 1000)


}

const homeHandler = () =>{
  // webStore.setCollapseSidebarSmall(true)
  router.push({
    name: 'home'
  })
}
const loginHandler = () => {
  window.location.href = 'https://chat.askrafikey.com/auth/login'
}

const registerHandler = () => {
  window.location.href = 'https://chat.askrafikey.com/auth'
}
</script>

<template>

  <div class="fixed hidden lg:block left-0  h-[102px] right-0 top-0 bg-white z-50">
    <div class="flex bg-white items-center h-full justify-between py-4 px-[80px] gap-4 ">
<!--      icon-->
      <div class="cursor-pointer flex items-end pt-1 " @click="homeHandler">
        <img src="@/assets/images/RAFIKey.png" alt="rafikey-name-image">
      </div>
<!--      navs-->
      <div class="flex xl:gap-10 gap-4  ">
        <div v-for="tab in tabStore.getTabs" :key="tab.value">
          <button @click="handleRouteChange(tab.value)">
            <span class="text-[24px] font-pt-sans-bold" :class="[tabStore.activeTab === tab.value? 'text-darkGrayOne': 'text-gray-400']">{{ tab.name }}</span>
          </button>
        </div>
      </div>
<!--      buttons-->
      <div class="flex h-[47px] w-[249px] gap-[53px]">
        <button @click="loginHandler">
          <span class="font-pt-sans-bold text-lightGrayTwo text-[24px] text-nowrap">Log In</span>
        </button>
        <button
          @click="registerHandler"
          class="btn btn-sm h-full backdrop-blur-sm   shadow-[0_0_50px_0px] shadow-navBarShadowBackground/50 border-none  bg-darkGrayOne rounded-[8px] py-[8px] px-[28px]">
          <span class="font-pt-sans-bold text-white text-[24px]">Register</span>
        </button>
      </div>
    </div>

  </div>
  <div class="flex fixed z-50 top-0 left-0 right-0 bg-white justify-between p-4 lg:hidden">
    <div  class="cursor-pointer" @click="homeHandler">
      <img src="@/assets/images/rafikey-word.png" alt="rafikey-word"/>
    </div>
    <div class="">
      <div
        @click="webStore.setCollapseSidebarSmall(false)"
        class="btn btn-sm bg-transparent border-none hover:shadow-none">
        <span class="material-icons-outlined">clear_all</span>
      </div>
    </div>
  </div>
  <div class="">
    <TransitionRoot
      as="template"
      :show="!webStore.collapseSidebarSmall"
      class="lg:hidden block"
    >
      <Dialog class="relative z-50" @close="webStore.setCollapseSidebarSmall(true)">
        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                  <TransitionChild
                    as="template"
                    enter="ease-in-out duration-500"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in-out duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                  >
                    <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                    </div>
                  </TransitionChild>
                  <div
                    class="flex h-full flex-col overflow-y-auto bg-white  py-6 shadow-xl"
                  >
                    <div class="px-4 sm:px-6">
                      <DialogTitle class="text-base font-semibold">
                        <div class="flex justify-end">
<!--                          <div>-->
<!--                            <p class="text-xl dark:text-white">RAFIKey</p>-->
<!--                          </div>-->
                          <div
                            @click="webStore.setCollapseSidebarSmall(true)"
                            class="btn btn-sm btn-circle flex justify-center items-center h-10  w-10 bg-gray-300  hover:bg-transparent shadow-none"
                          >
                            <span class="material-icons-outlined rotate-180 "
                            >arrow_back_ios</span
                            >
                          </div>
                        </div>
<!--                        <div class="border-b border-darkgray pt-4"></div>-->
                      </DialogTitle>
                    </div>
                    <div class="relative mt-6 ms-6 flex-1">
                      <!-- Your content -->
                      <div v-for="tab in tabStore.getTabs" :key="tab.value">
                        <div @click.stop="handleRouteChange(tab.value)" class="ps-4 cursor-pointer hover:bg-shark-100" :class="[tabStore.activeTab === tab.value? 'bg-shark-950 w-full': '']">
                          <span class="font-urbanist text-[16px] " :class="[tabStore.activeTab === tab.value? 'text-white': 'text-stone-400']">{{ tab.name }}</span>
                        </div>
                      </div>
                      <div class="absolute bottom-0 w-full cursor-pointer">
                        <div
                          @click="loginHandler"
                          class="flex gap-4 hover:bg-shark-100 p-2">
                          <span class="material-icons-outlined">login</span>
                          <span class="font-urbanist text-[16px]">Login</span>
                        </div>
                        <div
                          @click="registerHandler"
                          class="flex gap-4 hover:bg-shark-100 p-2 rounded">
                          <span class="material-icons-outlined text-shark-950">person_add</span>
                          <span class="hover:text-shark-950 font-urbanist text-[16px]">Register</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<style scoped></style>
