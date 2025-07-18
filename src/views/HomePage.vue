<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
</script>
<template>
  <div class="h-screen snap-y snap-mandatory overflow-y-scroll hide-scrollbar">
    <section
      class="h-screen snap-start flex items-center justify-center text-white text-3xl w-11/12 mx-auto"
    >
      <div class="h-screen gap-12 w-full flex flex-col justify-center">
        <div class="w-3/5 tracking-widest">
          <p class="text-deep-cove-950 font-extrabold leading-tight !text-6xl">
            A safe space for
            <span
              class="font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-shark-950 to-cerise-600"
              >SRHR</span
            >
            info and services.
          </p>
        </div>
        <div>
          <p class="text-stone-400 text-xl w-3/5">
            RAFIKEY, HELPS YOU MAKE INFORMED CHOICES - FROM CONTRACEPTION AND STI TESTING TO
            UNDERSTANDING CONSENT - WHILE PROTECTING YOUR PRIVACY EVERY STEP OF THE WAY.
          </p>
        </div>
        <div
          class="border-4 flex w-3/5 px-8 justify-between items-center rounded-3xl p-2 border-cerise-600 bg-shark-950"
        >
          <div>
            <span class="material-icons-outlined !text-5xl">search</span>
          </div>
          <div>
            <span class="text-2xl">Nearest clinic for STI testing</span>
          </div>
          <div class="bg-stone-200 rounded-full p-4 flex">
            <span class="material-icons-outlined text-shark-950">arrow_upward</span>
          </div>
        </div>
        <div class="flex gap-4 w-3/5">
          <button class="btn btn-sm bg-shark-950 py-8 px-16 rounded-xl">
            <span class="text-white font-semibold text-nowrap text-xl">Start Chat</span>
          </button>
          <button class="btn btn-sm bg-casablanca-300 py-8 px-16 rounded-xl">
            <span class="text-white font-semibold text-xl">More Info</span>
          </button>
        </div>
      </div>
      <div class="h-screen w-full flex justify-center">
        <div class="w-10/12 flex items-end justify-center">
          <img src="@/assets/images/home-1.png" alt="rafikey-image" class="" />
        </div>
      </div>
