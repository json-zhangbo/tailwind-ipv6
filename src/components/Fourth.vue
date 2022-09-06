<template>
    <main>
 <!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-12 bg-white">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class=" lg:text-center">
      <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl ">{{title}}</p>
      <p class="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">{{sec_title}}</p>
    </div>
    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div class="relative"  v-for="item_content in f_list" :key="item_content.title">
          <dt>
            <div class="absolute flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-md">
              <span class="material-icons">{{item_content.a_icons}}</span>
             </div>
              <p class="ml-16 text-lg font-medium leading-6 text-gray-900 ">{{item_content.title}}</p>
          </dt>
           <dd class="mt-2 ml-16 text-base text-gray-500">{{item_content.content}}</dd>
        </div>
       </dl>
    </div>
  </div>
</div>
</main>
</template>
<script setup lang="ts">

interface item_content {
    title: string,
    artic_time:string,
    a_icons:string,
    content: string
}
const pro=defineProps<{
    title: string,
    sec_title: string,
    f_list?: item_content[] // ?非必传参数
}>()
</script>
<style scoped>
a {
  color: #42b983;
}
</style>
