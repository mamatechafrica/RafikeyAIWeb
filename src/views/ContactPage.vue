<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="w-11/12 mx-auto space-y-10 ">
    <section class="w-11/12 mx-auto pt-20 lg:pt-32 pb-10">
      <div class="space-y-5">
        <div class="font-changa-one text-[24px] lg:text-[48px] text- lightGrayFour flex justify-center">
          <h2>Contact Us</h2>
        </div>
        <div class="font-urbanist wight-[700] lg:text-[20px] text-[16px] leading-[120%] lg:w-1/3 w-full mx-auto text-center ">
          <p>Got questions, feedback, or something on your mind? We'd love to hear from you.</p>
        </div>
        <div class="lg:grid mx-auto lg:space-y-0 space-y-8  xl:w-10/12 items-stretch  grid grid-cols-2 lg:justify-center gap-8 pt-10">
          <div class="border-[1px] lg:col-span-1 col-span-2 border-shark-950 rounded-2xl lg:p-10 p-2  ">
            <div class="space-y-8 flex flex-col items-center">
              <p class="font-changa-one  text-[20px] lg:text-[36px]  tracking-[-3%] text-center">Tech Support</p>
              <p class="text-[16px] lg:text-[18px] leading-[24px] font-urbanist weight-[600]">Running into bugs orr issues on the site?</p>
              <p class="font-urbanist w-[600] text-[16px] lg:text-[18px]  ">Email: <a href="mailto:rafikey@afrimedia.org" class="text-cerise-400">rafikey@afrimedia.org</a></p>
            </div>
          </div>
          <div class="border-[1px]  lg:col-span-1 col-span-2 border-shark-950 rounded-2xl lg:p-12 p-2  ">
            <div class="space-y-8 flex flex-col items-center">
              <p class="font-changa-one text-[20px] lg:text-[36px]  tracking-[-3%] text-center">Data & Privacy Questions</p>
              <p class="text-[16px] lg:text-[18px] leading-[24px] font-urbanist weight-[600]">Questions about your info or account privacy?</p>
              <p class="font-urbanist w-[600] text-[18px] ">Email: <a href="mailto:rafikey@afrimedia.org" class="text-cerise-400">rafikey@afrimedia.org</a></p>
            </div>
          </div>
        </div>

        <div class="flex justify-center xl:w-3/4 py-10 mx-auto">
          <div class="border-[1px] grid grid-cols-2 border-shark-950 rounded-2xl lg:p-12 p-2  w-full lg:w-1/2">
            <div class="space-y-8 col-span-2 flex flex-col items-center">
              <p class="font-changa-one text-[20px] lg:text-[36px] tracking-[-3%] text-center">General Inquiries</p>
              <div>
                <p class="text-[16px] lg:text-[18px]  leading-[24px] font-urbanist weight-[600]">Got a question about how Rafikey works?</p>
                <p class="text-[16px] lg:text-[18px]  leading-[24px] font-urbanist weight-[600]">Need help with your account?</p>
              </div>
              <p class="font-urbanist w-[600] text-[16px] lg:text-[18px]">Email: <a href="mailto:rafikey@afrimedia.org" class="text-cerise-400">rafikey@afrimedia.org</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-16 md:pt-20 lg:pt-24">
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
