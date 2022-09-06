<template>
   <Fourth title="未来互联网趋势" sec_title="2025年IPv6活跃用户数将达到8亿 市场具有良好发展前景" :f_list="articles"/>
    
</template>
<script lang="ts" setup>
import { ref,defineComponent } from 'vue'
import Fourth from '@/components/Fourth.vue'
let articles  = ref([
    {
      title: "IPv6 协议",
      artic_time: "2022-08-23",
      a_icons:"language",
      content: "IPv6是英文“Internet Protocol Version 6”（互联网协议第6版）的缩写，是互联网工程任务组（IETF）设计的用于替代IPv4的下一代IP协议，其地址数量号称可以为全世界的每一粒沙子编上一个地址"
    },
    {
      title: "IPV6安全",
      artic_time: "2022-08-23",
      a_icons:"fingerprint",
      content: "Pv6的研发还解决了IPv4的其他多种问题，如安全性、端到端IP连接、服务质量（QoS）、多播、移动性和即插即用等功效。IPv6还对报头进行重新设计,由一个简化长度固定的基本报头和多个可选的扩展报头组成。既可加快路由速度，又能灵活地支持多种应用，便于扩展新的应用"
    },
    {
      title: "IPV6标准",
      artic_time: "2022-08-23",
      a_icons:"grading",
      content: "IPv6标准主要分为5类，即资源类、网络类、应用类、安全类、过渡类等"
    },
    {
      title:"IPV6应用",
      artic_time:"2022-08-23",
      a_icons:"view_module",
      content:"IPv6在中国取得了巨大的进展，不仅在试商用的部署方面迈出了关键的步伐，产业链也在逐步完善和成熟，涌现了华为、中兴、烽火、迈普等企业，承载网络设备等关键技术已经达到国际先进水平"
    }
]); 
</script>
