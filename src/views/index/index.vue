<template>

 <!-- <Suspense> -->
   <!-- v-slot:default,默认要渲染的组件 -->
   <!-- <template v-slot:default> -->
      <header_tm></header_tm>
      <banner></banner>
      <fourth></fourth>
      <product></product>
      <company></company>
      <ListCart :i_list="person_card" title="员工寄语" sec_title="公司英才" icons=""></ListCart>
      <ImageComponent/>
    <bottom_tm></bottom_tm>
<!-- </template> -->
 <!-- v-slot:fallback里面写组件加载过程中需要显示的内容 -->
 <!-- <template v-slot:fallback>
        <div>
          <h3>加载中，请稍等。。。</h3>
        </div>
      </template> -->
<!-- </Suspense> -->


</template>
<script setup lang="ts" >
import { ref,onMounted,defineAsyncComponent  } from 'vue';
//import header_tm from '/src/views/header/index.vue'
import banner from '/src/views/banner/index.vue'
import product from '/src/views/product/index.vue'
import fourth from '/src/views/articles/fourth.vue'
import bottom_tm from '/src/views/bottom/index.vue'
import company from '/src/views/company/index.vue'
 
import ImageComponent from '@/components/Images.vue';
import ListCart from '@/components/ListCart.vue';
const header_tm = defineAsyncComponent(() => import("/src/views/header/index.vue"))
const person_card=ref([
   {
    title:'Julis',
    sec_title:'咨询java架构师',
    content:'',
    imgSrc:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
    href:''
   },
    {
    title:'Debbie O Brien',
    sec_title:'',
    content:'',
    imgSrc:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
    href:''
   },
    {
    title:'',
    sec_title:'',
    content:'',
    imgSrc:'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
    href:''
   },
    {
    title:'',
    sec_title:'',
    content:'',
    imgSrc:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
    href:''
   },
    {
    title:'',
    sec_title:'',
    content:'',
    imgSrc:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
    href:''
   },
    {
    title:'',
    sec_title:'',
    content:'',
    imgSrc:'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
    href:''
   },
    {
    title:'',
    sec_title:'',
    content:'',
    imgSrc:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
    href:''
   },

])
 
</script>