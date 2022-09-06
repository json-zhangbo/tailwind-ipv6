
<template>

 <!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-12 bg-white">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          {{title}}
      </p>
       
      <p class="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">{{c_time}}</p>
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

        <div class="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl"  v-for="item_content in company_list" :key="item_content.title">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img class="object-cover w-full h-48 md:h-full md:w-48" :src="item_content.imageSrc" alt="Man looking at item at a store">
            </div>
            <div class="p-8">
              <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{{item_content.title}}</div>
              <a href="#" class="block mt-1 text-lg font-medium leading-tight text-black hover:underline">{{item_content.sec_title}}</a>
              <p class="mt-2 text-gray-500">{{item_content.content}}</p>
            </div>
          </div>
        </div>  
      </dl>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">

interface company_content {
    title:string,
    sec_title:string,
    imageSrc:string,
    content: string
}
defineProps<{
    title: string,
    c_time?: string,
    company_list?: company_content[] // ?非必传参数
}>()

</script>
<style scoped>
a {
  color: #42b983;
}
</style>
