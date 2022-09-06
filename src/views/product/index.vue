<template>
      <Product :products="products" title="公司产品"/>
</template>
<script  setup lang="ts">
import { ref,onMounted } from 'vue';
import Product from '@/components/Product.vue';
import X86AL_img from '@/assets/images/346.png'
import BSLF_img from '@/assets/images/product.png'
import Adb_img from '@/assets/images/product.png'
import TB_img from '@/assets/images/product.png'
 const products=ref([
  {
    id: 1,
    name: 'X-86AL',
    href: '#',
    imageSrc: X86AL_img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: '联系客服优惠',
  },
  {
    id: 2,
    name: 'B-SLF',
    href: '#',
    imageSrc: BSLF_img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$25',
    color: '联系客服优惠',
  },
  {
    id: 3,
    name: 'A-Db029系列',
    href: '#',
    imageSrc: Adb_img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$45',
    color: '联系客服优惠',
  },
  {
    id: 4,
    name: 'TB-2010-box',
    href: '#',
    imageSrc: TB_img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$39',
    color: '联系客服优惠',
  },
])
</script>
