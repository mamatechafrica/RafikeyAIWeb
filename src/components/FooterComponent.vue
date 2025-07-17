<script setup lang="ts">
</script>

<template>
  <div class="h-screen snap-y snap-mandatory">
    <section class="h-screen snap-start flex items-center w-full">
      <div class="">
        <img src="@/assets/images/footer.png" alt="footer-image" class="w-full" />
      </div>
    </section>

    <section class="h-screen snap-start flex items-center justify-center">
      <div class="grid grid-cols-4 gap-4 max-w-7xl w-full">
        <div class="space-y-6 flex flex-col items-center col-span-2 ">
          <h2 class="text-4xl text-shark-950 font-bold">RAFIKey</h2>
          <div
            class="border-b border-2 w-48 border-gradient-to-r from-coral-red-500 to-azure-radiance-600"
          ></div>
          <div class="w-3/6">
            <p class="text-xl text-black text-center">
              Your Safe Space for Sexual and Reproductive Health and Rights Information and services
            </p>
          </div>
        </div>

        <div class="space-y-32 col-span-1">
          <div class="flex flex-col">
            <div>
              <p class="text-lg text-stone-400">Rafikey</p>
              <ul class="space-y-2">
                <li>About</li>
                <li>ChatBot</li>
                <li>FAQS</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col col-span-1 ">
            <div>
              <p class="text-lg text-stone-400">Contact</p>
              <ul class="space-y-2">
                <li>Tech Support</li>
                <li>Data Privacy</li>
                <li>General</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="space-y-32">
          <div class="flex flex-col ">
            <div>
              <p class="text-lg text-stone-400">Our Research</p>
              <ul class="space-y-2">
                <li>Process</li>
                <li>Timeline</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col ">
            <div>
              <p class="text-lg text-stone-400">Privacy and Safety</p>
              <ul class="space-y-2">
                <li>Terma of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
