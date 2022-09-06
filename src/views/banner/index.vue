<template>
<Banner bannerTitle="IPV6 下一代互联网基石" banner_sec_title="everything online" 
  banner_content="5G网络的不断建设和普及，加速了我们迈入万物互联时代的步伐。
我们的整个互联网络，正在发生翻天覆地的变化。急剧增加的网络连接数和流量，对网络的承载和传送能力，提出了前所未有的挑战" 
:banner_img="img_url"></Banner>
</template>
<script setup lang="ts">
import { ref,onMounted } from 'vue';
import Banner from '@/components/Banner.vue';
import homeIcon from '@/assets/images/1.jpg'
const img_url=homeIcon;
</script>
<style scoped>

</style>