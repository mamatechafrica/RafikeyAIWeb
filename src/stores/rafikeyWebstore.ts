import { defineStore } from 'pinia';
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'


export const useRafikeyWebstore = defineStore('rafikeyWebstore', () => {

const collapseSidebarSmall = ref(true);
  const openChatFrame = useStorage('isChatOpen', false)

  const setCollapseSidebarSmall = (val: boolean) =>{
    collapseSidebarSmall.value = val
  }

  const setOpenChatFrame = (val: boolean) =>{
    openChatFrame.value = val
  }

  return {
    collapseSidebarSmall,
    setCollapseSidebarSmall,
    openChatFrame,
    setOpenChatFrame

  }

})
