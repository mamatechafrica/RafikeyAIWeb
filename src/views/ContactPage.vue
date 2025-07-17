<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="h-screen snap-y snap-mandatory overflow-y-scroll hide-scrollbar">
    <section class="h-screen snap-start w-11/12 mx-auto">
      <div class="space-y-5">
        <div class="text-4xl text-shark-950 font-bold pt-32 flex justify-center">
          <h2>Contact Us</h2>
        </div>
        <div class="text-xl w-2/6 mx-auto text-center text-shark-950">
          <p>Got questions, feedback, or something on your mind? We'd love to hear from you.</p>
        </div>
        <div class="flex justify-center gap-8 pt-10">
          <div class="border-2 border-shark-950 rounded-2xl p-12 w-2/6">
            <div class="space-y-8 flex flex-col items-center">
              <p class="text-3xl text-shark-950 font-bold text-center">Tech Support</p>
              <p class="text-xl">Running into bugs orr issues on the site?</p>
              <p class="text-xl">Email:<a href="" class="text-cerise-400">tech@rafikey.org</a></p>
            </div>
          </div>
          <div class="border-2 border-shark-950 rounded-2xl p-12 w-2/6">
            <div class="space-y-8 flex flex-col items-center">
              <p class="text-3xl text-shark-950 font-bold text-center">Data & Privacy Questions</p>
              <p class="text-xl">Questions about your info or account privacy?</p>
              <p class="text-xl">Email:<a href="" class="text-cerise-400">tech@rafikey.org</a></p>
            </div>
          </div>
        </div>

        <div class="flex justify-center pt-10">
          <div class="border-2 border-shark-950 rounded-2xl p-12 w-2/6">
            <div class="space-y-8 flex flex-col items-center">
              <p class="text-3xl text-shark-950 font-bold text-center">General Inquiries</p>
              <div>
                <p class="text-xl">Got a question about how Rafikey works?</p>
                <p class="text-xl text-center">Need help with your account?</p>
              </div>
              <p class="text-xl">Email:<a href="" class="text-cerise-400">tech@rafikey.org</a></p>
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
