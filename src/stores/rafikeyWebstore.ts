import { defineStore } from 'pinia';
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'



export const useRafikeyWebstore = defineStore('rafikeyWebstore', () => {

const collapseSidebarSmall = ref(true);
const BASE_URL = import.meta.env.VITE_BACKEND_URL_API


  const openChatFrame = useStorage('isChatOpen', false)
  async function getClinics () {
    // fetch clinics from api
    const controller = new AbortController()
    const timeoutId = setTimeout(()=> controller.abort(), 5000)
 try{
   const response = await fetch(`${BASE_URL}/clinics/clinics`, {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json'
       },
     signal: controller.signal
     },


   )
   // clear timeout
   clearTimeout(timeoutId)
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
 } catch(err) {
   if (err instanceof DOMException && err.name === 'AbortError'){
     // console.log('Abort Error', err)
     return {
       result: 'error',
       data: 'Something happened  please refresh the page'
     }
   } else {
     // console.log('Error----', err)
     return {
       result: 'error',
       data: 'Something happened  please refresh the page'
     }

   }
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
    getClinics,
  }

})
