<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'

const startChatHandler = () => {
  window.location.href = 'https://chat.askrafikey.com/auth'
}
</script>

<template>
  <div class="overflow-hidden">
    <section class=" w-full lg:space-y-8  flex items-center  flex-col justify-center">
        <div class="flex justify-center md:pt-24  lg:pt-28 pt-20">
          <h2 class="font-changa-one  text-lightGrayFour text-[24px]  lg:text-[48px] leading-[74px] tracking-[-3%]">About Rafikey</h2>
        </div>
        <div class="xl:w-1/3 w-2/3 mx-auto">
          <p class="text-[14px] lg:text-[20px] leading-[120%]  text-center font-urbanist font-bold text-black  tracking-wide">
            Rafikey is a digital companion designed to empower young people with the knowledge, skills, confidence,
            and tools they need to make informed decisions about their health, relationships, and future.
            The platform offers chat, games, and a service referral feature. We believe that every young person deserves access to accurate,
            age-appropriate information delivered in a way that’s relatable, respectful, and rooted in real-life experiences.
          </p>
        </div>
        <div class="lg:flex w-full lg:justify-center">
          <div class="flex justify-center">
            <img src="@/assets/images/computer.png" alt="computer-image"/>
          </div>
          <div class="flex justify-center">
            <img src="@/assets/images/phone.png" alt="phone-image" class="w-40"/>
          </div>
        </div>
    </section>

    <!--    second slide-->
    <section class=" w-full pt-24 md:pt-0">
      <div class="w-full py-8 space-y-20 px-4 md:px-12">
        <div class="flex flex-col space-y-10 justify-center items-center">
          <div>
            <h2 class="font-changa-one text-center lg:text-start text-lightGrayFour text-[24px] w-3/4 md:w-full mx-auto  lg:text-[36px] leading-[34px] lg:leading-[74px] tracking-[-3%]">Powered by DHCK & Partners</h2>
          </div>
          <div class="lg:w-1/2 md:w-3/4 w-full font-urbanist text-[16px] lg:text-[18px] leading-[24px] weight-[600] text-center text-black">
            <p>Rafikey is an initiative of the Digital Health Coalition of Kenya (DHCK), a collaborative network comprising Africa Media Trust (AMT), the Sexual and Reproductive Health and Rights Kenya (SRHR Kenya), Imara TV, LVCT Health, Population Services Kenya (PSK), TIKO, and AYARHEP </p>
          </div>
        </div>
        <div class="max-w-6xl mx-auto relative lg:right-10 xl:left-0">

          <!-- Image: takes 3/4 width, aligned to the right -->
          <div class="xl:w-3/5  lg:w-1/2 h-96 w-full lg:ml-auto">
            <img
              src="@/assets/images/about-2.png"
              alt="Group using laptops"
              class="w-full rounded-2xl lg:h-96 h--0 object-cover"
            />
          </div>

          <div
            class="bg-white border border-black shadow-lg rounded-2xl lg:p-6 xl:p-8  p-8 w-full xl:w-[48%]  lg:w-[52%] absolute md:top-96 sm:top-48 top-44 lg:top-6 lg:left-20 xl:-left-10"
          >
            <div class="mb-4 text-center">
              <div class="text-2xl">🧠</div>
              <h2 class="font-changa-one text-[24px] leading-[120%] text-lightGrayFour">What We Offer</h2>
              <div class="mt-2 border-t-2 border-gray-300 w-1/3 mx-auto"></div>
            </div>
            <ul
              class="space-y-4 lg:text-[20px] text-[16px] font-urbanist weight-[500] leading-[24px] list-disc list-inside">
              <li >
                A <span class="font-urbanist font-bold">supportive chatbot</span> that listens and responds like a friend
              </li>
<!--              <li>-->
<!--                Helpful <span class="font-bold">resources</span> for mental health, identity, relationships, and more-->
<!--              </li>-->
              <li>
                Complete <span class="font-bold">privacy</span> — your data is protected and never shared
              </li>
              <li>
                Service referral and<span class="font-bold"> finder feature</span> — connect with facilities if you need more help
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

