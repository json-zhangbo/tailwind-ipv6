<template>
<Draggable>
<div class="grid grid-cols-3 gap-4 py-4 place-content-center lg:h-96 bg-gradient-to-r md:h-24 from-green-400 to-blue-500 md:bg-gradient-to-r text-align: center" >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>{{innerHtml}}</div>
        
</div>
</Draggable>
</template>
<script setup>

import { ref } from 'vue'
defineProps({
  title: String,
  innerHtml:String
})

</script>