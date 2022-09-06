<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative overflow-hidden bg-white dark:bg-black">
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <main class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block text-5xl antialiased xl:inline">{{bannerTitle}}</span>
              {{ ' ' }}
              <span class="block antialiased text-gray-400 xl:inline">{{banner_sec_title}}</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{{banner_content}}</p>
            
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" :src="banner_img" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface item {
    bannerTitle: string,
}

 defineProps<{
    bannerTitle: string,
    banner_sec_title:string,
    banner_content:string,
    banner_img:string,
    list?: item[] // ?非必传参数
}>()
</script>