<!--    Third slide-->
    <section class=" pt-52 md:pt-72 lg:pt-0 flex items-center justify-center w-full mx-auto">
      <div class="w-full py-8 px-4 md:px-12 ">
        <div class="max-w-6xl mx-auto relative flex flex-col lg:flex-row items-start lg:items-center">

          <!-- Image Section -->
          <div class="w-full lg:w-3/4">
            <img
              src="@/assets/images/about-3.png"
              alt="Person smiling with Rafikey character"
              class="w-full rounded-2xl object-cover"
            />
          </div>

          <!-- Text Card -->
          <div class="bg-white border border-black shadow-md rounded-2xl p-6 md:p-8 w-full lg:w-[48%] absolute md:top-96 sm:top-56 top-48 lg:top-10 lg:right-0 lg:translate-x-6 z-10">
            <div class="mb-4 text-center">
              <div class="text-2xl">🙌</div>
              <h2 class="text-[24px] leading-[120%] font-changa-one text-lightGrayFour">Why We Exist</h2>
              <div class="mt-2 border-t-2 border-gray-300 w-1/3 mx-auto"></div>
            </div>
            <ul class="space-y-4 xl:space-y-8 font-urbanist weight-[500] text-[16px]  lg:text-[20px] leading-[24px] list-disc list-inside">
              <li>Everyone deserves a space to feel heard.</li>
              <li>Not everyone has someone to talk to.</li>
              <li>Your voice matters and should be respected.</li>
              <li>
                Support should always be private, non-judgmental, available anytime,
                and youth-friendly.
              </li>
            </ul>
          </div>
        </div>
        <div class="flex  w-3/4 text-center pt-44 md:pt-32 lg:pt-0 mx-auto flex-col pb-28 items-center space-y-4">
          <div class="pt-56 md:pt-28  lg:pt-8">
            <p class="text-cerise-600 font-pt-sans-regular text-[20px] leading-[32px]">About Your Privacy</p>
          </div>
          <div class="lg:pt-0 font-changa-one text-[24px] lg:text-[48px] flex text-lightGrayFour lg:leading-[74px] tracking-[-3%] ">
            <span>&#128274;</span>
            <h2>Your Privacy Comes First</h2>
          </div>
          <div class="xl:w-3/5 w-full mx-auto">
            <p class="font-outfit leading-[24px] lg:leading-[32px] text-[16px] lg:text-[20px]">Rafikey protects your privacy. We do not collect personal data unless you choose to share it for a more personalized experience. If you feel unsafe or experience abuse, Rafikey can help you find support, but we encourage you to speak to a trusted adult immediately.</p>
          </div>

        </div>
      </div>

    </section>

<!--    Fourth slide-->
    <section class="py-20 lg:py-10 flex items-center justify-center third-slide text-white">
      <div class="w-full  flex items-center flex-col ">
        <div class="">
          <p class="text-cerise-600 font-pt-sans-bold text-[20px] leading-[32px]">You're Not Alone</p>
        </div>
        <div class=" w-3/4 lg:w-2/3 xl:w-1/3 mx-auto text-center lg:text-xl text-lg leading-8">
          <p class="font-outfit text-[20px] leading-[32px] opacity-[70%]">Whether you're asking questions, playing to learn, or finding support, we want you to feel confident that your data is handled with care and respect</p>
        </div>
        <div class="xl:w-3/4 lg:w-1/4 w-2/3 flex justify-center">
          <img src="@/assets/images/about-4.png" alt="rafikey-image"/>
        </div>
        <div>
          <h2 class="font-changa-one text-center px-2 text-[20px] lg:text-[72px] leading-[74px] tracking-[-3%]">No labels. No pressure. Just support.</h2>
        </div>
        <div class="pt-6 cursor-pointer" >
          <button
            @click="startChatHandler"
            class="btn btn-sm btn-primary   font-pt-sans-regular border-none py-8 px-10 bg-casablanca-300 rounded-lg flex items-center space-x-2">
            <span class="text-xl">Start Chat</span>
          </button>
        </div>
      </div>
    </section>
<!--fifth slide-->
    <section>
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
.third-slide {
  background-color: #0C0011;
}
</style>
