<script setup lang="ts">

import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class=" hide-scrollbar overflow-hidden">
<!--    first slide-->
    <section class="xl:h-screen space-y-10 flex py-28 xl:py-32  flex-col items-center">
      <div class="flex flex-col items-center ">
        <div>
          <h2 class="font-changa-one lg:text-[48px] text-[24px] tracking-[-3%]  text-lightGrayFour">Hello</h2>
        </div>
        <div>
          <h2 class="font-changa-one lg:text-[48px] text-[24px] tracking-[-3%] text-lightGrayFour" >I am Rafikey</h2>
        </div>
      </div>

      <div class="w-3/4 lg:w-1/3" >
        <p class="lg:text-[20px] text-[14px] leading-[120%]  font-urbanist font-bold text-black text-center">I'm here whenever you need someone to talk to - no pressure, no judgement and always private. You can tell me how you're feeling, ask questions or just vent. I've got you.</p>
      </div>
      <div class=" w-1/2 lg:w-full flex justify-center items-center">
        <img src="@/assets/images/chatbot-1.png" alt="chatbot-image" />
      </div>
<!--      <div class="lg:w-1/5 md:w-2/5 w-3/5 bg-darkgray rounded-full flex justify-between p-4">-->
<!--        <div><span class="text-white">Ask Rafikey</span></div>-->
<!--        <div class="bg-stone-200 rounded-full h-8 w-8 flex justify-center items-center">-->
<!--          <span class="material-icons-outlined text-shark-950">arrow_upward</span>-->
<!--        </div>-->
<!--      </div>-->
    </section>


<!--    second slide-->
    <section class="xl:h-screen  flex  lg:space-y-6 space-y-10  flex-col items-center justify-center ">
      <div class="lg:flex lg:space-y-0 space-y-16 gap-6 xl:w-9/12 w-11/12  mx-auto">
        <div class="flex flex-1  flex-col border-shark-950 border-2 lg:px-8 lg:py-12  rounded-2xl py-10 px-4 ">
          <p class="font-changa-one text-[24px] lg:text-[36px] leading-[32px]  lg:leading-[74px] tracking-[-3%] text-lightGrayFour">💬  Who can use Rafikey?</p>
          <div class="lg:pt-10 pt-4 text-[18px] font-urbanist weight-[600] text-lightGrayFour">
<!--            <p class="">Anyone can use Rafikey if:</p>-->
            <ul class="list-disc ps-8">
              <li>You're aged 18 and above</li>
              <li>Under 18, we recommend using Rafikey with a parent, caregiver, or trusted adult.</li>
              <li>You confirm that you understand and accept the terms of use, if creating account</li>
              <li>You can also access Rafikey anonymously, without a personalised experience.</li>
<!--              <li.</li>-->
            </ul>
          </div>
        </div>
        <div class="flex flex-1  flex-col  border-2 border-shark-950 lg:px-8 lg:py-12 rounded-2xl py-10 px-4 ">
          <p class="font-changa-one text-[24px] lg:text-[36px] leading-[32px]  lg:leading-[74px] tracking-[-3%] text-lightGrayFour"><span class="text-gray-300">📁</span>What you should not do</p>
          <div class="lg:pt-10 pt-4 text-[18px] font-urbanist weight-[600] text-lightGrayFour">
            <ul class="list-disc ps-8">
              <li>Use Rafikey to harm, harass, or mislead others</li>
              <li>Share false or dangerous information</li>
              <li>Try to access or misuse the platform’s systems or data</li>
              <li>Try to give Rafikey genuine response when prompt, to make the most out of Rafiikey.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="xl:h-screen flex mx-auto w-11/12  pt-10 lg:pt-0  space-y-8 flex-col items-center justify-center ">
      <div class="flex flex-col space-y-6  items-center justify-center">
        <div>
          <h2 class="text- lightGrayFour  text-[24px] lg:text-[36px] tracking-[-3%]  leading-[32px] lg:leading-[74px] font-changa-one">Watch Rafikey at Work </h2>
        </div>
        <div class="w-2/3 flex flex-col  text-center text-shark-950 items-center justify-center ">
          <p class="font-urbanist weight-[600] text-[16px[ lg:text-[18px] font-semibold leading-[24px]">Curious how Rafikey works? This video walks you through a real conversation with Rafikey — from asking questions to getting trusted information and finding the right service.</p>
        </div>
      </div>
      <div class="relative justify-center items-center  lg:hidden flex">
        <img src="@/assets/images/about-7-1.png" class="w-full" alt="chatting-experience-image"/>
        <img  class="absolute left-36 top-1/3" src="@/assets/images/Polygon-1.png" alt="play-button"/>
      </div>
      <div  class="relative justify-center items-center hidden lg:flex">
        <img src="@/assets/images/about-7.png" class="w-full hidden lg:block" alt="chatting-experience-image"/>
        <img  class="absolute left-3/5 top-3/5" src="@/assets/images/Polygon-1.png" alt="play-button"/>
      </div>
  </section>
     <section class="">
       <FooterComponent />
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
