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
  window.location.href = 'https://rafikeyaichatbot-frontend.onrender.com/auth'
}


const prevEl = ref(null)
const nextEl = ref(null)
const navigationOptions = ref({ prevEl: null, nextEl: null })

onMounted(async () => {
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
  <div class="panel h-screen hide-scrollbar space-y-2 overflow-x-hidden">
    <section class="h-screen bg-white overflow-hidden  text-white w-full">
      <div class="w-10/12 mx-auto flex items-center justify-center">
        <div class="panel-1 h-screen lg:gap-12 space-y-4 lg:space-y-0 flex flex-col pt-8 lg:pt-0 lg:justify-center">
          <div class="tracking-widest space-y-4 lg:w-3/5 w-full pt-20">
            <div class="flex justify-center lg:justify-start">
              <p
                class="text-deep-cove-950 font-extrabold w-4/5 lg:w-full text-center lg:text-start leading-tight xl:!text-6xl lg:!text-5xl !text-2xl"
              >
                A safe space for
                <span
                  class="font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-shark-950 to-cerise-600"
                  >SRHR</span
                >
                info and services.
              </p>
            </div>

            <div class="flex lg:hidden  justify-center">
              <div class="w-2/5">
                <img src="@/assets/images/home-1.png" alt="rafikey-image" />
              </div>
            </div>
          </div>
          <div class="flex xl:text-xl text-sm lg:w-3/5 w-3/4 mx-auto lg:mx-0 text-center lg:text-start">
            <p class="text-stone-400">
              RAFIKEY, HELPS YOU MAKE INFORMED CHOICES - FROM CONTRACEPTION AND STI TESTING TO
              UNDERSTANDING CONSENT - WHILE PROTECTING YOUR PRIVACY EVERY STEP OF THE WAY.
            </p>
          </div>
          <div
            class="border-4 flex xl:w-4/5 lg:w-3/5 md:w-2/5 w-full mx-auto lg:mx-0 justify-between items-center rounded-full py-2 xl:px-6 px-3 border-cerise-600 bg-shark-950"
          >
            <div>
              <span class="material-icons-outlined xl:!text-5xl !text-4xl">search</span>
            </div>
            <div>
              <span class="xl:text-2xl text-sm text-nowrap">Nearest clinic for STI testing</span>
            </div>
            <div class="bg-stone-200 rounded-full xl:p-2 p-1 flex">
              <span class="material-icons-outlined text-shark-950">arrow_upward</span>
            </div>
          </div>
          <div class="flex justify-center lg:justify-start gap-4">
            <button
              @click="registerHandler"
              class="btn btn-sm bg-shark-950 xl:py-8 py-6 xl:px-16 px-10 rounded-xl">
              <span class="text-white font-semibold text-nowrap lg:text-xl text-lg">Start Chat</span>
            </button>
            <button class="btn btn-sm bg-casablanca-300 xl:py-8 py-6 xl:px-16 px-10 rounded-xl">
              <span class="text-white font-semibold lg:text-xl text-lg">More Info</span>
            </button>
          </div>
        </div>
        <div class="panel-2 h-screen w-full justify-end items-center hidden lg:flex">
          <div class="flex items-center justify-center xl:w-3/5 w-full">
            <img src="@/assets/images/home-1.png" alt="rafikey-image" />
          </div>
        </div>
      </div>
<!--      <div class="bg-shark-950">-->
<!--&lt;!&ndash;        <p>Ask Rafikey</p>&ndash;&gt;-->
<!--        <div class="bg-stone-200 rounded-full p-4 flex">-->
<!--          <span class="material-icons-outlined text-shark-950">arrow_upward</span>-->
<!--        </div>-->
<!--      </div>-->
    </section>

    <!--    second slide-->
    <section
      class="panel-3 z-1 bg-white  h-screen flex items-center justify-center lg:w-11/12 w-full mx-auto"
    >
      <div
        class="space-y-10 xl:w-3/4 w-full px-8 mx-auto h-screen flex flex-col lg:justify-center justify-start pt-10"
      >
        <div class="flex items-center space-y-4 flex-col">
          <p class="lg:text-2xl text-lg text-cerise-600 font-bold">ABOUT</p>
          <h2 class="lg:text-7xl text-2xl font-bold text-shark-950">RAFIKey AI ChatBot</h2>
        </div>
        <div
          class="lg:flex space-y-4 md:space-y-10 lg:w-full md:w-3/4 mx-auto lg:space-y-0 lg:gap-6 items-stretch justify-center"
        >
          <div
            class="bg-white rounded-xl lg:flex-col items-center px-8 lg:px-0 flex gap-4 lg:gap-0 shadow-2xl lg:py-10 py-4 lg:space-y-4"
          >
            <div class="lg:flex lg:justify-center">
              <img
                src="@/assets/images/home-2.png"
                alt="info-image"
                class="w-16 md:w-20 h-30 lg:w-20"
              />
            </div>
            <div class="lg:py-12 lg:space-y-3 lg:w-full mx-auto lg:px-4">
              <p class="lg:text-3xl text-sm font-bold text-center">SRHR Info</p>
              <p class="lg:text-center lg:text-xl text-sm text-gray-400">
                Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt
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
                class="w-16 md:w-20 h-30 lg:w-20"
              />
            </div>
            <div class="lg:py-12 lg:space-y-3 lg:w-full mx-auto lg:px-4">
              <p class="lg:text-3xl text-sm font-bold text-center">Nearest Service</p>
              <p class="lg:text-center lg:text-xl text-sm text-gray-400">
                Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt
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
                class="w-16 md:w-20 h-30 lg:w-20"
              />
            </div>
            <div class="lg:py-12 lg:space-y-3 lg:w-full mx-auto lg:px-4">
              <p class="lg:text-3xl text-sm  font-bold text-center">Talk to Someone</p>
              <p class="lg:text-center lg:text-xl text-sm text-gray-400">
                Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt
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
                class="w-16 md:w-20 h-30 lg:w-20"
              />
            </div>
            <div class="lg:py-12 lg:space-y-3 lg:w-full mx-auto lg:px-4">
              <p class=" font-bold text-center">Personalized Support</p>
              <p class="lg:text-center lg:text-xl text-sm text-gray-400">
                Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--    third slide -->
    <section class="section h-screen flex pt-10 md:pt-0 items-center bg-darkgray">
      <div class="h-screen w-11/12 mx-auto flex items-center justify-between">
        <div class="h-screen w-full lg:flex hidden items-center">
          <div class="w-6/12 flex items-end justify-center">
            <img src="@/assets/images/home-7.png" alt="rafikey-image" class="" />
          </div>
        </div>

        <div class="space-y-8">
          <div class="flex lg:justify-start justify-center">
            <p class="text-cerise-600 font-bold lg:text-2xl text-lg">WHY RAFIKey</p>
          </div>
          <div class="flex lg:justify-start justify-center">
            <h2 class="xl:text-8xl lg:text-5xl text-center lg:text-start text-2xl text-bold text-white">
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
              class="text-stone-300 lg:text-2xl text-sm lg:w-full md:w-1/2 w-3/4 lg:text-start text-center mx-auto leading-8"
            >
              Confidential chats, no judgement, and GDPR-complaint data handling. Get clear answers
              on topics like periods, STIs,consent and contraception.
            </p>
          </div>
          <div class="flex lg:justify-start justify-center">
            <button
              @click="registerHandler"
              class="btn btn-sm border-none bg-casablanca-300 lg:py-8 py-6 px-8 lg:px-16 rounded-xl"
            >
              <span class="text-white font-semibold lg:text-xl text-lg">Start Chat</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!--    fourth slide-->
    <section
      class="section h-screen flex flex-col bg-white justify-center items-center w-full mx-auto"
    >
      <div class="space-y-20 w-11/12  h-screen  mx-auto hidden lg:flex flex-col justify-center">
        <div class="flex flex-col items-center space-y-4">
          <div>
            <p class="text-cerise-600 font-bold text-2xl">Testimonials</p>
          </div>
          <div>
            <h2 class="xl:text-7xl text-5xl font-bold text-nowrap text-shark-950">What people think about RAFIKey</h2>
          </div>
        </div>
        <div class="flex gap-8 w-full xl:w-11/12 mx-auto">
          <div class="border-black border-2 rounded-3xl p-10 space-y-6">
            <div class="flex justify-between">
              <div class="flex gap-4">
                <img src="@/assets/images/avator-web.png" alt="testimonial-image" />
                <div class="flex flex-col justify-center">
                  <p class="text-nowrap text-2xl font-bold text-shark-950">Jaden Kiptoo</p>
                  <span class="text-2xl text-gray-400">Machakos</span>
                </div>
              </div>
              <div class="w-4 xl:w-12">
                <img src="@/assets/images/quotes.png" />
              </div>
            </div>
            <div>
              <p class="text-gray-400 text-xl">
                Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <div class="border-black border-2 rounded-3xl p-8 space-y-6">
            <div class="flex justify-between">
              <div class="flex gap-4">
                <img src="@/assets/images/avator-web.png" alt="testimonial-image" />
                <div class="flex flex-col justify-center">
                  <p class="text-nowrap text-2xl font-bold text-shark-950">Jaden Kiptoo</p>
                  <span class="text-2xl text-gray-400">Machakos</span>
                </div>
              </div>
              <div class="w-4 xl:w-12">
                <img src="@/assets/images/quotes.png" />
              </div>
            </div>
            <div>
              <p class="text-gray-400 text-xl">
                Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <div class="border-black border-2 rounded-3xl p-8 space-y-6">
            <div class="flex justify-between">
              <div class="flex gap-4">
                <img src="@/assets/images/avator-web.png" alt="testimonial-image" />
                <div class="flex flex-col justify-center">
                  <p class="text-nowrap text-2xl font-bold text-shark-950">Jaden Kiptoo</p>
                  <span class="text-2xl text-gray-400">Machakos</span>
                </div>
              </div>
              <div class="w-4 xl:w-12">
                <img src="@/assets/images/quotes.png" />
              </div>
            </div>
            <div>
              <p class="text-gray-400 text-xl">
                Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
    <section class="section lg:h-screen flex items-center bg-white w-full mx-auto">
      <div class="space-y-10 xl:w-10/12 flex flex-col items-center  mx-auto">
        <div class="w-full flex flex-col items-center space-y-4 lg:pt-20">
          <p class="text-cerise-500 lg:text-2xl text-lg">Blog</p>
          <h2 class="text-shark-950 lg:text-5xl text-2xl font-bold">Latest post</h2>
        </div>
        <div class="flex lg:gap-12 px-8 xl:px-0  items-stretch justify-center">
          <div class="flex w-full  ">
            <img src="@/assets/images/home-8.png" alt="blog-post-image" />
          </div>
          <div class="space-y-8 hidden w-full  lg:block ">
            <div>
              <p class="text-deep-cove-600">23 April 2025</p>
            </div>
            <div>
              <h2 class="xl:!text-7xl  text-5xl text-extrabold text-shark-950">
                Your Body, Your Rights, Your choices
              </h2>
            </div>
            <div class="xl:w-3/4">
              <p class="text-xl leading-7 text-gray-400">
                Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div class="flex gap-4">
              <button class="btn btn-sm border-none bg-casablanca-300 py-8 px-16 rounded-xl">
                <span class="text-white font-semibold text-2xl">Read More</span>
              </button>
              <div
                class="flex justify-between btn btn-sm items-center p-8 border-none bg-deep-cove-600 w-1/3 rounded-xl"
              >
                <span class="text-white font-semibold !text-2xl text-nowrap">All Posts</span>
                <span class="material-icons-outlined font-extrabold text-white !text-2xl"
                  >arrow_forward</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
