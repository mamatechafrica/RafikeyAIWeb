<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nextTick, onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  duration: 3,
  ease: 'none'
})

onMounted(async ()=>{
  await nextTick()

})

const  termsofuseHandler = () => {
  window.open('https://rafikeyaichatbot-frontend.onrender.com/auth/register/terms-of-service', '_blank')
}

const privacyPolicyHandler = () => {
  window.open('https://rafikeyaichatbot-frontend.onrender.com/auth/register/privacy-policy-1', '_blank')
}
</script>

<template>
  <div class="h-screen  w-full mx-auto">
    <section class="panel w-10/12  h-screen flex justify-center md:items-center mx-auto">
      <div class="hidden lg:block">
        <img src="@/assets/images/footer.png" alt="footer-image" class="w-full" />
      </div>
      <div class="lg:hidden w-full flex justify-center items-center">
        <img src="@/assets/images/footer-small.png" alt="footer-small-image" class="" />
      </div>
    </section>

    <section class="panel h-screen flex bg-white items-center justify-center">
      <div class="grid grid-cols-4 gap-20 max-w-7xl w-full mx-auto">
        <div class="space-y-6 flex flex-col items-center lg:col-span-2 col-span-4  ">
          <h2 class="text-3xl lg:4xl text-shark-950 font-bold">RAFIKey</h2>
          <div class="border-b border-2 w-48 border-gradient-to-r from-coral-red-500 to-azure-radiance-600"></div>
          <div class="w-3/6 w">
            <p class="text-sm lg:text-lgtext-black text-center">
              Your Safe Space for Sexual and Reproductive Health and Rights Information and services
            </p>
          </div>
        </div>

        <div class="lg:space-y-32 space-y-20 lg:col-span-1 col-span-2 flex flex-col items-center">
          <div class="flex flex-col text-sm lg:text-lg">
            <div class="text-nowrap">
              <p class=" text-stone-400">Rafikey</p>
              <ul class="space-y-2">
                <li>About</li>
                <li>ChatBot</li>
                <li>FAQS</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col col-span-1 text-nowrap text-sm lg:text-lg ">
            <div>
              <p class=" text-stone-400">Contact</p>
              <ul class="space-y-2">
                <li>Tech Support</li>
                <li>Data Privacy</li>
                <li>General</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="space-y-32 text-nowrap text-sm lg:text-lg ">
          <div class="flex flex-col ">
            <div>
              <p class="text-sm lg:text-lg text-stone-400">Our Research</p>
              <ul class="space-y-2">
                <li>Process</li>
                <li>Timeline</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col text-nowrap text-sm lg:text-lg ">
            <div>
              <p class="text-sm lg:text-lg text-stone-400">Privacy and Safety</p>
              <ul class="space-y-2">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
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
