<template>
  <div class="border border-shark-950 rounded-2xl p-6 lg:p-10 text-center flex flex-col items-center space-y-4">
    <h3 class="font-changa-one text-[20px] lg:text-[36px] tracking-tight">{{ title }}</h3>
    <p class="font-urbanist font-semibold text-[16px] lg:text-[18px] leading-[24px]">
      {{ description }}
    </p>
    <p class="font-urbanist text-[16px] lg:text-[18px]">
      Email:
      <a href="mailto:rafikey@afrimedia.org" class="text-cerise-400">rafikey@afrimedia.org</a>
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>
