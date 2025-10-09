<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nextTick, onMounted } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  duration: 3,
  ease: 'none'
})

const startChatHandler = () => {
  window.location.href = 'https://chat.askrafikey.com/auth'
}

onMounted(async ()=>{
  await nextTick()
})

const  termsofuseHandler = () => {
  window.open('https://chat.askrafikey.com/auth/register/terms-of-service', '_blank')
}

const privacyPolicyHandler = () => {
  window.open('https://chat.askrafikey.com/auth/register/privacy-policy-2', '_blank')
}
</script>

<template>
  <div class="lg:px-[80px] px-5 space-y-10 ">
    <section class="panel xl:h-screen w-full flex justify-center md:items-center mx-auto">
      <div class="relative w-full max-w-4xl md:max-w-6xl lg:max-w-7xl h-[600px] overflow-hidden rounded-lg">
        <div class="absolute inset-0 bg-gradient-to-br from-cerise-500 via-purple-600 to-blue-600 rounded-lg"></div>
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-6 md:p-8">
          <h1 class="text-3xl md:text-4xl lg:text-7xl font-black mb-4 leading-tight font-changa-one tracking-wide max-w-4xl mx-auto">Got questions?<br/>Need answers?</h1>
          <p class="text-base md:text-lg lg:text-xl mb-8 font-outfit font-normal max-w-2xl mx-auto">Rafikey is here for you — safe, private, and judgment-free.</p>
          <button
            @click="startChatHandler"
            class="bg-cerise-500 hover:bg-cerise-600 text-white font-bold py-4 px-10 rounded-lg text-lg md:text-xl transition duration-300 cursor-pointer font-outfit"
          >
            Start Chat
          </button>
        </div>
      </div>
    </section>

    <footer class="px-6 py-8 bg-white">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-16">

        <!-- Left brand block -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left md:flex-1">
          <h2 class="text-[32px] font-changa leading-[100%] tracking-[-3%]">Rafikey</h2>
          <div class="border-b border-2 w-48 border-gradient-to-r from-coral-red-500 to-azure-radiance-600 mt-2"></div>
          <p class="mt-4 font-outfit text-lightGrayThree text-[16px] tracking-[-3%] md:max-w-sm">
            Your Safe Space for Sexual and Reproductive Health and Rights Information and services
          </p>
        </div>

        <!-- Links grouped in a row on desktop, stacked on mobile -->
        <div class="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start md:flex-1 md:justify-end">

          <div class="flex flex-col gap-2 text-center md:text-left">
            <h3 class="font-outfit text-[15px] leading-[173%] tracking-[0%] text-black opacity-[48%]">Rafikey</h3>
            <a href="#" @click="router.push('/about')" class="cursor-pointer text-[15px] font-outfit text-black leading-[173%] tracking-[0%] hover:opacity-70">About</a>
            <a href="#" @click="router.push('/chatbot')" class="cursor-pointer text-[15px] font-outfit text-black leading-[173%] tracking-[0%] hover:opacity-70">ChatBot</a>
          </div>

          <div class="flex flex-col gap-2 text-center md:text-left">
            <h3 class="font-outfit text-[15px] leading-[173%] tracking-[0%] text-black opacity-[48%]">Privacy and Safety</h3>
            <a href="#" @click="termsofuseHandler" class="cursor-pointer text-[15px] font-outfit text-black leading-[173%] tracking-[0%] hover:opacity-70">Terms of Use</a>
            <a href="#" @click="privacyPolicyHandler" class="cursor-pointer text-[15px] font-outfit text-black leading-[173%] tracking-[0%] hover:opacity-70">Privacy Policy</a>
          </div>

          <div class="flex flex-col gap-2 text-center md:text-left">
            <h3 class="font-outfit text-[15px] leading-[173%] tracking-[0%] text-black opacity-[48%]">Contact</h3>
            <a href="mailto:rafikey@afrimedia.org" class="cursor-pointer text-[15px] font-outfit text-black leading-[173%] tracking-[0%] hover:opacity-70">Data Privacy</a>
            <a href="mailto:rafikey@afrimedia.org" class="cursor-pointer text-[15px] font-outfit text-black leading-[173%] tracking-[0%] hover:opacity-70">General</a>
          </div>

        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