<!--      <div class="bg-shark-950">-->
<!--        <p>Ask Rafikey</p>-->
<!--        <div class="bg-stone-200 rounded-full p-4 flex">-->
<!--          <span class="material-icons-outlined text-shark-950">arrow_upward</span>-->
<!--        </div>-->
<!--      </div>-->
    </section>

    <!--    second slide-->
    <section class="h-screen snap-start flex items-center w-11/12 mx-auto">
      <div class="space-y-10 w-3/4 mx-auto h-screen flex flex-col justify-center">
        <div class="flex items-center space-y-4 flex-col">
          <p class="text-2xl text-cerise-600 font-bold">Other Services</p>
          <h2 class="text-7xl font-bold text-shark-950">RAFIKey AI ChatBot</h2>
        </div>
        <div class="flex gap-6 items-stretch justify-center">
          <div class="bg-white rounded-xl shadow-2xl py-10 space-y-4">
            <div class="flex justify-center">
              <img src="@/assets/images/home-2.png" alt="info-image" />
            </div>
            <div class="py-12 space-y-3 px-4">
              <p class="text-3xl font-bold text-center">SRHR Info</p>
              <p class="text-center text-xl text-gray-400">
                Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt
              </p>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-2xl py-10 space-y-4">
            <div class="flex justify-center">
              <img src="@/assets/images/home-3.png" alt="info-image" />
            </div>
            <div class="py-12 space-y-3 px-4">
              <p class="text-3xl font-bold text-center">Nearest Services</p>
              <p class="text-center text-xl text-gray-400">
                Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt
              </p>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-2xl py-10 space-y-4">
            <div class="flex justify-center">
              <img src="@/assets/images/home-4.png" alt="info-image" />
            </div>
            <div class="py-12 space-y-3 px-4">
              <p class="text-3xl font-bold text-center">Talk to Someone</p>
              <p class="text-center text-xl text-gray-400">
                Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt
              </p>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-2xl py-10 space-y-4">
            <div class="flex justify-center">
              <img src="@/assets/images/home-5.png" alt="info-image" />
            </div>
            <div class="py-12 space-y-3 px-4">
              <p class="text-3xl font-bold text-center">Personalized Support</p>
              <p class="text-center text-xl text-gray-400">
                Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--    third slide -->
    <section class="h-screen snap-start flex items-center bg-darkgray">
      <div class="h-screen w-11/12 mx-auto flex items-center justify-between">
        <div class="h-screen w-full flex items-center">
          <div class="w-6/12 flex items-end justify-center">
            <img src="@/assets/images/home-7.png" alt="rafikey-image" class="" />
          </div>
        </div>

        <div class="space-y-8">
          <p class="text-cerise-600 font-bold text-2xl">WHY RAFIKey</p>
          <div>
            <h2 class="text-8xl text-bold text-white">Collaborate & learn with our platform</h2>
          </div>
          <div>
            <p class="text-stone-300 text-2xl leading-8">
              Confidential chats, no judgement, and GDPR-complaint data handling. Get clear answers
              on topics like periods, STIs,consent and contraception.
            </p>
          </div>
          <div>
            <button class="btn btn-sm border-none bg-casablanca-300 py-8 px-16 rounded-xl">
              <span class="text-white font-semibold text-xl">Start Chat</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!--    fourth slide-->
    <section class="h-screen snap-start flex items-center w-11/12 mx-auto">
      <div class="space-y-20">
        <div class="flex flex-col items-center space-y-4">
          <div>
            <p class="text-cerise-600 font-bold text-2xl">Testimonials</p>
          </div>
          <div>
            <h2 class="text-7xl font-bold text-shark-950">What people think about RAFIKey</h2>
          </div>
        </div>
        <div class="flex gap-8 w-full xl:w-11/12 mx-auto ">
          <div class="border-black border-2 rounded-3xl p-10 space-y-6">
            <div class="flex justify-between">
              <div class="flex gap-4">
                <img src="@/assets/images/avator-web.png" alt="testimonial-image" />
                <div class="flex flex-col justify-center">
                  <p class="text-nowrap text-2xl font-bold text-shark-950">Jaden Kiptoo</p>
                  <span class="text-2xl text-gray-400">Machakos</span>
                </div>
              </div>
              <div class="w-8 xl:w-12">
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
              <div class="w-8 xl:w-12">
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
              <div class="w-8 xl:w-12">
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
    </section>

<!--    fithth slide-->
    <section class="h-screen snap-start flex items-center w-10/12 mx-auto">
      <div class="w-full space-y-10">
        <div class="w-full flex flex-col items-center space-y-4 pt-20">
          <p class="text-cerise-500 text-2xl">Blog</p>
          <h2 class="text-shark-950 text-5xl font-bold">Latest post</h2>
        </div>
        <div class="flex gap-12 items-stretch">
          <div class="flex w-5/6">
            <img  src="@/assets/images/home-8.png" alt="blog-post-image"/>
          </div>
          <div class="space-y-8">
            <div>
              <p class="text-deep-cove-600">23 April 2025</p>
            </div>
            <div>
              <h2 class="!text-7xl text-extrabold  text-shark-950">Your Body, Your Rights, Your choices</h2>
            </div>
            <div class="w-3/4">
              <p class="text-xl leading-7 text-gray-400"> Lorem ipsum doloor sit amet, consecteur adiopiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div class="flex gap-4 ">
              <button class="btn btn-sm border-none bg-casablanca-300 py-8 px-16 rounded-xl">
                <span class="text-white font-semibold text-2xl">Read More</span>
              </button>
              <div class=" flex justify-between btn btn-sm  items-center p-8 border-none bg-deep-cove-600  w-1/3  rounded-xl">
                <span class="text-white font-semibold !text-2xl">All Posts</span>
                <span class="material-icons-outlined font-extrabold text-white !text-2xl">arrow_forward</span>
              </div>
            </div>
          </div>

        </div>
      </div>


    </section>
    <section class="h-screen snap-start flex items-center justify-center">
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
