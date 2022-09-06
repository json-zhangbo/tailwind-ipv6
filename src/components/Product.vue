
<template>
  <div class="bg-gradient-to-r from-blue-400">
    <div class="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">{{title}}</h2>
      <div class="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
        <div v-for="product in products" :key="product.id" class="relative group">
          <div class="w-full overflow-hidden rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="object-cover object-center w-full h-full lg:w-full lg:h-full" />
          </div>
          <div class="flex justify-between mt-4">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface item_content {
    id: string,
    name:string,
    href:string,
    imageAlt:string,
    imageSrc:string,
    price: string,
    color:string
}
defineProps<{
    title:string,
    products?: item_content[] // ?非必传参数
}>()
</script>