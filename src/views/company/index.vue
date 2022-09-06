<template>
    <company_time title="公司大事件纪实" c_time="一路走来的14年" :company_list="company_list"/>
</template>
<script setup lang="ts" >
import { ref,defineComponent } from 'vue'
import company_time from '@/components/Content.vue'
import company_1 from '@/assets/images/1.jpg'
import company_2 from '@/assets/images/2.jpg'
import company_3 from '@/assets/images/3.jpg'
import company_4 from '@/assets/images/4.jpg'
const company_list=ref([
  {
    title:"2008年公司成立",
    sec_title:"2008年10月1日",
    imageSrc:company_1,
    content: "2008年公司在美丽的滨海城市秦皇岛海港区成立，成立之处公司员工为40人，主要提供软件开发、技术转让、技术咨询、销售电子设备等服务"
  },
  {
    title:"秦皇岛市政府主要领导来我公司视察",
    sec_title:"2009年7月1日",
    imageSrc:company_2,
    content: "2008年公司在美丽的滨海城市秦皇岛海港区成立，成立之处公司员工为40人，主要提供软件开发、技术转让、技术咨询、销售电子设备等服务"
  },
  {
    title:"公司ipv6年销售突破2千万",
    sec_title:"2011年12月11日",
    imageSrc:company_3,
    content: "2008年公司在美丽的滨海城市秦皇岛海港区成立，成立之处公司员工为40人，主要提供软件开发、技术转让、技术咨询、销售电子设备等服务"
  },
  {
    title:"公司互联网产品隐身安全云1.0问世",
    sec_title:"2022年10月1日",
    imageSrc:company_4,
    content: "经过公司长期的技术积累和不断的创新研发，我们公司成功的研发了基于ipv6的隐身安全云平台，可应用于互联网资产保护。"
  }
])

</script>
