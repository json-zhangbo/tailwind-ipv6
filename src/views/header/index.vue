<template>
 <Top_menu  :menu_list="navigation" title="ipv6网络安全" ></Top_menu>
</template>
<script setup  lang="ts" >
import { ref,onMounted } from 'vue';
import Top_menu from '@/components/Menu.vue';


  const navigation = [
   { name: '首页', href: "/index", current: true },
   { name: 'IPV6+', href: '/person', current: false },
   { name: 'IPV6应用案例', href: '/ipv6', current: false },
   { name: '网络安全', href: '/person', current: false },
   { name: '物联网', href: '/person', current: false },
   { name: '产品中心', href: '/person', current: false },
   { name: '专题专栏', href: '/person', current: false },
   { name: '政策解读', href: '/person', current: false }
 ]
 

</script>