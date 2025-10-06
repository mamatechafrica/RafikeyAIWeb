<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import { nextTick, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import image_1 from '@/assets/images/avator-web.png'
import image_2 from '@/assets/images/avator-web.png'
import image_3 from '@/assets/images/avator-web.png'


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({
  ease: 'none',
})

const carouselInfo = [
  {
    id: 1,
    avatorSrc: image_1,
    name: 'Jaden Kiptoo',
    location: 'Machakos',
    testimonial:
      'I didn’t know where to go for help, but Rafikey guided me to a nearby health center in minutes. It felt like talking to a caring friend who knew exactly what I needed.',
  },
  {
    id: 2,
    avatorSrc: image_2,
    name: 'Halima Wakesho',
    location: 'Kilifi',
    testimonial:
      'Rafikey was so easy to use! I just answered a few questions and instantly got directions to the right service. Rafikey saved me so much time and stress.',
  },
  {
    id: 3,
    avatorSrc: image_3,
    name: 'John Odhiambo',
    location: 'Nanyuki',
    testimonial:
      'I was unsure about my next step, but rafikey made everything clear. It gave me trusted information and connected me to the right place without any hassle.',
  }
] as {
  id: number
  avatorSrc: string
  name: string
  location: string
  testimonial: string
}[]

const registerHandler = () => {
    window.location.href = 'https://chat.askrafikey.com/auth'
}


const prevEl = ref(null)
const nextEl = ref(null)
const navigationOptions = ref({ prevEl: null, nextEl: null })

onMounted(async () => {
  navigationOptions.value = {
    prevEl: prevEl.value,
    nextEl: nextEl.value,
  }
  await nextTick()

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".panel-1", // The container element for the panels
  //       start: "top top", // Start when the top of the container hits the top of the viewport
  //       // end: "+=300%", // End after scrolling 300% of the viewport height
  //       scrub: 1, // Smoothly link the animation to the scroll position
  //       pin: true, // Pin the container during the animation
  //       pinSpacing: false,
  //       // toggleActions: "restart none restart none"
  //     },
  //   });
  //   // const tl = gsap.timeline()
  //   tl.to(".panel-1", { xPercent: -500 })
  //   .to(".panel-2", { xPercent: 500 }, "<")
  //   .to(".panel-3", {
  //     xPercent: 0,
  //     duration: 3,
  //     rotate: 0,
  //     scrollTrigger: {
  //       trigger: ".panel-3",
  //       start: "top top", // Adjust offset to delay until navigation leaves
  //       scrub: 4,
  //       // end: "bottom 70",
  //       // markers: true, // Optional: for debugging
  //     },
  //   })
  //
  //   gsap.utils.toArray(".section").forEach((element) => {
  //     ScrollTrigger.create({
  //       trigger: element as HTMLDivElement,
  //       start: "top top",
  //       // end: "bottom bottom",
  //       pin: true,
  //       pinSpacing: false,
  //       scrub: 1,
  //     })
  //   })
})
</script>
<template>
  <div class="panel overflow-hidden">
    <section class="xl:h-screen lg:px-[80px]  overflow-hidden flex  lg:justify-between justify-center  w-full">
      <div class="panel-1 lg:pt-[166px]  py-20  space-y-16 sm:space-y-10 lg:space-y-0">
        <div class="lg:w-[519px] w-[241px] mx-auto  font-changa-one ">
          <p
            class="text-deep-cove-950 text-center lg:text-start lg:leading-[74px] leading-[32px] tracking-[3%] lg:!text-[79px] !text-[24px]"
          >
            A safe space for
            <span
              class="font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-shark-950 to-cerise-600"
              >SRHR</span
            >
            info and services.
          </p>
        </div>

        <div class="flex lg:hidden justify-center">
          <div class="w-3/5">
            <img src="@/assets/images/home-1.png" alt="rafikey-image" />
          </div>
        </div>

        <div class="flex lg:w-[519px] w-full md:w-3/4 px-7 lg:px-0 mx-auto h-[69px]  lg:pt-[32px] leading-[150%] text-center lg:text-start">
          <p class="font-outfit lg:text-[15px] text-[13px] font-[400] text-bodyText">
            RAFIKEY, HELPS YOU MAKE INFORMED CHOICES - FROM CONTRACEPTION AND STI TESTING TO
            UNDERSTANDING CONSENT - WHILE PROTECTING YOUR PRIVACY EVERY STEP OF THE WAY.
          </p>
        </div>
        <div class="lg:pt-20 ">
          <div class="top-[670px]  lg:h-[63px] h-[49px] flex justify-center lg:justify-start lg:gap-[24px] gap-4">
            <button
              @click="registerHandler"
              class="btn btn-sm h-full backdrop-blur-sm   shadow-[0_0_50px_0px] shadow-navBarShadowBackground/50 bg-shark-950 py-[16px] lg:px-[48px] px-8 rounded-[8px]"
            >
              <span
                class="text-white font-pt-sans-regular font-semibold text-nowrap lg:text-xl text-lg"
                >Start Chat</span
              >
            </button>
            <button
              class="btn btn-sm h-full font-pt-sans-regular bg-casablanca-300 py-[16px] lg:px-[48px] px-8 rounded-[8px]"
            >
              <span class="text-white font-semibold lg:text-xl text-lg">More Info</span>
            </button>
          </div>
        </div>
      </div>
      <div class="panel-2 hidden xl:h-screen pt-[45px] w-[681px] h-[711px] lg:flex justify-center  items-center ">
        <div class="xl:w-[568px] xl:h-[568px] w-[380px] h-[380px] ">
          <img src="@/assets/images/home-1.png" alt="rafikey-image" class="w-full" />
        </div>
      </div>
    </section>

    <!--    second slide-->
    <section
      class="panel-3 pb-20  xl:h-screen z-1 bg-white lg:px-[80px]"
    >
      <div
        class=" flex flex-col"
      >
        <div class="flex items-center space-y-4 flex-col  mx-auto">
          <p class="font-pt-sans-bold text-cerise-600   lg:text-[20px] text-[16px]">Other Services</p>
          <h2 class="font-changa-one lg:text-[72px] text-[24px] leading-[74px] tracking-[-3%] text-textColorOne text-center">Rafikey AI ChatBot</h2>
        </div>
        <div
          class="lg:flex md:w-3/4 px-8 md:px-0 mx-auto lg:w-full lg:gap-6 space-y-10   lg:space-y-0 lg:py-24 items-stretch justify-center"
        >
          <div
            class="bg-white rounded-xl lg:flex-col items-center px-8 lg:px-0 flex gap-4 lg:gap-0 shadow-2xl lg:py-10 py-4 lg:space-y-4"
          >
            <div class="lg:flex lg:justify-center">
              <img
                src="@/assets/images/home-2.png"
                alt="info-image"
                class="w-12 md:w-16  lg:w-20"
              />
            </div>
            <div class="lg:py-12 lg:space-y-3 lg:w-full w-3/4 mx-auto lg:px-4">
              <p class="font-pt-sans-bold lg:text-[28px] text-[16px] text-center">SRHR Info</p>
              <p class="text-[14px] lg:text-[16px] font-pt-sans-regular lg:text-center  text-bodyText">
                Rafikey is a digital companion designed to empower young people with the knowledge, skills, confidence, and tools they need to make informed decisions about their health, relationships, and future.

              </p>
            </div>
          </div>

          <div
            class="bg-white rounded-xl lg:flex-col items-center px-8 lg:px-0 flex gap-4 lg:gap-0 shadow-2xl lg:py-10 py-4 lg:space-y-4"
          >
            <div class="lg:flex lg:justify-center">
              <img
                src="@/assets/images/home-3.png"
                alt="info-image"
                class="w-12 md:w-16  lg:w-20"
              />
            </div>
            <div class="lg:py-12 lg:space-y-3 lg:w-full w-3/4 mx-auto lg:px-4">
              <p class="font-pt-sans-bold lg:text-[28px] text-[16px] text-center">Nearest Service</p>
              <p class="text-[14px] lg:text-[16px] font-pt-sans-regular lg:text-center  text-bodyText">
                Our Service Finder feature helps you quickly locate trusted service centers near you. Whether you’re looking for health facilities, support services, or specialized care, simply search and connect with the right provider in your area.
              </p>
            </div>
          </div>
          <div
            class="bg-white rounded-xl lg:flex-col items-center px-8 lg:px-0 flex gap-4 lg:gap-0 shadow-2xl lg:py-10 py-4 lg:space-y-4"
          >
            <div class="lg:flex lg:justify-center">
              <img
                src="@/assets/images/home-4.png"
                alt="info-image"
                class="w-12 md:w-16  lg:w-20"
              />
            </div>
            <div class="lg:py-12 lg:space-y-3 lg:w-full w-3/4 mx-auto lg:px-4">
              <p class="font-pt-sans-bold lg:text-[28px] text-[16px] text-center">Talk to Someone</p>
              <p class="text-[14px] lg:text-[16px] font-pt-sans-regular lg:text-center  text-bodyText">
                Whether you have questions, need guidance, or just want to talk, our friendly Rafikey is here to help you anytime.
                Start a conversation now and let Rafikey guide you to the answers, resources, and services that matter to you.
              </p>
            </div>
          </div>
          <div
            class="bg-white rounded-xl lg:flex-col items-center px-8 lg:px-0 flex gap-4 lg:gap-0 shadow-2xl lg:py-10 py-4 lg:space-y-4"
          >
            <div class="lg:flex lg:justify-center">
              <img
                src="@/assets/images/home-5.png"
                alt="info-image"
                class="w-12 md:w-16  lg:w-20"
              />
            </div>
            <div class="lg:py-12 w-3/4  lg:space-y-3 lg:w-full mx-auto lg:px-4">
              <p class="font-pt-sans-bold lg:text-[28px] text-[16px] text-center">Personalized Support</p>
              <p class="text-[14px] lg:text-[16px] font-pt-sans-regular lg:text-center  text-bodyText">
                Create your free account to unlock tailored advice and recommendations just for you. The more Rafikey knows you, the more it will respond uniquely to your queries.
                Because one-size-fits-all doesn’t fit you – join to get custom support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--    third slide -->
    <section class="section xl:h-screen  lg:px-[80px] flex bg-darkGrayOne pb-10">
      <div class=" flex w-full items-center justify-between pt-[89px]">
        <div class="w-1/2 xl:pt-[48px] lg:flex hidden items-center justify-start">
          <div class="flex items-end justify-center xl:h-[546px] xl:w-[546px] ">
            <img src="@/assets/images/home-7.png" alt="rafikey-image" class="" />
          </div>
        </div>

        <div class="space-y-8 lg:w-1/2 w-3/4 mx-auto flex flex-col ">
          <div class="flex lg:justify-start justify-center">
            <p class="text-cerise-600 text-[16px] lg:text-[20px] font-pt-sans-bold">Why Rafikey</p>
          </div>
          <div class="flex lg:justify-start justify-center xl:w-4/6">
            <h2
              class="text-center text-[24px]  lg:text-[72px] tracking-[3%] leading-[24px] lg:leading-[74px] lg:text-start font-changa-one text-white"
            >
              Collaborate & learn with our platform
            </h2>
          </div>
          <div class="flex lg:hidden pt-10 justify-center">
            <div class="w-2/5">
              <img src="@/assets/images/home-1.png" alt="rafikey-image" />
            </div>
          </div>
          <div>
            <p
              class="lg:w-3/4 md:w-1/2 mx-auto lg:mx-0 text-center lg:text-start font-outfit text-[15px] lg:text-[20px] tracking-[0%] text-white leading-[32px]"
            >
              Confidential chats, no judgement, and GDPR-complaint data handling. Get clear answers
              on topics like periods, STIs,consent and contraception.
            </p>
          </div>
          <div class="flex lg:justify-start justify-center mx-auto lg:mx-0 h-[63px] w-[200px]">
            <button
              @click="registerHandler"
              class="btn btn-sm border-none h-full w-full shadow-[0_0_50px_0px] shadow-white/45  bg-casablanca-300 py-[16px]  px-[48px] rounded-xl"
            >
              <span class="text-white font-pt-sans-bold text-[24px]">Start Chat</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!--    fourth slide-->
    <section
      class="section  xl:h-screen flex items-center  lg:px-[80px]"
    >
      <div class="space-y-20 hidden lg:flex flex-col py-10  ">
        <div class="flex flex-col items-center space-y-4">
          <div>
            <p class="text-cerise-600 font-pt-sans-bold text-[20px] leading-[32px]">Testimonials</p>
          </div>
          <div class="">
            <h2 class="xl:text-[72px] text-[48px] font-changa-one tracking-[3%] leading-[74px] text-textColorOne text-nowrap">
              What people think about Rafikey
            </h2>
          </div>
        </div>
        <div class="flex  gap-8 mx-auto  justify-center">
          <div class="border-black border-[1px] rounded-xl px-10 py-20 space-y-6">
            <div class="flex justify-between">
              <div class="flex gap-4">
                <img src="@/assets/images/avator-web.png" alt="testimonial-image" />
                <div class="flex flex-col justify-center">
                  <p class="text-nowrap font-pt-sans-bold text-[24px] text-textColorTwo">Jaden Kiptoo</p>
                  <span class="text-[18px] font-pt-sans-regular opacity-[60%] text-bodyText">Machakos</span>
                </div>
              </div>
              <div class="w-[55px] h-[43px]">
                <img src="@/assets/images/quotes.png" />
              </div>
            </div>
            <div>
              <p class="text-[20px] font-urbanist weight-[500]  leading-[24px] tracking-[0%] text-bodyText">
                I didn’t know where to go for help, but Rafikey guided me to a nearby health center in minutes. It felt like talking to a caring friend who knew exactly what I needed.
              </p>
            </div>
          </div>
           <div class="border-black border-[1px] rounded-xl  px-10 py-20 space-y-6">
            <div class="flex justify-between">
              <div class="flex gap-4">
                <img src="@/assets/images/avator-web.png" alt="testimonial-image" />
                <div class="flex flex-col justify-center">
                  <p class="text-nowrap font-pt-sans-bold text-[24px] text-textColorTwo">Halima Wakesho</p>
                  <span class="text-[18px] font-pt-sans-regular opacity-[60%] text-bodyText">Kilifi</span>
                </div>
              </div>
              <div class="w-[55px] h-[43px]">
                <img src="@/assets/images/quotes.png" />
              </div>
            </div>
            <div>
              <p class="text-[20px] font-urbanist weight-[500] leading-[24px] tracking-[0%] text-bodyText">
                Rafikey was so easy to use! I just answered a few questions and instantly got directions to the right service. Rafikey saved me so much time and stress.
              </p>
            </div>
          </div>
         <div class="border-black border-[1px] rounded-xl px-10 py-20 space-y-6">
            <div class="flex justify-between">
              <div class="flex gap-4">
                <img src="@/assets/images/avator-web.png" alt="testimonial-image" />
                <div class="flex flex-col justify-center">
                  <p class="text-nowrap font-pt-sans-bold text-[24px] text-textColorTwo">John Odhiambo</p>
                  <span class="text-[18px] font-pt-sans-regular opacity-[60%] text-bodyText">Nanyuki</span>
                </div>
              </div>
              <div class="w-[55px] h-[43px]">
                <img src="@/assets/images/quotes.png" />
              </div>
            </div>
            <div>
              <p class="text-[20px] font-urbanist weight-[500] leading-[24px] tracking-[0%] text-bodyText">
                I was unsure about my next step, but rafikey made everything clear. It gave me trusted information and connected me to the right place without any hassle.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:hidden relative  py-12 w-full">
        <div class="flex flex-col items-center space-y-4 pb-10">
          <div>
            <p class="text-cerise-600  font-pt-sans-bold text-[16px]">Testimonials</p>
          </div>
          <div class="md:w-1/2 w-3/4">
            <h2 class="text-[24px] leading-[27px]  tracking-[-3%] font-changa-one ">
              What people think about RAFIKey
            </h2>
          </div>
        </div>
        <div class="flex justify-between w-full mb-4 ">
          <button ref="prevEl" class="absolute top-[60%] md:left-20  sm:left-5  left-3 custom-swiper-prev text-casablanca-400">
            <span class="material-icons-outlined">arrow_back_ios_new</span>

          </button>
          <button ref="nextEl" class="absolute top-[60%] md:right-20  sm:right-5 right-3 custom-swiper-next text-casablanca-400">
            <span class="material-icons-outlined">arrow_forward_ios</span>
          </button>
        </div>

        <Swiper
           :modules="[Navigation]"  :navigation="navigationOptions"  class="relative my-swipe md:w-[70%] w-[80%] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.25)] ">

          <SwiperSlide
            class="flex justify-center items-center"
            v-for="item in carouselInfo"
            :key="item.id"
          >
            <div class="flex flex-col w-3/4 mx-auto space-y-4 bg-white rounded-xl  p-6">
              <div class="flex justify-between">
                <div class="flex gap-4">
                  <img
                    :src="item.avatorSrc"
                    alt="testimonial-image"
                    class="w-16 h-16 rounded-full"
                  />
                  <div class="flex flex-col justify-center">
                    <p class="text-nowrap  font-pt-sans-bold text-[16px] text-textColorTwo">{{ item.name }}</p>
                    <span class="font-pt-sans-regular opacity-[60%] text-[12px] text-bodyText">{{ item.location }}</span>
                  </div>
                </div>
                <div class="md:w-[55px] md:h-[43px] w-[20px] h-[20px]">
                  <img src="@/assets/images/quotes.png" />
                </div>
              </div>
              <div>
                <p class="text-[15px] font-pt-sans-regular leading-[24px] tracking-[0%] text-bodyText">
                  {{ item.testimonial }}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
        </section>

    <!--    fifth slide-->
    <!--
    <section class="xl:screen section  pb-20 lg:px-[80px] px-5">
      <div class=" flex flex-col space-y-10">
        <div class="w-full flex flex-col items-center  lg:space-y-5 ">
          <p class="text-cerise-500 font-pt-sans-bold text-[16px] lg:text-[20px]">Blog</p>
          <h2 class="text-textColorOne font-changa-one text-[24px]  lg:text-[72px] leading-[74px] tracking-[3%]">Latest post</h2>
        </div>
        <div class="xl:flex xl:flex-row items-stretch flex-col space-y-4 xl:space-y-0  w-full ">
          <div class="flex w-full justify-center ">
            <img src="@/assets/images/home-8.png" alt="blog-post-image" class="w-full xl:w-fit" />
          </div>
          <div class="hidden lg:flex flex-col space-y-8   xl:w-1/2">
            <div class="">
              <p class="text-deep-cove-600 font-pt-sans-bold text-[20px] ">23 April 2025</p>
            </div>
            <div class="w-3/4">
              <h2 class="font-changa-one text-[48px] text-textColorOne leading-[48px] tracking-[1%] ">
                Your Body, Your Rights, Your choices
              </h2>
            </div>
            <div class="w-full">
              <p class="font-pt-sans-regular text-[16px] text-bodyText leading-[24px]">
                Halima had been feeling unwell for a few days and wasn't sure where to go for help. She opened our website and saw the "Ask Rafikey" button. Curious, she clicked it to access Rafikey.
                Within minutes, Rafikey was able to help with suggesting was to mitigate the problem.
                Thanks to Rafikey, Halima was able to quickly find the right place to get the care she needed — without long searches or uncertainty.
              </p>
            </div>
            <div class="flex gap-4">
              <button class="btn btn-sm h-[63px] border-none bg-casablanca-300 py-[16px] px-[48px] rounded-xl">
                <span class="text-white font-pt-sans-bold text-[24px]">Read More</span>
              </button>
              <div
                class="flex justify-between h-[63px] btn btn-sm items-center p-8 border-none bg-deep-cove-600 w-1/3 rounded-xl"
              >
                <span class="text-white font-pt-sans-bold text-[24px] text-nowrap">All Posts</span>
                <span class="material-icons-outlined font-extrabold text-white !text-2xl"
                  >arrow_forward</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    -->
    <FooterComponent />
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
