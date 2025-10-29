import { defineStore } from 'pinia';
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'


export const useRafikeyWebstore = defineStore('rafikeyWebstore', () => {

const collapseSidebarSmall = ref(true);
const BASE_URL = import.meta.env.VITE_BACKEND_URL_API

  const openChatFrame = useStorage('isChatOpen', false)
  // const controller = new AbortController()
  // const { signal} = controller.signal
  // const timeout = setTimeout(()=>{
  //   controller.abort()
  //
  // }, 5000)
  async function getClinics () {
    // fetch clinics from api
 try{
   const response = await fetch(`${BASE_URL}/clinics/clinics`, {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json'
       }
     }
   )
   const data  = await response.json()
   // console.log(data)
   if(!response.ok) {
     return {
       result: 'error',
       data: data.message
     }
   } else {
     return {
        result: 'success',
        data: data
     }
   }
 } catch(err){
   console.log(err)


 }

  }

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
    setOpenChatFrame,
    getClinics

  }

})
