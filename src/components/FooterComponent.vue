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
  <div class="lg:px-[80px] px-5 space-y-10 ">
    <section class="panel xl:h-screen w-full flex justify-center md:items-center mx-auto">
      <div class="hidden md:block pt-20">
        <img src="@/assets/images/footer.png" alt="footer-image" class="w-full" />
      </div>
      <div class="md:hidden w-full flex justify-center items-center pt-10">
        <img src="@/assets/images/footer-small.png" alt="footer-small-image" class="" />
      </div>
    </section>

    <section class="panel flex flex-col pb-24 bg-white py-10 items-center justify-center">
      <div class="grid grid-cols-4 gap-20 max-w-7xl w-full mx-auto">
        <div class="space-y-6 flex flex-col items-center lg:col-span-2 col-span-4  ">
          <h2 class="text-[32px] font-changa leading-[100%] tracking-[-3%]">RAFIKey</h2>
          <div class="border-b border-2 w-48 border-gradient-to-r from-coral-red-500 to-azure-radiance-600"></div>
          <div class="md:w-3/6 w-3/4 ">
            <p class="font-outfit text-center text-lightGrayThree text-[16px] tracking-[-3%]">
              Your Safe Space for Sexual and Reproductive Health and Rights Information and services
            </p>
          </div>
        </div>

        <div class="lg:space-y-32 space-y-20 lg:col-span-1 col-span-2  flex flex-col items-center">
          <div class="flex flex-col text-sm lg:text-lg">
            <div class="text-nowrap">
              <p class="font-outfit text-[15px] leading-[173%] tracking-[0%] text-black opacity-[48%]">Rafikey</p>
              <ul class="cursor-pointer  space-y-1 text-[15px] font-outfit text-black leading-[173%] tracking-[0%] ">
                <li @click="router.push('/about')" >About</li>
                <li @click="router.push('/chatbot')">ChatBot</li>
<!--                <li>FAQS</li>-->
              </ul>
            </div>
          </div>
          <div class="flex flex-col col-span-1 text-nowrap text-sm lg:text-lg ">
            <div>
              <p class=" font-outfit text-[15px] leading-[173%] tracking-[0%] text-black opacity-[48%]">Contact</p>
              <ul class="space-y-1 cursor-pointer text-[15px] font-outfit text-black leading-[173%] tracking-[0%] ">
                <li><a href="mailto:rafikey@afrimedia.org">Tech Support</a></li>
                <li><a href="mailto:rafikey@afrimedia.org">Data Privacy</a></li>
                <li><a href="mailto:rafikey@afrimedia.org">General</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="space-y-32 text-nowrap text-sm lg:text-lg ">
          <div class="flex flex-col ">
            <div>
              <p class="font-outfit text-[15px] leading-[173%] tracking-[0%] text-black opacity-[48%]">Our Research</p>
              <ul class="cursor-pointer space-y-1 text-[15px] font-outfit text-black leading-[173%] tracking-[0%] ">
                <li>Process</li>
                <li>Timeline</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col text-nowrap text-sm lg:text-lg ">
            <div>
              <p class="font-outfit text-[15px] leading-[173%] tracking-[0%] text-black opacity-[48%]">Privacy and Safety</p>
              <ul class="cursor-pointer space-y-1 text-[15px] font-outfit text-black leading-[173%] tracking-[0%] ">
                <li @click="termsofuseHandler">Terms of Use</li>
                <li @click="privacyPolicyHandler">Privacy Policy</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
<!--      <div class="flex absolute bottom-0 justify-center items-center text-[8px] font-changa-one tracking-[-3%]  leading-[100%]">-->
<!--          <span class="">&copy;</span>-->
<!--        <span>RAfiKey | All Rights Reserved</span>-->
<!--      </div>-->
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
