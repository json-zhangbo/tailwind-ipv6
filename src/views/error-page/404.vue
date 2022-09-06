
<template>
  404
<button @click="click" > 点击</button>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { useRoute} from "vue-router";
export default {
    setup() {
      const route = useRoute()
      onMounted(() => {
        console.log('---------------');
        console.log(route.query.mesg)
      })
    },
    methods:{
        click(){
            this.$router.push('/401')
        }
    }

}
</script>

<style>

</style>